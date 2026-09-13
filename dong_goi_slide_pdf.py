import os
import sys
import re
import pymupdf

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    img_dir = os.path.join(base_dir, "thuyet_trinh", "xuat_anh_slide")
    
    if not os.path.exists(img_dir):
        print(f"Lỗi: Không tìm thấy thư mục ảnh '{img_dir}'")
        return

    # Sắp xếp đúng theo số thứ tự Slide_01, Slide_02, ... Slide_51
    files = [f for f in os.listdir(img_dir) if f.lower().endswith(".png")]
    def get_slide_num(filename):
        m = re.search(r'Slide_(\d+)', filename)
        return int(m.group(1)) if m else 999
    
    files.sort(key=get_slide_num)
    
    print("==============================================================")
    print(f"  ĐÓNG GÓI {len(files)} TRANG SLIDE THÀNH 1 FILE PDF DUY NHẤT  ")
    print("==============================================================")
    
    output_pdf = os.path.join(base_dir, "thuyet_trinh", "Slide_Thuyet_Trinh_FPT_Long_Chau_51_Trang.pdf")
    
    doc = pymupdf.open()
    for idx, f in enumerate(files, 1):
        img_path = os.path.join(img_dir, f)
        img = pymupdf.open(img_path)
        rect = img[0].rect
        pdfbytes = img.convert_to_pdf()
        img_pdf = pymupdf.open("pdf", pdfbytes)
        page = doc.new_page(width=rect.width, height=rect.height)
        page.show_pdf_page(rect, img_pdf, 0)
        img.close()
        img_pdf.close()
        print(f"  [+] Đã ghép trang {idx:2d}/{len(files)}: {f}")
        
    # Lưu PDF chất lượng cao, tối ưu dung lượng
    doc.save(output_pdf, deflate=True, garbage=3)
    doc.close()
    
    size_mb = os.path.getsize(output_pdf) / (1024 * 1024)
    print("\n==============================================================")
    print("✅ ĐÃ TẠO THÀNH CÔNG FILE PDF TOÀN BỘ SLIDE!")
    print(f"📄 Tên file   : Slide_Thuyet_Trinh_FPT_Long_Chau_51_Trang.pdf")
    print(f"📊 Số trang   : {len(files)} trang (16:9 Landscape Full HD)")
    print(f"💾 Dung lượng : {size_mb:.2f} MB")
    print(f"📁 Đường dẫn  : {output_pdf}")
    print("==============================================================")

if __name__ == "__main__":
    main()
