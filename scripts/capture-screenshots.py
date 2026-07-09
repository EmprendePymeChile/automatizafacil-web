"""
Captura screenshots reales de los mini SaaS de AutomatizaFácil.org.
Guarda las imágenes en public/images/ para que la web las muestre
en las cards del portafolio en vez de placeholders SVG.
"""
import asyncio
import os
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
IMAGES_DIR = ROOT / "public" / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

TARGETS = [
    {
        "name": "ejuridico",
        "url": "https://ejuridico.automatizafacil.org/",
        "width": 1200,
        "height": 800,
    },
    {
        "name": "liciradar",
        "url": "https://liciradar.automatizafacil.org/",
        "width": 1200,
        "height": 800,
    },
    {
        "name": "fondoradar",
        "url": "https://fondoradar.automatizafacil.org/",
        "width": 1200,
        "height": 800,
    },
    {
        "name": "tributaradar",
        "url": "https://tributaradar.automatizafacil.org/",
        "width": 1200,
        "height": 800,
    },
]


async def capture_screenshot(playwright, target):
    output_path = IMAGES_DIR / f"{target['name']}.png"
    print(f"Capturando: {target['name']} ({target['url']})")

    browser = await playwright.chromium.launch(headless=True)
    context = await browser.new_context(
        viewport={"width": target["width"], "height": target["height"]},
        device_scale_factor=1,
    )
    page = await context.new_page()

    try:
        await page.goto(target["url"], wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(2000)
        await page.screenshot(path=str(output_path), full_page=False)
        print(f"  OK -> {output_path} ({os.path.getsize(output_path)} bytes)")
    except Exception as e:
        print(f"  ERROR: {e}")
    finally:
        await browser.close()


async def main():
    async with async_playwright() as playwright:
        for target in TARGETS:
            await capture_screenshot(playwright, target)

    print("\nScreenshots completados.")
    print(f"\nActualiza .env con:")
    for t in TARGETS:
        key = f"NEXT_PUBLIC_IMG_{t['name'].upper()}"
        print(f"  {key}=/images/{t['name']}.png")


if __name__ == "__main__":
    asyncio.run(main())
