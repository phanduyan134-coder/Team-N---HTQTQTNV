# CHƯƠNG 6: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

Đồ án "Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu" đã trải qua một quá trình nghiên cứu, từ việc khảo sát hiện trạng, phân tích các điểm nghẽn đến việc đề xuất các giải pháp tối ưu hóa dựa trên nền tảng Quản trị quy trình nghiệp vụ (BPM). Chương 6 sẽ tổng kết lại toàn bộ những kết quả cốt lõi mà đề tài đã đạt được so với mục tiêu ban đầu đặt ra. Đồng thời, nhóm nghiên cứu cũng nhìn nhận một cách khách quan những mặt còn hạn chế trong quá trình thực hiện do các rào cản khách quan và chủ quan. Từ đó, báo cáo sẽ vạch ra những hướng phát triển tiềm năng trong tương lai, mở ra cơ hội hoàn thiện và ứng dụng kết quả nghiên cứu vào môi trường vận hành thực tế của chuỗi bán lẻ dược phẩm.

## 6.1. Kết quả đạt được

Trong suốt quá trình thực hiện, đồ án đã bám sát các mục tiêu ban đầu và đạt được những kết quả đáng ghi nhận trên cả phương diện lý thuyết lẫn thực tiễn. Những đóng góp của đề tài được thể hiện qua các khía cạnh sau:

Thứ nhất, về việc khảo sát và phân loại quy trình, nhóm nghiên cứu đã xây dựng thành công kiến trúc quy trình nghiệp vụ tổng thể cho FPT Long Châu. Dựa trên mô hình phân lớp chuẩn, đề tài đã nhận diện và phân loại 10 quy trình cốt lõi thành 3 tầng: tầng quản lý, tầng cốt lõi và tầng hỗ trợ. Từ đó, nhóm đã sử dụng các tiêu chí định lượng để chọn lọc ra 6 quy trình trọng điểm mang tính quyết định đối với chuỗi giá trị của doanh nghiệp để tập trung mô phỏng và phân tích chuyên sâu.

Thứ hai, về mô hình hóa hiện trạng, đề tài đã áp dụng chuẩn OMG BPMN 2.0 để thiết kế sơ đồ quy trình AS-IS cho 6 luồng công việc chính. Các Sơ đồ BPMN này được xây dựng với cấu trúc **swim lane** (làn bơi) rõ ràng, thể hiện chi tiết sự phân công trách nhiệm giữa các phòng ban, tác nhân, hệ thống thông tin, cũng như luồng dữ liệu (data object) và luồng trình tự (sequence flow) trong từng quy trình. Việc mô hình hóa này đã số hóa thành công các hoạt động vận hành thủ công trên giấy tờ.

Thứ ba, về mặt phân tích nghiệp vụ, nhóm đã vận dụng hệ thống các phương pháp luận BPM chuẩn mực. Bằng cách phân tích phân loại giá trị (VA/BVA/NVA), nhóm đã định lượng được thời gian lãng phí trong các chu trình. Áp dụng tư duy quản trị tinh gọn (Lean Management), đề tài đã nhận diện các loại lãng phí hiện hữu. Hơn nữa, thông qua biểu đồ xương cá (Fishbone Diagram) và phương pháp 5 Whys, nhóm đã đi sâu phân tích và chỉ ra được nguyên nhân gốc rễ (root cause) của những điểm nghẽn (bottleneck) trong 2 quy trình trọng điểm nhất là Quản lý kho và Bán thuốc tại nhà thuốc.

Thứ tư, về mặt đề xuất cải tiến, đồ án không chỉ dừng lại ở việc chỉ ra lỗi mà còn cung cấp một bộ giải pháp toàn diện. Đề tài đã thiết kế các Sơ đồ BPMN quy trình mục tiêu (TO-BE) tương ứng, minh họa cách thức tích hợp công nghệ mới nhằm loại bỏ các tác vụ NVA. Cùng với đó, nhóm đã vạch ra lộ trình triển khai chi tiết, đảm bảo tính khả thi cao khi ứng dụng vào thực tiễn, đóng góp trực tiếp vào chiến lược chuyển đổi số của FPT Long Châu.

## 6.2. Hạn chế của đề tài

Mặc dù đã cố gắng tiếp cận vấn đề một cách hệ thống và khoa học, đồ án vẫn không tránh khỏi một số hạn chế nhất định do những rào cản khách quan và chủ quan. Việc nhìn nhận rõ những điểm yếu này là cơ sở quan trọng để định hướng cho các nghiên cứu tiếp theo.

Hạn chế lớn nhất của đề tài xuất phát từ nguồn dữ liệu đầu vào. Do chính sách bảo mật thông tin nội bộ của FPT Long Châu, nhóm nghiên cứu không có quyền truy cập trực tiếp vào hệ thống quản trị nguồn lực doanh nghiệp (ERP) cũng như các tài liệu quy trình vận hành nội bộ. Dữ liệu sử dụng để mô hình hóa chủ yếu được tổng hợp từ phương pháp quan sát thực tế tại các điểm bán, đóng vai khách hàng, nghiên cứu tài liệu công khai và phỏng vấn giả định. Do đó, một số thông số về thời gian (cycle time), giả định cấu trúc luồng công việc phức tạp phía sau có thể mang tính ước lệ và chưa phản ánh hoàn toàn chính xác 100% thực tế nội bộ của doanh nghiệp.

Thứ hai, các đề xuất cải tiến TO-BE và giải pháp tối ưu hóa mới chỉ dừng lại ở mức độ thiết kế mô hình và phân tích lý thuyết. Đề tài chưa có cơ hội thực nghiệm đo lường kết quả tại một nhà thuốc thực tế. Vì vậy, nhóm chưa thể thu thập dữ liệu thực nghiệm sau cải tiến để chứng minh bằng các con số định lượng về mức độ gia tăng hiệu suất hay giảm thiểu chi phí (ROI) của dự án.

Thứ ba, do giới hạn về mặt thời gian và nguồn lực nhóm của một đồ án môn học, nhóm chỉ có thể tiến hành phân tích bóc tách chuyên sâu bằng công cụ (Lean, Fishbone, 5 Whys) cho 2 trên tổng số 6 quy trình được lựa chọn. Việc chưa đi sâu toàn diện 4 quy trình còn lại là một sự thiếu sót.

## 6.3. Hướng phát triển

Dựa trên nền tảng những kết quả đã đạt được và nhận thức rõ những hạn chế còn tồn tại, nhóm nghiên cứu đề xuất một số hướng phát triển tiềm năng nhằm hoàn thiện và mở rộng đề tài trong tương lai:

Một là, mở rộng phân tích sâu các quy trình còn lại. Đề tài có thể được hoàn thiện bằng cách tiếp tục áp dụng các công cụ phân tích chuẩn mực (VA/BVA/NVA, Lean, root-cause) cho 4 quy trình còn lại đã được mô phỏng. Việc phân tích đồng bộ này sẽ giúp đánh giá được tác động qua lại giữa các luồng công việc, từ đó tối ưu hóa toàn bộ chuỗi giá trị thay vì chỉ tập trung vào một vài điểm nút cục bộ.

Hai là, phát triển website mô phỏng thành hệ thống BPMS hoàn chỉnh. Ứng dụng web hiện tại có thể được nâng cấp bổ sung thêm kiến trúc Backend (sử dụng Node.js, Spring Boot) và cơ sở dữ liệu thực thụ. Xa hơn, có thể tích hợp engine thực thi quy trình (như Camunda, Flowable) để biến website từ một công cụ vẽ sơ đồ tĩnh trở thành một nền tảng quản trị và tự động hóa quy trình nghiệp vụ (Business Process Management Suite) có khả năng cấp việc và theo dõi hiệu suất thực.

Ba là, tiến hành thực nghiệm pilot (thí điểm). Nhóm nghiên cứu có thể hợp tác với doanh nghiệp để đưa các quy trình TO-BE vào áp dụng thử nghiệm tại 1-2 nhà thuốc cụ thể của Long Châu. Việc chạy pilot sẽ thu thập được các bộ dữ liệu thực tế về thời gian, chi phí và mức độ hài lòng, làm cơ sở chứng minh tính đúng đắn của giải pháp trước khi nhân rộng trên toàn quốc.

Bốn là, tích hợp công nghệ Process Mining (Khai phá quy trình). Nhóm có thể nghiên cứu thu thập các tệp nhật ký sự kiện (event logs) từ hệ thống ERP, POS thực tế của doanh nghiệp để chạy trên các công cụ Process Mining. Công nghệ này sẽ hỗ trợ tự động vẽ lại chính xác 100% sơ đồ quy trình đang chạy thực tế mà không cần giả định, giúp phát hiện ra những "nút thắt cổ chai" vô hình mà con người không thể quan sát thủ công.

Năm là, ứng dụng RPA (Robotic Process Automation) cho tác vụ lặp lại. Các công việc như nhập liệu kiểm kê, trích xuất hóa đơn giấy tờ có thể được phân tích sâu để nhúng robot phần mềm (RPA) vào Sơ đồ BPMN TO-BE, giúp giải phóng hoàn toàn sức lao động thủ công, tăng tốc độ xử lý và giảm thiểu tối đa sai sót.

Sáu là, mở rộng phạm vi nghiên cứu sang chuỗi dược phẩm khác. Bộ khung phân tích (framework) và hệ thống quy trình chuẩn đã xây dựng có thể được tinh chỉnh để áp dụng phân tích cho các đối thủ cạnh tranh (như Pharmacity, An Khang) nhằm thực hiện đối chuẩn (benchmarking), góp phần chuẩn hóa năng lực vận hành cho toàn ngành bán lẻ y tế.

---

# TÀI LIỆU THAM KHẢO

Bộ Y tế. (2018). *Thông tư 02/2018/TT-BYT Quy định về Thực hành tốt cơ sở bán lẻ thuốc (GPP)*. Cổng thông tin điện tử Bộ Y tế.

Camunda. (2023). *BPMN 2.0 Tutorial: Get started with Process Modeling using BPMN*. Camunda Documentation. https://camunda.com/bpmn/

Dumas, M., La Rosa, M., Mendling, J., & Reijers, H. A. (2018). *Fundamentals of Business Process Management* (2nd ed.). Springer. https://doi.org/10.1007/978-3-662-56509-4

FPT Retail. (2023). *Báo cáo thường niên 2023: Vững vị thế, Sẵn sàng bứt phá*. Công ty Cổ phần Bán lẻ Kỹ thuật số FPT.

FPT Retail. (2024). *Chuỗi nhà thuốc FPT Long Châu*. https://nhathuoclongchau.com.vn

Harmon, P. (2014). *Business Process Change: A Business Process Management Guide for Managers and Process Professionals* (3rd ed.). Morgan Kaufmann.

Liker, J. K. (2004). *The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer*. McGraw-Hill.

Mangan, J., & Lalwani, C. (2016). *Global Logistics and Supply Chain Management* (3rd ed.). John Wiley & Sons.

Object Management Group (OMG). (2011). *Business Process Model and Notation (BPMN) Version 2.0.2*. https://www.omg.org/spec/BPMN/2.0.2/

React. (2024). *React Documentation: The library for web and native user interfaces*. https://react.dev/

Silver, B. (2011). *BPMN Method and Style, with BPMN Implementer's Guide* (2nd ed.). Cody-Cassidy Press.

Slack, N., Brandon-Jones, A., & Johnston, R. (2016). *Operations Management* (8th ed.). Pearson.

Vom Brocke, J., & Rosemann, M. (Eds.). (2015). *Handbook on Business Process Management 1: Introduction, Methods, and Information Systems* (2nd ed.). Springer.

Weske, M. (2019). *Business Process Management: Concepts, Languages, Architectures* (3rd ed.). Springer. https://doi.org/10.1007/978-3-662-59432-2

Womack, J. P., & Jones, D. T. (2003). *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press.

bpmn.io. (2024). *bpmn-js: A BPMN 2.0 rendering toolkit and web modeler*. https://bpmn.io/toolkit/bpmn-js/

---

# PHỤ LỤC

## Phụ lục A: Bảng đánh giá tiêu chí lựa chọn quy trình

Đánh giá trên thang điểm từ 1 đến 5 (1: Rất thấp, 5: Rất cao) cho 5 tiêu chí:
- C1: Mức độ phức tạp
- C2: Tần suất thực hiện
- C3: Tác động kinh doanh
- C4: Khả năng cải tiến
- C5: Khả năng thu thập dữ liệu

| STT | Tên quy trình | C1 | C2 | C3 | C4 | C5 | Tổng điểm | Kết quả |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Quản lý chuỗi cung ứng | 5 | 5 | 5 | 5 | 3 | **23** | Chọn |
| 2 | Bán thuốc online | 5 | 5 | 5 | 5 | 4 | **24** | Chọn |
| 3 | Bán thuốc tại nhà thuốc | 4 | 5 | 5 | 4 | 5 | **23** | Chọn |
| 4 | Quản lý kho | 4 | 5 | 4 | 4 | 3 | **20** | Chọn |
| 5 | Tuyển dụng và đào tạo | 3 | 4 | 4 | 4 | 4 | **19** | Chọn |
| 6 | Quản lý chất lượng | 4 | 3 | 5 | 3 | 3 | **18** | Chọn |
| 7 | Quản lý CNTT | 4 | 4 | 4 | 3 | 2 | **17** | Loại |
| 8 | Quản lý quan hệ KH (CRM) | 3 | 4 | 4 | 4 | 2 | **17** | Loại |
| 9 | Quản lý tài chính – Kế toán | 4 | 4 | 4 | 2 | 2 | **16** | Loại |
| 10 | Quản lý tuân thủ pháp lý & dược | 3 | 2 | 5 | 2 | 3 | **15** | Loại |

## Phụ lục B: Phiếu khảo sát và Bộ 20 câu hỏi phỏng vấn chuyên sâu (Rubric Tiêu chí 3.0)

Dưới đây là phiếu phỏng vấn chi tiết phục vụ công tác khám phá quy trình (Process Discovery) tại FPT Long Châu, được thiết kế theo đúng cấu trúc chuẩn hóa: 10 câu hỏi định tính (5 câu Có cấu trúc + 5 câu Không có cấu trúc) và 10 câu hỏi định lượng (5 câu Có cấu trúc + 5 câu Không có cấu trúc).

---

### PHIẾU KHẢO SÁT PHỎNG VẤN QUY TRÌNH NGHIỆP VỤ FPT LONG CHÂU

- **Đơn vị khảo sát:** Chuỗi nhà thuốc FPT Long Châu & Hệ thống Tổng kho phân phối.
- **Mục đích:** Thu thập dữ liệu vận hành thực tế (De facto process) phục vụ phân tích lãng phí, xác định điểm nghẽn và tái thiết kế quy trình BPMN 2.0.
- **Cam kết:** Dữ liệu phỏng vấn chỉ phục vụ mục đích nghiên cứu học thuật của đề tài.

---

#### PHẦN 1: 10 CÂU HỎI ĐỊNH TÍNH (QUALITATIVE INTERVIEW)

**A. 5 Câu hỏi Định tính Có cấu trúc (Structured Qualitative Questions):**

1. **[Dành cho Dược sĩ quầy]** Xin bạn đánh giá mức độ rõ ràng, chuẩn hóa và thuận tiện khi áp dụng của quy trình kiểm tra đơn thuốc kê toa (Rx) hiện nay tại nhà thuốc?
   - [ ] 1. Rất mơ hồ, khó áp dụng (thường xuyên lúng túng khi gặp đơn thuốc lạ)
   - [ ] 2. Chưa rõ ràng (còn phụ thuộc nhiều vào cảm tính của từng cá nhân)
   - [ ] 3. Bình thường (đáp ứng được các đơn thuốc phổ biến)
   - [ ] 4. Rõ ràng, dễ áp dụng (hướng dẫn cụ thể, dễ kiểm tra)
   - [ ] 5. Rất rõ ràng, chuẩn hóa xuất sắc (quy chuẩn GPP chặt chẽ, có danh mục đối chiếu nhanh)

2. **[Dành cho Dược sĩ quầy]** Khó khăn hoặc trở ngại phổ biến nhất mà bạn gặp phải trong quá trình tìm kiếm và nhặt thuốc trên kệ là gì?
   - [ ] A. Thuốc bị xếp sai vị trí mã kệ quy định do nhân viên ca trước để nhầm
   - [ ] B. Mẫu mã bao bì giữa các hàm lượng thuốc quá giống nhau dễ gây nhầm lẫn
   - [ ] C. Diện tích quầy chật hẹp, nhiều dược sĩ cùng di chuyển va chạm nhau vào giờ cao điểm
   - [ ] D. Phần mềm POS không hiển thị vị trí ngăn kệ cụ thể của từng mã hộp thuốc

3. **[Dành cho Quản lý / Nhân viên kho]** Quy trình kiểm soát hạn dùng và thực thi nguyên tắc FEFO (Hạn ngắn xuất trước) tại kho hiện nay đang được thực hiện chủ yếu bằng phương thức nào?
   - [ ] A. Dựa hoàn toàn vào trí nhớ và sự kiểm tra thủ công bằng mắt của thủ kho
   - [ ] B. Ghi chép thủ công ngày hết hạn trên thẻ kho giấy gắn tại đầu mỗi dãy kệ
   - [ ] C. Hệ thống phần mềm WMS tự động chỉ định chính xác vị trí pallet/lô hàng cần xuất
   - [ ] D. Kết hợp giữa thông báo trên phần mềm và đối soát lại bằng sổ tay trước khi bốc dỡ

4. **[Dành cho Dược sĩ quầy]** Khi tiếp nhận một đơn thuốc không hợp lệ (hết hạn quá 5 ngày, kê sai danh mục kiểm soát đặc biệt hoặc chữ bác sĩ không thể đọc được), cách xử lý chuẩn của bạn là:
   - [ ] A. Dược sĩ từ chối bán và giải thích quy định pháp luật y tế cho bệnh nhân
   - [ ] B. Bán các loại thuốc bổ trợ thông thường, chỉ từ chối thuốc kê toa đặc trị
   - [ ] C. Gọi điện trực tiếp cho bác sĩ theo số điện thoại ghi trên đơn để đối chiếu xác nhận
   - [ ] D. Hướng dẫn khách hàng quay lại cơ sở y tế khám bệnh để xin lại đơn thuốc mới

5. **[Dành cho Thủ kho / Bộ phận Mua hàng]** Xin bạn đánh giá mức độ thông suốt thông tin và tính chủ động giữa bộ phận Mua hàng và Kho bãi khi tiếp nhận các lô hàng nhập từ nhà cung cấp?
   - [ ] 1. Rất kém (thường xuyên bị động đột xuất khi xe hàng đến bến mới biết)
   - [ ] 2. Kém (thông báo trễ, không kịp bố trí nhân lực bốc dỡ và diện tích mặt bằng)
   - [ ] 3. Bình thường (thông báo lịch giao qua email hoặc ứng dụng chat Zalo)
   - [ ] 4. Tốt (có kế hoạch tiếp nhận và lịch điều phối xe trước 24 giờ)
   - [ ] 5. Rất tốt (dữ liệu đơn đặt hàng PO được đồng bộ thời gian thực trên hệ thống ERP)

**B. 5 Câu hỏi Định tính Không có cấu trúc (Unstructured Qualitative Questions):**

6. **[Dành cho Dược sĩ quầy]** Trong một ca làm việc vào khung giờ cao điểm (17h – 20h), khâu nào trong quy trình phục vụ từ lúc tiếp đón đến khi khách cầm thuốc ra về khiến bạn cảm thấy áp lực, mất nhiều thời gian và dễ xảy ra sai sót nhất? Nguyên nhân cốt lõi là do đâu?
   - *Ghi chép câu trả lời:* ...........................................................................................................................................

7. **[Dành cho Dược sĩ quầy]** Bạn có nhận xét gì về giao diện, tốc độ phản hồi và tính năng tra cứu thuốc của phần mềm POS đang sử dụng? Nếu được đề xuất thay đổi một tính năng để rút ngắn thời gian phục vụ khách, bạn sẽ đề xuất điều gì?
   - *Ghi chép câu trả lời:* ...........................................................................................................................................

8. **[Dành cho Nhân viên kho]** Trong các đợt kiểm kê định kỳ, những nguyên nhân thực tế nào dẫn đến tình trạng số liệu tồn kho hiển thị trên phần mềm không khớp với lượng thuốc thực tế đếm được trên kệ?
   - *Ghi chép câu trả lời:* ...........................................................................................................................................

9. **[Dành cho Chuyên viên QA / Dược sĩ]** Khi khách hàng đem thuốc quay lại quầy phản ánh về việc thuốc bị đổi màu, ẩm mốc, vỡ vỉ hoặc nghi ngờ về chất lượng, quy trình phối hợp thực tế giữa nhà thuốc, ban QA và nhà cung cấp diễn ra như thế nào?
   - *Ghi chép câu trả lời:* ...........................................................................................................................................

10. **[Dành cho mọi tác nhân]** Theo quan sát và kinh nghiệm thực tiễn của bạn, giải pháp công nghệ hoặc cải tiến quy trình nào sẽ giúp tối ưu hóa rõ rệt nhất năng suất làm việc và sự hài lòng của khách hàng tại FPT Long Châu?
    - *Ghi chép câu trả lời:* ...........................................................................................................................................

---

#### PHẦN 2: 10 CÂU HỎI ĐỊNH LƯỢNG (QUANTITATIVE INTERVIEW)

**A. 5 Câu hỏi Định lượng Có cấu trúc (Structured Quantitative Questions):**

11. **[Dành cho Dược sĩ quầy]** Thời gian trung bình để hoàn tất một lượt phục vụ khách mua thuốc kê đơn thông thường (từ lúc tiếp nhận đơn đến khi tư vấn, nhặt thuốc, thanh toán và in hóa đơn) là bao lâu?
    - [ ] A. Dưới 5 phút
    - [ ] B. Từ 5 – 8 phút
    - [ ] C. Từ 8 – 12 phút
    - [ ] D. Trên 12 phút

12. **[Dành cho Dược sĩ / Khách hàng]** Trong tổng thời gian một khách hàng có mặt tại nhà thuốc, thời gian khách hàng phải đứng chờ đợi (chờ tới lượt, chờ tra cứu hệ thống, chờ lấy thuốc) ước tính chiếm khoảng bao nhiêu phần trăm?
    - [ ] A. Dưới 20% tổng thời gian
    - [ ] B. Từ 20% – 40% tổng thời gian
    - [ ] C. Từ 40% – 60% tổng thời gian
    - [ ] D. Trên 60% tổng thời gian

13. **[Dành cho Quản lý kho]** Tỷ lệ sai lệch số liệu tồn kho giữa hệ thống máy tính và thực tế kiểm đếm tại tổng kho trung tâm thường dao động trong khoảng nào?
    - [ ] A. Dưới 1%
    - [ ] B. Từ 1% – 3%
    - [ ] C. Từ 3% – 5%
    - [ ] D. Từ 5% – 8%
    - [ ] E. Trên 8%

14. **[Dành cho Dược sĩ / Quản lý IT]** Trong một tháng làm việc, quầy thuốc gặp phải tình trạng hệ thống POS bị gián đoạn mạng, máy in bill bị kẹt hoặc phần mềm phản hồi chậm trên 10 giây khoảng bao nhiêu lần?
    - [ ] A. Dưới 1 lần / tháng
    - [ ] B. Từ 1 – 3 lần / tháng
    - [ ] C. Từ 4 – 6 lần / tháng
    - [ ] D. Trên 6 lần / tháng (gần như tuần nào cũng gặp sự cố)

15. **[Dành cho Dược sĩ quầy]** Trung bình trong một ca làm việc 8 tiếng, một dược sĩ tại cửa hàng phục vụ trực tiếp bao nhiêu lượt khách hàng?
    - [ ] A. Dưới 40 lượt khách
    - [ ] B. Từ 40 – 70 lượt khách
    - [ ] C. Từ 70 – 100 lượt khách
    - [ ] D. Trên 100 lượt khách

**B. 5 Câu hỏi Định lượng Không có cấu trúc (Unstructured Quantitative Questions):**

16. **[Dành cho Dược sĩ quầy]** Đối với một đơn thuốc trung bình gồm 3 đến 5 loại thuốc, bạn ước tính mất khoảng bao nhiêu giây hoặc bao nhiêu phút chỉ riêng cho thao tác đi lại giữa các dãy kệ để nhặt đủ thuốc?
    - *Số liệu ước tính:* .................................................... phút/đơn thuốc.

17. **[Dành cho Nhân viên kho]** Khi xe tải của nhà cung ứng tới cổng kho giao hàng, trung bình tài xế phải chờ đợi bao nhiêu phút từ lúc nộp phiếu giao nhận đến khi nhân viên kho bắt đầu kiểm đếm thực tế?
    - *Số liệu ước tính:* .................................................... phút/chuyến hàng.

18. **[Dành cho Nhân viên điều phối Online]** Trong các đợt cao điểm khuyến mãi hoặc thời tiết xấu, bạn ước tính có khoảng bao nhiêu phần trăm đơn hàng online đặt qua ứng dụng Long Châu bị giao trễ cam kết 30 phút hoặc bị khách hàng hủy đơn?
    - *Số liệu ước tính:* .................................................... % đơn hàng online.

19. **[Dành cho Quản lý kho / Kế toán kho]** Theo số liệu ghi nhận hàng năm, tỷ lệ tổn thất do thuốc và thực phẩm chức năng bị cận hạn sử dụng, hỏng bao bì phải đàm phán trả về nhà sản xuất hoặc tiêu hủy chiếm khoảng bao nhiêu phần trăm trên tổng giá trị hàng tồn trữ?
    - *Số liệu ước tính:* .................................................... % giá trị tồn kho/năm.

20. **[Dành cho Dược sĩ trưởng / Đào tạo]** Trung bình cần bao nhiêu ngày hoặc bao nhiêu giờ huấn luyện kèm cặp tại quầy để một dược sĩ mới tốt nghiệp có thể tự tin thao tác bán hàng, tư vấn thuốc đúng quy trình và sử dụng thành thạo phần mềm POS một cách độc lập?
    - *Số liệu ước tính:* .................................................... ngày đào tạo thực hành.

