# 🍕 Pizza Shop

A complete food delivery application built with modern technologies, featuring a restaurant management dashboard and API backend.

## 📋 Overview

Pizza Shop is a full-stack food delivery platform similar to iFood/Uber Eats, consisting of:

- **Backend API**: Built with TypeScript, Elysia.js, and Drizzle ORM
- **Frontend Dashboard**: React application for restaurant management
- **Database**: PostgreSQL with comprehensive schema
- **Authentication**: JWT-based auth with magic links
- **Testing**: Unit tests, integration tests, and E2E tests

## 🏗️ Project Structure

```
pizzashop/
├── pizzashop-api/          # Backend API
│   ├── src/
│   │   ├── db/            # Database schema and migrations
│   │   ├── http/          # Routes and server setup
│   │   └── mail/          # Email templates
│   ├── drizzle/           # Database migrations
│   └── docker-compose.yml # PostgreSQL setup
└── pizzashop-web/         # Frontend dashboard
    ├── src/
    │   ├── api/           # API client and mocks
    │   ├── components/    # Reusable UI components
    │   ├── pages/         # Application pages
    │   └── lib/           # Utilities and configurations
    └── test/              # E2E tests
```

## 🚀 Features

### Restaurant Management
- ✅ Restaurant registration and profile management
- ✅ Menu management (add, edit, remove products)
- ✅ Order management with status tracking
- ✅ Real-time metrics and analytics
- ✅ Revenue tracking and reporting

### Order System
- ✅ Order creation and processing
- ✅ Status management (pending → processing → delivering → delivered)
- ✅ Order cancellation
- ✅ Customer information tracking

### Analytics Dashboard
- ✅ Daily/monthly revenue charts
- ✅ Order amount metrics
- ✅ Popular products analysis
- ✅ Cancellation rate tracking
- ✅ Date range filtering

### Authentication
- ✅ Magic link authentication
- ✅ JWT-based sessions
- ✅ Role-based access (manager/customer)

## 🛠️ Tech Stack

### Backend
- **Runtime**: Bun
- **Framework**: Elysia.js
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: JWT
- **Email**: Resend + React Email
- **Validation**: Zod

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Testing**: Vitest + Playwright

## 📦 Installation

### Prerequisites
- Node.js 18+
- Bun (for API)
- Docker (for database)
- pnpm (for web app)

### Backend Setup

1. **Clone and navigate to API directory**
   ```bash
   cd pizzashop-api
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Configure the following variables:
   ```env
   API_BASE_URL="http://localhost:3333"
   AUTH_REDIRECT_URL="http://localhost:5173"
   DB_URL="postgresql://docker:docker@localhost:5432/pizzashop"
   JWT_SECRET_KEY="your-secret-key"
   RESEND_API_KEY="your-resend-api-key"
   ```

4. **Start PostgreSQL with Docker**
   ```bash
   docker compose up -d
   ```

5. **Run database migrations**
   ```bash
   bun migrate
   ```

6. **Seed the database**
   ```bash
   bun seed
   ```

7. **Start the development server**
   ```bash
   bun dev
   ```

The API will be available at `http://localhost:3333`

### Frontend Setup

1. **Navigate to web directory**
   ```bash
   cd pizzashop-web
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   # Create .env.local file
   VITE_API_URL=http://localhost:3333
   VITE_ENABLE_API_DELAY=false
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

The web application will be available at `http://localhost:5173`

## 🧪 Testing

### Backend Tests
```bash
cd pizzashop-api
# No specific test setup mentioned in the codebase
```

### Frontend Tests

**Unit Tests**
```bash
cd pizzashop-web
pnpm test
```

**E2E Tests**
```bash
# Start test server
pnpm dev:test

# Run E2E tests
pnpm playwright test
```

## 📊 Database Schema

The application uses a comprehensive PostgreSQL schema with the following main entities:

- **Users**: Customers and restaurant managers
- **Restaurants**: Restaurant information and settings
- **Products**: Menu items with pricing
- **Orders**: Order tracking with status management
- **Order Items**: Individual items within orders
- **Evaluations**: Customer reviews and ratings
- **Auth Links**: Magic link authentication tokens

## 🔐 Authentication Flow

1. User enters email on sign-in page
2. System generates magic link and sends via email
3. User clicks link to authenticate
4. JWT token is set as HTTP-only cookie
5. Subsequent requests include token for authorization

## 📈 API Endpoints

### Authentication
- `POST /authenticate` - Send magic link
- `GET /auth-links/authenticate` - Verify magic link
- `POST /sign-out` - Sign out user

### Restaurant Management
- `GET /managed-restaurant` - Get restaurant info
- `PUT /profile` - Update restaurant profile
- `GET /me` - Get user profile

### Orders
- `GET /orders` - List orders with filtering
- `GET /orders/:id` - Get order details
- `PATCH /orders/:id/approve` - Approve order
- `PATCH /orders/:id/cancel` - Cancel order
- `PATCH /orders/:id/dispatch` - Mark as dispatched
- `PATCH /orders/:id/deliver` - Mark as delivered

### Analytics
- `GET /metrics/month-revenue` - Monthly revenue
- `GET /metrics/month-orders-amount` - Monthly orders count
- `GET /metrics/day-orders-amount` - Daily orders count
- `GET /metrics/month-canceled-orders-amount` - Monthly cancellations
- `GET /metrics/daily-receipt-in-period` - Revenue by date range
- `GET /metrics/popular-products` - Popular products chart

## 🎨 UI Components

The frontend uses a comprehensive design system built with:

- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library

Key components include:
- Data tables with pagination and filtering
- Interactive charts and metrics cards
- Modal dialogs for order details
- Form components with validation
- Theme switching (light/dark mode)

## 🚀 Deployment

The project is designed to be runtime-agnostic and can be deployed on:

- **Backend**: Bun, Node.js, Cloudflare Workers, or any Web Standard API compatible runtime
- **Frontend**: Netlify, Vercel, or any static hosting service
- **Database**: Any PostgreSQL-compatible service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created by Eduardo Ferraz with tutor Diego Fernandes @rocketseat
