# Data Model: Better-Auth Profile System

## Entities

### UserProfile
- **userId**: UUID (Primary Key, references Better-Auth user.id)
- **softwareBackground**: JSON array of strings (enum values: "Python", "ROS 2", "C++", "PyTorch", "LLM", "None")
- **hardwareAccess**: JSON array of strings (enum values: "Jetson", "RealSense", "Unitree", "None")
- **comfortLevel**: Integer (1-5 Likert scale, where 1=beginner, 5=expert)
- **createdAt**: DateTime (default: current timestamp)
- **updatedAt**: DateTime (default: current timestamp, updates on modification)
- **isProfileComplete**: Boolean (default: false, set to true after profile completion)

## Better-Auth Integration

### User (from Better-Auth)
- **id**: UUID (Primary Key)
- **email**: String (required, unique)
- **name**: String (optional)
- **createdAt**: DateTime
- **updatedAt**: DateTime

## Validation Rules

### UserProfile
- userId must reference an existing Better-Auth user
- softwareBackground array items must be from allowed values
- hardwareAccess array items must be from allowed values
- comfortLevel must be between 1 and 5 (inclusive)
- createdAt must be in past
- updatedAt must be in past and >= createdAt
- isProfileComplete is read-only, set based on required fields completion

## API Endpoints Data Models

### POST /api/profile (Create/Update)
**Request Body**:
```json
{
  "softwareBackground": ["Python", "ROS 2"],
  "hardwareAccess": ["Jetson", "RealSense"],
  "comfortLevel": 3
}
```

**Response (200)**:
```json
{
  "userId": "uuid",
  "softwareBackground": ["Python", "ROS 2"],
  "hardwareAccess": ["Jetson", "RealSense"],
  "comfortLevel": 3,
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "isProfileComplete": true
}
```

### GET /api/profile (Retrieve)
**Response (200)**:
```json
{
  "userId": "uuid",
  "softwareBackground": ["Python", "ROS 2"],
  "hardwareAccess": ["Jetson", "RealSense"],
  "comfortLevel": 3,
  "createdAt": "datetime",
  "updatedAt": "datetime",
  "isProfileComplete": true
}
```

## Database Schema (Neon Postgres)

```sql
CREATE TABLE user_profiles (
    user_id UUID PRIMARY KEY REFERENCES auth_accounts(id) ON DELETE CASCADE,
    software_background TEXT[] DEFAULT '{}',
    hardware_access TEXT[] DEFAULT '{}',
    comfort_level INTEGER CHECK (comfort_level >= 1 AND comfort_level <= 5),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_profile_complete BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES auth_accounts(id)
);

-- Indexes for performance
CREATE INDEX idx_user_profiles_comfort_level ON user_profiles(comfort_level);
CREATE INDEX idx_user_profiles_created_at ON user_profiles(created_at);
```

## Relationships
- **Better-Auth User** (1) → (0..1) **UserProfile**: One-to-zero-or-one relationship where each user may have one profile