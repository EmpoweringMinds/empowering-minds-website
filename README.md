# Empowering Minds Website

React/Vite website for **Empowering Minds**, a Human Capital Development
initiative.

The project is currently a React frontend deployed as a static site,
with Supabase used for lead capture and a Supabase Edge Function used to
process callback/demo enquiries.

The project is being migrated toward a lightweight headless-CMS +
serverless architecture while keeping the existing React frontend.

------------------------------------------------------------------------

## Current Stack

-   **React 19**
-   **Vite 8**
-   **React Router**
-   **Tailwind CSS 4**
-   **Framer Motion**
-   **Lucide React / React Icons**
-   **Supabase**
    -   PostgreSQL for enquiry storage
    -   Edge Function for server-side enquiry handling
-   **Resend** for admin email notifications
-   **GitHub Pages** for static deployment

------------------------------------------------------------------------

## Project Structure

``` text
src/
├── assets/
├── components/
│   ├── common/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProgramCard.jsx
│   │   ├── TrainerCard.jsx
│   │   ├── TrainerModal.jsx
│   │   ├── WebinarPreview.jsx
│   │   └── ...
│   ├── home/
│   ├── sections/
│   └── ui/
├── data/
│   └── siteContent.js
├── lib/
│   └── supabase.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Programs.jsx
│   ├── Services.jsx
│   └── Trainers.jsx
├── theme/
├── utils/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

### Important areas

#### `src/data/siteContent.js`

This is currently the main source of hardcoded website content.

It contains items such as:

-   navigation links
-   homepage content
-   service groups
-   service information
-   trainer information
-   webinar preview content
-   testimonials
-   other presentation/content data

This file is one of the main targets for future CMS migration.

#### `src/components/common/TrainerCard.jsx`

Renders trainer cards and currently expects trainer data containing
fields such as:

-   `name`
-   `role`
-   `designation`
-   `image`
-   `bio`
-   `expertise`

The exact CMS schema should follow the fields already used by the
application rather than introducing unnecessary fields.

#### `src/components/common/WebinarPreview.jsx`

A webinar preview component already exists.

It currently reads webinar information from `siteContent.js` rather than
from a database or CMS.

This is **not yet a complete webinar system**. There is currently no
webinar database, registration system, payment system, or webinar
archive.

#### `src/lib/supabase.js`

Creates the browser-side Supabase client using:

``` text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

This client exists for the current Supabase integration and is expected
to be removed when the migration is complete.

------------------------------------------------------------------------

# Current Architecture

At present, the application broadly works like this:

``` text
                 React / Vite
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
   Hardcoded content       Supabase Edge Function
   siteContent.js                   │
                                    │
                              ┌─────┴─────┐
                              │           │
                              ▼           ▼
                       Supabase DB      Resend
                       callback_        admin email
                       requests
```

The frontend is a static React application and does **not** have a
traditional Node.js backend.

------------------------------------------------------------------------

# Lead / Enquiry Flow

The current callback/demo flow uses a Supabase Edge Function named
`submit-callback`.

The function:

1.  Accepts a POST request from the frontend.
2.  Handles CORS preflight.
3.  Validates required fields.
4.  Validates the enquiry intent.
5.  Validates the email address.
6.  Inserts the enquiry into `callback_requests`.
7.  Sends an administrative email through Resend.
8.  Returns a success/error response to the frontend.

The current enquiry fields are:

``` text
name
email
phone
organization
serviceGroup
serviceId
serviceTitle
message
intent
```

`intent` is currently:

``` text
callback
demo
```

The database record contains the corresponding snake_case fields.

### Important behaviour

The enquiry is stored before the email is sent.

If Resend fails, the enquiry is **not deleted**. The database remains
the source of truth for the lead.

This behaviour should be preserved during migration.

------------------------------------------------------------------------

# Current Supabase Usage

Supabase is currently used for:

-   PostgreSQL storage of callback/demo enquiries
-   Edge Function execution for the enquiry endpoint

Supabase is **not currently responsible for**:

-   CMS content management
-   trainer management
-   webinar management
-   authentication
-   webinar registrations
-   payments
-   ecommerce/cart functionality

Because Supabase is currently used for a relatively small amount of
functionality, it is a candidate for replacement rather than expansion.

------------------------------------------------------------------------

# Planned Architecture

The project is being moved toward the following architecture:

``` text
                         ┌──────────────┐
                         │   Sanity     │
                         │  Headless CMS│
                         └──────┬───────┘
                                │
                         CMS content API
                                │
                                ▼
                        ┌──────────────┐
                        │ React / Vite │
                        │   Frontend   │
                        └──────┬───────┘
                               │
                       server-side actions
                               │
                               ▼
                     ┌──────────────────┐
                     │ Cloudflare Worker │
                     └───────┬──────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
             D1           Resend       Payment Provider
          database        email         (e.g. Razorpay)
```

The intended responsibilities are:

### Sanity

Content management for:

-   Trainers
-   Webinars
-   Blogs

### React

Presentation and user interaction.

The existing frontend should be retained wherever practical.

### Cloudflare Workers

Server-side functionality such as:

-   lead submission
-   payment order creation
-   payment verification
-   payment webhooks
-   registration processing
-   other operations requiring secrets

### Cloudflare D1

Lightweight transactional data storage for:

-   enquiries/leads
-   webinar registrations
-   payment-related records

### Resend

Transactional/admin email notifications.

### Payment provider

Payment processing for individual webinars.

There will be **no traditional shopping cart**.

The intended flow is:

``` text
Webinar
   ↓
Register / Book Now
   ↓
Server creates payment order
   ↓
Payment provider checkout
   ↓
Payment provider webhook
   ↓
Server verifies payment
   ↓
Registration marked paid
   ↓
Confirmation
```

Payment secrets must never be exposed in the React frontend.

------------------------------------------------------------------------

# CMS Content

## Trainer

The Trainer model should initially reflect the fields already used by
the React application.

Expected fields include:

``` text
name
role
designation
image
bio
expertise[]
```

Additional fields should only be introduced when the frontend actually
needs them.

Possible future fields include:

``` text
slug
published
featured
```

These should be added deliberately rather than pre-emptively.

------------------------------------------------------------------------

## Webinar

Webinars should be represented as one content type rather than separate
"upcoming" and "past" types.

A webinar can contain:

``` text
title
slug
description
date
time
duration
speaker/trainer
image
price
registration information
highlights
format
status/published state
recording/resource link
```

Upcoming/past status should normally be derived from the webinar date
rather than maintained manually.

For example:

``` text
date >= today → upcoming
date < today  → past
```

Publishing status remains separate:

``` text
draft
published
```

This avoids maintaining two competing states.

------------------------------------------------------------------------

## Blog

The blog will eventually be managed through the CMS.

Initial model:

``` text
title
slug
featured image
excerpt
content/body
author
publication date
categories/tags
published/draft status
SEO title
SEO description
```

The implementation should remain intentionally small.

------------------------------------------------------------------------

# Account Ownership

Infrastructure accounts should be owned by the company's shared Gmail
account rather than an individual developer's personal account.

This applies to services such as:

-   Sanity
-   Cloudflare
-   D1
-   Workers
-   Resend
-   payment provider accounts where appropriate

The developer's personal account can be granted access where needed, but
should not be the primary owner of company infrastructure.

### Principle

``` text
Company account
      │
      ├── owns infrastructure
      │
      └── grants developer access
```

Do not place passwords, API keys, service-role keys, or other secrets in
this repository.

------------------------------------------------------------------------

# Environment Variables

The current project uses Vite environment variables.

Current Supabase variables:

``` env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

During migration, these will be replaced/removed as appropriate.

Future frontend configuration may include public identifiers such as:

``` env
VITE_SANITY_PROJECT_ID=
VITE_SANITY_DATASET=
```

Server-side secrets must **not** use `VITE_` variables because Vite
exposes `VITE_*` values to the browser.

Examples of server-only secrets:

``` env
RESEND_API_KEY=
PAYMENT_SECRET=
WEBHOOK_SECRET=
```

These belong in Cloudflare Worker secrets/environment configuration.

------------------------------------------------------------------------

# Security Rules

## Never expose

The following must remain server-side:

-   payment secret keys
-   payment webhook secrets
-   Resend API keys
-   database credentials
-   service-role keys
-   CMS write tokens
-   administrative credentials

## Frontend may contain

Public identifiers required to read published CMS content are acceptable
when the CMS is configured appropriately.

The frontend should only have permission to perform operations it
actually needs.

------------------------------------------------------------------------

# Development

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Build for production:

``` bash
npm run build
```

Run ESLint:

``` bash
npm run lint
```

Preview the production build:

``` bash
npm run preview
```

Deploy the static build to GitHub Pages:

``` bash
npm run deploy
```

------------------------------------------------------------------------

# Deployment

The current application is configured for static deployment through
GitHub Pages.

The production build is generated with:

``` bash
npm run build
```

and the `dist` directory is deployed using `gh-pages`.

The React frontend should remain statically deployable after the
CMS/backend migration.

The CMS and server-side functionality will live separately from the
static frontend.

------------------------------------------------------------------------

# Migration Plan

The migration should be performed incrementally.

## Phase 0 --- Architecture / Repository Audit

Completed.

Goals:

-   inspect the existing React application
-   identify current Supabase usage
-   inspect the existing Edge Function
-   identify hardcoded content
-   determine migration boundaries
-   avoid unnecessary rewrites

------------------------------------------------------------------------

## Phase 1 --- CMS Setup

Set up the company-owned Sanity project.

Create the initial Trainer schema.

Do not modify the frontend more than necessary at this stage.

------------------------------------------------------------------------

## Phase 2 --- Trainer Migration

Move existing trainer data from `siteContent.js` into Sanity.

Update the trainer pages/components to retrieve trainer data from the
CMS.

Verify:

-   images
-   bios
-   expertise
-   featured trainer behaviour
-   trainer modal/profile behaviour

------------------------------------------------------------------------

## Phase 3 --- Webinar CMS Model

Create the Webinar schema.

Support:

-   upcoming webinars
-   past webinars
-   publishing state
-   speaker/trainer
-   pricing
-   registration information
-   optional recording/resource links

------------------------------------------------------------------------

## Phase 4 --- Webinar Frontend

Replace the hardcoded webinar preview with CMS-driven content.

Add:

-   upcoming webinar display
-   webinar archive
-   individual webinar pages
-   registration CTA

No payment implementation should be mixed into this phase unless
required by the final page flow.

------------------------------------------------------------------------

## Phase 5 --- Cloudflare Backend

Create the Worker and D1 database.

Initially migrate the existing lead submission functionality.

Preserve the existing behaviour:

``` text
React
  ↓
Worker
  ↓
D1
  ↓
Resend
```

Add appropriate:

-   validation
-   CORS restrictions
-   rate limiting
-   error handling

------------------------------------------------------------------------

## Phase 6 --- Webinar Registration

Add the registration data model.

Store registration records separately from CMS content.

The CMS owns the webinar itself.

D1 owns transactional registration information.

------------------------------------------------------------------------

## Phase 7 --- Payment Integration

Add the payment provider.

The server-side flow should be:

``` text
React
  ↓
Worker
  ↓
Create payment order
  ↓
Payment provider
  ↓
Webhook
  ↓
Worker
  ↓
Verify payment
  ↓
D1
  ↓
Registration confirmed
```

The frontend must never be trusted as proof of payment.

------------------------------------------------------------------------

## Phase 8 --- Blog

Add the Blog schema to Sanity.

Build the frontend blog listing and individual article pages.

Add basic SEO metadata.

------------------------------------------------------------------------

## Phase 9 --- Remove Supabase

After the new Worker/D1 lead flow is confirmed:

-   remove the Supabase frontend client
-   remove Supabase dependencies
-   remove Supabase environment variables
-   remove the old Edge Function
-   verify that no application code still depends on Supabase
-   retain/export old lead data if required before shutting down the
    project

Supabase should not be removed until the replacement lead flow has been
tested in production.

------------------------------------------------------------------------

# Data Ownership

A deliberate separation is used:

``` text
Sanity
│
├── Trainers
├── Webinars
└── Blogs

D1
│
├── Leads
├── Registrations
└── Payment records

Payment Provider
│
└── Payment processing

Resend
│
└── Email delivery
```

This prevents the CMS from becoming an accidental ecommerce/database
system and keeps transactional data separate from editorial content.

------------------------------------------------------------------------

# Design Principle

The goal is **minimum necessary infrastructure**.

Avoid adding:

-   a traditional Node.js backend
-   a full ecommerce platform
-   a shopping cart
-   a second database without a clear reason
-   unnecessary authentication systems
-   enterprise CMS features that the project does not need

The existing React frontend should be reused wherever practical.

------------------------------------------------------------------------

# Important Notes

-   Do not commit `.env` files.
-   Do not expose server-side secrets through `VITE_*` variables.
-   Do not trust client-side payment success as proof of payment.
-   Always verify payment server-side/webhook-side.
-   Keep CMS content and transactional records separate.
-   Keep infrastructure ownership with the company account.
-   Make architectural changes incrementally and test each migration
    stage before removing the old implementation.

------------------------------------------------------------------------

# Status

**Current stage:** Phase 0 complete / Phase 1 ready.

The next implementation task is to set up the company-owned Sanity
project and create the Trainer content model based on the fields
currently used by the application.
