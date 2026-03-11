# Better Auth Demonstration

A modern, high-performance authentication demonstration built using [Next.js](https://nextjs.org), [Prisma](https://www.prisma.io), and [Better Auth](https://better-auth.com). This project showcases a seamless authentication flow with social providers and a clean, responsive UI.

## 🚀 Features

- **Robust Authentication**: Powered by Better Auth for secure session management.
- **Social Sign-In**: Integrated with Google and GitHub for easy user access.
- **Modern UI**: Built with Tailwind CSS 4 and Shadcn UI components.
- **Prisma ORM**: Efficient database management and type-safe queries.
- **Next.js 15+**: Leveraging the latest features of the App Router.

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Authentication**: Better Auth
- **ORM**: Prisma
- **Database**: PostgreSQL (via @prisma/adapter-pg)
- **Styling**: Tailwind CSS 4, Shadcn/UI
- **Icons**: Lucide React

## 🏁 Getting Started

### Prerequisites

- Node.js installed
- A PostgreSQL database instance
- Environment variables configured (see `.env.example`)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd better-auth
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run migrations**:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
