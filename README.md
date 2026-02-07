# NoteHub — Notes App (Next.js + Auth)

A notes management web application with authentication (cookies), protected routes, and SSR/CSR data fetching. Users can register/login, manage their profile, and create/search/filter notes.

## Links
```txt
Repository: https://github.com/Vitalism0/09-auth
API docs: https://notehub-api.goit.study/docs
Features
Authentication & Session
Sign up / Sign in

Session check (/auth/session)

Logout (clears auth cookies)

Auth state stored in Zustand (user, isAuthenticated)

Protected Routes
Private routes: /profile/*, /notes/*

Auth routes: /sign-in, /sign-up

Route protection via proxy.ts (redirects based on cookies)

Profile
Profile page (/profile) with avatar, username, email

Edit profile (/profile/edit) — update username via API

Notes
Notes list with:

Search (debounced)

Tag filtering

Pagination (perPage = 12)

Note details page (/notes/[id])

Note preview modal (intercepting routes in app/@modal)

Create note (/notes/action/create)

Draft persistence for create form via Zustand + persist (localStorage)

SSR + CSR (TanStack Query)
Server components prefetch data and hydrate to client

Client components reuse hydrated cache

Tech Stack
Next.js (App Router)

TypeScript

Axios

TanStack Query (React Query)

Zustand (+ persist middleware)

CSS Modules

Project Structure (high level)
txt
Копіювати код
app/
  (auth routes)/
    sign-in/
    sign-up/
    layout.tsx
  (private routes)/
    profile/
      edit/
    notes/
      filter/[...slug]/
      [id]/
      action/create/
  @modal/
    (.)notes/[id]/
  api/                     # server routes (proxy to backend)
components/
lib/
  api/
    api.ts                 # axios instance (withCredentials)
    clientApi.ts           # client-side API calls
    serverApi.ts           # server-side API calls (adds cookies in headers)
  store/
types/
proxy.ts                   # route protection
Environment Variables
Create a .env file in the project root:

env
Копіювати код
NEXT_PUBLIC_API_URL=http://localhost:3000
When deployed to Vercel, set:

env
Копіювати код
NEXT_PUBLIC_API_URL=https://YOUR-VERCEL-DOMAIN.vercel.app
Important: NEXT_PUBLIC_API_URL is used to build baseURL for requests:
process.env.NEXT_PUBLIC_API_URL + "/api" — so the app always calls your Next.js server routes in /app/api.

Getting Started
Install dependencies:

bash
Копіювати код
npm install
Run locally:

bash
Копіювати код
npm run dev
Open:

txt
Копіювати код
http://localhost:3000
Scripts
bash
Копіювати код
npm run dev
npm run build
npm run start
npm run lint
API & Auth Notes
The app uses a backend that supports cookie-based auth.

All requests from the frontend go to the local Next.js routes under /api/*, which proxy requests to the backend.

Protected endpoints require cookies (access/refresh tokens).

Common endpoints:

POST /auth/register

POST /auth/login

POST /auth/logout

GET /auth/session

GET /users/me

PATCH /users/me

GET /notes

GET /notes/:id

POST /notes

DELETE /notes/:id

Credits
Styles and API route templates based on GoIT educational materials (NoteHub).

makefile
Копіювати код

Хочеш — я піджену README під твій реальний деплой (додам **Live Demo**, скріни, бейджики, точні маршрути/фічі) якщо скинеш лінк на Vercel або назву домену.
::contentReference[oaicite:0]{index=0}






