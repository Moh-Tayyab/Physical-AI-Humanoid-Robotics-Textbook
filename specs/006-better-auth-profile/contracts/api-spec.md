# API Specification: Better-Auth Profile System

## /api/profile [GET]
### Description
Retrieve the authenticated user's profile information including software background, hardware access, and comfort level.

### Request
```
GET /api/profile
Authorization: Bearer <access_token>
```

### Response (200 OK)
```json
{
  "userId": "string (UUID)",
  "softwareBackground": ["Python", "ROS 2", "C++"],
  "hardwareAccess": ["Jetson", "RealSense"],
  "comfortLevel": 3,
  "createdAt": "2025-12-06T10:30:00.000Z",
  "updatedAt": "2025-12-06T10:30:00.000Z",
  "isProfileComplete": true
}
```

### Response (401 Unauthorized)
```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "User is not authenticated"
  }
}
```

## /api/profile [PUT]
### Description
Update the authenticated user's profile information including software background, hardware access, and comfort level.

### Request
```
PUT /api/profile
Content-Type: application/json
Authorization: Bearer <access_token>

{
  "softwareBackground": ["Python", "ROS 2", "C++"],
  "hardwareAccess": ["Jetson", "RealSense"],
  "comfortLevel": 3
}
```

### Request Validation
- `softwareBackground` must be an array of valid values: ["Python", "ROS 2", "C++", "PyTorch", "LLM", "None"]
- `hardwareAccess` must be an array of valid values: ["Jetson", "RealSense", "Unitree", "None"]
- `comfortLevel` must be an integer between 1 and 5 (inclusive)

### Response (200 OK)
```json
{
  "userId": "string (UUID)",
  "softwareBackground": ["Python", "ROS 2", "C++"],
  "hardwareAccess": ["Jetson", "RealSense"],
  "comfortLevel": 3,
  "createdAt": "2025-12-06T10:30:00.000Z",
  "updatedAt": "2025-12-06T10:35:00.000Z",
  "isProfileComplete": true
}
```

### Response (400 Bad Request)
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters",
    "details": {
      "softwareBackground": ["Invalid value provided"],
      "comfortLevel": ["Value must be between 1 and 5"]
    }
  }
}
```

### Response (401 Unauthorized)
```json
{
  "error": {
    "code": "UNAUTHENTICATED",
    "message": "User is not authenticated"
  }
}
```

## /api/auth/signup [POST]
### Description
Sign up a new user and optionally capture their profile information during the process.

### Request
```
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "profile": {
    "softwareBackground": ["Python", "ROS 2"],
    "hardwareAccess": ["Jetson"],
    "comfortLevel": 3
  }
}
```

### Request (GitHub OAuth)
```
POST /api/auth/signup/github
# Redirect-based OAuth flow
```

### Response (200 OK)
```json
{
  "user": {
    "id": "string (UUID)",
    "email": "user@example.com",
    "name": "string (optional)"
  },
  "tokens": {
    "accessToken": "string",
    "refreshToken": "string"
  },
  "redirectUrl": "/welcome"  // Client-side redirect after signup
}
```

### Response (400 Bad Request)
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input parameters"
  }
}
```

### Response (409 Conflict)
```json
{
  "error": {
    "code": "USER_EXISTS",
    "message": "User with this email already exists"
  }
}
```

## /api/auth/signin [POST]
### Description
Sign in an existing user with email/password or initiate GitHub OAuth.

### Request (Email/Password)
```
POST /api/auth/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

### Request (GitHub OAuth)
```
POST /api/auth/signin/github
# Redirect-based OAuth flow
```

### Response (200 OK)
```json
{
  "user": {
    "id": "string (UUID)",
    "email": "user@example.com",
    "name": "string (optional)"
  },
  "tokens": {
    "accessToken": "string",
    "refreshToken": "string"
  },
  "redirectUrl": "/"  // Redirect to textbook home
}
```

## Error Response Format (All Endpoints)
```json
{
  "error": {
    "code": "string (error code)",
    "message": "string (human-readable message)",
    "timestamp": "ISO 8601 datetime",
    "path": "string (request path)"
  }
}
```

## Common Error Codes
- `UNAUTHENTICATED`: User is not authenticated
- `FORBIDDEN`: User does not have permission for this action
- `VALIDATION_ERROR`: Request parameters failed validation
- `NOT_FOUND`: Requested resource does not exist
- `INTERNAL_ERROR`: Internal server error occurred
- `RATE_LIMITED`: Rate limit exceeded