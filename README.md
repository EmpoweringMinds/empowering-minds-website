# Empowering Minds Website

The official website for **Empowering Minds**, built with React and Vite.

## Tech Stack

- **React + Vite** — Frontend application
- **Sanity** — Headless CMS for managing website content
- **Cloudflare Workers** — Backend API for server-side operations
- **Cloudflare D1** — Database for enquiries, registrations, and payment records
- **Razorpay** — Payment processing
- **GitHub Pages** — Frontend hosting and deployment

## Architecture

- Sanity manages editorial content.
- React displays the website and handles user interactions.
- Cloudflare Workers handles backend operations.
- Cloudflare D1 stores transactional data.
- Razorpay processes payments.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The frontend is deployed to GitHub Pages through the configured deployment workflow.

The backend runs separately on Cloudflare Workers, with Cloudflare D1 providing database storage.

## Environment Variables

Configure the required public environment variables in `.env` for local development. Production frontend variables are configured through the GitHub Actions workflow.

Never commit `.env` files or expose server-side secrets in frontend code.

## Important

Keep CMS content in Sanity and transactional records in D1. Payment verification and other sensitive operations must be handled server-side.