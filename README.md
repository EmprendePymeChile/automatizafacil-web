# Next.js SaaS Starter

Starter profesional para construir productos SaaS con el stack Antigravity.

**Stack:** Next.js App Router + Tailwind CSS + shadcn/ui + Drizzle ORM + NextAuth.js

## Setup

```bash
npm install
cp .env.example .env
# Configurar DATABASE_URL y AUTH_SECRET en .env
npx drizzle-kit push
npm run dev        # http://localhost:3000
```

## Estructura

```
next-saas/
  brand/
    tokens.css           # CSS custom properties
    tailwind.brand.js    # Tailwind theme extension
  src/
    app/
      layout.tsx         # Root layout con Google Fonts
      page.tsx           # Landing page
      globals.css        # Tailwind + estilos base
    components/
      ui/                # Componentes shadcn/ui
    lib/
      db.ts              # Conexion Drizzle
      auth.ts            # Config NextAuth.js
```

## Que incluye

- Next.js 14 App Router con RSC
- Tailwind CSS con brand tokens sincronizados
- Drizzle ORM listo para Postgres
- NextAuth.js preparado para OAuth/credentials
- shadcn/ui para componentes (copiar los que necesites)
- React Hook Form + Zod para formularios tipados
- Zustand para estado cliente opcional

## Personalizacion

1. Copiar componentes de [ui.shadcn.com](https://ui.shadcn.com/) a `src/components/ui/`.
2. Configurar NextAuth providers en `src/lib/auth.ts`.
3. Definir schemas de DB en `src/lib/db/schema.ts`.
4. Agregar capa de Stripe para billing.

## Deploy

```bash
npm run build
```

Compatible con Vercel, Coolify, Railway o cualquier host que soporte Node.js.
