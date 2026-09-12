import os
import sys
import time
import re
from playwright.sync_api import sync_playwright

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

def sanitize_filename(name):
    # Remove special characters for clean filenames
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    name = re.sub(r'\s+', "_", name)
    name = name.strip("._")
    return name

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    html_file = os.path.join(base_dir, "thuyet_trinh", "index.html")
    output_dir = os.path.join(base_dir, "thuyet_trinh", "xuat_anh_slide")
    os.makedirs(output_dir, exist_ok=True)

    file_url = f"file:///{html_file.replace(os.sep, '/')}"

    print("==============================================================")
    print("   CÔNG CỤ XUẤT TỰ ĐỘNG 51 TRANG SLIDE RA ẢNH FULL HD (PNG)   ")
    print("==============================================================")
    print(f"File nguồn : {html_file}")
    print(f"Thư mục ra : {output_dir}\n")

    # Detect browser
    channel = "chrome"
    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    if not os.path.exists(chrome_path) and os.path.exists(edge_path):
        channel = "msedge"

    print(f"[*] Đang khởi chạy trình duyệt ({channel})...")
    with sync_playwright() as p:
        browser = p.chromium.launch(channel=channel, headless=True)
        context = browser.new_context(
            viewport={"width": 1920, "height": 1080},
            device_scale_factor=1.25  # Độ phân giải sắc nét cao (Crisp High-DPI)
        )
        page = context.new_page()

        print("[*] Đang nạp trang slide thuyết trình...")
        page.goto(file_url, wait_until="load")
        time.sleep(1.5)  # Chờ font chữ và hình ảnh nạp hoàn tất

        # Ẩn thanh header điều khiển, thanh footer, nút mũi tên 2 bên để slide sạch 100%
        page.evaluate("""() => {
            document.querySelector('#presentation-header')?.style.setProperty('display', 'none', 'important');
            document.querySelector('footer')?.style.setProperty('display', 'none', 'important');
            document.querySelectorAll('button.fixed')?.forEach(b => b.style.setProperty('display', 'none', 'important'));
            document.querySelector('#header-reveal-tab')?.style.setProperty('display', 'none', 'important');
            document.body.style.setProperty('overflow', 'hidden', 'important');
            const main = document.querySelector('.slide-viewport');
            if (main) {
                main.style.setProperty('padding', '0', 'important');
                main.style.setProperty('height', '1080px', 'important');
            }
            document.querySelectorAll('.slide').forEach(s => {
                s.style.setProperty('padding-top', '1.5rem', 'important');
                s.style.setProperty('padding-bottom', '1.5rem', 'important');
                s.style.setProperty('height', '1080px', 'important');
            });
        }""")

        total_slides = page.evaluate("typeof totalSlides !== 'undefined' ? totalSlides : 51")
        titles = page.evaluate("typeof SLIDE_TITLES !== 'undefined' ? SLIDE_TITLES : []")

        print(f"[*] Bắt đầu xuất {total_slides} slides...")
        start_time = time.time()

        for i in range(1, total_slides + 1):
            title = titles[i - 1] if (i - 1 < len(titles)) else f"Slide_{i}"
            clean_title = sanitize_filename(title)
            # Giới hạn độ dài tên file
            if len(clean_title) > 45:
                clean_title = clean_title[:45].rstrip("_")
            filename = f"Slide_{i:02d}_{clean_title}.png"
            filepath = os.path.join(output_dir, filename)

            # Chuyển slide
            page.evaluate(f"window.goToSlide({i});")
            time.sleep(0.25)  # Chờ transition hoàn thành

            page.screenshot(path=filepath)
            percent = int((i / total_slides) * 100)
            bar = "█" * (percent // 4) + "-" * (25 - (percent // 4))
            print(f"[{bar}] {percent:3d}% | Đã chụp: {filename}")

        browser.close()
        elapsed = time.time() - start_time
        print("\n==============================================================")
        print(f"✅ XUẤT THÀNH CÔNG TẤT CẢ {total_slides} SLIDES RA ẢNH!")
        print(f"⏱  Thời gian hoàn thành: {elapsed:.1f} giây")
        print(f"📁 Thư mục ảnh: {output_dir}")
        print("==============================================================")

if __name__ == "__main__":
    main()
