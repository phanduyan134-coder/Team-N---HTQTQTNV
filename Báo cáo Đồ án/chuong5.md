# CHƯƠNG 5: PHÂN TÍCH QUY TRÌNH NGHIỆP VỤ

Trong bối cảnh môi trường kinh doanh bán lẻ dược phẩm ngày càng cạnh tranh gay gắt, việc chỉ mô hình hóa các quy trình nghiệp vụ hiện tại (AS-IS) là chưa đủ. Mục tiêu cốt lõi của chương này là tiến hành phân tích chuyên sâu các quy trình nghiệp vụ đã được mô hình hóa ở Chương 4, từ đó nhận diện chính xác các điểm nghẽn (bottleneck), những hoạt động không mang lại giá trị (NVA) và các loại lãng phí đang tồn tại trong hệ thống của FPT Long Châu. Việc phân tích quy trình đóng vai trò cực kỳ quan trọng, là cầu nối không thể thiếu giữa bức tranh hiện trạng và những đề xuất cải tiến trong tương lai. Nếu không có bước phân tích thấu đáo, mọi nỗ lực cải tiến đều có nguy cơ đi chệch hướng, tốn kém chi phí mà không giải quyết được căn nguyên vấn đề. 

Để đảm bảo tính khách quan và khoa học, báo cáo áp dụng một phương pháp tiếp cận tổng quát đi từ việc phân tích tác nhân, bóc tách từng hoạt động theo chuỗi giá trị, nhận diện lãng phí theo tư duy Lean, cho đến việc truy tìm nguyên nhân gốc rễ bằng các công cụ chuyên dụng. Trong phạm vi chương này, hai quy trình trọng điểm được lựa chọn để phân tích sâu là: Quy trình bán thuốc tại nhà thuốc (đại diện cho luồng tương tác trực tiếp tạo doanh thu) và Quy trình quản lý kho (đại diện cho luồng vận hành logistics hậu cần).

## 5.1. Tiêu chí và phương pháp phân tích

Để phân tích sâu và hiệu quả, báo cáo sử dụng một hệ thống các tiêu chí và phương pháp phân tích đã được chuẩn hóa trong lĩnh vực Quản trị Quy trình Nghiệp vụ (BPM). Việc lựa chọn hai quy trình trọng điểm (bán thuốc và quản lý kho) dựa trên ba tiêu chí cốt lõi: tần suất thực hiện, tác động kinh doanh và khả năng cải tiến. Quy trình bán thuốc có tần suất diễn ra liên tục hàng ngày, tác động trực tiếp đến doanh thu và trải nghiệm khách hàng; trong khi quy trình quản lý kho quyết định đến sự liền mạch của chuỗi cung ứng và quản trị rủi ro hàng hóa.

Phương pháp phân tích đầu tiên được áp dụng là phân loại hoạt động theo giá trị (Value-Added Analysis). Các bước trong quy trình được chia thành ba nhóm:
- **VA (Value-Added - Tạo giá trị gia tăng)**: Là những hoạt động tạo ra giá trị trực tiếp cho khách hàng, khách hàng sẵn sàng chi trả cho các hoạt động này (ví dụ: tư vấn thuốc, giao thuốc).
- **BVA (Business Value-Added - Tạo giá trị doanh nghiệp)**: Những hoạt động không trực tiếp mang lại giá trị cho khách hàng nhưng bắt buộc phải có để doanh nghiệp vận hành, tuân thủ pháp luật (ví dụ: kiểm tra tính hợp lệ của đơn thuốc, ghi nhận sổ sách kế toán).
- **NVA (Non-Value-Added - Không tạo giá trị)**: Là những hoạt động lãng phí, không tạo ra bất kỳ giá trị nào cho cả khách hàng lẫn doanh nghiệp và cần được tối thiểu hóa hoặc loại bỏ hoàn toàn (ví dụ: chờ đợi, tìm kiếm hàng hóa, nhập liệu lặp lại).

Song song đó, khung phân tích 7 loại lãng phí (7 Wastes of Lean) cũng được sử dụng để nhận diện các điểm yếu trong quy trình:
1. **Chờ đợi (Waiting)**: Thời gian chờ máy móc, chờ phê duyệt hoặc khách hàng chờ phục vụ.
2. **Tồn kho thừa (Inventory)**: Lưu trữ hàng hóa quá mức cần thiết, gây đọng vốn.
3. **Di chuyển (Motion)**: Thao tác đi lại, tìm kiếm không cần thiết của nhân viên.
4. **Quy trình thừa (Over-processing)**: Các bước thực hiện phức tạp hơn mức cần thiết.
5. **Sản xuất thừa (Over-production)**: Thực hiện công việc sớm hơn hoặc nhiều hơn nhu cầu thực tế.
6. **Sửa chữa lỗi (Defects/Rework)**: Sai sót dẫn đến phải làm lại, đổi trả hàng.
7. **Phương tiện chưa dùng (Underutilized Talent)**: Lãng phí năng lực, kỹ năng của nhân viên vào các việc thủ công.

Để đi sâu vào bản chất vấn đề, báo cáo sử dụng **Biểu đồ Fishbone (Ishikawa)** để phân rã nguyên nhân theo các yếu tố (Con người, Quy trình, Công nghệ, Môi trường, Nguyên vật liệu, Đo lường), kết hợp cùng **Phương pháp 5 Whys** để liên tục đặt câu hỏi nhằm tìm ra nguyên nhân gốc rễ (root cause) sâu xa nhất.

Cuối cùng, phương pháp đo lường hiệu suất được áp dụng qua các chỉ số: thời gian chu kỳ (cycle time) để biết tổng thời gian hoàn thành một quy trình, thời gian chờ (wait time) giữa các bước, tỷ lệ sai sót (error rate) và chi phí quy trình (process cost) nhằm lượng hóa các vấn đề đang tồn tại.

## 5.2. Phân tích quy trình bán thuốc tại nhà thuốc

Quy trình bán thuốc tại nhà thuốc là tuyến đầu tiếp xúc với khách hàng, nơi quyết định chất lượng dịch vụ và doanh thu cốt lõi của FPT Long Châu. Dưới đây là phân tích chi tiết nhằm bóc tách những hạn chế còn tồn đọng trong quy trình này.

### 5.2.1. Phân tích tác nhân và các bên liên quan

Để xác định rõ vai trò và trách nhiệm trong quy trình, ma trận RACI được thiết lập:

| STT | Các bên liên quan | R (Responsible - Thực thi) | A (Accountable - Chịu trách nhiệm) | C (Consulted - Tham vấn) | I (Informed - Được thông báo) |
| --- | --- | --- | --- | --- | --- |
| 1 | Khách hàng | Cung cấp thông tin bệnh lý, đơn thuốc | | | Nhận kết quả tư vấn, thuốc, hóa đơn |
| 2 | Dược sĩ/NV tư vấn | Trực tiếp tư vấn, lấy thuốc, hướng dẫn sử dụng | Chịu trách nhiệm về tính chính xác của liều lượng thuốc tư vấn | Khách hàng, Bác sĩ (nếu cần) | |
| 3 | Thu ngân | Thực hiện thanh toán, in hóa đơn | Chịu trách nhiệm về số tiền thu và khớp quỹ cuối ngày | | Dược sĩ |
| 4 | Hệ thống POS | Ghi nhận giao dịch, in hóa đơn, trừ tồn kho | | | Thu ngân, Quản lý |
| 5 | Quản lý nhà thuốc | | Chịu trách nhiệm chung về chất lượng phục vụ và doanh thu ca làm việc | | Báo cáo giao dịch |
| 6 | Bộ phận kho (gián tiếp) | | | | Số lượng tồn kho được cập nhật |
| 7 | Hệ thống kế toán (gián tiếp) | | | | Dữ liệu doanh thu |

Vai trò cụ thể: Dược sĩ là người đóng vai trò then chốt (R), quyết định chất lượng tư vấn y khoa; trong khi Quản lý nhà thuốc là người chịu trách nhiệm cuối cùng (A) cho toàn bộ hoạt động tại cơ sở.

### 5.2.2. Phân loại hoạt động VA/BVA/NVA

Việc phân loại chi tiết các bước trong quy trình giúp nhận diện những hoạt động cần tối ưu hóa.

| STT | Tên hoạt động | Loại (VA/BVA/NVA) | Thời gian (phút) | Giải thích |
| --- | --- | --- | --- | --- |
| 1 | Khách hàng lấy số/chờ đến lượt | NVA | 3.0 | Khách hàng phải đợi trong giờ cao điểm, không tạo giá trị. |
| 2 | Khách hàng trình bày triệu chứng/đơn thuốc | VA | 1.0 | Cung cấp thông tin thiết yếu cho việc chẩn đoán. |
| 3 | Dược sĩ kiểm tra tính hợp lệ đơn thuốc | BVA | 0.5 | Hoạt động bắt buộc theo quy định pháp luật y tế. |
| 4 | Dược sĩ đặt câu hỏi tư vấn sâu | VA | 2.0 | Tạo ra giá trị chuyên môn, giúp tìm đúng thuốc. |
| 5 | Tra cứu tồn kho trên phần mềm | NVA | 1.0 | Có thể tự động hóa hoặc tích hợp tốt hơn để giảm thời gian tìm kiếm. |
| 6 | Đi lại tìm thuốc trên kệ | NVA | 1.5 | Di chuyển vật lý mất thời gian, do bố trí kho chưa tối ưu. |
| 7 | Lấy thuốc và kiểm tra hạn sử dụng | BVA | 0.5 | Cần thiết để đảm bảo chất lượng trước khi giao. |
| 8 | Di chuyển thuốc ra quầy thu ngân | NVA | 0.5 | Thao tác thừa do quầy tư vấn và thu ngân tách biệt. |
| 9 | Thu ngân tính tiền và khách hàng thanh toán | VA | 1.0 | Hoàn tất giao dịch, tạo doanh thu. |
| 10 | Đợi in hóa đơn giấy | NVA | 0.5 | Lãng phí thời gian chờ thiết bị. |
| 11 | Ghi chú liều dùng lên vỏ thuốc | VA | 1.0 | Mang lại giá trị sử dụng an toàn cho khách hàng. |
| 12 | Giao thuốc và dặn dò khách hàng | VA | 1.0 | Tương tác cuối cùng, tạo sự an tâm. |

**Nhận xét:** Tổng thời gian chu kỳ là 13.5 phút. Trong đó, thời gian VA chỉ chiếm 6.0 phút (~44.4%), BVA chiếm 1.0 phút (~7.4%), và NVA chiếm tới 6.5 phút (~48.2%). Tỷ lệ NVA quá cao cho thấy quy trình hiện tại đang lãng phí đáng kể thời gian của khách hàng, chủ yếu rơi vào việc chờ đợi, tra cứu và di chuyển vật lý của nhân viên.

### 5.2.3. Phân tích lãng phí

Dựa vào khung phân tích Lean, các điểm lãng phí được chỉ ra cụ thể như sau:

| Loại lãng phí | Biểu hiện | Tác động | Mức độ |
| --- | --- | --- | --- |
| Chờ đợi | Khách hàng chờ lâu giờ cao điểm do không có hệ thống lấy số; chờ in hóa đơn giấy. | Giảm sự hài lòng, khách hàng có thể bỏ đi. | Cao |
| Di chuyển | Dược sĩ phải đi lại nhiều giữa quầy tư vấn, kệ thuốc và quầy thu ngân. | Kéo dài thời gian giao dịch, gây mệt mỏi cho nhân sự. | Trung bình |
| Quy trình thừa | In hóa đơn giấy cho mọi giao dịch dù khách không yêu cầu; ghi chép sổ tay lặp lại. | Tốn kém chi phí giấy in, tốn thời gian thao tác. | Trung bình |
| Tồn kho | Tồn kho không cân bằng, nhà thuốc thiếu hàng, nơi thừa hàng; không có cảnh báo tự động. | Mất cơ hội bán hàng, tốn thời gian tra cứu. | Cao |
| Sửa chữa lỗi | Sai sót trong việc lấy nhầm hàm lượng thuốc, phải kiểm tra lại. | Rủi ro sức khỏe khách hàng, tốn thời gian đổi trả. | Cao |
| Không sử dụng dữ liệu | Không lưu trữ và khai thác lịch sử mua bán của khách quen. | Dược sĩ phải hỏi lại từ đầu, tư vấn lặp lại nhiều lần. | Cao |

### 5.2.4. Phân tích nguyên nhân gốc rễ

Sử dụng biểu đồ Fishbone để phân tích vấn đề trung tâm: **"Thời gian phục vụ khách hàng còn chậm, tỷ lệ khách hàng phải chờ cao"**.
- **Con người**: Thiếu hụt nhân sự vào các khung giờ cao điểm; kỹ năng tra cứu và tư vấn của một số dược sĩ chưa đồng đều.
- **Quy trình**: Không có quy trình phân luồng khách hàng (mua định kỳ vs tư vấn mới); quy trình kiểm tra đơn thuốc thủ công mất nhiều thời gian.
- **Công nghệ**: Hệ thống POS chưa thông minh, không tích hợp gợi ý thuốc thay thế; thiếu kênh online hỗ trợ đặt trước.
- **Môi trường**: Diện tích quầy tư vấn hẹp, bố trí layout chưa tối ưu; thiếu khu vực chờ có tổ chức cho khách hàng.
- **Nguyên vật liệu**: Thiếu hụt các loại thuốc đặc trị khó tìm tại chi nhánh; không có hệ thống cảnh báo tồn kho ở mức thấp.

**Áp dụng phương pháp 5 Whys cho vấn đề "Khách hàng chờ lâu":**
1. **Tại sao khách hàng phải chờ lâu?** Vì thời gian xử lý một giao dịch của dược sĩ tốn quá nhiều thời gian (trung bình 10-14 phút).
2. **Tại sao mỗi giao dịch lại tốn nhiều thời gian?** Vì dược sĩ phải đi lại nhiều để tìm thuốc và tra cứu tồn kho trên máy lâu.
3. **Tại sao việc tìm thuốc và tra cứu lại lâu?** Vì phần mềm POS không gợi ý vị trí lưu trữ và không tự động báo hết hàng.
4. **Tại sao hệ thống POS không gợi ý và báo hết hàng?** Vì phần mềm bán hàng hiện tại chưa được liên kết chặt chẽ theo thời gian thực với phân hệ quản lý kho (WMS).
5. **Tại sao chưa có sự liên kết chặt chẽ với WMS?** Vì hạ tầng công nghệ chưa được đầu tư nâng cấp đồng bộ cho phép tích hợp dữ liệu tập trung toàn chuỗi. (Nguyên nhân gốc rễ)

### 5.2.5. Phân tích thời gian, chi phí và chất lượng

- **Thời gian**: Qua đo lường, Cycle Time (thời gian chu kỳ) trung bình dao động từ 12-14 phút/khách. Trong khi đó, Wait Time (thời gian khách phải chờ đợi không tạo giá trị) chiếm đến 40-50% tổng thời gian. 
- **Chi phí**: Ước tính chi phí lãng phí bao gồm chi phí cơ hội do mất khách (khi họ thấy đông và bỏ đi), chi phí giấy in hóa đơn dư thừa và chi phí nhân công cho các thao tác đi lại vô ích.
- **Chất lượng**: Tỷ lệ sai sót (xuất nhầm thuốc, nhầm hàm lượng) dù được kiểm soát nhưng vẫn tạo ra những rủi ro. Điểm hài lòng khách hàng (NPS - Net Promoter Score) ước tính chỉ ở mức trung bình (~45) chủ yếu do trải nghiệm chờ đợi làm giảm sự hài lòng.

---

## 5.3. Phân tích quy trình quản lý kho

Quy trình quản lý kho là xương sống hậu cần duy trì nguồn hàng ổn định cho toàn bộ chuỗi. Tại Long Châu, quy trình vận hành kho phức tạp nhưng đang tồn tại nhiều công đoạn thủ công, thiếu sự tự động hóa cần thiết.

### 5.3.1. Phân tích tác nhân và các bên liên quan

Ma trận RACI cho quy trình quản lý kho được xác định như sau:

| STT | Các bên liên quan | R (Thực thi) | A (Chịu trách nhiệm) | C (Tham vấn) | I (Được thông báo) |
| --- | --- | --- | --- | --- | --- |
| 1 | Nhân viên kho | Bốc dỡ, kiểm đếm, sắp xếp, xuất hàng | | | |
| 2 | Trưởng kho | Lập kế hoạch, điều phối nhân sự, duyệt báo cáo | Chịu trách nhiệm toàn bộ về số lượng và chất lượng tồn kho | Bộ phận QA | Ban Giám đốc |
| 3 | Nhà cung cấp | Giao hàng đúng hạn | | | Trưởng kho |
| 4 | Nhân viên nhà thuốc | Gửi yêu cầu nhập hàng, nhận hàng | | | Trạng thái xử lý |
| 5 | Hệ thống ERP | Ghi nhận dữ liệu, xử lý tính toán | | | |

### 5.3.2. Phân loại hoạt động VA/BVA/NVA

| STT | Tên hoạt động | Loại (VA/BVA/NVA) | Thời gian (phút) | Giải thích |
| --- | --- | --- | --- | --- |
| 1 | Nhận thông báo giao hàng | BVA | 5.0 | Cần thiết để chuẩn bị khu vực bốc dỡ. |
| 2 | Bốc dỡ hàng từ xe | VA | 30.0 | Di chuyển hàng vào khu vực an toàn. |
| 3 | Đợi giấy tờ, phiếu giao hàng | NVA | 15.0 | Thời gian chờ đợi do thủ tục hành chính. |
| 4 | Kiểm đếm số lượng thủ công | NVA | 45.0 | Lãng phí do không sử dụng công nghệ mã vạch. |
| 5 | Kiểm tra ngoại quan, hạn sử dụng | BVA | 20.0 | Bắt buộc để đảm bảo chất lượng dược phẩm. |
| 6 | Ghi chép sổ sách nhập kho bằng tay | NVA | 15.0 | Thao tác thừa, dễ dẫn đến sai sót. |
| 7 | Nhập lại số liệu từ sổ vào hệ thống ERP | NVA | 20.0 | Nhân đôi công việc nhập liệu, lãng phí thời gian. |
| 8 | Di chuyển, sắp xếp hàng lên kệ | VA | 40.0 | Tổ chức lưu trữ hàng hóa phục vụ xuất kho. |
| 9 | Nhận yêu cầu xuất kho | BVA | 5.0 | Tiếp nhận thông tin xử lý. |
| 10 | Đi tìm hàng hóa theo yêu cầu | NVA | 30.0 | Mất thời gian do không có bản đồ kho số hóa. |
| 11 | Nhặt hàng, soạn hàng | VA | 20.0 | Tạo ra giá trị hoàn thành đơn hàng. |
| 12 | Đóng gói hàng hóa | VA | 15.0 | Bảo vệ hàng hóa khi vận chuyển. |
| 13 | Ghi trừ lùi thẻ kho bằng giấy | NVA | 10.0 | Hoạt động lặp lại, dư thừa với hệ thống số. |
| 14 | Kiểm kê định kỳ đếm tay toàn bộ kho | NVA | 240.0 | Cực kỳ tốn kém thời gian nhân lực và gián đoạn. |

**Nhận xét:** Với một chu trình nhập-xuất-kiểm cơ bản, thời gian dành cho các hoạt động NVA là cực kỳ lớn (lên tới 375 phút so với tổng ~510 phút). Việc nhập liệu hai lần, đếm thủ công và duy trì hệ thống thẻ kho giấy là nguyên nhân chính dẫn đến sự chậm trễ, sai sót và phình to chi phí vận hành kho.

### 5.3.3. Phân tích lãng phí

- **Chờ đợi**: Hàng hóa phải nằm ở khu vực tiếp nhận chờ được kiểm đếm và hoàn tất thủ tục giấy tờ trước khi lên kệ.
- **Di chuyển**: Nhân viên kho phải đi bộ rất xa để tìm hàng vì thiếu hệ thống định vị vị trí lưu trữ (Bin/Location layout).
- **Quy trình thừa**: Việc duy trì song song hệ thống ERP và hệ thống sổ sách, thẻ kho bằng giấy là sự lãng phí quy trình nghiêm trọng.
- **Tồn kho/Sản xuất thừa**: Đặt hàng thiếu tính toán đồng bộ dẫn đến tồn đọng các lô thuốc cận hạn sử dụng.
- **Sửa chữa lỗi**: Thường xuyên phải làm báo cáo giải trình, tìm nguyên nhân và kiểm kê lại khi số liệu ERP và số liệu đếm tay không khớp.

### 5.3.4. Phân tích nguyên nhân gốc rễ

**Vấn đề trung tâm:** "Sai sót tồn kho và hàng cận hạn không được phát hiện kịp thời"
Phân tích theo 6 yếu tố (6M):
- **Man (Con người)**: Mệt mỏi do khối lượng đếm tay quá lớn dẫn đến đếm sai; phụ thuộc vào trí nhớ của nhân viên cũ.
- **Machine (Công nghệ)**: Thiếu máy quét mã vạch (Barcode Scanner) và thiết bị PDA di động; phần mềm ERP chưa có thuật toán kiểm soát FEFO (First Expired First Out).
- **Method (Phương pháp)**: Quy trình cập nhật thẻ kho giấy dễ xảy ra quên sót; quy trình kiểm kê toàn diện gây đóng băng hoạt động kho.
- **Material (Nguyên vật liệu)**: Rất nhiều mã thuốc có thiết kế bao bì giống nhau dễ gây nhầm lẫn khi nhặt hàng nhanh.
- **Measurement (Đo lường)**: Không có chỉ số đo lường hiệu suất (KPI) thời gian thực cho nhân viên kho.
- **Mother Nature (Môi trường)**: Diện tích kho rộng, nhiều góc khuất, khu vực bảo quản lạnh khó làm việc lâu dài.

**Áp dụng 5 Whys cho vấn đề "Số liệu tồn kho trên hệ thống không khớp thực tế":**
1. **Tại sao số liệu không khớp?** Vì thẻ kho giấy và phần mềm ERP ghi nhận hai con số khác nhau.
2. **Tại sao hai hệ thống ghi nhận khác nhau?** Vì nhân viên quên cập nhật vào ERP sau khi xuất hàng hoặc gõ sai số liệu.
3. **Tại sao nhân viên quên hoặc nhập sai?** Vì quá trình này được làm hoàn toàn thủ công, nhân viên phải nhớ và nhập liệu hai lần tách biệt.
4. **Tại sao lại phải nhập liệu tách biệt?** Vì nhân viên tại hiện trường kho không có thiết bị di động để cập nhật thẳng vào hệ thống lúc thao tác với hàng hóa.
5. **Tại sao không có thiết bị di động?** Vì quy trình quản lý chưa được số hóa toàn diện bằng việc áp dụng công nghệ quét mã vạch (Barcode/RFID) tích hợp ERP. (Nguyên nhân gốc rễ)

### 5.3.5. Phân tích thời gian, chi phí và chất lượng

- **Thời gian**: Phân tích thời gian cho thấy quy trình nhập kho mất trung bình 3-4 giờ/lô lớn, xuất kho mất 1-2 giờ/đơn hàng, đặc biệt kiểm kê tốn hàng ngày trời gây gián đoạn kinh doanh.
- **Chi phí**: Thiệt hại nặng nề nhất nằm ở lượng thuốc hết hạn bị hủy bỏ do quy tắc FEFO không được tuân thủ nghiêm ngặt bằng hệ thống. Cùng với đó là chi phí nhân công ngày càng cao để duy trì việc kiểm đếm và ghi chép thủ công.
- **Chất lượng**: Tỷ lệ sai lệch tồn kho được ước tính dao động khoảng 5-8%. Đây là con số đáng báo động trong ngành bán lẻ dược phẩm, nơi mức độ chính xác đòi hỏi gần như tuyệt đối để đảm bảo an toàn cho bệnh nhân.

---

## 5.4. Tổng hợp các vấn đề và điểm nghẽn

Sau khi tiến hành mổ xẻ chi tiết hai quy trình mang tính sống còn của Long Châu, báo cáo đã tổng hợp được bức tranh toàn cảnh về những khiếm khuyết đang kìm hãm hiệu suất của hệ thống. Dưới đây là bảng tổng hợp các vấn đề chính yếu đã được nhận diện:

| Tên vấn đề | Quy trình liên quan | Phân loại lãng phí | Mức độ ảnh hưởng | Giải pháp ưu tiên đề xuất |
| --- | --- | --- | --- | --- |
| Khách hàng chờ đợi lâu tại quầy | Bán thuốc tại nhà thuốc | NVA (Chờ đợi) | Rất cao | Tối ưu hóa phần mềm POS, tích hợp hệ thống phân luồng và kênh online. |
| Thao tác nhập liệu lặp lại (ERP & Giấy) | Quản lý kho | NVA (Quy trình thừa) | Cao | Số hóa hoàn toàn quy trình, loại bỏ các loại thẻ kho và sổ giấy. |
| Không áp dụng chuẩn xác FEFO | Quản lý kho | Lãng phí tồn kho | Rất cao | Tích hợp thuật toán cảnh báo hạn sử dụng vào phần mềm. |
| Tìm kiếm thuốc thủ công mất thời gian | Bán thuốc & Quản lý kho | NVA (Di chuyển) | Cao | Áp dụng máy quét mã vạch và thiết lập sơ đồ kho điện tử (Bin/Location). |
| Không khai thác được dữ liệu khách hàng | Bán thuốc tại nhà thuốc | NVA (Không sử dụng năng lực) | Trung bình | Xây dựng hệ thống CRM tích hợp nhận diện và lưu trữ bệnh án khách hàng. |
| Chênh lệch số liệu thực tế và phần mềm | Quản lý kho | NVA (Sửa chữa lỗi) | Cao | Cập nhật số liệu tồn kho theo thời gian thực qua thiết bị PDA di động. |

**Định vị các điểm nghẽn (Bottleneck) cốt lõi:**
Từ việc tổng hợp các vấn đề trên, có thể định vị 3 điểm nghẽn mang tính chiến lược đang "bóp nghẹt" hiệu năng của cả chuỗi bán lẻ:
1. **Điểm nghẽn thông tin tại quầy bán hàng (POS):** Phần mềm POS hiện tại thiếu tính kết nối sâu và tức thời với phân hệ kho (WMS). Mỗi khi dược sĩ cần tra cứu tồn kho, thao tác rời rạc làm chậm toàn bộ giao dịch, tạo ra "nút thắt cổ chai" khiến dòng khách hàng bị ùn ứ vào giờ cao điểm.
2. **Điểm nghẽn cập nhật dữ liệu và độ trễ thông tin:** Việc phụ thuộc vào ghi chép giấy tờ sau đó mới nhập liệu lại vào hệ thống tạo ra độ trễ rất lớn về thông tin. Ban lãnh đạo và hệ thống cung ứng không thể nhìn thấy lượng tồn kho theo thời gian thực (real-time), dẫn đến các quyết định điều phối hàng hóa, cảnh báo cận date bị sai lệch và chậm trễ.
3. **Điểm nghẽn công nghệ trong định vị hàng hóa:** Việc duy trì phương pháp tìm kiếm hàng hóa dựa hoàn toàn vào "trí nhớ" của nhân viên trên hàng ngàn mét vuông kệ kho vừa gây mệt mỏi vật lý, vừa làm tốc độ xử lý đơn hàng giảm sút nghiêm trọng. Khi có nhân sự mới chưa quen việc, điểm nghẽn này càng bộc lộ rõ rệt, đẩy tỷ lệ sai sót tăng cao.

**Nhận xét tổng quan về hiện trạng quy trình:**
Bức tranh hiện trạng quy trình nghiệp vụ của FPT Long Châu phản ánh một thách thức kinh điển: tốc độ mở rộng quy mô kinh doanh (lên tới hơn 1.800 cửa hàng) đã vượt quá năng lực đáp ứng của một cơ chế vận hành mang nặng tính thủ công và truyền thống. Mặc dù đội ngũ dược sĩ và nhân viên kho làm việc rất nỗ lực, nhưng chính sự thiếu hụt trong việc áp dụng công nghệ thông tin chuyên sâu đã và đang trói buộc năng suất của họ. Một khối lượng lớn thời gian và nguồn lực thay vì được dùng để tạo ra giá trị chăm sóc sức khỏe trực tiếp cho khách hàng (VA), lại bị tiêu phí vào các công việc hành chính, tìm kiếm, chờ đợi và xử lý lỗi (NVA).

Để duy trì vị thế dẫn đầu trên thị trường bán lẻ dược phẩm đầy khốc liệt và mang lại trải nghiệm tối ưu cho người bệnh, FPT Long Châu buộc phải thực hiện một cuộc cách mạng về quy trình (BPR). Những điểm nghẽn và nguyên nhân gốc rễ đã được chỉ ra một cách khoa học trong chương này chính là tiền đề trực tiếp, là kim chỉ nam để nhóm nghiên cứu tiến hành thiết kế lại các luồng công việc, ứng dụng các giải pháp tự động hóa. Cụ thể, các giải pháp mô hình hóa quy trình mục tiêu (TO-BE) và việc lựa chọn nền tảng công nghệ phù hợp sẽ được trình bày chi tiết và toàn diện trong Chương 6.
