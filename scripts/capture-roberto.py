"""
Busca y descarga la foto de Roberto desde EmprendePyme.cl.
Guarda la imagen en public/images/roberto.jpg para usar
en la sección "Roberto + EmprendePyme" de la web.
"""
import asyncio
import os
import re
import requests
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = ROOT / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

URL = "https://emprendepyme.cl/"


async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page()
        try:
            await page.goto(URL, wait_until="networkidle", timeout=30000)
            await page.wait_for_timeout(3000)

            # Try to find an image tag with relevant src
            img_srcs = await page.evaluate("""
                () => {
                    const imgs = document.querySelectorAll('img');
                    return Array.from(imgs)
                        .map(img => ({src: img.src, alt: img.alt || '', w: img.naturalWidth, h: img.naturalHeight}))
                        .filter(img => img.w > 100 && img.h > 100);
                }
            """)

            print(f"Encontradas {len(img_srcs)} imagenes relevantes en {URL}")

            # Look for profile/team/roberto images
            roberto_img = None
            for img in img_srcs:
                src_lower = img['src'].lower()
                alt_lower = img['alt'].lower()
                if any(kw in src_lower + alt_lower for kw in ['roberto', 'saez', 'founder', 'equipo', 'team', 'profile', 'avatar']):
                    roberto_img = img
                    print(f"  Candidato: {img['src']} ({img.get('alt', 'sin alt')}, {img['w']}x{img['h']})")
                    break

            # If no match, take the first large-ish image that looks like a person
            if not roberto_img:
                for img in img_srcs:
                    if 200 < img['w'] < 2000 and 200 < img['h'] < 2000:
                        roberto_img = img
                        print(f"  Fallback: {img['src']} ({img['w']}x{img['h']})")
                        break

            if roberto_img and roberto_img['src'].startswith('http'):
                output_path = IMAGES_DIR / "roberto.jpg"
                resp = requests.get(roberto_img['src'], timeout=15, headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                })
                if resp.status_code == 200:
                    output_path.write_bytes(resp.content)
                    print(f"\n  OK -> {output_path} ({os.path.getsize(output_path)} bytes)")
                    print(f"\n  Actualiza .env con:")
                    print(f"  NEXT_PUBLIC_IMG_ROBERTO=/images/roberto.jpg")
                else:
                    print(f"\n  ERROR: HTTP {resp.status_code}")
            else:
                print("\n  No se encontro una imagen adecuada. Sube manualmente public/images/roberto.jpg")

        except Exception as e:
            print(f"ERROR: {e}")
        finally:
            await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
