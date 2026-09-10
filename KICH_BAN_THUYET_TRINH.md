# KỊCH BẢN THUYẾT TRÌNH ĐỒ ÁN HTQTQTNV – FPT LONG CHÂU

**Thông tin chung về buổi báo cáo:**
- **Đề tài:** Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu
- **Môn học:** Hệ thống Quản trị Quy trình Nghiệp vụ (BPM) – Lớp: `IE203.F33.CN2.CNTT`
- **Giảng viên hướng dẫn:** ThS. Hà Lê Hoài Trung (Khoa KH&KT Thông tin – UIT)
- **Tổng số Slide:** **59 Slide** (Khớp 1:1 tuyệt đối với file trình chiếu `thuyet_trinh/index.html`)
- **Thời lượng quy định:** 20 phút (trung bình ~21 - 25 giây/slide, dành 2-3 phút cuối kết luận & chuẩn bị Q&A).
- **Phân công trình bày:** 6 thành viên trong nhóm, mỗi bạn phụ trách khoảng 5 - 16 slide (~3.3 phút/người).

---

## 👥 BẢNG PHÂN CHIA NHIỆM VỤ THUYẾT TRÌNH (6 THÀNH VIÊN)

| STT | Thành viên thực hiện | MSSV | Phần phụ trách | Slide | Thời lượng |
| :---: | :--- | :---: | :--- | :---: | :---: |
| **1** | **Huỳnh Công Hậu** | 25210099 | **Mở đầu & Chương 1:** Giới thiệu công ty FPT Long Châu | **Slide 1 – 14** (14 slide) | ~3.5 phút |
| **2** | **Nguyễn Đức Nhiên** | 25210160 | **Chương 2 & Chương 3:** Kiến trúc 10 quy trình & Website mô phỏng | **Slide 15 – 30** (16 slide) | ~3.5 phút |
| **3** | **Nguyễn Thế Trụ** | 25210226 | **Chương 4:** Mô hình hóa 6 quy trình hiện tại (AS-IS) | **Slide 31 – 37** (7 slide) | ~3.0 phút |
| **4** | **Phan Duy An** | 25210247 | **Chương 5:** Phân tích đối chiếu 2 quy trình trọng điểm | **Slide 38 – 46** (9 slide) | ~3.5 phút |
| **5** | **Trịnh Chí Nguyên** | 25210150 | **Chương 6:** Đề xuất cải tiến (Mô hình TO-BE & Công nghệ) | **Slide 47 – 54** (8 slide) | ~3.5 phút |
| **6** | **Ngô Quốc Chung** | 24730180 | **Chương 7 & Kết luận:** Kết quả đạt được, Hạn chế, Hướng phát triển & Q&A | **Slide 55 – 59** (5 slide) | ~3.0 phút |

---

## 🎤 CHI TIẾT KỊCH BẢN THUYẾT TRÌNH THEO TỪNG SLIDE

---

### 👤 NGƯỜI SỐ 1: HUỲNH CÔNG HẬU (Slide 1 – 14)
*Mục tiêu: Chào đầu trang trọng, nêu bật tính cấp thiết của đề tài và bức tranh toàn cảnh về doanh nghiệp FPT Long Châu.*

- **Slide 1: Bìa Đồ Án**
  > *"Kính thưa Thầy Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên! Hôm nay, nhóm chúng em xin được đại diện báo cáo đồ án môn học Hệ thống Quản trị Quy trình Nghiệp vụ với đề tài: **'Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu'**. Nhóm chúng em gồm 6 thành viên và em là Huỳnh Công Hậu, xin phép được mở đầu buổi thuyết trình."*

- **Slide 2: Lý do chọn đề tài**
  > *"Về lý do chọn đề tài: Bán lẻ dược phẩm là ngành kinh doanh có tốc độ tăng trưởng bùng nổ tại Việt Nam. FPT Long Châu khi mở rộng mạng lưới thần tốc trên toàn quốc phải đối mặt với bài toán điều phối vận hành cực kỳ phức tạp. Nếu các quy trình không được chuẩn hóa và số hóa, doanh nghiệp sẽ gặp rủi ro lớn về sai lệch kho, chậm trễ đơn hàng và nguy cơ cận hạn thuốc."*

- **Slide 3: Mục tiêu nghiên cứu**
  > *"Trên màn hình là 8 mục tiêu nghiên cứu cụ thể của đồ án: Đi từ khảo sát cơ cấu doanh nghiệp; phân loại kiến trúc quy trình; mô hình hóa 6 sơ đồ BPMN 2.0 AS-IS; phân tích chuyên sâu lãng phí và điểm nghẽn cho 2 quy trình then chốt; cho đến thiết kế giải pháp TO-BE và xây dựng website mô phỏng trực quan."*

- **Slide 4: Đối tượng & Phạm vi nghiên cứu**
  > *"Về đối tượng và phạm vi: Đề tài tập trung vào hệ thống quy trình nghiệp vụ của FPT Long Châu trên 4 phạm vi: Nội dung nghiên cứu 10 quy trình, mô hình hóa 6 và phân tích sâu 2; Doanh nghiệp gồm toàn bộ hệ thống nhà thuốc và tổng kho; Dữ liệu sử dụng nguồn công khai kết hợp mô phỏng học thuật; và Sản phẩm là Website SPA mô phỏng trực quan tương tác."*

- **Slide 5: Phương pháp nghiên cứu**
  > *"Để thực hiện đề tài một cách khoa học và toàn diện, nhóm kết hợp 6 phương pháp nghiên cứu chính: (1) Thu thập tài liệu chính thống và chuẩn GPP; (2) Quan sát hoạt động thực tế tại nhà thuốc; (3) Phân tích và tổng hợp dữ liệu; (4) Mô hình hóa chuẩn BPMN 2.0; (5) Phân tích quy trình bằng VA/BVA/NVA, Lean và 5 Whys; và (6) Thiết kế xây dựng website SPA mô phỏng trực quan."*

- **Slide 6: Ý nghĩa thực tiễn**
  > *"Về ý nghĩa thực tiễn, đề tài đóng góp 3 giá trị cốt lõi: Thứ nhất, minh họa phương pháp luận BPM chuẩn mực và nhận diện các thao tác lãng phí NVA; Thứ hai, đề xuất các giải pháp số hóa mang tính thực tế cao như Barcode/QR, chuẩn FEFO và tích hợp WMS-ERP Real-time; Thứ ba, xây dựng website mô phỏng trực quan đóng vai trò là tài liệu tham khảo học thuật giá trị."*

- **Slide 7: Bố cục báo cáo**
  > *"Báo cáo hoàn chỉnh của nhóm được kết cấu chặt chẽ gồm 7 chương, đi từ bức tranh tổng quan doanh nghiệp, kiến trúc quy trình, website mô phỏng, mô hình AS-IS, phân tích lãng phí, đề xuất TO-BE cho đến kết luận."*

- **Slide 8: Trang phân cách Chương 1**
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

- **Slide 14: 1.6. Định hướng chiến lược**
  > *"Chiến lược tương lai của Long Châu là hướng tới cột mốc 2.500 nhà thuốc, mở rộng chuỗi trung tâm tiêm chủng vắc xin và đầu tư mạnh mẽ vào trí tuệ nhân tạo (AI) cùng hệ thống quản trị kho tự động. Tiếp theo, em xin kính mời bạn Nguyễn Đức Nhiên trình bày nội dung Chương 2 và Chương 3."*

---

### 👤 NGƯỜI SỐ 2: NGUYỄN ĐỨC NHIÊN (Slide 15 – 30)
*Mục tiêu: Trình bày bài bản về kiến trúc 10 quy trình nghiệp vụ và giới thiệu các tính năng độc đáo của Website mô phỏng.*

- **Slide 15: Trang phân cách Chương 2**
  > *"Em xin chào Thầy và các bạn, em là Nguyễn Đức Nhiên. Em xin phép tiếp nối phần trình bày với Chương 2: Khảo sát, Liệt kê và Phân loại Quy trình Nghiệp vụ."*

- **Slide 16: 2.1. Khái quát về Quản trị Quy trình Nghiệp vụ**
  > *"Đồ án tiếp cận theo chuẩn BPM hiện đại, bám sát vòng đời BPM 6 giai đoạn: Nhận diện, Khám phá, Phân tích, Tái thiết kế, Triển khai và Giám sát vận hành trong môi trường bán lẻ dược phẩm."*

- **Slide 17: 2.2. Phương pháp & Nguồn thu thập dữ liệu**
  > *"Dữ liệu nghiên cứu được tổng hợp từ Báo cáo thường niên FPT Retail, tài liệu pháp lý GPP của Bộ Y tế, quan sát luồng giao dịch tại các nhà thuốc và các thông tin công khai trên ứng dụng Long Châu."*

- **Slide 18: 2.3. Phân loại quy trình nghiệp vụ**
  > *"Theo chuẩn mực BPM quốc tế (Dumas et al.) và Chuỗi giá trị Michael Porter, nhóm phân loại toàn bộ hoạt động của Long Châu thành 3 tầng rõ rệt: Tầng Quản lý (định hướng và kiểm soát chuẩn GPP), Tầng Cốt lõi (trực tiếp tạo dòng giá trị và phục vụ người bệnh) và Tầng Hỗ trợ (cung cấp nguồn lực kho vận, nhân sự và CNTT bảo đảm hệ thống vận hành liên tục)."*

- **Slide 19: 2.4. Kiến trúc quy trình nghiệp vụ**
  > *"Bản đồ kiến trúc 3 tầng thể hiện mối quan hệ tương hỗ chặt chẽ: Tầng Cốt lõi là dòng chảy giá trị phục vụ người bệnh xuyên suốt từ Mua hàng, Bán tại quầy, Bán online đến Chăm sóc CRM; được nâng đỡ bởi nền móng Kho vận, Nhân sự và CNTT ở Tầng Hỗ trợ; dưới sự định hướng và kiểm soát chuẩn mực GPP của Tầng Quản lý."*

- **Slide 20: 2.5. Danh mục 10 quy trình nghiệp vụ**
  > *"Trên màn hình là danh mục 10 quy trình nghiệp vụ then chốt đã được nhóm khảo sát và chuẩn hóa tên gọi, bao gồm đầy đủ các khâu từ mua hàng, kho bãi, bán hàng trực tiếp, trực tuyến cho đến quản trị nhân sự và tài chính."*

- **Slide 21: 2.6. Mô tả tổng quan 10 quy trình nghiệp vụ**
  > *"Mỗi quy trình đều được nhóm chuẩn hóa thông tin với 5 yếu tố cốt lõi: Mục tiêu, Tác nhân chính, Đầu vào, Đầu ra và Đặc thù ngành dược, tạo nền tảng phân tích đồng bộ."*

- **Slide 22: 2.7. Lựa chọn quy trình mô phỏng & phân tích sâu**
  > *"Dựa trên ma trận đánh giá mức độ phức tạp và tầm ảnh hưởng kinh doanh: Nhóm chọn **6 quy trình trọng tâm** để mô hình hóa BPMN 2.0 AS-IS và đưa lên Website mô phỏng; đồng thời định vị **2 quy trình then chốt nhất** (Bán thuốc tại quầy và Quản lý kho) để phân tích định lượng chuyên sâu và xây dựng mô hình TO-BE."*

- **Slide 23: Trang phân cách Chương 3**
  > *"Để biến các mô hình lý thuyết thành trải nghiệm trực quan, nhóm đã phát triển một sản phẩm thực tế được trình bày tại Chương 3: Xây dựng Website Mô phỏng Quy trình Nghiệp vụ."*

- **Slide 24: 3.1. Mục tiêu, yêu cầu và phạm vi website**
  > *"Website được xây dựng với mục tiêu là công cụ trực quan hóa tương tác cao, giúp người xem dễ dàng đọc hiểu luồng công việc, theo dõi từng bước xử lý của 6 quy trình và so sánh đối chiếu giữa mô hình AS-IS và TO-BE."*

- **Slide 25: 3.2. Kiến trúc hệ thống website**
  > *"Về kiến trúc: Ứng dụng được thiết kế theo mô hình Single Page Application (SPA), cây thành phần gồm ProcessGrid trung tâm, Header điều hướng, Modal BPMN View tích hợp công cụ phóng to và bộ điều khiển Simulation Stepper sinh động."*

- **Slide 26: 3.3. Công nghệ và công cụ sử dụng**
  > *"Website sử dụng công nghệ web chuẩn hiện đại: HTML5, Tailwind CSS cho giao diện phản hồi responsive mượt mà, JavaScript ES6+ thuần tối ưu hiệu năng không phụ thuộc framework nặng, biểu tượng FontAwesome và triển khai tĩnh sẵn sàng phục vụ."*

- **Slide 27: 3.4. Thiết kế cơ sở dữ liệu (JSON tĩnh)**
  > *"Dữ liệu được tổ chức dưới dạng các file JSON độc lập: lưu trữ danh mục 6 quy trình, chi tiết các bước thực hiện, tác nhân tham gia và đường dẫn sơ đồ BPMN chuẩn SVG."*

- **Slide 28: 3.5. Thiết kế giao diện và các chức năng chính**
  > *"Giao diện website bao gồm 4 khối chức năng chính: Bộ lọc phân loại quy trình, Tab Tổng quan chi tiết, Tab sơ đồ BPMN tương tác có nút chuyển đổi AS-IS/TO-BE, và Tab Mô phỏng từng bước với hiệu ứng highlight tác nhân trực quan."*

- **Slide 29: 3.6. Mô phỏng 6 quy trình nghiệp vụ trên website**
  > *"Trên màn hình là cơ chế mô phỏng chuyên biệt cho 6 quy trình then chốt: từ cảnh báo biến động tồn kho ở Chuỗi cung ứng, rẽ nhánh gateway xử lý thuốc cận date theo chuẩn GPP, rút ngắn chu kỳ phục vụ tại quầy, luân chuyển đơn O2O đa kênh, quản lý kho tự động theo nguyên tắc FEFO cho đến phân luồng song song đào tạo nhân sự. Thầy cô và các bạn có thể nhấp trực tiếp nút Live Demo để tương tác thực tế ngay trên trình duyệt."*

- **Slide 30: 3.7. Đánh giá kết quả xây dựng website**
  > *"Theo Bảng 3.2 nghiệm thu, cả 5 module chức năng đều đạt tỷ lệ hoàn thành 100%, thời gian phản hồi dưới 1 giây và giao diện chuẩn nhận diện FPT Long Châu. Về lâu dài, hệ thống có thể nâng cấp thêm backend và tích hợp Camunda BPMS Engine. Em xin khép lại Chương 3 và nhường lời cho bạn Nguyễn Thế Trụ trình bày chi tiết về Mô hình AS-IS ở Chương 4."*


---

### 👤 NGƯỜI SỐ 3: NGUYỄN THẾ TRỤ (Slide 31 – 37)
*Mục tiêu: Điểm nhanh luồng thực hiện của 6 mô hình BPMN AS-IS và chỉ ra những điểm còn thủ công, bất cập.*

- **Slide 31: Trang phân cách Chương 4**
  > *"Kính chào Thầy và các bạn, em là Nguyễn Thế Trụ. Em xin phép trình bày Chương 4: Mô hình hóa Quy trình Nghiệp vụ Hiện tại (AS-IS) của FPT Long Châu theo chuẩn quốc tế OMG BPMN 2.0, khảo sát toàn diện 6 quy trình nghiệp vụ then chốt để nhận diện các nút thắt cổ chai trong vận hành chuỗi hơn 1.800 nhà thuốc."*

- **Slide 32: 4.1. Quy trình Quản lý Chuỗi cung ứng (AS-IS)**
  > *"Tại quy trình Chuỗi cung ứng: Các nhà thuốc báo cáo tồn kho định kỳ qua file Excel hoặc email; Trưởng kho tổng hợp số liệu thủ công; việc phê duyệt đơn PO qua email mất từ 1 đến 2 ngày; đồng thời theo dõi xe hàng với Nhà cung cấp phụ thuộc vào liên lạc điện thoại, dẫn đến chu kỳ đặt hàng kéo dài 3 đến 5 ngày và tiềm ẩn sai sót dữ liệu."*

- **Slide 33: 4.2. Quy trình Quản lý Chất lượng GPP (AS-IS)**
  > *"Với quy trình Quản lý Chất lượng GPP: Khi nhập hàng, dược sĩ kiểm tra chứng từ CO/CQ và bao bì bằng mắt thường, sau đó ghi chép tay vào Sổ kiểm soát chất lượng; việc theo dõi nhiệt ẩm bằng sổ tay dễ mang tính đối phó, và khi có lệnh thu hồi thuốc khẩn cấp từ Cục Quản lý Dược, việc truy vết nguồn gốc lô thuốc mất từ 12 đến 24 giờ do hồ sơ giấy tờ phân tán."*

- **Slide 34: 4.3. Quy trình Bán thuốc tại Nhà thuốc (AS-IS)**
  > *"Đây là quy trình cốt lõi trọng điểm số 1: Do chưa có hệ thống lấy số phân luồng, khách dồn ứ giờ cao điểm; dược sĩ tra cứu tồn kho trên POS rồi phải rời quầy đi tìm thuốc trên kệ bằng mắt và trí nhớ; chưa có lịch sử bệnh án điện tử. Tổng chu kỳ phục vụ lên tới 13.5 phút/giao dịch, trong đó thời gian chờ đợi và đi lại chiếm tới gần một nửa."*

- **Slide 35: 4.4. Quy trình Bán thuốc Online (AS-IS)**
  > *"Tại kênh bán thuốc Online O2O: Dù khách đặt hàng qua Web hoặc App, nhân viên CSKH vẫn phải gọi điện thoại xác nhận từng đơn rất tốn kém; dược sĩ duyệt toa kê đơn thủ công qua ảnh chụp màn hình; và hệ thống chưa tích hợp API theo dõi vị trí shipper thời gian thực."*

- **Slide 36: 4.5. Quy trình Quản lý Kho Trung tâm (AS-IS)**
  > *"Tại quy trình Kho trọng điểm số 2: Cả 3 luồng Nhập, Xuất và Kiểm kê đều tồn tại nhiều bất cập. Nhân viên ghi thẻ kho giấy rồi gõ lại vào ERP lần hai; việc lấy hàng chưa áp dụng nguyên tắc FEFO tự động khiến khoảng 5% thuốc bị cận hạn phải tiêu hủy; tỷ lệ sai lệch tồn kho lên tới 8% và kiểm kê phải đóng băng hoạt động kho nhiều ngày."*

- **Slide 37: 4.6. Quy trình Tuyển dụng & Đào tạo (AS-IS)**
  > *"Cuối cùng là quy trình Tuyển dụng: Nhân sự HR phải mở và sàng lọc từng CV thủ công bằng mắt; phỏng vấn 2 vòng kéo dài khiến chu kỳ tuyển dụng mất từ 15 đến 30 ngày; khâu đào tạo tập trung offline tốn kém chi phí cho ứng viên ở tỉnh xa. Tiếp theo, em xin kính mời bạn Phan Duy An trình bày Chương 5: Phân tích Quy trình Nghiệp vụ."*

---

### 👤 NGƯỜI SỐ 4: PHAN DUY AN (Slide 38 – 46)
*Mục tiêu: Đặt song song 2 quy trình trọng điểm (Bán thuốc & Quản lý kho), phân tích đối chiếu trực diện qua 5 trụ cột chuẩn BPM: RACI, VA/NVA, Lean Wastes, 5 Whys và Đo lường 3 chiều. Tổng thời gian nói: ~3.0 - 3.5 phút.*

- **Slide 38: Trang phân cách & Lộ trình phân tích Chương 5**
  > *"Dạ, em xin cảm ơn bạn Trụ!*  
  > *Kính thưa Thầy cùng toàn thể các bạn, em là **Phan Duy An**. Sau đây, em xin phép đại diện nhóm 15 tiếp nối buổi báo cáo với **Chương 5: Phân tích Quy trình Nghiệp vụ hiện tại (AS-IS)**.*  
  > *Kính thưa Thầy, nếu như ở Chương 4 nhóm đã mô hình hóa 6 quy trình, thì Chương 5 chính là **mắt xích phân tích học thuật quan trọng nhất**, nhằm bóc tách các lãng phí vô hình thành những **con số định lượng cụ thể**, chỉ rõ các **điểm nghẽn** của hệ thống để làm tiền đề vững chắc cho việc thiết kế mô hình TO-BE ở Chương 6. Nội dung chương gồm 3 phần: Tiêu chí và Phương pháp; Phân tích đối chiếu 2 quy trình trọng tâm qua 5 trụ cột; và Tổng kết các điểm nghẽn chiến lược."*

- **Slide 39: 5.1. Tiêu chí và Phương pháp phân tích**
  > *"Tại **Mục 5.1**, câu hỏi đặt ra là: Trong 6 quy trình đã khảo sát, vì sao nhóm lại chọn **Bán thuốc tại quầy** và **Quản lý kho** để đào sâu phân tích? Thưa Thầy, nhóm lựa chọn dựa trên **3 tiêu chí cốt lõi**:*  
  > *Thứ nhất là **Tần suất giao dịch khổng lồ**, với hàng triệu lượt mua bán và xuất nhập kho diễn ra liên tục mỗi ngày trên hơn 1.800 nhà thuốc.*  
  > *Thứ hai là **Tác động trực tiếp** đến doanh thu và chi phí giá vốn của toàn chuỗi.*  
  > *Và thứ ba là **Khả năng số hóa rất cao**, hoàn toàn có thể tạo ra bước nhảy vọt về năng suất nếu ứng dụng công nghệ.*  
  > *Về phương pháp luận, nhóm áp dụng kết hợp các chuẩn mực BPM quốc tế: Khung chuỗi giá trị **VA - NVA**, nhận diện **7 Lãng phí Lean**, cùng 2 công cụ truy vết gốc rễ là **5 Whys** và **Biểu đồ xương cá Ishikawa**."*

- **Slide 40: 5.2 & 5.3. Giới thiệu 2 Quy trình trọng điểm (Front-end & Back-end)**
  > *"Và bây giờ, xin mời Thầy và các bạn cùng nhìn vào **bức tranh toàn cảnh của 2 quy trình trọng điểm** sống còn tại Long Châu:*  
  > *Một bên là **Quy trình Bán thuốc tại Nhà thuốc** — đại diện cho khâu **Front-end**, trực tiếp phục vụ hàng trăm nghìn bệnh nhân mỗi ngày và mang lại hơn **80% doanh thu** toàn chuỗi.*  
  > *Và một bên là **Quy trình Quản lý kho** — đại diện cho khâu **Back-end**, bệ đỡ hậu cần trung tâm để nhập hàng, bảo quản chuẩn GSP và điều phối thuốc đi toàn quốc.*  
  > *Thay vì phân tích tách rời, nhóm sẽ **đối chiếu song song cả 2 quy trình** qua **5 trụ cột phương pháp luận** từ Slide 41 đến 45 ngay sau đây ạ!"*

- **Slide 41: Trụ cột 1 - Tác nhân và Ma trận RACI**
  > *"Đến với Trụ cột số 1 là **Ma trận phân quyền RACI**: Ma trận phân định rất rõ ràng:*  
  > *Ở phía quầy, **Dược sĩ tư vấn** giữ vai trò làm trực tiếp chữ **R** và duyệt chuyên môn chữ **A**.*  
  > *Ở phía kho, **Thủ kho** chịu trách nhiệm tác nghiệp chữ **R**, còn **Trưởng kho** duyệt toàn diện chữ **A**.*  
  > *Và **điểm nghẽn RACI lớn nhất mà nhóm bóc tách được ở đây là**: Cả Dược sĩ lẫn Thủ kho đều là nhân sự có chuyên môn sâu, nhưng đang bị **vắt kiệt thời gian bởi các việc sự vụ thủ công** — như phải gõ máy tính tra cứu rời rạc, đi bộ tìm thuốc trên kệ, hay ghi chép thẻ kho giấy lặp đi lặp lại!"*

- **Slide 42: Trụ cột 2 - Định lượng Chuỗi giá trị (VA / BVA / NVA)**
  > *"Sang Trụ cột số 2, nhóm lượng hóa chi tiết thời gian tạo giá trị và thời gian lãng phí, và kết quả cho thấy những **con số đáng báo động**:*  
  > *Tại **Quầy bán thuốc**, một lượt mua mất trung bình **13.5 phút**, nhưng lãng phí **NVA chiếm tới 48.2%** — tức là gần một nửa thời gian! Khách phải **chờ xếp hàng 3 phút** và dược sĩ **mất 2.5 phút đi lại tìm thuốc**.*  
  > *Còn tại **Kho trung tâm**, chu kỳ vận hành mất **510 phút**, nhưng lãng phí **NVA lên tới 73.5%** — đặc biệt đợt **kiểm kê đếm tay ngốn tới 240 phút**, làm đình trệ toàn bộ kho.*  
  > *Rõ ràng, cả hai mắt xích đều đang bị bóp nghẹt bởi các thao tác hoàn toàn không sinh ra giá trị!"*

- **Slide 43: Trụ cột 3 - Nhận diện 7 Lãng phí Lean tại Quầy & tại Kho**
  > *"Tại Trụ cột số 3, khi soi chiếu qua **7 Lãng phí Lean**, cả quầy và kho đều mắc phải **bộ ba lãng phí kinh điển**:*  
  > *Thứ nhất là lãng phí **Chờ đợi**: Khách hàng phải chờ mua thuốc tại quầy, trong khi hàng hóa thì nằm chờ kiểm đếm tại kho.*  
  > *Thứ hai là lãng phí **Đi lại thừa**: Dược sĩ phải đi qua lại giữa các dãy tủ để tìm thuốc, còn thủ kho thì đi bộ tìm hàng vì thiếu bản đồ số định vị.*  
  > *Và thứ ba là lãng phí **Quy trình thừa**: Quầy in một trăm phần trăm hóa đơn giấy; còn kho thì ghi thẻ giấy rồi lại gõ tay vào phần mềm lần hai, kèm theo rủi ro **thuốc bị cận hạn** do thiếu cơ chế kiểm soát FEFO tự động."*

- **Slide 44: Trụ cột 4 - Nguyên nhân gốc rễ (Cây 5 Whys & 6M Ishikawa)**
  > *"Đến Trụ cột số 4, nhóm truy tìm căn nguyên sâu xa qua công cụ **5 Whys** và **Biểu đồ xương cá**:*  
  > *Tại sao bán thuốc lại lâu? **Bởi vì** dược sĩ tìm thuốc trên kệ lâu, **mà nguyên nhân là do** máy POS không hiển thị vị trí ô kệ, **và sâu xa hơn là do** POS chưa kết nối thời gian thực với kho.*  
  > *Tương tự, tại sao kho lại lệch số liệu? **Bởi vì** nhân viên ghi chép thẻ giấy rồi gõ tay vào máy, **mà nguyên nhân là do** thiếu thiết bị quét mã vạch tại hiện trường.*  
  > *Từ đó, nhóm rút ra **kết luận chiến lược mang tính bản chất**: Nguyên nhân của mọi ách tắc **KHÔNG PHẢI do con người**, mà do **Hạ tầng Công nghệ thông tin chưa được tích hợp đồng bộ thời gian thực**!"*

- **Slide 45: Trụ cột 5 - Đánh giá 3 chiều Hiệu suất: Thời gian – Chi phí – Chất lượng**
  > *"Tại Trụ cột thứ 5, bức tranh tổng kết **3 chiều hiệu suất** phản ánh rõ nét thiệt hại của hệ thống:*  
  > *Về **Thời gian**, tỷ lệ lãng phí quá lớn khi quầy mất gần 50% và kho mất hơn 70% thời gian cho các việc vô ích.*  
  > *Về **Chi phí**, thất thoát **10 đến 15% khách hàng** bỏ đi vào giờ cao điểm, và phát sinh chi phí tiêu hủy thuốc cận date hàng năm.*  
  > *Về **Chất lượng**, áp lực đông khách dễ dẫn đến rủi ro phát nhầm thuốc, và số liệu tồn kho thực tế bị lệch từ **5% đến 8%**."*

- **Slide 46: 5.4. Tổng hợp các vấn đề, điểm nghẽn & Bàn giao Chương 6**
  > *"Để khép lại Chương 5, nhóm đã đúc kết toàn bộ hiện trạng thành **3 nút thắt chiến lược cần tháo gỡ cấp bách**:*  
  > *Thứ nhất là **Nút thắt Thông tin**, khi dữ liệu bị phân mảnh giữa quầy và kho.*  
  > *Thứ hai là **Nút thắt Vận hành**, khi quy trình phụ thuộc quá nhiều vào thao tác thủ công.*  
  > *Và thứ ba là **Nút thắt Rủi ro Hạn dùng**, do thiếu thuật toán cảnh báo hạn sử dụng FEFO tự động.*  
  > *Để giải quyết triệt để 3 nút thắt này, sau đây em xin trân trọng kính mời bạn **Trịnh Chí Nguyên** trình bày **Chương 6: Đề xuất cải tiến quy trình mục tiêu TO-BE**. Em xin chân thành cảm ơn Thầy và các bạn đã chú ý lắng nghe ạ!"*

---

> ### 💡 BỘ 3 CÂU HỎI PHẢN BIỆN "TỦ" & GỢI Ý TRẢ LỜI DÀNH CHO PHAN DUY AN
> 
> 1. **❓ Thầy hỏi:** *"Em lấy con số 13.5 phút ở quầy và 510 phút ở kho từ đâu ra? Có đáng tin cậy không?"*  
>    👉 **Duy An trả lời:** *"Dạ thưa Thầy, do đây là đồ án môn học và chính sách bảo mật nội bộ của FPT Retail, nhóm không thể can thiệp vào log hệ thống ERP của công ty. Vì vậy, con số 13.5 phút ở quầy và 510 phút ở kho được nhóm xây dựng bằng **Phương pháp Ước lượng định mức công việc và Mô phỏng học thuật (Process Simulation)** chuẩn BPM: Nhóm xuất phát từ trải nghiệm thực tế của người tiêu dùng khi đi mua thuốc, kết hợp với các tiêu chuẩn nghiệp vụ ngành Dược (GPP). Nhóm phân rã quy trình thành 12 tác vụ cụ thể ở Bảng 5.2 và gán thời gian định mức hợp lý cho từng bước nhằm tạo ra một mô hình số liệu AS-IS để làm căn cứ đối chứng khoa học cho việc đo lường hiệu quả cắt giảm ở mô hình TO-BE ạ."*
> 
> 2. **❓ Thầy hỏi:** *"Giữa 3 nút thắt ở Slide 46, theo em nút thắt nào là nghiêm trọng nhất?"*  
>    👉 **Duy An trả lời:** *"Dạ thưa Thầy, theo phân tích của nhóm thì **Nút thắt Thông tin (Data Silo)** là nghiêm trọng nhất. Bởi vì nếu hệ thống POS tại quầy và WMS tại kho không liên thông dữ liệu thời gian thực (Real-time), thì dược sĩ vẫn sẽ không biết chính xác vị trí thuốc, thủ kho vẫn phải đếm tay và hệ thống không thể chạy thuật toán FEFO tự động. Khi tháo gỡ được nút thắt thông tin bằng hạ tầng ERP/WMS tích hợp, hai nút thắt vận hành và hạn dùng sẽ được tự động hóa theo ạ."*
> 
> 3. **❓ Thầy hỏi:** *"Tại sao tỷ lệ lãng phí NVA tại kho lại cao kỷ lục tới 73.5%?"*  
>    👉 **Duy An trả lời:** *"Dạ thưa Thầy, tỷ lệ NVA tại kho cao kỷ lục là do **riêng khâu kiểm kê định kỳ thủ công đã ngốn tới 240 phút** trong tổng 510 phút chu kỳ. Việc nhân viên phải đếm tay từng hộp thuốc trên kệ, đối chiếu giấy tờ và nhập lại vào máy tính hoàn toàn không tạo thêm giá trị gia tăng nào cho khách hàng (thuần túy là NVA). Sang mô hình TO-BE khi áp dụng máy quét PDA và mã Barcode, thời gian này sẽ được cắt giảm hơn 60% ạ."*

---

### 👤 NGƯỜI SỐ 5: TRỊNH CHÍ NGUYÊN (Slide 47 – 54)
*Mục tiêu: Giới thiệu giải pháp cải tiến TO-BE thuyết phục, sơ đồ BPMN TO-BE mới và đánh giá tính khả thi.*

- **Slide 47: Trang phân cách Chương 6**
  > *"Em xin chào Thầy và các bạn, em là Trịnh Chí Nguyên. Em xin phép trình bày Chương 6: Đề xuất Cải tiến Quy trình Nghiệp vụ với mô hình mục tiêu TO-BE."*

- **Slide 48: 6.1. Mục tiêu cải tiến**
  > *"Mục tiêu cải tiến được lượng hóa bằng các KPI cụ thể: Rút ngắn thời gian phục vụ tại quầy từ **13.5 phút xuống còn 4 – 5 phút/khách** (giảm khoảng **60% – 63%**); đưa tỷ lệ sai lệch kho từ 8% xuống dưới 1%; và nâng chỉ số hài lòng khách hàng NPS lên mức 65+."*

- **Slide 49: 6.2. Đề xuất cải tiến quy trình bán thuốc**
  > *"Nhóm đề xuất 4 giải pháp số hóa đột phá tại quầy:
  > 1. Triển khai Kiosk lấy số tự phục vụ để phân luồng khách mua theo đơn và khách cần tư vấn.
  > 2. Nâng cấp POS thông minh nhận diện khách hàng qua mã QR để hiển thị ngay lịch sử bệnh án và dị ứng thuốc.
  > 3. Tích hợp sơ đồ kho ảo trên màn hình POS, chỉ rõ thuốc ở kệ nào, ngăn nào.
  > 4. Chuyển sang thanh toán không tiền mặt và hóa đơn điện tử tự động qua Zalo/App."*

- **Slide 50: 6.3. Đề xuất cải tiến quy trình quản lý kho**
  > *"Tại hệ thống kho: Nhóm đề xuất trang bị thiết bị cầm tay PDA quét mã Barcode/QR 100% lô hàng; cài đặt thuật toán WMS ép buộc xuất hàng nghiêm ngặt theo chuẩn FEFO (hạn gần xuất trước); và thiết lập bot cảnh báo tự động khi tồn kho xuống dưới mức an toàn."*

- **Slide 51: 6.4. Ứng dụng công nghệ hỗ trợ cải tiến**
  > *"Các giải pháp công nghệ làm đòn bẩy bao gồm: Máy quét mã vạch không dây PDA, hạ tầng Real-time ERP đồng bộ dữ liệu tức thời, thuật toán AI dự báo nhu cầu bổ sung hàng và tính năng tự động gửi thông báo nhắc uống thuốc trên App Long Châu."*

- **Slide 52: 6.5. Mô hình BPMN TO-BE**
  > *"Trên màn hình là 2 sơ đồ BPMN 2.0 TO-BE đã được nhóm thiết kế lại hoàn chỉnh cho Quy trình Bán thuốc và Quản lý kho. Các tác vụ thủ công (Manual Task) đã được thay thế hoàn toàn bằng Service Task tự động của hệ thống, bổ sung các Gateway tự động kiểm tra FEFO và gửi thông điệp Real-time."*

- **Slide 53: 6.6. So sánh quy trình AS-IS và TO-BE**
  > *"Bảng so sánh 5 tiêu chí trên slide minh chứng sự vượt trội của TO-BE: Loại bỏ 70% thao tác thừa NVA; thời gian phục vụ tại quầy giảm mạnh từ 13.5 phút xuống 4-5 phút; dữ liệu kho liên thông thời gian thực 100% và chỉ số thiện cảm khách hàng tăng trưởng rõ rệt."*

- **Slide 54: 6.7. Đánh giá tính khả thi và lợi ích kỳ vọng**
  > *"Dự án có tính khả thi rất cao nhờ tiềm lực công nghệ và tài chính của tập đoàn mẹ FPT Retail. Thời gian thu hồi vốn (ROI) ước tính dưới 2 năm. Lộ trình triển khai 12 tháng chia làm 3 giai đoạn: Chuẩn bị thiết kế (Tháng 1-3), Triển khai Pilot (Tháng 4-6), và Mở rộng toàn chuỗi (Tháng 7-12). Cuối cùng, xin mời bạn Ngô Quốc Chung tổng kết đề tài tại Chương 7."*

---

### 👤 NGƯỜI SỐ 6: NGÔ QUỐC CHUNG (Slide 55 – 59)
*Mục tiêu: Đúc kết 5 đóng góp cốt lõi, nhìn nhận trung thực 4 rào cản học thuật, định hình 6 hướng phát triển chiến lược và tự tin mở đầu phiên phản biện Q&A.*

- **Slide 55: Trang phân cách Chương 7 – Tổng kết & Định hướng Tương lai**
  > *"Kính thưa Thầy ThS. Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên! Em là Ngô Quốc Chung, xin phép được đại diện Nhóm 15 trình bày phần cuối của buổi báo cáo: **Chương 7 – Kết luận và Hướng phát triển** (Slide 55 đến Slide 59). Tại chương kết này, nhóm sẽ đúc kết 5 kết quả đạt được, nhìn nhận khách quan 4 hạn chế và đề xuất 6 hướng đi chiến lược trong tương lai."*

- **Slide 56: 7.1. Kết quả đạt được của Đề tài**
  > *"Kính thưa Thầy và Hội đồng, xuyên suốt quá trình nghiên cứu, nhóm đã khép kín trọn vẹn vòng đời BPM với **5 đóng góp cốt lõi**:
  > 1. **Khảo sát & Kiến trúc 10 quy trình:** Chuẩn hóa toàn bộ dòng chảy nghiệp vụ của FPT Long Châu theo 3 tầng Michael Porter (Quản lý - Cốt lõi - Hỗ trợ) và lập ma trận định lượng chọn ra 6 quy trình trọng điểm.
  > 2. **Mô hình hóa BPMN 2.0 AS-IS:** Thiết kế chuẩn mực 6 sơ đồ hiện trạng dạng Swim lane phân vai rõ ràng, số hóa toàn diện quy trình giấy tờ thủ công.
  > 3. **Website SPA trực quan hóa:** Xây dựng ứng dụng web hiện đại (HTML5, Tailwind, JS ES6+) với trình xem Vector SVG HD và tính năng so sánh trực tiếp AS-IS vs TO-BE.
  > 4. **Phân tích lãng phí Lean & Root-Cause:** Định lượng dòng giá trị (Quầy bán NVA 48.2%, Kho NVA 73.5%), nhận diện 7 lãng phí Lean và ứng dụng Ishikawa 6M cùng 5 Whys chỉ điểm nguyên nhân gốc rễ.
  > 5. **Thiết kế TO-BE & Lộ trình 12 tháng:** Xây dựng 2 sơ đồ TO-BE tích hợp 4 đòn bẩy công nghệ số (PDA, Real-time ERP, OMS, AI), cắt giảm 63% thời gian và vạch lộ trình khả thi với ROI dưới 2 năm."*

- **Slide 57: 7.2. Nhìn nhận Khách quan Hạn chế của Đề tài**
  > *"Trên tinh thần trung thực học thuật, nhóm thẳng thắn nhìn nhận **4 rào cản** của đề tài:
  > 1. **Về bảo mật dữ liệu:** Do chính sách bảo mật của FPT Retail, nhóm không truy xuất trực tiếp database ERP nội bộ. Dữ liệu chu kỳ thời gian và chi phí dựa trên quan sát thực địa, đóng vai khách hàng và mô phỏng học thuật nên có sai số nhất định.
  > 2. **Về môi trường thực nghiệm:** Các giải pháp TO-BE mới dừng lại ở mô hình thiết kế chuẩn và phân tích lý thuyết, chưa có điều kiện thử nghiệm thực tế tại một nhà thuốc Long Châu để đo lường ROI ngoài đời thực.
  > 3. **Về phạm vi đào sâu:** Do giới hạn thời gian đồ án môn học, nhóm chỉ phân tích bóc tách công cụ sâu cho 2 quy trình then chốt (Bán thuốc & Quản lý kho); 4 quy trình còn lại dừng ở mức AS-IS.
  > 4. **Về kiến trúc website:** Ứng dụng hiện tại là Front-end SPA mô phỏng tĩnh, chưa tích hợp Backend cơ sở dữ liệu động và chưa có BPMN Execution Engine (Camunda/Flowable) để tự động điều phối quy trình thực."*

- **Slide 58: 7.3. Hướng phát triển và Tiềm năng Ứng dụng**
  > *"Từ những hạn chế đó, nhóm đề xuất **6 định hướng chiến lược** để tiếp tục hoàn thiện và đưa giải pháp vào ứng dụng thực tế:
  > 1. **Tối ưu toàn chuỗi giá trị:** Mở rộng phân tích Lean và thiết kế TO-BE cho 4 quy trình còn lại nhằm đồng bộ hóa toàn bộ chuỗi cung ứng.
  > 2. **Xây dựng hệ sinh thái BPMS hoàn chỉnh:** Bổ sung Backend và tích hợp BPMN Engine (như Camunda hay Flowable) để biến website thành hệ thống quản trị và giao việc tự động.
  > 3. **Thực nghiệm Pilot:** Phối hợp triển khai thí điểm tại 1-2 nhà thuốc Long Châu trong 1-3 tháng để thu thập số liệu thực chứng minh hiệu quả.
  > 4. **Tích hợp Process Mining:** Khai phá Event Logs thực từ hệ thống ERP/POS để tự động tái hiện quy trình thực và phát hiện điểm nghẽn vô hình.
  > 5. **Tự động hóa bằng RPA:** Nhúng robot phần mềm xử lý tự động các tác vụ lặp lại như đối chiếu hóa đơn và kiểm kê kho.
  > 6. **Chuỗi lạnh Vaccine & Benchmarking:** Chuẩn hóa quy trình chuỗi lạnh GSP/GDP cho Trung tâm Tiêm chủng Long Châu và đối chuẩn năng lực vận hành với các chuỗi đối thủ."*

- **Slide 59: Lời cảm ơn & Kính mời Q&A Phản biện**
  > *"Kính thưa Thầy và Hội đồng, bài báo cáo đồ án môn học Quản trị Quy trình Nghiệp vụ của Nhóm 15 đến đây xin được phép kết thúc! Nhóm chúng em xin bày tỏ lòng biết ơn sâu sắc nhất đến ThS. Hà Lê Hoài Trung đã tận tình định hướng và hướng dẫn nhóm hoàn thành đồ án này.
  > Kính mời Thầy cùng toàn thể Hội đồng quét mã QR trên màn hình hoặc nhấp vào liên kết để trải nghiệm trực tiếp Website Mô phỏng Quy trình do nhóm tự phát triển.
  > Nhóm chúng em rất mong nhận được những nhận xét, đóng góp quý báu từ Thầy và Hội đồng, và chúng em xin sẵn sàng lắng nghe, giải trình các câu hỏi phản biện ạ! Em xin chân thành cảm ơn!"*

---

## ⏱️ GỢI Ý ĐIỀU PHỐI VÀ LƯU Ý KHI THUYẾT TRÌNH TRỰC TIẾP
1. **Phím tắt chuyển slide:** Bấm phím `Mũi tên phải` hoặc `Space` để tiến 1 slide, `Mũi tên trái` để lùi 1 slide; bấm `F` để bật toàn màn hình; bấm `B` để mở nhanh trình phóng to BPMN.
2. **Không đọc slide chữ:** Mắt hướng về Thầy Cô và Hội đồng, chỉ nhìn lướt slide để nắm nhịp.
3. **Thống nhất số liệu khi trả lời phản biện:**
   - Thời gian bán thuốc AS-IS: **13.5 phút** (VA 6.0' ~44.4%, BVA 1.0' ~7.4%, NVA 6.5' ~48.2%).
   - Thời gian bán thuốc TO-BE: **4 – 5 phút** (giảm ~60% - 63%).
   - Phạm vi nghiên cứu: **10 quy trình** khảo sát $\rightarrow$ **6 quy trình** mô hình hóa AS-IS & đưa lên Website $\rightarrow$ **2 quy trình** phân tích sâu & đề xuất TO-BE.
   - Nguồn số liệu: Báo cáo thường niên FPT Retail 2023 - 2024 (1.800+ nhà thuốc) và mô phỏng học thuật (academic simulation).
