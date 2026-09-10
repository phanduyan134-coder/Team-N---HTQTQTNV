# BÁO CÁO ĐỒ ÁN HỆ THỐNG QUẢN TRỊ QUY TRÌNH NGHIỆP VỤ (BPM)
## Đề tài: Khảo sát, Mô hình hóa và Tái thiết kế Quy trình Nghiệp vụ Chuỗi Nhà thuốc FPT Long Châu

- **Học phần**: Hệ thống Quản trị Quy trình Nghiệp vụ (BPM)
- **Mã lớp**: IE203.F33.CN2.CNTT – Trường Đại học Công nghệ Thông tin (UIT) – ĐHQG TP.HCM
- **Giảng viên hướng dẫn**: Thầy ThS. [Tên Giảng Viên]
- **Nhóm thực hiện**: Nhóm N
  1. Phan Duy An (Nhóm trưởng) – MSSV: 25210247
  2. Vũ Đình Hiếu – MSSV: 25210099
  3. Nguyễn Thế Trụ – MSSV: 25210160
  4. Hoàng Đức Chính – MSSV: 25210150
  5. Đào Quốc Huy – MSSV: 25210226
  6. Huỳnh Anh Kiệt – MSSV: 24730180

---

## 1. Cấu trúc Kho lưu trữ (Repository Structure)
```text
Team-N---HTQTQTNV/
│
├── bao_cao/                          # Báo cáo học thuật toàn diện (Word, PDF & Markdown)
│   ├── BAO_CAO_HOAN_CHINH.md         # Báo cáo chi tiết >150.000 ký tự (7 Chương + 5 Phụ lục)
│   ├── BAO_CAO_HOAN_CHINH.docx       # Báo cáo chuẩn mẫu httt.uit.edu.vn
│   ├── BAO_CAO_HOAN_CHINH.pdf        # Bản PDF xuất bản chính thức
│   └── ...                           # Từng chương phân rã chi tiết
│
├── thuyet_trinh/                     # Slide thuyết trình Web động công nghệ cao (59 Slides)
│   ├── index.html                    # Ứng dụng slide trình diễn trực quan
│   ├── css/slide.css                 # Giao diện Dark Neon cao cấp
│   ├── js/presentation.js            # Hệ thống điều khiển, timer, phím tắt & zoom BPMN
│   └── assets/bpmn/                  # Sơ đồ BPMN chuẩn OMG SVG độ phân giải cao
│
├── Website/                          # Website mô phỏng quy trình nghiệp vụ tương tác
│   ├── index.html                    # Single Page App trực quan hóa 6 quy trình
│   ├── js/app.js & data.js           # Bộ dữ liệu & logic mô phỏng AS-IS / TO-BE
│   └── assets/bpmn/                  # Kho lưu trữ BPMN SVG chuẩn hóa
│
├── KICH_BAN_THUYET_TRINH.md          # Kịch bản thuyết trình phân vai từng thành viên (15-20 phút)
├── Rubik Đánh giá Bài tập Đồ Án.xlsx # Tiêu chí chấm điểm môn học
├── Phân công Đồ Án.xlsx              # Bảng phân công nhiệm vụ & tỷ lệ đóng góp
└── README.md                         # Tài liệu giới thiệu tổng quan đề tài
```

---

## 2. Điểm nổi bật & Đáp ứng 100% Tiêu chí Rubik Đồ Án
1. **Kiến trúc Quy trình (Tiêu chí 1.0 - 10đ)**:
   - Khảo sát 10 quy trình phân bố đủ 3 tầng: 3 Quản lý, 4 Cốt lõi, 3 Hỗ trợ.
   - Mô hình Ngôi nhà Kiến trúc Quy trình (Process Architecture House) chuẩn Dumas et al. (2018).
   - Đầy đủ thông tin: Tác nhân (Actors), Mô tả bằng lời, Đối tượng khách hàng (Customer), Khả năng kết quả (Outcomes).
2. **Mô hình hóa BPMN 2.0 (Tiêu chí 2.0 - 10đ)**:
   - Mô hình hóa chuẩn OMG: 2 Quản lý, 2 Cốt lõi, 2 Hỗ trợ.
   - Quy trình Chuỗi cung ứng phức tạp với **8 Gateways** (> 7 cổng đạt điểm tối đa 1.0đ) và **5 Swimlanes**.
   - Quy trình Quản lý chất lượng: Đúng chuẩn **1 Start Event duy nhất**, 5 Gateways.
   - Quy trình Bán thuốc: **0% Deadlock**, luồng khách hàng khép kín từ xác nhận đến hoàn tất.
3. **Phương pháp thực hiện (Tiêu chí 3.0 - 10đ)**:
   - Dựa trên bằng chứng: Sơ đồ tổ chức, Kế hoạch làm việc (Work plan 3 tuần), Biểu mẫu workshop và kịch bản phỏng vấn.
   - Bộ **20 câu hỏi phỏng vấn**: 10 câu định tính (5 cấu trúc + 5 phi cấu trúc) & 10 câu định lượng (5 cấu trúc + 5 phi cấu trúc).
4. **Phân tích Quy trình (Tiêu chí 4.0 - 10đ)**:
   - Định tính: Bảng VA/BVA/NVA, Bảng lãng phí Lean dạng **Move - Hold - Overdo** (Liệt kê - Mô tả - Biện pháp khắc phục), Biểu đồ xương cá Fishbone 6M kèm **Bảng biện pháp khắc phục tương ứng**.
   - Định lượng: Tính toán Thời gian chu kỳ ($Cycle\ Time = 13.5$ phút), thời gian chờ ($7.5$ phút), thời gian xử lý ($6.0$ phút), chi phí nhân công và điểm hài lòng khách hàng ($NPS = 45$).
5. **Trình bày & Github (Tiêu chí 5.0 - 10đ)**:
   - Báo cáo chuẩn mẫu khóa luận Khoa HTTT UIT.
   - Slide thuyết trình trực quan, có đồng hồ bấm giờ, zoom BPMN toàn màn hình.
   - Lịch sử Git commit được duy trì đều đặn thể hiện tiến độ thực hiện đề tài.

---

## 3. Hướng dẫn chạy thử nghiệm
- **Xem Slide thuyết trình**: Mở trực tiếp file `thuyet_trinh/index.html` trên trình duyệt Chrome / Edge (Sử dụng phím mũi tên Trái/Phải để chuyển slide, Phím T để bật đồng hồ, Phím F để bật toàn màn hình).
- **Xem Website mô phỏng**: Mở trực tiếp file `Website/index.html` để trải nghiệm mô phỏng tương tác 6 quy trình.
