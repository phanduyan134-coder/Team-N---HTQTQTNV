# CHƯƠNG 1: GIỚI THIỆU VỀ CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU

Chương này trình bày bối cảnh doanh nghiệp và cơ cấu tổ chức của Công ty Cổ phần Dược phẩm FPT Long Châu – đối tượng nghiên cứu của đồ án. Việc làm rõ mô hình vận hành, mạng lưới bán lẻ và sự phân công giữa các phòng ban là tiền đề then chốt để xác định các tác nhân (Actors) và xây dựng kiến trúc quy trình nghiệp vụ ở các chương tiếp theo.

## 1.1. Tổng quan về công ty

Công ty Cổ phần Dược phẩm FPT Long Châu (chuỗi Nhà thuốc FPT Long Châu) là doanh nghiệp bán lẻ dược phẩm hàng đầu tại Việt Nam, trực thuộc Công ty Cổ phần Bán lẻ Kỹ thuật số FPT (FPT Retail - mã chứng khoán FRT, Tập đoàn FPT). Chuỗi được thành lập nhằm cung cấp các sản phẩm y tế chính hãng, chất lượng cao với mức giá cạnh tranh và dịch vụ tư vấn tận tâm.

Tính đến năm 2024, FPT Long Châu sở hữu mạng lưới hơn 1.800 nhà thuốc phân bố khắp 63 tỉnh thành, phục vụ hàng triệu lượt khách hàng mỗi tháng. Danh mục kinh doanh bao gồm 4 nhóm chủ lực: thuốc kê đơn (đặc biệt là thuốc đặc trị), thuốc không kê đơn (OTC), thực phẩm chức năng, dược mỹ phẩm và thiết bị y tế gia đình. Toàn bộ hệ thống vận hành tuân thủ nghiêm ngặt chuẩn Thực hành tốt nhà thuốc (GPP) do Bộ Y tế ban hành.

*Bảng 1.1: Tóm tắt thông tin cơ bản về Công ty Cổ phần Dược phẩm FPT Long Châu*

| Tiêu chí | Thông tin chi tiết |
| :--- | :--- |
| **Tên chính thức** | Công ty Cổ phần Dược phẩm FPT Long Châu |
| **Tên thương hiệu** | Nhà thuốc FPT Long Châu |
| **Công ty mẹ** | Công ty Cổ phần Bán lẻ Kỹ thuật số FPT (FPT Retail - FRT) |
| **Lĩnh vực kinh doanh** | Bán lẻ dược phẩm, thực phẩm bảo vệ sức khỏe, thiết bị y tế |
| **Quy mô (2024)** | Hơn 1.800 nhà thuốc tại 63 tỉnh/thành phố *(Nguồn: Báo cáo thường niên FRT)* |
| **Tiêu chuẩn chất lượng** | 100% cơ sở đạt chuẩn GPP (Bộ Y tế), tổng kho đạt chuẩn GSP/GDP |
| **Kênh bán hàng** | Bán lẻ trực tiếp tại quầy và Thương mại điện tử (Website/App Long Châu) |

## 1.2. Lịch sử hình thành và phát triển

Hành trình phát triển của FPT Long Châu trải qua 3 giai đoạn mang tính bước ngoặt:

- **1985 – 2016 (Khởi nguồn uy tín):** Thành lập nhà thuốc Long Châu đầu tiên tại TP.HCM, nhanh chóng tạo dựng vị thế vững chắc nhờ danh mục thuốc kê đơn đầy đủ và giá bán sỉ hợp lý.
- **2017 (Tái cấu trúc & Số hóa):** FPT Retail mua lại chuỗi Long Châu, bắt đầu số hóa hạ tầng quản trị, áp dụng hệ thống ERP và chuẩn hóa quy trình chuỗi bán lẻ hiện đại.
- **2018 – 2024 (Bùng nổ quy mô toàn quốc):** Chuỗi mở rộng thần tốc từ vài chục cửa hàng lên mốc 1.000 nhà thuốc (năm 2022) và chính thức vượt 1.800 nhà thuốc (năm 2024), trở thành chuỗi dược phẩm có thị phần số 1 tại Việt Nam.

*Bảng 1.2: Các cột mốc lịch sử quan trọng của FPT Long Châu*

| Năm | Cột mốc bước ngoặt | Quy mô điểm bán |
| :---: | :--- | :---: |
| **1985** | Thành lập nhà thuốc Long Châu đầu tiên tại TP.HCM, định vị chuyên thuốc kê đơn giá tốt. | 1 |
| **2017** | FPT Retail mua lại chuỗi, tái cấu trúc toàn diện và triển khai hạ tầng ERP quản trị tập trung. | ~4 |
| **2022** | Chạm mốc 1.000 cửa hàng, hoàn thành phủ sóng 63/63 tỉnh thành, bắt đầu ghi nhận lợi nhuận dương. | ~1.000 |
| **2024** | Đạt quy mô hơn 1.800 nhà thuốc, dẫn đầu thị trường về tốc độ mở rộng và doanh thu chuỗi dược. | > 1.800 |

## 1.3. Lĩnh vực hoạt động

Hoạt động kinh doanh của FPT Long Châu tập trung vào 2 kênh phân phối chính:

1. **Bán lẻ tại nhà thuốc (Offline):** Phục vụ trực tiếp người bệnh tại hơn 1.800 quầy thuốc với đội ngũ dược sĩ tư vấn đạt chuẩn GPP, cung cấp đầy đủ các loại thuốc đặc trị bệnh mãn tính, thuốc kê đơn bệnh viện và sản phẩm chăm sóc sức khỏe.
2. **Thương mại điện tử dược phẩm (Online - O2O):** Khai thác website longchau.com.vn và ứng dụng di động Long Châu, hỗ trợ đặt hàng trực tuyến, tư vấn dược sĩ từ xa và điều phối giao hàng nhanh từ nhà thuốc gần nhất trong 30 – 60 phút.

Để vận hành nhịp nhàng hai kênh trên, doanh nghiệp phát triển mạng lưới trung tâm phân phối kho bãi tổng đạt chuẩn Thực hành tốt bảo quản thuốc (GSP) và logistics lạnh (Cold Chain) phục vụ các sản phẩm vắc xin, insulin.

## 1.4. Cơ cấu tổ chức

FPT Long Châu áp dụng mô hình tổ chức trực tuyến – chức năng kết hợp quản lý chuỗi, phân định rành mạch giữa các khối chuyên môn tại trụ sở và lực lượng vận hành trực tiếp tại mạng lưới nhà thuốc:

![Hình 1.1: Sơ đồ Cơ cấu Tổ chức Công ty Cổ phần Dược phẩm FPT Long Châu](hinh_1_1_co_cau_to_chuc.png)

*Hình 1.1: Sơ đồ Cơ cấu Tổ chức Công ty Cổ phần Dược phẩm FPT Long Châu*

- **Ban Lãnh đạo cấp cao:** Hội đồng Quản trị & Ban Tổng Giám đốc FPT Retail chỉ đạo chiến lược vĩ mô; Ban Giám đốc chuỗi Long Châu trực tiếp điều hành toàn diện.
- **Các Khối phòng ban chức năng tại Trụ sở:**
  - *Khối Mua hàng (Purchasing):* Hoạch định nhu cầu, đàm phán hợp đồng với các hãng dược và nhà cung cấp.
  - *Khối Đảm bảo chất lượng (QA/QC):* Giám sát tiêu chuẩn GPP/GDP/GSP, kiểm định hồ sơ COA và cách ly thuốc lỗi.
  - *Trung tâm Chuỗi cung ứng (Supply Chain):* Điều phối tổng kho (Bắc – Trung – Nam) và đội ngũ vận tải giao hàng.
  - *Khối Công nghệ Thông tin (IT):* Phát triển, bảo trì hệ thống ERP, POS, website thương mại điện tử và ứng dụng di động.
  - *Khối Nhân sự & Đào tạo (HR):* Tuyển dụng, tổ chức sát hạch chuyên môn dược và đào tạo hội nhập cho nhân viên mới.
  - *Khối Tài chính – Kế toán:* Kiểm soát ngân sách, dòng tiền thanh toán nhà cung cấp và kế toán bán hàng.
- **Khối Vận hành Điểm bán (Store Operations):** Giám đốc vùng / khu vực quản lý mạng lưới 1.800+ cửa hàng. Tại mỗi nhà thuốc gồm: Dược sĩ chuyên môn phụ trách pháp lý, Cửa hàng trưởng, các Dược sĩ tư vấn bán hàng và nhân viên kho quầy.

## 1.5. Hoạt động kinh doanh

FPT Long Châu hiện là động lực tăng trưởng doanh thu lớn nhất của tập đoàn FPT Retail. Năm 2023, chuỗi đạt doanh thu 15.888 tỷ đồng (tăng trưởng 66% so với cùng kỳ), đóng góp hơn 50% tổng doanh thu hợp nhất của FRT. Doanh thu trung bình đạt khoảng 1,1 – 1,2 tỷ đồng/nhà thuốc/tháng – mức hiệu suất bán hàng cao nhất trong ngành bán lẻ dược phẩm Việt Nam.

Lợi thế cạnh tranh cốt lõi của Long Châu xuất phát từ: danh mục thuốc đặc trị phong phú, giá bán hợp lý, năng lực tư vấn chuyên sâu của đội ngũ dược sĩ và đặc biệt là hệ thống công nghệ ERP/POS quản lý tồn kho theo thời gian thực (Real-time inventory).

*Bảng 1.3: So sánh tương quan giữa FPT Long Châu và các chuỗi đối thủ chính (2024)*

| Tiêu chí | FPT Long Châu | Pharmacity | An Khang |
| :--- | :--- | :--- | :--- |
| **Quy mô điểm bán** | > 1.800 nhà thuốc | ~1.000 nhà thuốc | ~500 nhà thuốc |
| **Công ty chủ quản** | FPT Retail (Tập đoàn FPT) | SK Group (Hàn Quốc) | MWG (Thế Giới Di Động) |
| **Thế mạnh sản phẩm** | Thuốc kê đơn, thuốc đặc trị bệnh mãn tính | Sản phẩm chăm sóc cá nhân (CVS), TPCN | Thuốc OTC và TPCN |
| **Chính sách giá** | Giá cạnh tranh, ổn định | Trung bình – cao | Cạnh tranh |
| **Nền tảng công nghệ** | ERP chuyên sâu, POS real-time, App O2O | App thành viên hiện đại | Hệ sinh thái bán lẻ MWG |

## 1.6. Định hướng chiến lược

Giai đoạn 2025 – 2026, FPT Long Châu đặt mục tiêu nâng quy mô mạng lưới lên **2.500 nhà thuốc**, tiếp tục mở rộng độ phủ tới các khu vực huyện xã và vùng nông thôn. Về công nghệ, công ty tập trung đẩy mạnh mô hình Omnichannel, ứng dụng Trí tuệ nhân tạo (AI) trong dự báo nhu cầu thuốc và nâng cấp hệ thống quản lý kho thông minh (Smart WMS).

Sự bùng nổ về quy mô và số lượng giao dịch đòi hỏi Long Châu phải chuẩn hóa toàn diện các dòng chảy công việc, loại bỏ các khâu thủ công rời rạc. Đây chính là lý do thực tiễn cấp bách để nhóm tiến hành khảo sát và phân tích hệ thống quy trình nghiệp vụ của doanh nghiệp tại Chương 2.
