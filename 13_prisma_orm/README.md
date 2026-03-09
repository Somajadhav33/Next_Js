# Next.js + Prisma ORM Demo

A minimalist, high-performance web application demonstrating the integration of Prisma ORM with Next.js Server Actions.

## 🚀 Quick Start

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory and add your PostgreSQL connection string:
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

### 3. Database Initialization
Generate the Prisma client and push your schema to the database:
```bash
npx prisma generate
npx prisma db push
```

### 4. Running Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your application.

## 🛠 Features
- **Modern UI:** Built with Tailwind CSS and a curated design system.
- **Server Actions:** Seamless database mutations without manual API routes.
- **Prisma Client:** Fully type-safe database access for reliability and speed.
- **Automatic Updates:** Uses `revalidatePath` to keep the UI in sync with your data.

---
Built with ❤️ for rapid web development.
