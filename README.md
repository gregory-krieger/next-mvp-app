## next-mvp-app

- Next.js (with Typescript)
- Tailwind CSS
- Shadcn
- Supabase
- Drizzle orm
- Better auth
- React email
- Resend

**Production-grade Next.js template**

### Environnement variables

```bash
# Supabase => Connect => Transaction pooler
DATABASE_URL=

# Generate auth secret here : https://1password.com/password-generator
BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app
BETTER_AUTH_SECRET=

# Google (optionnal) - used for Google social login
# no need ? console log our the google social provider in /lib/auth/auth.ts
# Otherwise generate from GCP => APIs & services => Credentials => OAuth 2.0 Client IDs
# Add http://localhost:3000/api/auth/callback/google to the Authorized redirect URIs
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Resend - used for auth transactionnal emails
# no need ? remove emailVerification object in lib/auth/auth.th
RESEND_API_KEY=

```

### Run

```bash
pnpm dev
```
