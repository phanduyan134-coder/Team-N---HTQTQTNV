# BÁO CÁO ĐỒ ÁN MÔN HỌC

## HỆ THỐNG QUẢN TRỊ QUY TRÌNH NGHIỆP VỤ (BPM)
**Mã lớp học phần:** `IE203.F33.CN2.CNTT`  
**Đơn vị đào tạo:** Khoa Khoa học và Kỹ thuật Thông tin – Trường Đại học Công nghệ Thông tin, ĐHQG-HCM

---

### TÊN ĐỀ TÀI:
# HỆ THỐNG QUẢN TRỊ QUY TRÌNH NGHIỆP VỤ TẠI CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU

**Giảng viên hướng dẫn:** ThS. Hà Lê Hoài Trung  
**Nhóm sinh viên thực hiện:** Nhóm 15  

| STT | Họ và tên sinh viên | Mã số sinh viên | Phân công phụ trách chính |
| :---: | :--- | :---: | :--- |
| 1 | **Huỳnh Công Hậu** | 25210099 | Trưởng nhóm; Lời mở đầu; Chương 1 (Giới thiệu doanh nghiệp) |
| 2 | **Nguyễn Đức Nhiên** | 25210160 | Chương 2 (Kiến trúc 10 quy trình); Chương 3 (Website mô phỏng) |
| 3 | **Nguyễn Thế Trụ** | 25210226 | Chương 4 (Mô hình hóa 6 quy trình nghiệp vụ AS-IS) |
| 4 | **Phan Duy An** | 25210247 | Chương 5 (Phân tích VA/BVA/NVA, Lean 7 lãng phí, 5 Whys) |
| 5 | **Trịnh Chí Nguyên** | 25210150 | Chương 6 (Đề xuất cải tiến TO-BE & Ứng dụng công nghệ) |
| 6 | **Ngô Quốc Chung** | 24730180 | Chương 7 (Kết luận, hạn chế, hướng phát triển); Phụ lục |

*Thành phố Hồ Chí Minh, Năm 2024*

---

# DANH MỤC CÁC CHỮ VIẾT TẮT

| Ký hiệu viết tắt | Nguyên nghĩa tiếng Anh | Nguyên nghĩa tiếng Việt |
| :--- | :--- | :--- |
| **AI** | Artificial Intelligence | Trí tuệ nhân tạo |
| **API** | Application Programming Interface | Giao diện lập trình ứng dụng |
| **AS-IS** | Current State Process Model | Mô hình quy trình hiện trạng |
| **BPM** | Business Process Management | Quản trị quy trình nghiệp vụ |
| **BPMN** | Business Process Model and Notation | Mô hình và Ký hiệu Quy trình Nghiệp vụ (chuẩn OMG) |
| **BPMS** | Business Process Management Suite | Bộ giải pháp/Hệ thống thực thi quản trị quy trình |
| **BPR** | Business Process Reengineering | Tái thiết kế quy trình nghiệp vụ |
| **BVA** | Business Value-Added | Hoạt động gia tăng giá trị kinh doanh (bắt buộc) |
| **CRM** | Customer Relationship Management | Quản trị quan hệ khách hàng |
| **EDI** | Electronic Data Interchange | Hệ thống trao đổi dữ liệu điện tử |
| **ERP** | Enterprise Resource Planning | Hệ thống hoạch định nguồn lực doanh nghiệp |
| **FEFO** | First Expired, First Out | Hết hạn trước - Xuất trước (chuẩn dược phẩm) |
| **FIFO** | First In, First Out | Nhập trước - Xuất trước |
| **GPP** | Good Pharmacy Practice | Thực hành tốt cơ sở bán lẻ thuốc (Bộ Y tế) |
| **KPI** | Key Performance Indicator | Chỉ số đánh giá hiệu quả công việc then chốt |
| **NPS** | Net Promoter Score | Chỉ số đo lường mức độ hài lòng khách hàng |
| **NVA** | Non-Value-Added | Hoạt động lãng phí không tạo ra giá trị |
| **POS** | Point of Sale | Điểm bán hàng lẻ / Phần mềm thanh toán tại quầy |
| **QA / QC** | Quality Assurance / Quality Control | Đảm bảo chất lượng / Kiểm soát chất lượng |
| **QR Code** | Quick Response Code | Mã phản hồi nhanh (mã vạch 2D ma trận) |
| **RFID** | Radio Frequency Identification | Công nghệ nhận dạng qua tần số vô tuyến |
| **RPA** | Robotic Process Automation | Tự động hóa quy trình bằng robot phần mềm |
| **SPA** | Single Page Application | Ứng dụng web một trang |
| **TO-BE** | Future State Process Model | Mô hình quy trình mục tiêu cải tiến |
| **VA** | Value-Added | Hoạt động gia tăng giá trị trực tiếp cho khách hàng |
| **WMS** | Warehouse Management System | Hệ thống quản lý kho hàng chuyên dụng |

---

# DANH MỤC CÁC HÌNH VẼ

| Số hiệu hình | Tên gọi hình vẽ / sơ đồ | Vị trí chương |
| :--- | :--- | :---: |
| **Hình 1.1** | Sơ đồ Cơ cấu Tổ chức Công ty Cổ phần Dược phẩm FPT Long Châu | Chương 1 |
| **Hình 3.1** | Sơ đồ Cấu trúc Thành phần (Component Tree) của Website Mô phỏng | Chương 3 |
| **Hình 4.1** | Sơ đồ BPMN 2.0 AS-IS – Quy trình Quản lý chuỗi cung ứng | Chương 4 |
| **Hình 4.2** | Sơ đồ BPMN 2.0 AS-IS – Quy trình Quản lý chất lượng | Chương 4 |
| **Hình 4.3** | Sơ đồ BPMN 2.0 AS-IS – Quy trình Bán thuốc tại nhà thuốc | Chương 4 |
| **Hình 4.4** | Sơ đồ BPMN 2.0 AS-IS – Quy trình Bán thuốc online | Chương 4 |
| **Hình 4.5** | Sơ đồ BPMN 2.0 AS-IS – Quy trình Quản lý kho | Chương 4 |
| **Hình 4.6** | Sơ đồ BPMN 2.0 AS-IS – Quy trình Tuyển dụng và đào tạo | Chương 4 |
| **Hình 6.1** | Sơ đồ BPMN 2.0 TO-BE – Quy trình Bán thuốc tại nhà thuốc | Chương 6 |
| **Hình 6.2** | Sơ đồ BPMN 2.0 TO-BE – Quy trình Quản lý kho | Chương 6 |

---

# DANH MỤC CÁC BẢNG BIỂU

| Số hiệu bảng | Tên gọi bảng biểu | Vị trí chương |
| :--- | :--- | :---: |
| **Bảng 1.1** | Tóm tắt thông tin cơ bản về Công ty Cổ phần Dược phẩm FPT Long Châu | Chương 1 |
| **Bảng 1.2** | Các cột mốc lịch sử quan trọng của FPT Long Châu | Chương 1 |
| **Bảng 1.3** | So sánh tương quan giữa FPT Long Châu và các chuỗi đối thủ chính | Chương 1 |
| **Bảng 2.1** | Bảng Kiến trúc Quy trình Nghiệp vụ (Process Architecture) tổng thể | Chương 2 |
| **Bảng 2.2** | Danh mục 10 quy trình nghiệp vụ chính của FPT Long Châu | Chương 2 |
| **Bảng 2.3** | Đánh giá tiêu chí lựa chọn quy trình phân tích chuyên sâu | Chương 2 |
| **Bảng 3.1** | Các công nghệ và công cụ sử dụng trong xây dựng website mô phỏng | Chương 3 |
| **Bảng 3.2** | Đánh giá trạng thái hoàn thành các chức năng của Website | Chương 3 |
| **Bảng 4.1** | Tóm tắt thông tin quy trình Quản lý chuỗi cung ứng (AS-IS) | Chương 4 |
| **Bảng 4.2** | Tóm tắt thông tin quy trình Quản lý chất lượng (AS-IS) | Chương 4 |
| **Bảng 4.3** | Tóm tắt thông tin quy trình Bán thuốc tại nhà thuốc (AS-IS) | Chương 4 |
| **Bảng 4.4** | Tóm tắt thông tin quy trình Bán thuốc online (AS-IS) | Chương 4 |
| **Bảng 4.5** | Tóm tắt thông tin quy trình Quản lý kho (AS-IS) | Chương 4 |
| **Bảng 4.6** | Tóm tắt thông tin quy trình Tuyển dụng và đào tạo (AS-IS) | Chương 4 |
| **Bảng 5.1** | Ma trận RACI quy trình Bán thuốc tại nhà thuốc | Chương 5 |
| **Bảng 5.2** | Phân loại hoạt động VA/BVA/NVA quy trình Bán thuốc tại nhà thuốc | Chương 5 |
| **Bảng 5.3** | Bảng tổng hợp lãng phí Lean trong quy trình Bán thuốc tại nhà thuốc | Chương 5 |
| **Bảng 5.4** | Ma trận RACI quy trình Quản lý kho | Chương 5 |
| **Bảng 5.5** | Phân loại hoạt động VA/BVA/NVA quy trình Quản lý kho | Chương 5 |
| **Bảng 5.6** | Bảng tổng hợp các vấn đề và điểm nghẽn của 2 quy trình then chốt | Chương 5 |
| **Bảng 6.1** | So sánh các bước thực hiện AS-IS và TO-BE quy trình Bán thuốc tại nhà thuốc | Chương 6 |
| **Bảng 6.2** | Chỉ số đo lường hiệu quả dự kiến (KPI) quy trình Bán thuốc tại nhà thuốc | Chương 6 |
| **Bảng 6.3** | So sánh quá trình nhập/xuất kho AS-IS và TO-BE | Chương 6 |
| **Bảng 6.4** | Chỉ số đo lường hiệu quả dự kiến (KPI) quy trình Quản lý kho | Chương 6 |
| **Bảng 6.5** | Bảng đối chiếu tổng hợp toàn diện AS-IS và TO-BE cho 2 quy trình then chốt | Chương 6 |
| **Bảng 6.6** | Ma trận đánh giá rủi ro và giải pháp giảm thiểu | Chương 6 |

---

# LỜI MỞ ĐẦU

## Lý do chọn đề tài

Trong bối cảnh ngành bán lẻ dược phẩm ngày càng phát triển, các doanh nghiệp phải quản lý đồng thời nhiều hoạt động như nhập hàng, quản lý kho, bán thuốc tại nhà thuốc, bán hàng trực tuyến, giao hàng và chăm sóc khách hàng. Nếu các quy trình này chưa được chuẩn hóa và phối hợp hiệu quả, doanh nghiệp có thể gặp phải nhiều vấn đề như sai lệch tồn kho, xử lý đơn hàng chậm, hàng hóa cận hạn hoặc khó kiểm soát chất lượng.

FPT Long Châu là chuỗi bán lẻ dược phẩm thuộc Công ty Cổ phần Dược phẩm FPT Long Châu – đơn vị thành viên trực thuộc Công ty Cổ phần Bán lẻ Kỹ thuật số FPT (FPT Retail, mã chứng khoán FRT thuộc Tập đoàn FPT). Với mạng lưới rộng khắp hơn 1.800 nhà thuốc trên toàn quốc (theo Báo cáo thường niên FPT Retail 2023 - 2024) cùng nhiều kênh bán hàng đa dạng, việc chuẩn hóa, phân tích và mô hình hóa các quy trình nghiệp vụ có ý nghĩa quan trọng trong việc nhận diện điểm nghẽn, kiểm soát thất thoát và nâng cao trải nghiệm khách hàng.

Xuất phát từ thực tế trên, nhóm lựa chọn đề tài **"Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu"** nhằm vận dụng kiến thức của môn Hệ thống quản trị quy trình nghiệp vụ vào một trường hợp thực tế. Đề tài tập trung nghiên cứu kiến trúc 10 quy trình nghiệp vụ tổng quan, mô hình hóa chi tiết 6 quy trình tiêu biểu bằng BPMN 2.0 trên website mô phỏng, và phân tích chuyên sâu đề xuất cải tiến TO-BE cho 2 quy trình then chốt (Bán thuốc tại nhà thuốc và Quản lý kho).

## Mục tiêu nghiên cứu

Đề tài được thực hiện nhằm đạt các mục tiêu sau:

1. Tìm hiểu tổng quan về hoạt động kinh doanh và cơ cấu tổ chức của FPT Long Châu.
2. Liệt kê và phân loại các quy trình nghiệp vụ theo ba nhóm: Management Process, Core Process và Support Process.
3. Khảo sát và mô tả tổng quan 10 quy trình nghiệp vụ chính của doanh nghiệp.
4. Mô hình hóa 6 quy trình tiêu biểu bằng sơ đồ BPMN 2.0 AS-IS.
5. Phân tích chuyên sâu 2 quy trình then chốt: bán thuốc tại nhà thuốc và quản lý kho.
6. Xác định các hoạt động tạo giá trị (VA), giá trị kinh doanh bắt buộc (BVA), hoạt động không tạo giá trị (NVA), lãng phí Lean và điểm nghẽn trong quy trình.
7. Đề xuất các giải pháp cải tiến theo mô hình BPMN 2.0 TO-BE cho 2 quy trình then chốt.
8. Xây dựng website mô phỏng và hiển thị trực quan các quy trình nghiệp vụ đã nghiên cứu.

## Đối tượng và phạm vi nghiên cứu

Đối tượng nghiên cứu của đề tài là các quy trình nghiệp vụ trong hoạt động quản lý và vận hành của FPT Long Châu, tập trung vào chuỗi cung ứng, quản lý kho, bán thuốc và các quy trình hỗ trợ.

Phạm vi nghiên cứu bao gồm:

- **Phạm vi nội dung:** Khảo sát và phân loại kiến trúc 10 quy trình nghiệp vụ; mô hình hóa chi tiết 6 quy trình bằng BPMN 2.0 AS-IS; phân tích chuyên sâu và đề xuất giải pháp cải tiến TO-BE cho 2 quy trình then chốt là bán thuốc tại nhà thuốc và quản lý kho.
- **Phạm vi doanh nghiệp:** Hoạt động của hệ thống FPT Long Châu và các bộ phận có liên quan như cung ứng, kho, nhà thuốc, nhân sự và công nghệ thông tin.
- **Phạm vi dữ liệu:** Sử dụng các tài liệu công khai, thông tin trên website, Báo cáo thường niên FPT Retail 2023 - 2024, tài liệu chuyên ngành, quan sát thực tế và các giả định phương pháp luận do nhóm xây dựng. Do không tiếp cận được dữ liệu nội bộ bảo mật của doanh nghiệp, các số liệu thời gian, chi phí lãng phí trong phân tích định lượng được nhóm xây dựng dựa trên phương pháp mô phỏng học thuật (academic simulation) phục vụ mục đích nghiên cứu học tập.
- **Phạm vi sản phẩm:** Website có chức năng hiển thị thông tin, sơ đồ và mô phỏng các bước xử lý của quy trình nghiệp vụ; không thay thế cho hệ thống vận hành thực tế của doanh nghiệp.

## Phương pháp nghiên cứu

Đề tài sử dụng kết hợp các phương pháp nghiên cứu sau:

1. **Thu thập tài liệu:** Tìm hiểu thông tin từ website chính thức của FPT Long Châu, các bài viết, báo cáo, tài liệu công khai và tài liệu chuyên ngành.
2. **Quan sát:** Phân tích trình tự hoạt động trong các quy trình bán hàng, nhập hàng, quản lý kho và giao hàng dựa trên thông tin thực tế có thể quan sát được.
3. **Phân tích và tổng hợp:** Tổng hợp dữ liệu, xác định tác nhân, đầu vào, đầu ra, hoạt động chính và mối quan hệ giữa các bộ phận.
4. **Mô hình hóa BPMN:** Sử dụng ký hiệu BPMN để biểu diễn quy trình hiện tại AS-IS và quy trình cải tiến TO-BE.
5. **Phân tích quy trình:** Áp dụng các phương pháp VA/BVA/NVA, phân tích lãng phí, phân tích nguyên nhân gốc rễ, phân tích thời gian, chi phí và chất lượng.
6. **Thiết kế và xây dựng website:** Sử dụng các công cụ và công nghệ phù hợp để tạo giao diện mô phỏng, giúp trình bày quy trình một cách trực quan và dễ hiểu.

## Ý nghĩa thực tiễn của đề tài

Về mặt thực tiễn, đề tài giúp minh họa cách tiếp cận quản trị quy trình nghiệp vụ trong lĩnh vực bán lẻ dược phẩm. Thông qua việc mô hình hóa và phân tích, nhóm có thể nhận diện những vấn đề thường gặp như nhập liệu thủ công, cập nhật tồn kho chậm, kiểm kê mất nhiều thời gian và khó kiểm soát hạn sử dụng.

Các đề xuất cải tiến như sử dụng mã vạch/QR, áp dụng nguyên tắc FEFO, đồng bộ dữ liệu kho, cập nhật tồn kho theo thời gian thực và xây dựng dashboard quản lý có thể góp phần nâng cao hiệu quả vận hành. Bên cạnh đó, website mô phỏng giúp người dùng dễ dàng tiếp cận, theo dõi và hiểu được mối liên hệ giữa các bước trong quy trình.

Do giới hạn về dữ liệu, các kết quả trong đề tài chủ yếu mang tính mô phỏng và học thuật, nhưng có thể làm cơ sở tham khảo cho việc nghiên cứu, thiết kế hoặc triển khai hệ thống quản trị quy trình trong thực tế.

## Bố cục báo cáo

Ngoài phần Lời mở đầu, Danh mục bảng, Danh mục hình ảnh, Tài liệu tham khảo và Phụ lục, báo cáo gồm 7 chương:

- **Chương 1:** Giới thiệu về FPT Long Châu – trình bày tổng quan doanh nghiệp, lịch sử hình thành, lĩnh vực hoạt động, cơ cấu tổ chức và hoạt động kinh doanh.
- **Chương 2:** Khảo sát, liệt kê và phân loại quy trình nghiệp vụ – trình bày cơ sở phân loại, kiến trúc quy trình, danh sách và mô tả tổng quan 10 quy trình.
- **Chương 3:** Xây dựng website mô phỏng quy trình nghiệp vụ – giới thiệu mục tiêu, công nghệ, giao diện và các chức năng của website.
- **Chương 4:** Mô hình hóa quy trình nghiệp vụ hiện tại AS-IS – trình bày chi tiết 6 quy trình và các sơ đồ BPMN tương ứng.
- **Chương 5:** Phân tích quy trình nghiệp vụ – phân tích chuyên sâu quy trình bán thuốc tại nhà thuốc và quy trình quản lý kho.
- **Chương 6:** Đề xuất cải tiến quy trình nghiệp vụ – trình bày các vấn đề phát hiện, giải pháp cải tiến và mô hình BPMN TO-BE.
- **Chương 7:** Kết luận và hướng phát triển – tổng hợp kết quả đạt được, hạn chế và định hướng phát triển của đề tài.
