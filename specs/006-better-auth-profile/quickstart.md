# Quickstart: Better-Auth Profile System

## Prerequisites
- Node.js 18+
- npm or yarn package manager
- Neon Postgres database instance
- GitHub OAuth application (for GitHub authentication)

## Setup

### 1. Environment Configuration
Create a `.env` file with the following variables:
```bash
# Better-Auth Configuration
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000

# GitHub OAuth (for social login)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Database Configuration
DATABASE_URL=your_neon_postgres_connection_string
DIRECT_URL=your_neon_postgres_direct_connection_string
```

### 2. Install Dependencies
```bash
npm install better-auth @better-auth/node docusaurus-plugin-better-auth
# Additional dependencies for UI components
npm install @headlessui/react @heroicons/react
```

### 3. Database Setup
Run the following SQL to create the user_profiles table:
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

-- Create indexes
CREATE INDEX idx_user_profiles_comfort_level ON user_profiles(comfort_level);
CREATE INDEX idx_user_profiles_created_at ON user_profiles(created_at);
```

## Integration with Docusaurus

### 1. Configure Better-Auth Plugin
In your `docusaurus.config.js`:
```js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-better-auth',
      {
        auth: {
          secret: process.env.BETTER_AUTH_SECRET,
          trustHost: true,
          database: {
            url: process.env.DATABASE_URL,
          },
          github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          },
        },
      },
    ],
  ],
};
```

### 2. Initialize Better-Auth
Create `src/better-auth/config.js`:
```js
import { betterAuth } from "better-auth";
import { postgresAdapter } from "@better-auth/postgres-adapter";
import { neon } from "@neondatabase/serverless";

const db = neon(process.env.DATABASE_URL);

export const auth = betterAuth({
  database: postgresAdapter(db, {
    provider: "pg",
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
```

## Running Locally

### 1. Start the Development Server
```bash
npm run start
```

### 2. Access the Application
- Sign-up page: `http://localhost:3000/signup`
- Profile page: `http://localhost:3000/profile`
- Welcome page: `http://localhost:3000/welcome`

## API Endpoints

### Profile Management
```
# Get current user's profile
GET /api/profile
Authorization: Bearer {token}

# Update current user's profile
PUT /api/profile
Content-Type: application/json
Authorization: Bearer {token}

{
  "softwareBackground": ["Python", "ROS 2"],
  "hardwareAccess": ["Jetson"],
  "comfortLevel": 3
}
```

## Testing

### 1. Unit Tests
```bash
npm run test:unit
```

### 2. E2E Tests (Playwright)
```bash
# Run Playwright tests to ensure sign-up flow completes in ≤ 45 seconds
npm run test:e2e
```

### 3. Accessibility Tests
```bash
# Run accessibility tests to ensure WCAG 2.2 AA compliance
npm run test:a11y
```

## Key Components

### SignUpForm Component
- Collects email/password or handles GitHub OAuth
- Presents multi-select for software background (Python, ROS 2, C++, PyTorch, LLM, None)
- Presents multi-select for hardware access (Jetson, RealSense, Unitree, None)
- Presents 1-5 Likert scale for comfort level
- Handles client-side validation
- Redirects to `/welcome` after completion

### ProfileForm Component
- Allows users to update their profile information
- Pre-populates existing values
- Maintains consistency with sign-up form

### GlassCard Component
- Implements glassmorphism design with existing tokens
- Reusable for authentication-related UI elements
- Responsive design for all screen sizes

## Security Considerations

- All authentication flows use HTTPS in production
- Passwords are hashed using industry-standard algorithms
- OAuth tokens are securely stored
- Profile data is linked to authenticated users only
- Rate limiting implemented to prevent abuse
- Input validation on both client and server side