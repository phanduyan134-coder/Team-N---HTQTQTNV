# CHƯƠNG 7: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

Đồ án "Phân tích và cải tiến quy trình nghiệp vụ tại FPT Long Châu" đã trải qua một quá trình nghiên cứu, từ việc khảo sát hiện trạng, phân tích các điểm nghẽn đến việc đề xuất các giải pháp tối ưu hóa dựa trên nền tảng Quản trị quy trình nghiệp vụ (BPM). Chương 7 sẽ tổng kết lại toàn bộ những kết quả cốt lõi mà đề tài đã đạt được so với mục tiêu ban đầu đặt ra. Đồng thời, nhóm nghiên cứu cũng nhìn nhận một cách khách quan những mặt còn hạn chế trong quá trình thực hiện do các rào cản khách quan và chủ quan. Từ đó, báo cáo sẽ vạch ra những hướng phát triển tiềm năng trong tương lai, mở ra cơ hội hoàn thiện và ứng dụng kết quả nghiên cứu vào môi trường vận hành thực tế của chuỗi bán lẻ dược phẩm.

## 7.1. Kết quả đạt được

Trong suốt quá trình thực hiện, đồ án đã bám sát các mục tiêu ban đầu và đạt được những kết quả đáng ghi nhận trên cả phương diện lý thuyết lẫn thực tiễn. Những đóng góp của đề tài được thể hiện qua các khía cạnh sau:

Thứ nhất, về việc khảo sát và phân loại quy trình, nhóm nghiên cứu đã xây dựng thành công kiến trúc quy trình nghiệp vụ tổng thể cho FPT Long Châu. Dựa trên mô hình phân lớp chuẩn, đề tài đã nhận diện và phân loại 10 quy trình cốt lõi thành 3 tầng: tầng quản lý, tầng cốt lõi và tầng hỗ trợ. Từ đó, nhóm đã sử dụng các tiêu chí định lượng để chọn lọc ra 6 quy trình trọng điểm mang tính quyết định đối với chuỗi giá trị của doanh nghiệp để tập trung mô phỏng và phân tích chuyên sâu.

Thứ hai, về mặt công nghệ và mô phỏng, đồ án đã phát triển thành công một website mô phỏng quy trình nghiệp vụ chuyên biệt. Sử dụng các công nghệ web hiện đại như React.js kết hợp với thư viện bpmn-js, website cho phép hiển thị trực quan sơ đồ của 6 quy trình được chọn. Điểm nổi bật của hệ thống là khả năng so sánh trực tiếp cấu trúc giữa hai mô hình hiện trạng (AS-IS) và mục tiêu (TO-BE), giúp người dùng dễ dàng nhận diện những thay đổi và cải tiến đã được đề xuất, qua đó gia tăng tính tương tác và trực quan cho nghiên cứu.

Thứ ba, về mô hình hóa hiện trạng, đề tài đã áp dụng chuẩn OMG BPMN 2.0 để thiết kế sơ đồ quy trình AS-IS cho 6 luồng công việc chính. Các Sơ đồ BPMN này được xây dựng với cấu trúc **swim lane** (làn bơi) rõ ràng, thể hiện chi tiết sự phân công trách nhiệm giữa các phòng ban, tác nhân, hệ thống thông tin, cũng như luồng dữ liệu (data object) và luồng trình tự (sequence flow) trong từng quy trình. Việc mô hình hóa này đã số hóa thành công các hoạt động vận hành thủ công trên giấy tờ.

Thứ tư, về mặt phân tích nghiệp vụ, nhóm đã vận dụng hệ thống các phương pháp luận BPM chuẩn mực. Bằng cách phân tích phân loại giá trị (VA/BVA/NVA), nhóm đã định lượng được thời gian lãng phí trong các chu trình. Áp dụng tư duy quản trị tinh gọn (Lean Management), đề tài đã nhận diện các loại lãng phí hiện hữu. Hơn nữa, thông qua biểu đồ xương cá (Fishbone Diagram) và phương pháp 5 Whys, nhóm đã đi sâu phân tích và chỉ ra được nguyên nhân gốc rễ (root cause) của những điểm nghẽn (bottleneck) trong 2 quy trình trọng điểm nhất là Quản lý kho và Bán thuốc tại nhà thuốc.

Cuối cùng, về mặt đề xuất cải tiến, đồ án không chỉ dừng lại ở việc chỉ ra lỗi mà còn cung cấp một bộ giải pháp toàn diện. Đề tài đã thiết kế các Sơ đồ BPMN quy trình mục tiêu (TO-BE) tương ứng, minh họa cách thức tích hợp công nghệ mới nhằm loại bỏ các tác vụ NVA. Cùng với đó, nhóm đã vạch ra lộ trình triển khai chi tiết, đảm bảo tính khả thi cao khi ứng dụng vào thực tiễn, đóng góp trực tiếp vào chiến lược chuyển đổi số của FPT Long Châu.

## 7.2. Hạn chế của đề tài

Mặc dù đã cố gắng tiếp cận vấn đề một cách hệ thống và khoa học, đồ án vẫn không tránh khỏi một số hạn chế nhất định do những rào cản khách quan và chủ quan. Việc nhìn nhận rõ những điểm yếu này là cơ sở quan trọng để định hướng cho các nghiên cứu tiếp theo.

Hạn chế lớn nhất của đề tài xuất phát từ nguồn dữ liệu đầu vào. Do chính sách bảo mật thông tin nội bộ của FPT Long Châu, nhóm nghiên cứu không có quyền truy cập trực tiếp vào hệ thống quản trị nguồn lực doanh nghiệp (ERP) cũng như các tài liệu quy trình vận hành nội bộ. Dữ liệu sử dụng để mô hình hóa chủ yếu được tổng hợp từ phương pháp quan sát thực tế tại các điểm bán, đóng vai khách hàng, nghiên cứu tài liệu công khai và phỏng vấn giả định. Do đó, một số thông số về thời gian (cycle time), giả định cấu trúc luồng công việc phức tạp phía sau có thể mang tính ước lệ và chưa phản ánh hoàn toàn chính xác 100% thực tế nội bộ của doanh nghiệp.

Thứ hai, các đề xuất cải tiến TO-BE và giải pháp tối ưu hóa mới chỉ dừng lại ở mức độ thiết kế mô hình và phân tích lý thuyết. Đề tài chưa có cơ hội thực nghiệm đo lường kết quả tại một nhà thuốc thực tế. Vì vậy, nhóm chưa thể thu thập dữ liệu thực nghiệm sau cải tiến để chứng minh bằng các con số định lượng về mức độ gia tăng hiệu suất hay giảm thiểu chi phí (ROI) của dự án.

Thứ ba, do giới hạn về mặt thời gian và nguồn lực nhóm của một đồ án môn học, nhóm chỉ có thể tiến hành phân tích bóc tách chuyên sâu bằng công cụ (Lean, Fishbone, 5 Whys) cho 2 trên tổng số 6 quy trình được lựa chọn. Việc chưa đi sâu toàn diện 4 quy trình còn lại là một sự thiếu sót.

Cuối cùng, về sản phẩm phần mềm, website mô phỏng hiện tại chủ yếu là một ứng dụng Front-end Single Page Application (SPA) dùng để hiển thị và so sánh các sơ đồ tĩnh. Ứng dụng chưa được xây dựng một hệ thống Backend hoàn chỉnh thực tế, chưa có khả năng lưu trữ dữ liệu động từ người dùng hay thực thi tự động (process execution) trên nền tảng thực tế.

## 7.3. Hướng phát triển

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

## Phụ lục A: Danh sách viết tắt

| Viết tắt | Ý nghĩa tiếng Anh | Ý nghĩa tiếng Việt |
| :--- | :--- | :--- |
| **AI** | Artificial Intelligence | Trí tuệ nhân tạo |
| **API** | Application Programming Interface | Giao diện lập trình ứng dụng |
| **AS-IS** | As-Is Process Model | Mô hình quy trình hiện trạng |
| **BPM** | Business Process Management | Quản trị quy trình nghiệp vụ |
| **BPMN** | Business Process Model and Notation | Mô hình và Ký hiệu Quy trình Nghiệp vụ |
| **BPMS** | Business Process Management Suite | Hệ thống quản trị quy trình nghiệp vụ |
| **BVA** | Business Value-Added | Hoạt động tạo giá trị cho doanh nghiệp |
| **CRM** | Customer Relationship Management | Quản lý quan hệ khách hàng |
| **EDI** | Electronic Data Interchange | Trao đổi dữ liệu điện tử |
| **ERP** | Enterprise Resource Planning | Hoạch định nguồn lực doanh nghiệp |
| **FEFO** | First Expired, First Out | Hết hạn trước, Xuất trước |
| **GPP** | Good Pharmacy Practice | Thực hành tốt cơ sở bán lẻ thuốc |
| **KPI** | Key Performance Indicator | Chỉ số đánh giá thực hiện công việc |
| **NCC** | Supplier / Vendor | Nhà cung cấp |
| **NPS** | Net Promoter Score | Chỉ số khách hàng thiện cảm |
| **NVA** | Non-Value-Added | Hoạt động không tạo ra giá trị (Lãng phí) |
| **POS** | Point of Sale | Điểm bán hàng (Phần mềm bán hàng) |
| **QA** | Quality Assurance | Đảm bảo chất lượng |
| **RFID** | Radio Frequency Identification | Nhận dạng qua tần số vô tuyến |
| **ROI** | Return on Investment | Tỷ suất hoàn vốn |
| **RPA** | Robotic Process Automation | Tự động hóa quy trình bằng robot |
| **SKU** | Stock Keeping Unit | Đơn vị lưu kho |
| **SPA** | Single Page Application | Ứng dụng trang đơn |
| **TO-BE** | To-Be Process Model | Mô hình quy trình mục tiêu (đề xuất) |
| **VA** | Value-Added | Hoạt động tạo giá trị gia tăng |
| **WMS** | Warehouse Management System | Hệ thống quản lý kho |

## Phụ lục B: Mã JSON mẫu cấu trúc dữ liệu website

Dưới đây là cấu trúc JSON giả định được sử dụng trong hệ thống website mô phỏng để lưu trữ và render các mô hình BPMN (quy trình bán thuốc tại nhà thuốc).

```json
{
  "id": "process_ban_thuoc_tai_nha_thuoc",
  "name": "Quy trình bán thuốc tại nhà thuốc",
  "category": "Core Process",
  "description": "Luồng công việc tư vấn, lấy thuốc và thanh toán trực tiếp tại nhà thuốc Long Châu.",
  "bpmn_xml_asis": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bpmn:definitions>...</bpmn:definitions>",
  "bpmn_xml_tobe": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><bpmn:definitions>...</bpmn:definitions>",
  "lanes": ["Khách hàng", "Dược sĩ", "Hệ thống POS", "Thu ngân"],
  "analysis": {
    "cycle_time_asis_minutes": 13.5,
    "cycle_time_tobe_minutes": 8.0,
    "waste_identified": [
      "Chờ đợi (Waiting)", 
      "Di chuyển (Motion)", 
      "Quy trình thừa (Over-processing)"
    ],
    "root_cause_summary": "Phần mềm POS chưa tích hợp sâu với WMS, thiếu tính năng cảnh báo tồn kho và tìm kiếm định vị hàng hóa tự động."
  }
}
```

## Phụ lục C: Bảng đánh giá tiêu chí lựa chọn quy trình

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

## Phụ lục D: Danh sách câu hỏi khảo sát (giả định)

Dưới đây là danh sách các câu hỏi phỏng vấn giả định dành cho nhân viên kho và dược sĩ tại cửa hàng, nhằm thu thập dữ liệu xây dựng sơ đồ quy trình AS-IS:

**Dành cho Dược sĩ tư vấn tại nhà thuốc:**
1. Xin bạn mô tả chi tiết các bước từ khi một khách hàng bước vào cửa hàng cho đến khi họ nhận thuốc và ra về?
2. Trong quá trình tư vấn và tra cứu thuốc, bạn sử dụng phần mềm POS như thế nào? Hệ thống có gợi ý vị trí thuốc trên kệ không?
3. Bạn thường mất bao nhiêu thời gian trung bình để xử lý một đơn thuốc có kê toa phức tạp?
4. Những khó khăn hoặc lỗi thường gặp nhất khi bạn phải đi tìm thuốc trên kệ là gì?
5. Việc phối hợp giữa bạn (người tư vấn) và thu ngân diễn ra như thế nào? Có xảy ra tình trạng "nút thắt cổ chai" ở khâu thanh toán không?
6. Bạn xử lý ra sao khi phần mềm báo còn hàng nhưng trên kệ thực tế lại hết hàng?

**Dành cho Nhân viên/Quản lý Kho:**
7. Bạn hãy mô tả luồng công việc khi nhận một lô hàng mới từ nhà cung cấp đưa vào kho bãi?
8. Công cụ hoặc thiết bị nào đang được sử dụng để kiểm đếm số lượng hàng hóa khi nhập/xuất kho? (Sổ giấy, phần mềm trên máy tính, hay máy quét mã vạch di động?)
9. Việc áp dụng nguyên tắc xuất hàng FEFO (hết hạn trước, xuất trước) đang được hệ thống quản lý tự động hay phụ thuộc vào trí nhớ của nhân viên?
10. Mỗi khi xuất hàng đi các cửa hàng bán lẻ, bạn mất khoảng bao lâu để nhặt và đóng gói hàng? Điểm nào làm bạn tốn thời gian nhất?
11. Quy trình kiểm kê định kỳ diễn ra như thế nào? Có gây gián đoạn lớn đến hoạt động xuất nhập kho hàng ngày không?
12. Theo bạn, đâu là khâu lãng phí thời gian và dễ xảy ra sai sót con người nhất trong quá trình quản lý kho hiện tại?
