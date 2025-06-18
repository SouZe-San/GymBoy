# GymBoy Backend

[![Hono](https://img.shields.io/badge/Hono.js-db793d?logo=hono&logoColor=white)](https://github.com/honojs/hono)
[![Bun](https://img.shields.io/badge/Bun.js-000000?logo=bun&logoColor=white)](https://github.com/oven-sh/bun)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A lightweight, high-performance backend built with **[Hono.js](https://hono.dev/)** (on [Bun](https://bun.sh/)) and powered by **[Supabase](https://supabase.com/)**, designed to manage gym operations including digital billing, notifications, supplement store, and diet tracking.

## 📦 Tech Stack

- **Hono.js** – Ultra-fast web framework for Bun.
- **Bun.js** – Modern all-in-one JavaScript runtime.
- **Supabase** – Backend-as-a-Service (PostgreSQL, Auth, Storage, Functions).
- **TypeScript** – Type-safe backend logic.

---

> [!IMPORTANT]
>
> ✅ Create a Supabase account: Visit supabase.com and create a free project.
>
> 🔑 Copy credentials carefully:
>
> SUPABASE_URL: Found in your Supabase project dashboard under "Project Settings" > "API".
>
> SUPABASE_ANON_KEY: Public key for client requests.
>
> SUPABASE_SERVICE_ROLE_KEY: Secret key for privileged operations (admin features).

## 📁 Project Structure (Recommended)

```bash

├── src/
│   ├──🫐database/
│   │   └── index.ts # database connection and initialization
│   │
│   ├── 🗃️middleware/
│   │   ├── admin.middleware.ts # admin-specific middleware
│   │   └── auth.middleware.ts # authentication middleware
│   │
│   ├── 🌳routes/
│   │   ├── admin.routes.ts # admin-specific routes
│   │   ├── auth.routes.ts # authentication routes
│   │   ├── user.routes.ts # member-specific routes
│   │   └── members.routes.ts # gym-member management routes
│   │
│   ├── utils/
│   │   ├── ApiError.ts
│   │   ├── login.utils.ts
│   │   ├── responseStatus.ts
│   │   └── seed.ts
│   │
│   └── index.ts
│
├── bun.lockb
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
 You have already cloned the repository, so skip this step.

 cd server
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Variables

Create a `.env` file in the root and configure:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=your-jwt-secret
```

### 4. Run Development Server

```bash
bun dev
```

### 5. Seeding Fake data in DB \(Optional\)

```bash
bun db:seed
```

open http://localhost:3000

## 📬 API Endpoints Overview

### Admin Routes

| Endpoint                     | Method | Description              |
| ---------------------------- | ------ | ------------------------ |
| `auth/admin/register`        | POST   | Admin Registration       |
| `auth/admin/login`           | POST   | Admin Login              |
| `auth/admin/login`           | POST   | Admin Log out            |
| `/admin/create`              | PATCH  | Add new member           |
| `/admin/update/:id`          | PUT    | Update member            |
| `/admin/:id`                 | DELETE | Delete member            |
| `/admin/bills`               | POST   | Create bill for a member |
| `/admin/packages`            | POST   | Assign fee package       |
| `/admin/announcements`       | POST   | create an announcement   |
| `/admin/announcements`       | UPDATE | update an announcement   |
| `/admin/announcements`       | DELETE | delete an announcement   |
| `/admin/sendNotification:id` | POST   | Send Payment Alert       |

### Member Routes

| Endpoint                | Method | Description                |
| ----------------------- | ------ | -------------------------- |
| `/register`             | POST   | Member register            |
| `/login`                | POST   | Member login               |
| `/logout`               | POST   | Member log out             |
| `/member/bills`         | GET    | View payment receipts      |
| `/member/notifications` | GET    | View payment notifications |

---

## 📌 Future Enhancements

- Integration with payment gateways (e.g., Razorpay, Stripe)
- Mobile push notifications
- Full-blown supplement ecommerce system
- AI-powered personalized diet & workout plans

---
