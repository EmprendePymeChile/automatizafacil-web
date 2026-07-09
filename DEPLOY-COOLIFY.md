# ============================================================
#  AutomatizaFácil.org — Despliegue en Coolify
# ============================================================
#
#  La web ya esta lista para desplegar. Solo necesitas:
#
#  1. CONECTAR EL REPO A COOLIFY
#     - En Coolify, crea un nuevo servicio tipo "Next.js"
#     - Conecta tu repo de GitHub/GitLab
#     - Rama: main
#
#  2. CONFIGURAR VARIABLES DE ENTORNO EN COOLIFY
#     - Copia TODAS las lineas de tu archivo .env
#     - Pegalas en la seccion "Environment Variables" de Coolify
#     - Las variables NEXT_PUBLIC_* son las que configuran la web
#
#  3. IMAGENES (3 opciones, elige 1):
#
#     Opcion A — Carpeta public/ (recomendado, simple)
#       - Suelta las imagenes en public/images/
#       - En .env: NEXT_PUBLIC_IMG_ROBERTO=/images/roberto.png
#       - Se despliegan con la app automaticamente
#
#     Opcion B — Cloudflare R2 (profesional, barato)
#       - Ya esta en tu stack de herramientas
#       - Sube imagenes a un bucket publico R2
#       - En .env: NEXT_PUBLIC_IMG_ROBERTO=https://pub-xxx.r2.dev/roberto.png
#       - Ventaja: no pesan en el repo, CDN global
#
#     Opcion C — Sin imagenes (asi como esta)
#       - Deja los campos de imagen vacios
#       - Se usan placeholders SVG automaticamente
#       - La web se ve profesional sin necesidad de assets
#
#  4. BUILD
#     - Coolify detecta Next.js automaticamente
#     - Build command: npm run build
#     - Start command: npm start
#     - Puerto: 3000
#
#  5. DOMINIO
#     - En Coolify, asigna automatizafacil.org (o el dominio que uses)
#     - Configura SSL (Let's Encrypt automatico en Coolify)
#
# ============================================================
#
#  IMPORTANTE: Nunca subas el archivo .env a GitHub.
#  .env ya esta en .gitignore. Las variables se configuran
#  directamente en el panel de Coolify.
#
# ============================================================
