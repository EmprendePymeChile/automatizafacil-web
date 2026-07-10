"""Captura screenshot de automatizafacil.org en viewport mobile."""
import asyncio, sys
from pathlib import Path
from playwright.async_api import async_playwright

URL = "https://automatizafacil.org"
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "mobile-preview.png"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2)
        page = await context.new_page()
        await page.goto(URL, wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(2000)
        overflow = await page.evaluate("""
            () => ({
                innerW: window.innerWidth,
                clientW: document.documentElement.clientWidth,
                scrollW: document.documentElement.scrollWidth,
                bodyW: document.body.scrollWidth,
                overflowing: scrollX > 0,
                elements: [...document.querySelectorAll('*')]
                    .filter(el => el.getBoundingClientRect().right > window.innerWidth + 1)
                    .slice(0, 10)
                    .map(el => ({
                        tag: el.tagName,
                        cls: el.className?.toString().substring(0, 80),
                        right: Math.round(el.getBoundingClientRect().right),
                        width: Math.round(el.getBoundingClientRect().width)
                    }))
            })
        """)
        print(f"Viewport: {overflow['innerW']}x?")
        print(f"ScrollW: {overflow['scrollW']}, ClientW: {overflow['clientW']}")
        print(f"Overflowing: {overflow['overflowing']}")
        if overflow['elements']:
            print("Overflow elements:")
            for e in overflow['elements']:
                print(f"  <{e['tag']}> cls='{e['cls']}' right={e['right']} width={e['width']}")
        else:
            print("NO OVERFLOW - viewport correcto!")
        await page.screenshot(path=str(OUT), full_page=True)
        print(f"\nScreenshot: {OUT}")
        await browser.close()
        return 0 if not overflow['overflowing'] else 1

sys.exit(asyncio.run(main()))
