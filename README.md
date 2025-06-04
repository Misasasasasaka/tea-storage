# Tea Storage System

This project implements a simple tea warehouse management application based on the design document in `project.md`.

## Structure

- `server/` - Express + Prisma backend using SQLite
- `web/` - Vue 3 frontend generated with Vite

## Setup

### Backend

```bash
cd server
npm install
npx prisma migrate dev --name init
npm run dev
```

### Frontend

```bash
cd web
npm install
npm run dev
```

The frontend expects the API to run on `http://localhost:3000`.
