# KỊCH BẢN THUYẾT TRÌNH ĐỒ ÁN HTQTQTNV – FPT LONG CHÂU

**Thông tin chung về buổi báo cáo:**
- **Đề tài:** Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu
- **Môn học:** Hệ thống Quản trị Quy trình Nghiệp vụ (BPM) – Lớp: `IE203.F33.CN2.CNTT`
- **Giảng viên hướng dẫn:** ThS. Hà Lê Hoài Trung (Khoa KH&KT Thông tin – UIT)
- **Tổng số Slide:** **51 Slide** (Khớp 1:1 tuyệt đối với file trình chiếu `thuyet_trinh/index.html` và Báo cáo 6 Chương)
- **Thời lượng quy định:** 20 phút (trung bình ~20 - 24 giây/slide, dành 2-3 phút cuối kết luận & phản biện Q&A).
- **Phân công trình bày:** Linh hoạt theo nhóm 6 thành viên, chia theo từng cụm chương mục.

---

## 👥 BẢNG PHÂN CHIA NỘI DUNG THUYẾT TRÌNH (6 PHẦN)

| Phần | Nội dung phụ trách | Slide | Thời lượng ước tính |
| :---: | :--- | :---: | :---: |
| **Phần 1** | **Mở đầu & Chương 1:** Giới thiệu công ty CP Dược phẩm FPT Long Châu | **Slide 1 – 14** (14 slide) | ~3.5 phút |
| **Phần 2** | **Chương 2:** Khảo sát, Liệt kê và Phân loại 10 Quy trình Nghiệp vụ | **Slide 15 – 22** (8 slide) | ~3.0 phút |
| **Phần 3** | **Chương 3:** Mô hình hóa 6 Quy trình Nghiệp vụ Hiện tại (AS-IS) | **Slide 23 – 29** (7 slide) | ~3.5 phút |
| **Phần 4** | **Chương 4:** Phân tích Chuyên sâu 2 Quy trình Trọng điểm (Bán thuốc & Kho) | **Slide 30 – 38** (9 slide) | ~3.5 phút |
| **Phần 5** | **Chương 5:** Đề xuất Cải tiến Quy trình Nghiệp vụ (TO-BE & Công nghệ) | **Slide 39 – 46** (8 slide) | ~3.5 phút |
| **Phần 6** | **Chương 6:** Kết luận, Hạn chế, Hướng phát triển & Phiên hỏi đáp Q&A | **Slide 47 – 51** (5 slide) | ~3.0 phút |

---

## 🎤 CHI TIẾT LỜI THOẠI THUYẾT TRÌNH THEO TỪNG SLIDE (51 SLIDES)


---

### 🎙️ PHẦN 1: MỞ ĐẦU & CHƯƠNG 1 – GIỚI THIỆU FPT LONG CHÂU (Slide 1 – 14)
*Chào đầu trang trọng, nêu bật tính cấp thiết của đề tài và bức tranh toàn cảnh về doanh nghiệp FPT Long Châu.*

- **Slide 1: Trang bìa đồ án**
  > *"Kính thưa Thầy Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên! Hôm nay, nhóm chúng em xin được đại diện báo cáo đồ án môn học Hệ thống Quản trị Quy trình Nghiệp vụ với đề tài: **'Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu'**. Nhóm chúng em gồm 6 thành viên, xin phép được mở đầu buổi thuyết trình."*

- **Slide 2: Lý do chọn đề tài**
  > *"Về lý do chọn đề tài: Bán lẻ dược phẩm là ngành kinh doanh có tốc độ tăng trưởng bùng nổ tại Việt Nam. FPT Long Châu khi mở rộng mạng lưới thần tốc trên toàn quốc phải đối mặt với bài toán điều phối vận hành cực kỳ phức tạp. Nếu các quy trình không được chuẩn hóa và số hóa, doanh nghiệp sẽ gặp rủi ro lớn về sai lệch kho, chậm trễ đơn hàng và nguy cơ cận hạn thuốc."*

- **Slide 3: Mục tiêu nghiên cứu**
  > *"Trên màn hình là 7 mục tiêu nghiên cứu cụ thể của đồ án: Đi từ khảo sát cơ cấu doanh nghiệp; phân loại 10 quy trình theo 3 tầng BPM; số hóa 6 quy trình AS-IS chuẩn BPMN 2.0; phân tích định lượng chuỗi giá trị VA/NVA và truy vết nguyên nhân gốc rễ bằng 5 Whys & 6M; từ đó tái thiết kế mô hình BPMN 2.0 TO-BE tối ưu và xây dựng lộ trình thực thi khả thi."*

- **Slide 4: Đối tượng & Phạm vi nghiên cứu**
  > *"Về đối tượng và phạm vi: Đề tài tập trung vào hệ thống quy trình nghiệp vụ của FPT Long Châu trên 4 khía cạnh: Dòng luân chuyển vật phẩm y tế, Dòng thông tin & chứng từ, Các bên tác nhân liên quan, và Hệ thống công nghệ hỗ trợ. Đóng góp trọng tâm là bộ giải pháp mô hình hóa BPMN 2.0 AS-IS, TO-BE và lộ trình công nghệ khả thi với thời gian thu hồi vốn dưới 2 năm."*

- **Slide 5: Phương pháp nghiên cứu**
  > *"Để thực hiện đề tài một cách khoa học và toàn diện, nhóm kết hợp 6 phương pháp nghiên cứu chính: (1) Thu thập dữ liệu thứ cấp từ báo cáo FRT và tiêu chuẩn Bộ Y tế; (2) Quan sát thực tế tại nhà thuốc; (3) Mô hình hóa chuẩn OMG BPMN 2.0; (4) Phân tích chuỗi giá trị VA/NVA; (5) Phân tích Lean Six Sigma, 5 Whys & 6M Ishikawa; và (6) Tái thiết kế quy trình TO-BE cùng lộ trình triển khai khả thi."*

- **Slide 6: Ý nghĩa thực tiễn của đề tài**
  > *"Về ý nghĩa thực tiễn, đề tài đóng góp 3 giá trị cốt lõi: Thứ nhất, minh họa phương pháp luận BPM chuẩn mực và nhận diện các thao tác lãng phí NVA; Thứ hai, đề xuất các giải pháp số hóa mang tính thực tế cao như Barcode/QR, chuẩn FEFO và tích hợp WMS-ERP Real-time; Thứ ba, xây dựng website mô phỏng trực quan đóng vai trò là tài liệu tham khảo học thuật giá trị."*

- **Slide 7: Bố cục báo cáo (6 Chương)**
  > *"Báo cáo hoàn chỉnh của nhóm được kết cấu chuẩn mực gồm 6 chương: Chương 1 Giới thiệu tổng quan Công ty CP Dược phẩm FPT Long Châu; Chương 2 Khảo sát, Liệt kê và Phân loại Quy trình Nghiệp vụ; Chương 3 Mô hình hóa Quy trình Nghiệp vụ Hiện tại (AS-IS) với 6 quy trình; Chương 4 Phân tích Quy trình Nghiệp vụ chuyên sâu; Chương 5 Đề xuất Cải tiến Quy trình Nghiệp vụ (TO-BE); và Chương 6 Kết luận và Hướng phát triển."*

- **Slide 8: CHƯƠNG 1: GIỚI THIỆU VỀ CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU**
  > *"Sau đây, em xin phép đi vào Chương 1: Giới thiệu về Công ty Cổ phần Dược phẩm FPT Long Châu."*

- **Slide 9: 1.1. Tổng quan về công ty**
  > *"Về tổng quan: Chuỗi nhà thuốc do Công ty Cổ phần Dược phẩm FPT Long Châu vận hành, là công ty con của FPT Retail (mã FRT, Tập đoàn FPT). Đến năm 2024, Long Châu dẫn đầu toàn quốc với hơn 1.800 nhà thuốc tại 63 tỉnh thành, 100% đạt chuẩn GPP. Doanh nghiệp hướng tới tầm nhìn chuỗi bán lẻ y tế số 1 Việt Nam, hoạt động với sứ mệnh chăm sóc sức khỏe cộng đồng bằng sự tận tâm, chuyên nghiệp và 4 giá trị cốt lõi vững chắc."*

- **Slide 10: 1.2. Lịch sử hình thành & phát triển**
  > *"Về lịch sử: Khởi đầu từ một nhà thuốc gia đình uy tín tại Quận 5 vào năm 1985, bước ngoặt lớn diễn ra vào năm 2017 khi FPT Retail mua lại và tái cấu trúc chuỗi. Từ vài chục cửa hàng ban đầu, Long Châu đã bứt phá ngoạn mục đạt mốc 1.000 cửa hàng năm 2022 và vượt hơn 1.800 cửa hàng vào năm 2024."*

- **Slide 11: 1.3. Lĩnh vực hoạt động**
  > *"Về lĩnh vực hoạt động: Long Châu vận hành dựa trên 4 trụ cột chính: Thứ nhất là bán lẻ dược phẩm với lợi thế số 1 về thuốc kê đơn và thuốc đặc trị; Thứ hai là đa dạng sản phẩm sức khỏe, thực phẩm chức năng và thiết bị y tế chính hãng; Thứ ba là mô hình đa kênh Omnichannel kết nối 1.800 nhà thuốc với Mobile App; và thứ tư là chuỗi cung ứng logistics hiện đại đạt 100% chuẩn mực GPP của Bộ Y tế."*

- **Slide 12: 1.4. Cơ cấu tổ chức bộ máy**
  > *"Cơ cấu tổ chức của Long Châu được thiết lập theo mô hình trực tuyến - chức năng hiện đại: Đứng đầu là Hội đồng quản trị và Tổng Giám đốc FPT Retail, điều hành trực tiếp Giám đốc chuỗi Long Châu và các khối Mua hàng, QA, HR, IT, Kho vận cho đến từng nhà thuốc cơ sở."*

- **Slide 13: 1.5. Hoạt động kinh doanh & Vị thế cạnh tranh**
  > *"Trên thị trường chuỗi dược, Long Châu giữ vị thế số 1 về doanh thu và mạng lưới cửa hàng, vượt trội so với Pharmacity hay An Khang nhờ thế mạnh công nghệ từ tập đoàn FPT, danh mục thuốc kê đơn dồi dào và chính sách giá cạnh tranh."*

- **Slide 14: 1.6. Định hướng chiến lược phát triển**
  > *"Chiến lược tương lai của Long Châu là hướng tới cột mốc 2.500 nhà thuốc, mở rộng chuỗi trung tâm tiêm chủng vắc xin và đầu tư mạnh mẽ vào trí tuệ nhân tạo (AI) cùng hệ thống quản trị kho tự động. Tiếp theo, nhóm xin kính mời Thầy và các bạn theo dõi nội dung Chương 2 và Chương 3."*


---

### 🎙️ PHẦN 2: CHƯƠNG 2 – KHẢO SÁT, LIỆT KÊ & PHÂN LOẠI QUY TRÌNH (Slide 15 – 22)
*Trình bày chuẩn mực BPM, mô hình Ngôi nhà quy trình 3 tầng và ma trận định lượng chọn quy trình trọng điểm.*

- **Slide 15: CHƯƠNG 2: KHẢO SÁT, LIỆT KÊ VÀ PHÂN LOẠI QUY TRÌNH NGHIỆP VỤ**
  > *"Kính thưa Thầy và các bạn, đại diện nhóm xin phép tiếp nối phần trình bày với Chương 2: Khảo sát, Liệt kê và Phân loại Quy trình Nghiệp vụ."*

- **Slide 16: 2.1. Khái quát về Quản trị Quy trình Nghiệp vụ (BPM)**
  > *"Đồ án tiếp cận theo chuẩn BPM hiện đại, bám sát vòng đời BPM 6 giai đoạn: Nhận diện, Khám phá, Phân tích, Tái thiết kế, Triển khai và Giám sát vận hành trong môi trường bán lẻ dược phẩm."*

- **Slide 17: 2.2. Phương pháp thực hiện và nguồn thu thập dữ liệu**
  > *"Để đáp ứng trọn vẹn tiêu chí Phương pháp thực hiện trong Rubric của Thầy, nhóm triển khai đồng thời 2 trụ cột phương pháp luận: Thứ nhất là Phương pháp dựa trên bằng chứng (Evidence-based discovery) với 5 nguồn dữ liệu: Tài liệu quy trình SOP sẵn có chuẩn GPP/GSP, Sơ đồ cơ cấu tổ chức xác định Process Owner và Hand-offs, Kế hoạch làm việc Work Plan 6 tuần, Sổ tay thuật ngữ chuyên ngành Y Dược - BPM, cùng hệ thống Biểu mẫu Workshop, Biên bản họp và Kịch bản điều phối. Thứ hai là Phương pháp phỏng vấn chuyên sâu với bộ 20 câu hỏi chuẩn hóa được chia cân đối: 10 câu định tính (5 câu có cấu trúc đo lường và 5 câu mở đào sâu) cùng 10 câu định lượng (5 câu có cấu trúc phân khoảng và 5 câu mở ước lượng số liệu thực tế), tạo nền tảng khách quan và trung thực nhất cho toàn bộ đề tài."*

- **Slide 18: 2.3. Phân loại quy trình nghiệp vụ (Ngôi nhà BPM)**
  > *"Theo chuẩn mực BPM quốc tế (Dumas et al.) và Chuỗi giá trị Michael Porter, nhóm phân loại toàn bộ hoạt động của Long Châu thành 3 tầng rõ rệt: Tầng Quản lý (định hướng và kiểm soát chuẩn GPP), Tầng Cốt lõi (trực tiếp tạo dòng giá trị và phục vụ người bệnh) và Tầng Hỗ trợ (cung cấp nguồn lực kho vận, nhân sự và CNTT bảo đảm hệ thống vận hành liên tục)."*

- **Slide 19: 2.4. Kiến trúc quy trình nghiệp vụ (Enterprise Process Architecture)**
  > *"Bản đồ kiến trúc 3 tầng thể hiện mối quan hệ tương hỗ chặt chẽ: Tầng Cốt lõi là dòng chảy giá trị phục vụ người bệnh xuyên suốt từ Mua hàng, Bán tại quầy, Bán online đến Chăm sóc CRM; được nâng đỡ bởi nền móng Kho vận, Nhân sự và CNTT ở Tầng Hỗ trợ; dưới sự định hướng và kiểm soát chuẩn mực GPP của Tầng Quản lý."*

- **Slide 20: 2.5. Danh sách 10 quy trình nghiệp vụ**
  > *"Trên màn hình là danh mục 10 quy trình nghiệp vụ then chốt đã được nhóm khảo sát và chuẩn hóa tên gọi, bao gồm đầy đủ các khâu từ mua hàng, kho bãi, bán hàng trực tiếp, trực tuyến cho đến quản trị nhân sự và tài chính."*

- **Slide 21: 2.6. Mô tả tổng quan 10 quy trình nghiệp vụ**
  > *"Mỗi quy trình đều được nhóm chuẩn hóa hồ sơ thuộc tính (Process Profile) với 7 yếu tố toàn diện theo chuẩn BPM quốc tế: Mục tiêu, Đối tượng khách hàng (Nội bộ & Bên ngoài), Tác nhân chính, Đầu vào, Đầu ra, Các khả năng kết quả (Tích cực, Tiêu cực, Ngoại lệ) và Điểm đặc thù ngành dược, tạo nền tảng phân tích đồng bộ và khép kín dòng giá trị."*

- **Slide 22: 2.7. Lựa chọn các quy trình mô phỏng & phân tích chuyên sâu**
  > *"Dựa trên ma trận đánh giá mức độ phức tạp và tầm ảnh hưởng kinh doanh: Nhóm chọn **6 quy trình trọng tâm** để mô hình hóa BPMN 2.0 AS-IS chi tiết ở Chương 3; đồng thời định vị **2 quy trình then chốt nhất** (Bán thuốc tại quầy và Quản lý kho) để phân tích định lượng chuyên sâu ở Chương 4 và xây dựng mô hình cải tiến TO-BE ở Chương 5."*


---

### 🎙️ PHẦN 3: CHƯƠNG 3 – MÔ HÌNH HÓA QUY TRÌNH HIỆN TẠI (AS-IS) (Slide 23 – 29)
*Điểm nhanh luồng thực hiện của 6 mô hình BPMN AS-IS, nêu rõ 5 tác nhân và 8 cổng kiểm soát ở từng quy trình.*

- **Slide 23: CHƯƠNG 3: MÔ HÌNH HÓA QUY TRÌNH NGHIỆP VỤ HIỆN TẠI (AS-IS)**
  > *"Kính chào Thầy và các bạn, đại diện nhóm xin phép trình bày Chương 3: Mô hình hóa Quy trình Nghiệp vụ Hiện tại (AS-IS) của FPT Long Châu theo chuẩn quốc tế OMG BPMN 2.0, khảo sát toàn diện 6 quy trình nghiệp vụ then chốt để nhận diện các nút thắt cổ chai trong vận hành chuỗi hơn 1.800 nhà thuốc."*

- **Slide 24: 3.1. Quy trình Quản lý Chuỗi cung ứng (AS-IS)**
  > *"Tại quy trình Chuỗi cung ứng: Các nhà thuốc báo cáo tồn kho định kỳ qua file Excel hoặc email; Trưởng kho tổng hợp số liệu thủ công; việc phê duyệt đơn PO qua email mất từ 1 đến 2 ngày; đồng thời theo dõi xe hàng với Nhà cung cấp phụ thuộc vào liên lạc điện thoại, dẫn đến chu kỳ đặt hàng kéo dài 3 đến 5 ngày và tiềm ẩn sai sót dữ liệu."*

- **Slide 25: 3.2. Quy trình Quản lý Chất lượng (GPP / GDP) (AS-IS)**
  > *"Với quy trình Quản lý Chất lượng GPP: Khi nhập hàng, dược sĩ kiểm tra chứng từ CO/CQ và bao bì bằng mắt thường, sau đó ghi chép tay vào Sổ kiểm soát chất lượng; việc theo dõi nhiệt ẩm bằng sổ tay dễ mang tính đối phó, và khi có lệnh thu hồi thuốc khẩn cấp từ Cục Quản lý Dược, việc truy vết nguồn gốc lô thuốc mất từ 12 đến 24 giờ do hồ sơ giấy tờ phân tán."*

- **Slide 26: 3.3. Quy trình Bán thuốc tại Nhà thuốc (AS-IS)**
  > *"Đây là quy trình cốt lõi trọng điểm số 1: Do chưa có hệ thống lấy số phân luồng, khách dồn ứ giờ cao điểm; dược sĩ tra cứu tồn kho trên POS rồi phải rời quầy đi tìm thuốc trên kệ bằng mắt và trí nhớ; chưa có lịch sử bệnh án điện tử. Tổng chu kỳ phục vụ lên tới 13.5 phút/giao dịch, trong đó thời gian chờ đợi và đi lại chiếm tới gần một nửa."*

- **Slide 27: 3.4. Quy trình Bán thuốc Online (Omnichannel O2O) (AS-IS)**
  > *"Tại kênh bán thuốc Online O2O: Dù khách đặt hàng qua Web hoặc App, nhân viên CSKH vẫn phải gọi điện thoại xác nhận từng đơn rất tốn kém; dược sĩ duyệt toa kê đơn thủ công qua ảnh chụp màn hình; và hệ thống chưa tích hợp API theo dõi vị trí shipper thời gian thực."*

- **Slide 28: 3.5. Quy trình Quản lý Kho Trung tâm (AS-IS)**
  > *"Tại quy trình Kho trọng điểm số 2: Cả 3 luồng Nhập, Xuất và Kiểm kê đều tồn tại nhiều bất cập. Nhân viên ghi thẻ kho giấy rồi gõ lại vào ERP lần hai; việc lấy hàng chưa áp dụng nguyên tắc FEFO tự động khiến khoảng 5% thuốc bị cận hạn phải tiêu hủy; tỷ lệ sai lệch tồn kho lên tới 8% và kiểm kê phải đóng băng hoạt động kho nhiều ngày."*

- **Slide 29: 3.6. Quy trình Tuyển dụng & Đào tạo Dược sĩ (AS-IS)**
  > *"Cuối cùng là quy trình Tuyển dụng: Nhân sự HR phải mở và sàng lọc từng CV thủ công bằng mắt; phỏng vấn 2 vòng kéo dài khiến chu kỳ tuyển dụng mất từ 15 đến 30 ngày; khâu đào tạo tập trung offline tốn kém chi phí cho ứng viên ở tỉnh xa. Tiếp theo, nhóm xin chuyển sang Chương 4: Phân tích Quy trình Nghiệp vụ."*


---

### 🎙️ PHẦN 4: CHƯƠNG 4 – PHÂN TÍCH QUY TRÌNH NGHIỆP VỤ (AS-IS) (Slide 30 – 38)
*Đặt song song 2 quy trình trọng điểm (Bán thuốc & Quản lý kho), bóc tách lãng phí qua RACI, VA/NVA, 7 Lean Wastes, 5 Whys & 6M Ishikawa.*

- **Slide 30: CHƯƠNG 4: PHÂN TÍCH QUY TRÌNH NGHIỆP VỤ (AS-IS)**
  > *"Kính thưa Thầy cùng toàn thể các bạn, đại diện Nhóm 15 xin phép tiếp nối buổi báo cáo với Chương 4: Phân tích Quy trình Nghiệp vụ hiện tại (AS-IS). Mục tiêu của chương này là bóc tách các lãng phí vô hình thành những con số định lượng cụ thể, chỉ rõ các điểm nghẽn của hệ thống, làm tiền đề vững chắc để nhóm xây dựng mô hình cải tiến TO-BE ở Chương 5."*

- **Slide 31: 4.1. Tiêu chí và phương pháp phân tích quy trình**
  > *"Tại mục 4.1, nhóm chọn phân tích 2 quy trình trọng điểm là Bán thuốc và Quản lý kho dựa trên 3 tiêu chí: Tần suất giao dịch lớn, Tác động trực tiếp đến doanh thu - chi phí, và Tiềm năng số hóa cao. Nhóm ứng dụng các chuẩn mực BPM gồm: Phân loại chuỗi giá trị VA/NVA, nhận diện 7 Lãng phí Lean, cùng 2 công cụ tìm gốc rễ là 5 Whys và Biểu đồ xương cá Ishikawa."*

- **Slide 32: 4.2 & 4.3. Phân tích Quy trình Bán thuốc & Quản lý Kho**
  > *"Trên màn hình là 2 mắt xích sống còn của Long Châu: Quy trình Bán thuốc (Front-end) trực tiếp phục vụ khách hàng tại hơn 1.800 nhà thuốc và tạo hơn 80% doanh thu; cùng Quy trình Quản lý kho (Back-end) làm bệ đỡ hậu cần nhập hàng và điều phối thuốc đi toàn quốc. Nhóm sẽ đối chiếu song song 2 quy trình này qua 5 trụ cột phân tích từ Slide 33 đến 37."*

- **Slide 33: 4.2.1 & 4.3.1. Phân tích Tác nhân & Ma trận RACI**
  > *"Tại Trụ cột 1 - Ma trận RACI: Ở quầy, Dược sĩ chịu trách nhiệm chính và duyệt chuyên môn; ở kho, Thủ kho chịu trách nhiệm tác nghiệp và Trưởng kho chịu trách nhiệm toàn diện. Điểm nghẽn chung lớn nhất là: Cả Dược sĩ lẫn Thủ kho đều là nhân sự chuyên môn nhưng đang bị lãng phí rất nhiều thời gian vào các việc thủ công như ghi sổ giấy, tìm thuốc trên kệ và gõ lại dữ liệu vào máy tính."*

- **Slide 34: 4.2.2 & 4.3.2. Định lượng Chuỗi giá trị (VA / BVA / NVA)**
  > *"Tại Trụ cột 2 - Chuỗi giá trị: Tại quầy, một lượt mua mất 13.5 phút nhưng lãng phí NVA chiếm tới 48.2% (khách chờ 3 phút, tìm thuốc 2.5 phút); Tại kho, chu kỳ mất 510 phút nhưng lãng phí NVA lên tới 73.5% (đặc biệt kiểm kê đếm tay ngốn tới 240 phút làm đình trệ kho). Cả hai quy trình đều đang bị bóp nghẹt bởi các thao tác không sinh ra giá trị!"*

- **Slide 35: 4.2.3 & 4.3.3. Nhận diện 7 Lãng phí Lean tại Quầy & Kho**
  > *"Tại Trụ cột 3 - 7 Lãng phí Lean, cả hai quy trình đều mắc bộ ba kinh điển: Thứ nhất là lãng phí Chờ đợi: Khách hàng phải chờ mua thuốc tại quầy, trong khi hàng hóa thì nằm chờ kiểm đếm tại kho; Thứ hai là lãng phí Đi lại thừa: Dược sĩ phải đi qua lại giữa các dãy tủ để tìm thuốc, còn thủ kho thì đi bộ tìm hàng vì thiếu bản đồ số; Và thứ ba là lãng phí Quy trình thừa: Quầy in 100% hóa đơn giấy, còn kho thì ghi thẻ giấy rồi lại gõ tay vào phần mềm lần hai, kèm theo rủi ro thuốc bị cận hạn do thiếu cơ chế FEFO tự động."*

- **Slide 36: 4.2.4 & 4.3.4. Nguyên nhân gốc rễ (5 Whys & 6M Ishikawa)**
  > *"Đến Trụ cột 4 - Nguyên nhân gốc rễ qua 5 Whys và Biểu đồ xương cá: Tại sao bán thuốc lại lâu? Bởi vì dược sĩ tìm thuốc trên kệ lâu, mà nguyên nhân là do máy POS không hiển thị vị trí ô kệ, và sâu xa hơn là do POS chưa kết nối thời gian thực với kho. Tương tự, tại sao kho lại lệch số liệu? Bởi vì nhân viên ghi chép thẻ giấy rồi gõ tay vào máy, mà nguyên nhân là do thiếu thiết bị quét mã vạch tại hiện trường. Từ đó, nhóm rút ra kết luận chiến lược: Nguyên nhân của mọi ách tắc KHÔNG PHẢI do con người, mà do Hạ tầng CNTT chưa được tích hợp đồng bộ thời gian thực!"*

- **Slide 37: 4.2.5 & 4.3.5. Đánh giá 3 chiều Thời gian - Chi phí - Chất lượng**
  > *"Tại Trụ cột 5 - Bức tranh 3 chiều hiệu suất phản ánh rõ thiệt hại: Về Thời gian, tỷ lệ lãng phí quá lớn khi quầy mất gần 50% và kho mất hơn 70% thời gian cho các việc vô ích; Về Chi phí, thất thoát 10 đến 15% khách hàng bỏ đi vào giờ cao điểm, và phát sinh chi phí tiêu hủy thuốc cận date hàng năm; Về Chất lượng, áp lực đông khách dễ dẫn đến rủi ro phát nhầm thuốc, và số liệu tồn kho thực tế bị lệch từ 5% đến 8%."*

- **Slide 38: 4.4. Tổng hợp các Vấn đề, Điểm nghẽn & Tiền đề Chương 5**
  > *"Để khép lại Chương 4, nhóm đúc kết 3 nút thắt chiến lược cần tháo gỡ cấp bách: Thứ nhất là Nút thắt Thông tin (dữ liệu tồn kho bị đứt gãy); Thứ hai là Nút thắt Vận hành (quá phụ thuộc vào ghi chép thủ công); và Thứ ba là Nút thắt Rủi ro Date & GPP do thiếu cơ chế FEFO tự động. Đây chính là tiền đề cốt lõi để nhóm chuyển sang trình bày Chương 5: Đề xuất cải tiến quy trình (TO-BE) ngay sau đây."*


---

### 🎙️ PHẦN 5: CHƯƠNG 5 – ĐỀ XUẤT CẢI TIẾN QUY TRÌNH (TO-BE) (Slide 39 – 46)
*Trình bày các giải pháp số hóa đột phá, sơ đồ BPMN TO-BE đã tối ưu hóa và đánh giá tính khả thi, ROI < 2 năm.*

- **Slide 39: CHƯƠNG 5: ĐỀ XUẤT CẢI TIẾN QUY TRÌNH NGHIỆP VỤ (TO-BE)**
  > *"Kính thưa Thầy và các bạn, đại diện nhóm xin phép trình bày Chương 5: Đề xuất Cải tiến Quy trình Nghiệp vụ (TO-BE). Mục tiêu là đưa ra các giải pháp tự động hóa và đồng bộ thời gian thực để giải quyết triệt để 5 vấn đề cốt lõi đã được bạn An chỉ ra ở Chương 4."*

- **Slide 40: 5.1. Mục tiêu cải tiến & Nguyên tắc cốt lõi**
  > *"Mục tiêu cải tiến được lượng hóa bằng các KPI cụ thể: Rút ngắn thời gian phục vụ tại quầy từ **13.5 phút xuống còn 4 – 5 phút/khách** (giảm khoảng **60% – 63%**); đưa tỷ lệ sai lệch kho từ 8% xuống dưới 1%; và nâng chỉ số hài lòng khách hàng NPS lên mức 65+."*

- **Slide 41: 5.2. Đề xuất cải tiến Quy trình Bán thuốc tại Nhà thuốc**
  > *"Nhóm đề xuất 4 giải pháp số hóa đột phá tại quầy: 1. Triển khai Kiosk lấy số tự phục vụ để phân luồng khách mua theo đơn và khách cần tư vấn. 2. Nâng cấp POS thông minh nhận diện khách hàng qua mã QR để hiển thị ngay lịch sử bệnh án và dị ứng thuốc. 3. Tích hợp sơ đồ kho ảo trên màn hình POS, chỉ rõ thuốc ở kệ nào, ngăn nào. 4. Chuyển sang thanh toán không tiền mặt và hóa đơn điện tử tự động qua Zalo/App."*

- **Slide 42: 5.3. Đề xuất cải tiến Quy trình Quản lý Kho Dược**
  > *"Tại hệ thống kho: Nhóm đề xuất trang bị thiết bị cầm tay PDA quét mã Barcode/QR 100% lô hàng; cài đặt thuật toán WMS ép buộc xuất hàng nghiêm ngặt theo chuẩn FEFO (hạn gần xuất trước); và thiết lập bot cảnh báo tự động khi tồn kho xuống dưới mức an toàn."*

- **Slide 43: 5.4. Ứng dụng 4 giải pháp công nghệ hỗ trợ cải tiến**
  > *"Các giải pháp công nghệ làm đòn bẩy bao gồm: Máy quét mã vạch không dây PDA, hạ tầng Real-time ERP đồng bộ dữ liệu tức thời, thuật toán AI dự báo nhu cầu bổ sung hàng và tính năng tự động gửi thông báo nhắc uống thuốc trên App Long Châu."*

- **Slide 44: 5.5. Mô hình BPMN 2.0 TO-BE (Đã tối ưu hóa)**
  > *"Trên màn hình là 2 sơ đồ BPMN 2.0 TO-BE đã được nhóm thiết kế lại hoàn chỉnh cho Quy trình Bán thuốc và Quản lý kho. Các tác vụ thủ công (Manual Task) đã được thay thế hoàn toàn bằng Service Task tự động của hệ thống, bổ sung các Gateway tự động kiểm tra FEFO và gửi thông điệp Real-time."*

- **Slide 45: 5.6. So sánh toàn diện quy trình AS-IS và TO-BE**
  > *"Bảng so sánh 5 tiêu chí trên slide minh chứng sự vượt trội của TO-BE: Loại bỏ 70% thao tác thừa NVA; thời gian phục vụ tại quầy giảm mạnh từ 13.5 phút xuống 4-5 phút; dữ liệu kho liên thông thời gian thực 100% và chỉ số thiện cảm khách hàng tăng trưởng rõ rệt."*

- **Slide 46: 5.7. Đánh giá tính khả thi, rủi ro và lộ trình triển khai**
  > *"Dự án có tính khả thi rất cao nhờ tiềm lực công nghệ và tài chính của tập đoàn mẹ FPT Retail. Thời gian thu hồi vốn (ROI) ước tính dưới 2 năm. Lộ trình triển khai 12 tháng chia làm 3 giai đoạn: Chuẩn bị thiết kế (Tháng 1-3), Triển khai Pilot (Tháng 4-6), và Mở rộng toàn chuỗi (Tháng 7-12). Cuối cùng, nhóm xin tổng kết đề tài tại Chương 6 ngay sau đây."*


---

### 🎙️ PHẦN 6: CHƯƠNG 6 – KẾT LUẬN & HƯỚNG PHÁT TRIỂN (Slide 47 – 51)
*Đúc kết 5 kết quả cốt lõi, nhìn nhận khách quan 4 hạn chế, đề xuất 6 hướng đi chiến lược và mở đầu phiên phản biện Q&A.*

- **Slide 47: CHƯƠNG 6: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN**
  > *"Kính thưa Thầy ThS. Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên, đại diện Nhóm 15 xin phép trình bày phần cuối của buổi báo cáo: **Chương 6 – Kết luận và Hướng phát triển** (Slide 47 đến Slide 51). Tại chương kết này, nhóm sẽ đúc kết 5 kết quả đạt được, nhìn nhận khách quan 4 hạn chế và đề xuất 6 hướng đi chiến lược trong tương lai."*

- **Slide 48: 6.1. Kết quả đạt được của đề tài**
  > *"Kính thưa Thầy và Hội đồng, xuyên suốt quá trình nghiên cứu, nhóm đã khép kín trọn vẹn vòng đời BPM với **5 đóng góp cốt lõi**: 1. **Khảo sát & Kiến trúc 10 quy trình:** Chuẩn hóa toàn bộ dòng chảy nghiệp vụ của FPT Long Châu theo 3 tầng Michael Porter (Quản lý - Cốt lõi - Hỗ trợ) và lập ma trận định lượng chọn ra 6 quy trình trọng điểm. 2. **Mô hình hóa BPMN 2.0 AS-IS:** Thiết kế chuẩn mực 6 sơ đồ hiện trạng dạng Swim lane phân vai rõ ràng, số hóa toàn diện quy trình giấy tờ thủ công. 3. **Phân tích lãng phí Lean & Root-Cause:** Định lượng dòng giá trị (Quầy bán NVA 48.2%, Kho NVA 73.5%), nhận diện 7 lãng phí Lean và ứng dụng Ishikawa 6M cùng 5 Whys chỉ điểm nguyên nhân gốc rễ. 4. **Tái thiết kế quy trình TO-BE:** Xây dựng 2 sơ đồ TO-BE chuẩn BPMN 2.0 tích hợp 4 đòn bẩy công nghệ số (PDA, Real-time ERP, OMS, AI), cắt giảm tới 63% thời gian xử lý. 5. **Đánh giá khả thi & Lộ trình thực thi:** Phân tích toàn diện tính khả thi, quản trị rủi ro và vạch lộ trình 3 giai đoạn 12 tháng với thời gian thu hồi vốn ROI dưới 2 năm."*

- **Slide 49: 6.2. Nhìn nhận khách quan hạn chế của đề tài**
  > *"Trên tinh thần trung thực học thuật, nhóm thẳng thắn nhìn nhận **4 rào cản** của đề tài: 1. **Về bảo mật dữ liệu:** Do chính sách bảo mật của FPT Retail, nhóm không truy xuất trực tiếp database ERP nội bộ. Dữ liệu chu kỳ thời gian và chi phí dựa trên quan sát thực địa, đóng vai khách hàng và mô phỏng học thuật nên có sai số nhất định. 2. **Về môi trường thực nghiệm:** Các giải pháp TO-BE mới dừng lại ở mô hình thiết kế chuẩn và phân tích lý thuyết, chưa có điều kiện thử nghiệm thực tế tại một nhà thuốc Long Châu để đo lường ROI ngoài đời thực. 3. **Về phạm vi đào sâu:** Do giới hạn thời gian đồ án môn học, nhóm chỉ phân tích bóc tách công cụ sâu cho 2 quy trình then chốt (Bán thuốc & Quản lý kho); 4 quy trình còn lại dừng ở mức AS-IS. 4. **Về thời gian và nguồn lực:** Do khuôn khổ đồ án môn học, một số tham số chu kỳ thời gian và chi phí dựa trên quan sát thực địa kết hợp phỏng vấn giả định, cần được kiểm chứng thêm qua số liệu vận hành thực tế dài hạn."*

- **Slide 50: 6.3. Hướng phát triển và tiềm năng ứng dụng**
  > *"Từ những hạn chế đó, nhóm đề xuất **6 định hướng chiến lược** để tiếp tục hoàn thiện và đưa giải pháp vào ứng dụng thực tế: 1. **Tối ưu toàn chuỗi giá trị:** Mở rộng phân tích Lean và thiết kế TO-BE cho 4 quy trình còn lại nhằm đồng bộ hóa toàn bộ chuỗi cung ứng. 2. **Xây dựng hệ sinh thái BPMS hoàn chỉnh:** Bổ sung Backend và tích hợp BPMN Engine (như Camunda hay Flowable) để xây dựng hệ thống quản trị và giao việc quy trình tự động. 3. **Thực nghiệm Pilot:** Phối hợp triển khai thí điểm tại 1-2 nhà thuốc Long Châu trong 1-3 tháng để thu thập số liệu thực chứng minh hiệu quả. 4. **Tích hợp Process Mining:** Khai phá Event Logs thực từ hệ thống ERP/POS để tự động tái hiện quy trình thực và phát hiện điểm nghẽn vô hình. 5. **Tự động hóa bằng RPA:** Nhúng robot phần mềm xử lý tự động các tác vụ lặp lại như đối chiếu hóa đơn và kiểm kê kho. 6. **Chuỗi lạnh Vaccine & Benchmarking:** Chuẩn hóa quy trình chuỗi lạnh GSP/GDP cho Trung tâm Tiêm chủng Long Châu và đối chuẩn năng lực vận hành với các chuỗi đối thủ."*

- **Slide 51: Xin chân thành cảm ơn & Q&A**
  > *"Kính thưa Thầy và Hội đồng, bài báo cáo đồ án môn học Quản trị Quy trình Nghiệp vụ của Nhóm 15 đến đây xin được phép kết thúc! Nhóm chúng em xin bày tỏ lòng biết ơn sâu sắc nhất đến ThS. Hà Lê Hoài Trung đã tận tình định hướng và hướng dẫn nhóm hoàn thành đồ án này. Nhóm chúng em rất mong nhận được những nhận xét, đóng góp quý báu từ Thầy và Hội đồng, và chúng em xin sẵn sàng lắng nghe, giải trình các câu hỏi phản biện ạ! Em xin chân thành cảm ơn!"*

---

## ⏱️ GỢI Ý ĐIỀU PHỐI VÀ LƯU Ý KHI THUYẾT TRÌNH TRỰC TIẾP
1. **Phím tắt chuyển slide:** Bấm phím `Mũi tên phải` hoặc `Space` để tiến 1 slide, `Mũi tên trái` để lùi 1 slide; bấm `F` để bật toàn màn hình; bấm `B` để mở nhanh trình phóng to BPMN; bấm `N` để mở khay Speaker Notes hỗ trợ người nói.
2. **Không đọc slide chữ:** Mắt hướng về Thầy Cô và Hội đồng, chỉ nhìn lướt slide để nắm nhịp và trình bày tự nhiên.
3. **Thống nhất số liệu khi trả lời phản biện:**
   - Thời gian bán thuốc AS-IS: **13.5 phút** (VA 6.0' ~44.4%, BVA 1.0' ~7.4%, NVA 6.5' ~48.2%).
   - Thời gian bán thuốc TO-BE: **4 – 5 phút** (giảm ~60% - 63%).
   - Sai lệch tồn kho AS-IS: **5 – 8%** → TO-BE: **dưới 1%**.
   - Phạm vi nghiên cứu: **10 quy trình** khảo sát → **6 quy trình** mô hình hóa AS-IS → **2 quy trình** phân tích sâu & đề xuất TO-BE.
   - Nguồn số liệu: Báo cáo thường niên FPT Retail 2023 - 2024 (1.800+ nhà thuốc) và mô phỏng học thuật (academic simulation).
