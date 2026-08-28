# CHƯƠNG 6: ĐỀ XUẤT CẢI TIẾN QUY TRÌNH NGHIỆP VỤ

Dựa trên những đánh giá và phân tích chuyên sâu về hiện trạng hệ thống ở Chương 5, Chương 6 sẽ đề xuất các giải pháp cải tiến quy trình nghiệp vụ nhằm khắc phục các điểm nghẽn, loại bỏ các bước lãng phí (NVA) và tối ưu hóa hiệu suất vận hành cho chuỗi nhà thuốc FPT Long Châu. Mục tiêu cốt lõi của việc cải tiến là nhằm xây dựng mô hình quy trình mục tiêu (TO-BE), giúp chuyển đổi phương thức vận hành từ thủ công sang tự động hóa và đồng bộ dữ liệu theo thời gian thực (real-time). Những đề xuất này có sự gắn kết chặt chẽ với các nguyên nhân gốc rễ đã được chỉ ra trước đó, đảm bảo tính thực tiễn và giải quyết triệt để các vấn đề như thời gian chờ đợi của khách hàng, sự sai lệch thông tin tồn kho, và sự thiếu liên kết giữa các bộ phận. Việc ứng dụng linh hoạt các nguyên lý của BPM, tư duy Lean cùng các công nghệ hiện đại sẽ giúp FPT Long Châu duy trì lợi thế cạnh tranh bền vững.

## 6.1. Mục tiêu cải tiến

Mục tiêu tổng quát của dự án cải tiến quy trình nghiệp vụ là tái thiết kế cách thức vận hành nhằm rút ngắn thời gian xử lý giao dịch, giảm thiểu tối đa các sai sót do yếu tố con người, và nâng cao trải nghiệm của khách hàng khi đến với chuỗi nhà thuốc FPT Long Châu. Trong một thị trường bán lẻ dược phẩm ngày càng cạnh tranh, tốc độ phục vụ và sự chính xác trong quản lý hàng hóa chính là "chìa khóa" để giữ chân người tiêu dùng và tối ưu hóa chi phí doanh nghiệp.

Để đảm bảo hiệu quả của dự án, các mục tiêu cải tiến được lượng hóa thông qua các chỉ số đo lường hiệu suất (KPI) cụ thể như sau:
- **Giảm thời gian phục vụ khách hàng:** Rút ngắn thời gian hoàn tất một giao dịch bán thuốc tại nhà thuốc từ 10 phút/khách (AS-IS) xuống còn tối đa 5 phút/khách (TO-BE).
- **Cải thiện độ chính xác tồn kho:** Giảm tỷ lệ sai lệch số liệu tồn kho giữa hệ thống và thực tế từ 8% xuống dưới 1%, đảm bảo tính minh bạch và an toàn hàng hóa.
- **Nâng cao sự hài lòng của khách hàng:** Tăng chỉ số khách hàng thiện cảm (NPS - Net Promoter Score) từ mức trung bình hiện tại lên 65+, nhờ vào trải nghiệm mua sắm nhanh chóng, tiện lợi và được cá nhân hóa.

Những mục tiêu này được xây dựng dựa trên nguyên tắc kết hợp các phương pháp quản trị tiên tiến: áp dụng tư duy **Lean** để loại bỏ các hoạt động không mang lại giá trị gia tăng (NVA) như việc tìm kiếm, chờ đợi; ứng dụng vòng đời **BPM** để tái thiết kế các luồng công việc một cách logic; và đẩy mạnh **tự động hóa** nhằm giải phóng sức lao động ở những công việc lặp đi lặp lại. 

Nhằm đảm bảo nguồn lực và tính khả thi khi triển khai trên quy mô lớn, phạm vi áp dụng cải tiến trong giai đoạn đầu sẽ chỉ tập trung vào 2 quy trình trọng điểm nhất có tác động trực tiếp đến doanh thu và trải nghiệm khách hàng, đó là: **Quy trình bán thuốc tại nhà thuốc** và **Quy trình quản lý kho**.

## 6.2. Đề xuất cải tiến quy trình bán thuốc tại nhà thuốc

Quy trình bán thuốc trực tiếp tại hệ thống nhà thuốc đóng vai trò quyết định đến trải nghiệm tức thời của khách hàng. Việc nâng cấp quy trình này tập trung vào số hóa các điểm chạm tiếp xúc và hỗ trợ tối đa cho dược sĩ trong việc tư vấn.

**Bảng so sánh các bước thực hiện AS-IS và TO-BE:**

| STT | Hoạt động AS-IS | Hoạt động TO-BE | Loại cải tiến |
| :--- | :--- | :--- | :--- |
| 1 | Khách xếp hàng chờ tư vấn theo cảm tính | Khách lấy số thứ tự qua Kiosk hoặc đặt lịch trước trên App | Tự động hóa |
| 2 | Khách trình bày lại tiền sử bệnh | Dược sĩ quét mã khách hàng, hệ thống hiện ngay hồ sơ và lịch sử mua thuốc | Tự động hóa |
| 3 | Tra cứu tồn kho thủ công trên phần mềm | Phần mềm POS thông minh tự động gợi ý tồn kho và vị trí thuốc trên kệ | Loại bỏ NVA |
| 4 | Thu ngân tính tiền, in hóa đơn giấy | Thanh toán không tiền mặt, gửi hóa đơn điện tử thẳng vào App/Zalo khách | Tự động hóa |
| 5 | Hệ thống trừ tồn kho có độ trễ | Tự động trừ tồn kho ngay khi xuất hóa đơn, đồng bộ Real-time | Đồng bộ hệ thống |
| 6 | Dặn dò liều dùng bằng miệng/ghi tay | Hệ thống tự động gửi nhắc nhở lịch uống thuốc qua App Long Châu | Gia tăng VA |

**Các giải pháp cụ thể:**
- **Hệ thống lấy số đợi (Kiosk) và phân luồng:** Triển khai màn hình Kiosk tự phục vụ tại cửa. Khách hàng có thể quét mã QR để lấy số, hệ thống sẽ phân luồng riêng cho khách lấy thuốc theo đơn có sẵn và khách cần tư vấn chuyên sâu, giúp giảm sự lộn xộn.
- **Tích hợp POS thông minh và lưu hồ sơ khách hàng:** Nâng cấp phần mềm POS với tính năng CRM tích hợp. Dược sĩ chỉ cần nhập số điện thoại, hệ thống sẽ hiển thị toàn bộ hồ sơ y tế, dị ứng và lịch sử mua hàng, giúp tư vấn nhanh và chính xác hơn.
- **Tự động cập nhật tồn kho:** POS được liên kết trực tiếp với WMS (Warehouse Management System), đảm bảo tồn kho tại quầy được cập nhật ngay lập tức sau tiếng "bíp" quét mã vạch lúc thanh toán.
- **Tính năng nhắc nhở uống thuốc:** Khách hàng sử dụng ứng dụng Long Châu sẽ nhận được thông báo nhắc nhở lịch uống thuốc (sáng, trưa, tối) tự động thiết lập dựa trên đơn hàng vừa mua. Điều này giúp tăng cường sự gắn kết (Customer Loyalty).

**Bảng lợi ích dự kiến sau cải tiến:**

| Chỉ số đo lường | Trước cải tiến (AS-IS) | Sau cải tiến (TO-BE) | % Cải thiện |
| :--- | :--- | :--- | :--- |
| Thời gian phục vụ 1 khách hàng | 10 - 14 phút | 4 - 5 phút | ~60% |
| Tỷ lệ khách bỏ đi do chờ lâu | 15% | < 3% | 80% |
| Thời gian thao tác POS của dược sĩ | 3 phút | 1 phút | 66% |
| Chi phí in hóa đơn giấy / tháng | Mức cao | Giảm mạnh (Hóa đơn điện tử) | ~70% |

## 6.3. Đề xuất cải tiến quy trình quản lý kho

Với tính chất phức tạp của việc phân phối dược phẩm, cải tiến quy trình quản lý kho nhằm mục tiêu bảo vệ chất lượng thuốc và loại bỏ tình trạng đếm tay thủ công tốn thời gian.

**Bảng so sánh quá trình nhập/xuất kho AS-IS và TO-BE:**

| STT | Hoạt động AS-IS | Hoạt động TO-BE | Loại cải tiến |
| :--- | :--- | :--- | :--- |
| 1 | Kiểm đếm hàng nhập kho bằng mắt thường | Sử dụng máy quét mã vạch/QR code để nhận diện nhanh số lượng lô hàng | Tự động hóa |
| 2 | Ghi chép thẻ kho giấy, nhập Excel 2 lần | Hệ thống WMS tự động ghi nhận dữ liệu vào ERP khi quét mã, bỏ thẻ kho giấy | Loại bỏ NVA |
| 3 | Sắp xếp hàng hóa phụ thuộc trí nhớ nhân viên | Hệ thống WMS tự động chỉ định vị trí (Bin/Location) cất hàng | Tối ưu hóa |
| 4 | Tìm và xuất hàng ngẫu nhiên, không theo luật | Bắt buộc áp dụng nguyên tắc FEFO (First Expired First Out) qua gợi ý hệ thống | Giảm lãng phí |
| 5 | Kiểm kê thủ công tốn hàng ngày, đóng băng kho | Kiểm kê xoay vòng (Cycle counting) bằng máy quét PDA mà không dừng hoạt động | Tự động hóa |

**Các giải pháp cụ thể:**
- **Quét mã vạch/QR Code trong toàn bộ vòng đời sản phẩm:** Bỏ việc đếm thủ công, trang bị cho nhân viên kho thiết bị quét PDA cầm tay. Mọi nghiệp vụ nhập, xuất, di chuyển vị trí hàng hóa đều được thực hiện qua một thao tác quét mã đơn giản.
- **Áp dụng triệt để nguyên tắc FEFO (First Expired First Out):** Khi có lệnh xuất kho, hệ thống WMS sẽ tự động tính toán và điều hướng nhân viên tới chính xác vị trí kệ chứa lô thuốc có hạn sử dụng gần nhất, ngăn chặn tình trạng tồn đọng hàng cận date.
- **Tích hợp WMS với ERP (Enterprise Resource Planning):** Tạo luồng dữ liệu thông suốt. Khi hàng vừa xuất khỏi kho trung tâm, dữ liệu tồn kho tổng và số liệu kế toán lập tức biến động tương ứng mà không cần phải chờ đợi đối soát cuối ngày.
- **Cảnh báo tự động:** Thiết lập các bot giám sát trong hệ thống. Khi số lượng tồn kho giảm xuống dưới mức an toàn (Min/Max level) hoặc có lô hàng sắp hết hạn trong 3-6 tháng, hệ thống sẽ tự động bật cảnh báo (Alert) tới màn hình làm việc của Trưởng kho và bộ phận Mua hàng.
- **Kiểm kê bằng mã vạch:** Chuyển từ kiểm kê toàn diện sang kiểm kê theo khu vực bằng máy PDA, dữ liệu đối chiếu trực tiếp trên máy, loại bỏ khâu gõ lại Excel.

**Bảng lợi ích dự kiến sau cải tiến:**

| Chỉ số đo lường | Trước cải tiến (AS-IS) | Sau cải tiến (TO-BE) | % Cải thiện |
| :--- | :--- | :--- | :--- |
| Tỷ lệ sai lệch hàng hóa | 8% | < 1% | > 85% |
| Tỷ lệ hàng bị hủy do hết hạn | 5% | < 0.5% | 90% |
| Thời gian xuất một đơn hàng từ kho | 60 phút | 20 phút | 66% |
| Năng suất nhân viên kho | 100 đơn/ngày | 250 đơn/ngày | 150% |

## 6.4. Ứng dụng công nghệ hỗ trợ cải tiến

Công nghệ đóng vai trò là "đòn bẩy" hiện thực hóa các đề xuất TO-BE. Việc chuyển đổi số không chỉ là mua sắm phần mềm mà là kiến tạo một hệ sinh thái đồng bộ.

### 6.4.1. Tự động hóa kiểm kê (mã vạch, QR code, RFID)
Công nghệ nhận dạng tự động là cốt lõi của hoạt động logistics hiện đại. Thay vì ghi chép sổ sách thủ công tốn thời gian, việc áp dụng đồng bộ mã vạch (Barcode 2D), QR Code và hệ thống RFID cho các loại thuốc giá trị cao sẽ giải quyết bài toán nhập liệu. Thiết bị quét mã di động cầm tay (PDA) cấp cho từng nhân viên giúp xác thực nhanh thông tin về sản phẩm, số lô, hạn sử dụng chỉ trong 1 giây. Việc kiểm kê, vốn từng là nỗi ám ảnh, nay được thực hiện theo hình thức "quét và so khớp" (Scan & Match) ngay tại hiện trường, giúp bảo toàn tính toàn vẹn của dữ liệu và triệt tiêu lỗi do con người.

### 6.4.2. Đồng bộ dữ liệu kho (WMS-ERP, real-time inventory)
Sự rời rạc giữa kho và cửa hàng đã được khắc phục bằng giải pháp tích hợp phần mềm WMS (Warehouse Management System) với lõi ERP của FPT. Giải pháp Real-time Inventory (Tồn kho thời gian thực) tạo ra một "phiên bản sự thật duy nhất" (Single Source of Truth). Bất cứ lúc nào một hộp thuốc được quét xuất kho hay bán tại cửa hàng, lượng tồn kho tổng trên hệ thống điện toán đám mây sẽ trừ đi tương ứng. Các cấp quản lý từ kho đến ban giám đốc đều nhìn thấy cùng một bảng số liệu tức thời, cho phép đưa ra các quyết định điều phối và mua hàng nhạy bén.

### 6.4.3. Tối ưu xử lý đơn hàng (auto-confirm, phân bổ kho, tracking GHN/GHTK)
Đối với luồng bán online, hệ thống Order Management System (OMS) mới sẽ tự động hóa (auto-confirm) việc xác nhận đơn hàng thay cho các cuộc gọi điện thủ công trước kia. OMS ứng dụng thuật toán thông minh để tự động phân bổ lệnh xuất hàng cho nhà thuốc (hoặc kho) có vị trí địa lý gần khách hàng nhất và đang có sẵn tồn kho. Hơn nữa, hệ thống được tích hợp API (Application Programming Interface) trực tiếp với các đối tác vận chuyển như Giao Hàng Nhanh (GHN) hay Giao Hàng Tiết Kiệm (GHTK), tự động tạo mã vận đơn (tracking) và cập nhật hành trình gói hàng liên tục trên ứng dụng cho khách theo dõi.

### 6.4.4. Ứng dụng AI và dashboard quản lý (dự báo nhu cầu, gợi ý thuốc, KPI dashboard)
Ứng dụng Trí tuệ nhân tạo (AI) giúp FPT Long Châu đi trước một bước trong việc thấu hiểu thị trường. Các mô hình Machine Learning phân tích dữ liệu lịch sử mua hàng, yếu tố thời tiết và xu hướng dịch bệnh để đưa ra các dự báo nhu cầu (Demand Forecasting) cực kỳ chuẩn xác, giúp bộ phận mua hàng tối ưu hóa lượng đặt hàng. Tại quầy, AI gợi ý cho dược sĩ các loại thực phẩm chức năng bán kèm (Cross-sell) phù hợp với đơn thuốc. Đồng thời, toàn bộ hiệu suất hoạt động được trực quan hóa qua hệ thống KPI Dashboard thông minh trên nền tảng Power BI, giúp ban lãnh đạo theo dõi trực tiếp các chỉ số NPS, tỷ lệ chốt đơn và vòng quay tồn kho mỗi ngày.

## 6.5. Mô hình BPMN TO-BE

Mô hình hóa TO-BE đóng vai trò thiết lập cấu trúc và logic cho quy trình mới, khắc phục các điểm nghẽn bằng cách tích hợp hệ thống công nghệ để tự động hóa các bước thao tác. 

**Sơ đồ BPMN TO-BE Quy trình Bán thuốc tại nhà thuốc:**
Sơ đồ BPMN mới [Hình 6.1] đưa vào các tác nhân mới như: Khách hàng sử dụng App, Hệ thống POS tích hợp CRM, và Hệ thống WMS trung tâm. Khi khách hàng bước vào, thay vì đứng chờ, họ thao tác lấy số trên Kiosk. Tại quầy, dược sĩ thực hiện tác vụ "Quét mã thành viên". Lúc này, cổng rẽ nhánh Gateway sẽ kiểm tra: Nếu khách quen, POS tự động đổ về hồ sơ bệnh án; nếu khách mới, tiến hành tạo hồ sơ. Thay vì phải "Đi tìm thuốc trên kệ", hệ thống POS tự động thực hiện Service Task "Kiểm tra tồn kho và vị trí" rồi phản hồi ngay lập tức cho dược sĩ. Khâu thanh toán được thay thế bằng quy trình quẹt thẻ/quét mã QR động. Ở cuối quy trình, một Message Event tự động được gửi từ hệ thống ERP xuống App khách hàng để "Nhắc nhở uống thuốc đúng giờ". 

**Sơ đồ BPMN TO-BE Quy trình Quản lý kho:**
Dựa trên sơ đồ TO-BE [Hình 6.2], luồng công việc của Nhân viên kho đã hoàn toàn vắng bóng các tác vụ Manual Task như "Ghi chép sổ tay" hay "Nhập liệu Excel". Tại luồng Nhập kho, khi tiếp nhận hàng hóa, nhân viên thực hiện tác vụ "Quét mã vạch lô hàng" qua PDA. Hệ thống tự động thực hiện Service Task "Cập nhật dữ liệu ERP" và "Chỉ định vị trí lưu trữ trống". Tại luồng Xuất kho, khi nhận lệnh xuất, Gateway tự động kiểm tra nguyên tắc hạn sử dụng. Nếu hợp lệ, hệ thống tạo "Luồng nhặt hàng FEFO", hướng dẫn nhân viên đến đúng vị trí của lô thuốc cần lấy. Đặc biệt, sơ đồ bổ sung thêm một Timer Event liên tục chạy ngầm trong hệ thống WMS để tự động thực hiện tác vụ "Gửi cảnh báo hàng cận date", loại bỏ hoàn toàn việc phát hiện chậm trễ như mô hình AS-IS. 

## 6.6. So sánh quy trình AS-IS và TO-BE

Bảng dưới đây trình bày cái nhìn tổng quan về sự thay đổi toàn diện từ trạng thái hiện tại (AS-IS) sang trạng thái mong muốn (TO-BE), minh chứng cho giá trị của các giải pháp cải tiến.

| Tiêu chí đánh giá | Trạng thái AS-IS | Trạng thái TO-BE | Mức cải thiện / Ý nghĩa |
| :--- | :--- | :--- | :--- |
| **Quy trình Bán thuốc tại nhà thuốc** | | | |
| **Phương thức phục vụ** | Chờ đợi theo cảm tính, lộn xộn giờ cao điểm | Lấy số tự động qua Kiosk, phân luồng khách rành mạch | Tăng trải nghiệm, giảm stress cho nhân viên. |
| **Tìm kiếm hàng hóa** | Dược sĩ đi lại tìm thuốc bằng mắt thường | POS chỉ định vị trí trên kệ thông qua WMS | Tiết kiệm 60% thời gian tra cứu. |
| **Hồ sơ khách hàng** | Hỏi lại từ đầu, lưu trữ rời rạc | Nhận diện tức thì qua mã QR, gợi ý lịch sử bệnh | Cá nhân hóa trải nghiệm chăm sóc y tế. |
| **Thanh toán & Hóa đơn** | Tiền mặt chiếm đa số, in hóa đơn giấy lãng phí | Thanh toán QR Code, gửi hóa đơn điện tử tự động | Giảm chi phí giấy in, bảo vệ môi trường. |
| **Quy trình Quản lý kho** | | | |
| **Nhập liệu & Lưu trữ** | Thẻ kho giấy, nhập liệu Excel thủ công 2 lần | Quét mã vạch bằng PDA, đồng bộ ERP theo thời gian thực | Xóa bỏ NVA nhập liệu, độ chính xác gần 100%. |
| **Luật xuất kho** | Phụ thuộc trí nhớ, ngẫu nhiên nhặt hàng | Ép buộc tuân thủ nguyên tắc FEFO bằng hệ thống | Giảm 90% lượng thuốc hỏng do quá hạn sử dụng. |
| **Kiểm soát & Kiểm kê** | Kiểm kê đếm tay tốn nhiều ngày, gián đoạn kinh doanh | Cycle counting quét mã từng khu vực, duy trì hoạt động | Tiết kiệm nhân lực, số liệu luôn minh bạch. |
| **Cảnh báo tự động** | Dò tìm bằng mắt, phát hiện muộn màng | Bot hệ thống cảnh báo tồn thấp và cận date tự động | Chủ động ngăn chặn rủi ro đứt gãy chuỗi cung ứng. |

## 6.7. Đánh giá tính khả thi và lợi ích kỳ vọng

Để đảm bảo các đề xuất cải tiến không chỉ nằm trên giấy, việc đánh giá tính khả thi và dự báo lợi ích, rủi ro là yêu cầu bắt buộc trước khi phê duyệt đầu tư.

**Phân tích khả thi 4 khía cạnh:**
- **Khả năng kỹ thuật:** Với nền tảng công nghệ mạnh mẽ từ tập đoàn mẹ FPT, việc triển khai phần mềm WMS, POS nâng cao, hay tích hợp AI là hoàn toàn khả thi. Hệ sinh thái công nghệ nội bộ đủ sức đáp ứng.
- **Khả năng tài chính:** Chi phí đầu tư ban đầu cho máy quét PDA, Kiosk và phần mềm khá lớn, nhưng so với doanh thu hàng chục ngàn tỷ của Long Châu và số tiền tiết kiệm được từ việc giảm lãng phí tồn kho, thời gian hoàn vốn (ROI) được dự báo là dưới 2 năm.
- **Khả năng nhân sự:** Đội ngũ dược sĩ và nhân viên kho phần lớn là người trẻ, dễ tiếp thu công nghệ mới. Các buổi đào tạo sử dụng hệ thống PDA, POS sẽ không gặp quá nhiều khó khăn.
- **Khả năng tổ chức:** Long Châu có hệ thống quản trị chuyên nghiệp, sự cam kết mạnh mẽ từ Ban Lãnh đạo sẽ tạo động lực quyết liệt để thay đổi tư duy làm việc toàn diện.

**Lợi ích kỳ vọng:**
- *Định lượng:* Rút ngắn 60% thời gian giao dịch tại quầy; năng suất kho tăng 150%; giảm tỷ lệ tồn kho chênh lệch từ 8% xuống dưới 1%; giảm 70% chi phí văn phòng phẩm (giấy in, sổ sách).
- *Định tính:* Tăng sự tin tưởng của người bệnh; xây dựng hình ảnh chuỗi nhà thuốc hiện đại, chuyên nghiệp; cải thiện môi trường làm việc ít áp lực hơn cho nhân viên.

**Ma trận quản lý rủi ro:**

| Rủi ro tiềm ẩn | Mức độ ảnh hưởng | Xác suất xảy ra | Giải pháp khắc phục (Mitigation) |
| :--- | :--- | :--- | :--- |
| Nhân viên chống đối hoặc chậm thích nghi hệ thống mới | Trung bình | Trung bình | Đào tạo kỹ lưỡng, đưa vào KPI đánh giá thi đua, có thời gian làm quen song song. |
| Lỗi gián đoạn đường truyền hoặc sập hệ thống (Downtime) | Rất cao | Thấp | Xây dựng hạ tầng Cloud dự phòng (Backup Server); hỗ trợ chế độ bán Offline tạm thời. |
| Dữ liệu cũ chuyển đổi sang ERP mới bị sai lệch | Cao | Trung bình | Chạy song song 2 hệ thống (Pilot) trước khi chuyển đổi; làm sạch dữ liệu trước khi Import. |

**Lộ trình triển khai 3 giai đoạn (12 tháng):**
- **Giai đoạn 1: Chuẩn bị và Thiết kế (Tháng 1-3):** Thống nhất thiết kế luồng TO-BE, lựa chọn đối tác cung cấp thiết bị Kiosk, máy quét PDA. Xây dựng và lập trình các API tích hợp WMS, POS và App.
- **Giai đoạn 2: Triển khai thử nghiệm (Pilot) (Tháng 4-6):** Lựa chọn 1 kho trung tâm và 10 nhà thuốc trọng điểm tại khu vực TP.HCM để áp dụng hệ thống mới. Ghi nhận phản hồi, đánh giá lỗi và hiệu chỉnh phần mềm liên tục.
- **Giai đoạn 3: Đào tạo và Mở rộng toàn hệ thống (Roll-out) (Tháng 7-12):** Sau khi hệ thống vận hành ổn định tại các điểm Pilot, tiến hành tổ chức đào tạo nhân sự hàng loạt. Thực hiện triển khai cuốn chiếu đồng bộ cho hơn 1.800 cửa hàng trên toàn quốc, đồng thời theo dõi và đo lường KPI theo thời gian thực.
