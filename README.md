# BÁO CÁO ĐỒ ÁN HỆ THỐNG QUẢN TRỊ QUY TRÌNH NGHIỆP VỤ (BPM)
## Đề tài: Hệ thống Quản trị Quy trình Nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu

- **Học phần**: Hệ thống Quản trị Quy trình Nghiệp vụ (BPM)
- **Mã lớp**: IE203.F33.CN2.CNTT – Trường Đại học Công nghệ Thông tin (UIT) – ĐHQG TP.HCM
- **Giảng viên hướng dẫn**: ThS. Hà Lê Hoài Trung
- **Nhóm thực hiện**:
  1. Huỳnh Công Hậu – MSSV: 25210099
  2. Nguyễn Đức Nhiên – MSSV: 25210160
  3. Nguyễn Thế Trụ – MSSV: 25210226
  4. Phan Duy An – MSSV: 25210247
  5. Trịnh Chí Nguyên – MSSV: 25210150
  6. Ngô Quốc Chung – MSSV: 24730180

---

## Cấu trúc thư mục Đồ án

```
├── bao_cao/
│   ├── BAO_CAO_HOAN_CHINH.docx    # Báo cáo Word hoàn chỉnh (Chuẩn định dạng UIT)
│   ├── BAO_CAO_HOAN_CHINH.md      # Toàn văn báo cáo dạng Markdown
│   ├── loi_mo_dau.md              # Lời cảm ơn, Danh mục hình ảnh/bảng biểu, Mở đầu
│   ├── chuong1.md                 # Chương 1: Giới thiệu FPT Long Châu
│   ├── chuong2.md                 # Chương 2: Khảo sát, liệt kê và phân loại quy trình
│   ├── chuong3.md                 # Chương 3: Mô hình hóa quy trình hiện tại (AS-IS)
│   ├── chuong4.md                 # Chương 4: Phân tích quy trình nghiệp vụ (VA/NVA, Move-Hold-Overdo, Định lượng)
│   ├── chuong5.md                 # Chương 5: Đề xuất cải tiến quy trình nghiệp vụ (TO-BE)
│   └── chuong6_va_phu_luc.md      # Chương 6: Kết luận & Hướng phát triển + Phụ lục A, B, C, D
├── thuyet_trinh/
│   ├── index.html                 # Slide thuyết trình Web trực quan (51 Slides hoàn chỉnh)
│   ├── css/slide.css              # Giao diện & Hiệu ứng slide
│   └── js/presentation.js         # Bộ điều khiển chuyển slide, phím tắt & thuyết minh
├── Website/                       # Website mô phỏng quy trình nghiệp vụ
├── KICH_BAN_THUYET_TRINH.md       # Kịch bản thuyết trình chi tiết từng slide
└── README.md
```

## Tóm tắt nội dung học thuật chính

1. **Khảo sát & Kiến trúc Quy trình**: Mô hình Ngôi nhà Quy trình BPM với 10 quy trình phân bố theo 3 tầng (Quản lý – Cốt lõi – Hỗ trợ).
2. **Mô hình hóa AS-IS**: 6 quy trình nghiệp vụ tiêu biểu tuân thủ chuẩn quốc tế BPMN 2.0.
3. **Phân tích Định tính**:
   - Phân tích Giá trị gia tăng (VA / BVA / NVA).
   - Phân tích Lãng phí theo Lean 3 nhóm: **Move – Hold – Overdo**.
   - Phân tích Nguyên nhân gốc rễ: Biểu đồ Xương cá **Fishbone 6M** và **5 Whys**.
4. **Phân tích Định lượng**: Đo lường 3 chiều **Thời gian (Time)**, **Chất lượng (Quality)** và **Chi phí (Cost)** với công thức tính toán và số liệu thực nghiệm.
5. **Mô hình TO-BE & Tái thiết kế**: Ứng dụng Kiosk phân luồng, Smart POS định vị ô kệ, thuật toán FEFO tự động và WMS Real-time.
