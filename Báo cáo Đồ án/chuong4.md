# CHƯƠNG 4: MÔ HÌNH HÓA QUY TRÌNH NGHIỆP VỤ HIỆN TẠI (AS-IS)

Mô hình hóa quy trình nghiệp vụ hiện tại (AS-IS) là một bước đóng vai trò vô cùng quan trọng trong vòng đời quản trị quy trình nghiệp vụ (BPM). Mục đích cốt lõi của việc mô hình hóa AS-IS là nhằm phác họa một bức tranh toàn cảnh, chân thực và chi tiết nhất về cách thức hoạt động hiện tại của tổ chức trước khi tiến hành bất kỳ sự can thiệp hay cải tiến nào. Đối với hệ thống chuỗi nhà thuốc FPT Long Châu, việc đánh giá chính xác các quy trình AS-IS giúp nhóm nghiên cứu nhận diện sâu sắc các điểm nghẽn (bottleneck), những thao tác dư thừa, cũng như những hạn chế trong việc ứng dụng công nghệ vào vận hành. 

Trong chương này, phương pháp mô hình hóa được sử dụng là tiêu chuẩn BPMN 2.0 (Business Process Model and Notation). Đây là một ngôn ngữ mô hình hóa quy trình chuẩn quốc tế, cung cấp hệ thống ký hiệu trực quan và dễ hiểu cho cả người dùng nghiệp vụ lẫn chuyên gia kỹ thuật. Các sơ đồ BPMN được xây dựng bằng cách sử dụng các thành phần cơ bản như nhóm (pool), làn (swimlane) để phân định rõ ràng trách nhiệm của từng tác nhân tham gia; các sự kiện (event) để đánh dấu điểm bắt đầu, kết thúc hoặc những gián đoạn trong quy trình; các tác vụ (task) thể hiện những công việc cụ thể; và các cổng rẽ nhánh (gateway) để điều hướng luồng công việc. Công cụ hỗ trợ vẽ sơ đồ được nhóm sử dụng giúp đảm bảo tính chuẩn xác và đồng bộ về mặt ký hiệu kỹ thuật. Thông qua việc phân tích 6 quy trình trọng yếu, chương này sẽ làm nền tảng vững chắc cho việc đề xuất các giải pháp cải tiến (TO-BE) ở phần tiếp theo.

## 4.1. Quy trình quản lý chuỗi cung ứng

Quy trình quản lý chuỗi cung ứng tại FPT Long Châu đóng vai trò quyết định trong việc đảm bảo nguồn hàng dược phẩm luôn sẵn sàng tại hơn 1.800 nhà thuốc trên toàn quốc. Tuy nhiên, ở trạng thái hiện tại (AS-IS), quy trình này vẫn đang phụ thuộc nhiều vào các thao tác thủ công, đặc biệt trong việc tổng hợp nhu cầu, phê duyệt đơn hàng và theo dõi vận chuyển, dẫn đến những rủi ro về chậm trễ và sai sót dữ liệu.

**Bảng tóm tắt thông tin quy trình Quản lý chuỗi cung ứng (AS-IS)**

| Thành phần | Mô tả chi tiết |
| :--- | :--- |
| **Mục tiêu** | Đảm bảo cung cấp đủ số lượng và chất lượng dược phẩm cho các nhà thuốc trong chuỗi một cách kịp thời. |
| **Tác nhân tham gia** | Nhân viên kho, Trưởng kho, Bộ phận Mua hàng, Giám đốc chuỗi, Nhà cung cấp (NCC). |
| **Đầu vào** | Yêu cầu bổ sung hàng hóa từ các nhà thuốc, báo cáo tồn kho định kỳ. |
| **Đầu ra** | Đơn đặt hàng được duyệt, hàng hóa được giao đến kho trung tâm, dữ liệu tồn kho được cập nhật. |
| **Biểu mẫu / Hệ thống** | Microsoft Excel, Email, Hệ thống ERP nội bộ (cơ bản), Phiếu đặt hàng giấy, Biên bản giao nhận. |
| **Thời gian trung bình** | 3 - 5 ngày tùy thuộc vào nhà cung cấp và quy mô đơn hàng. |
| **Tần suất** | Hàng ngày hoặc định kỳ hàng tuần. |

**Các bước thực hiện:**
1. **Nhận yêu cầu bổ sung hàng:** Nhân viên kho tại các nhà thuốc gửi báo cáo số lượng hàng tồn và yêu cầu bổ sung thông qua file Excel qua email hoặc báo cáo qua điện thoại về kho trung tâm.
2. **Tổng hợp nhu cầu:** Trưởng kho trung tâm tiếp nhận, kiểm tra và tiến hành tổng hợp nhu cầu thủ công từ tất cả các nhà thuốc để xác định tổng khối lượng hàng cần đặt.
3. **Lập phiếu đặt hàng:** Bộ phận Mua hàng dựa trên bảng tổng hợp từ Trưởng kho để tạo phiếu đặt hàng thủ công cho từng Nhà cung cấp.
4. **Phê duyệt đơn hàng:** Phiếu đặt hàng được gửi qua email cho Giám đốc chuỗi (hoặc người được ủy quyền) để xem xét. Nếu từ chối, yêu cầu được trả lại để điều chỉnh; nếu đồng ý, Giám đốc phản hồi phê duyệt qua email.
5. **Gửi đơn đặt hàng:** Bộ phận Mua hàng gửi đơn hàng chính thức đến Nhà cung cấp thông qua email hoặc hệ thống EDI (nếu có nhưng hạn chế).
6. **Xác nhận và giao hàng:** Nhà cung cấp xác nhận đơn hàng, chuẩn bị hàng hóa và tiến hành giao hàng đến kho trung tâm của Long Châu. Quá trình vận chuyển thường được theo dõi thủ công qua điện thoại.
7. **Kiểm hàng và nhập kho:** Khi hàng đến, Nhân viên kho tiến hành kiểm đếm số lượng và đối chiếu ngoại quan với phiếu giao hàng bằng phương pháp thủ công.
8. **Cập nhật hệ thống:** Sau khi hoàn tất kiểm tra, Nhân viên kho cập nhật số liệu nhập kho vào bảng tính Excel và hệ thống ERP nội bộ một cách thủ công.
9. **Phân phối:** Hàng hóa sau đó được lên lịch để phân phối về lại các nhà thuốc theo yêu cầu ban đầu.

**Sơ đồ BPMN AS-IS:**
Sơ đồ mô tả quy trình hiện tại với các làn (swim lane) tương ứng cho Nhân viên kho, Trưởng kho, Bộ phận Mua hàng, Giám đốc chuỗi và Nhà cung cấp. Các tác vụ thủ công như tổng hợp Excel, gửi email phê duyệt được thể hiện rõ bằng ký hiệu User Task hoặc Manual Task.

*[Hình 4.1: Sơ đồ BPMN AS-IS – Quy trình quản lý chuỗi cung ứng]*

## 4.2. Quy trình quản lý chất lượng

Là một chuỗi bán lẻ dược phẩm, FPT Long Châu bắt buộc phải tuân thủ nghiêm ngặt các tiêu chuẩn GPP (Thực hành tốt nhà thuốc). Quy trình quản lý chất lượng (QA) hiện tại chủ yếu tập trung vào khâu kiểm tra đầu vào và kiểm tra định kỳ các điều kiện bảo quản, tuy nhiên quá trình ghi chép và kiểm soát vẫn còn mang tính chất giấy tờ, thủ công.

**Bảng tóm tắt thông tin quy trình Quản lý chất lượng (AS-IS)**

| Thành phần | Mô tả chi tiết |
| :--- | :--- |
| **Mục tiêu** | Đảm bảo 100% dược phẩm đạt tiêu chuẩn chất lượng theo GPP trước khi phân phối và trong suốt quá trình lưu kho, trưng bày. |
| **Tác nhân tham gia** | Dược sĩ phụ trách chất lượng, Nhân viên kho, Quản lý nhà thuốc, Bộ phận QA (Đảm bảo chất lượng). |
| **Đầu vào** | Lô hàng mới nhập, chứng từ CO/CQ, yêu cầu kiểm tra định kỳ. |
| **Đầu ra** | Biên bản kiểm tra chất lượng, hàng hóa được duyệt nhập/xuất, biên bản xử lý hàng lỗi. |
| **Biểu mẫu / Hệ thống** | Sổ ghi chép kiểm soát chất lượng, Biên bản kiểm nghiệm (bản cứng), Giấy chứng nhận chất lượng (CO/CQ). |
| **Thời gian trung bình** | 2 - 4 giờ cho mỗi lô hàng mới; định kỳ hàng tháng cho kiểm tra lưu kho. |
| **Tần suất** | Mỗi khi nhập hàng và định kỳ theo tháng/quý. |

**Các bước thực hiện:**
1. **Tiếp nhận hàng hóa và chứng từ:** Nhân viên kho nhận lô hàng từ nhà cung cấp cùng với các giấy tờ chứng nhận (CO, CQ, hóa đơn).
2. **Kiểm tra giấy tờ:** Dược sĩ phụ trách chất lượng đối chiếu các giấy tờ để đảm bảo tính hợp lệ, nguồn gốc xuất xứ của lô hàng.
3. **Kiểm tra ngoại quan:** Dược sĩ tiến hành kiểm tra bằng mắt thường (ngoại quan) các yếu tố như bao bì, tem nhãn, độ nguyên vẹn, hạn sử dụng của một tỷ lệ mẫu ngẫu nhiên trong lô hàng.
4. **Kiểm tra điều kiện bảo quản:** Đảm bảo hàng hóa được giao trong điều kiện nhiệt độ, độ ẩm đúng quy định (đặc biệt với vắc xin hoặc thuốc bảo quản lạnh).
5. **Ghi sổ kiểm soát:** Các kết quả kiểm tra được Dược sĩ ghi chép bằng tay vào "Sổ kiểm soát chất lượng".
6. **Xử lý kết quả:**
   - Nếu hàng **đạt tiêu chuẩn**: Chuyển sang khu vực lưu trữ bình thường và xác nhận cho phép nhập kho.
   - Nếu hàng **không đạt** (hư hỏng, cận hạn, sai giấy tờ): Chuyển vào khu vực biệt trữ (hàng chờ xử lý), lập biên bản và thông báo cho Bộ phận QA để làm việc với Nhà cung cấp.
7. **Kiểm tra định kỳ:** Hàng tháng, Quản lý nhà thuốc và Bộ phận QA tiến hành kiểm tra lại điều kiện bảo quản và hạn sử dụng của thuốc đang trưng bày, sau đó lập báo cáo giấy gửi về ban giám đốc.

**Sơ đồ BPMN AS-IS:**
Sơ đồ thể hiện luồng công việc bắt đầu từ sự kiện nhận hàng, đi qua cổng rẽ nhánh (Gateway) để đánh giá hàng đạt hay không đạt, từ đó rẽ nhánh sang các tác vụ tiếp nhận hoặc cách ly xử lý.

*[Hình 4.2: Sơ đồ BPMN AS-IS – Quy trình quản lý chất lượng]*

## 4.3. Quy trình bán thuốc tại nhà thuốc

Bán thuốc trực tiếp là quy trình diễn ra với tần suất cao nhất và là nguồn doanh thu chủ lực. Quy trình hiện tại đòi hỏi sự tương tác trực tiếp giữa dược sĩ và khách hàng, nhưng việc tra cứu, tư vấn và thanh toán vẫn còn nhiều công đoạn gây mất thời gian chờ đợi.

**Bảng tóm tắt thông tin quy trình Bán thuốc tại nhà thuốc (AS-IS)**

| Thành phần | Mô tả chi tiết |
| :--- | :--- |
| **Mục tiêu** | Phân phối thuốc đến tay người tiêu dùng đúng loại, đúng liều, an toàn và nhanh chóng. |
| **Tác nhân tham gia** | Khách hàng, Dược sĩ / Nhân viên tư vấn, Thu ngân, Hệ thống POS. |
| **Đầu vào** | Nhu cầu của khách hàng, đơn thuốc của bác sĩ (nếu có). |
| **Đầu ra** | Thuốc được giao cho khách, hóa đơn bán lẻ, tiền thanh toán, dữ liệu tồn kho cập nhật. |
| **Biểu mẫu / Hệ thống** | Hệ thống POS tại quầy, Phần mềm quản lý bán hàng, Máy in hóa đơn, Sổ tay tra cứu. |
| **Thời gian trung bình** | 5 - 10 phút/giao dịch. |
| **Tần suất** | Liên tục hàng ngày. |

**Các bước thực hiện:**
1. **Tiếp nhận khách hàng:** Khách hàng đến quầy, trình bày triệu chứng hoặc đưa đơn thuốc của bác sĩ cho Dược sĩ.
2. **Kiểm tra và tư vấn:** Dược sĩ tiếp nhận thông tin. Nếu có đơn thuốc, kiểm tra tính hợp lệ của đơn. Nếu không có đơn, tiến hành hỏi han triệu chứng, tiền sử bệnh và tư vấn các loại thuốc không kê đơn (OTC), thực phẩm chức năng phù hợp.
3. **Tra cứu tồn kho:** Dược sĩ gõ tên thuốc vào phần mềm bán hàng tại quầy để kiểm tra xem thuốc đó còn tồn kho tại chi nhánh hay không.
4. **Lấy hàng và kiểm tra:** Nếu còn hàng, Dược sĩ tiến hành lấy thuốc từ kệ, kiểm tra lại hạn sử dụng (date) và số lượng thực tế so với đơn.
5. **Thanh toán:** Dược sĩ chuyển thông tin đơn hàng cho Thu ngân (hoặc tự thực hiện). Thu ngân thực hiện tính tiền, nhận tiền mặt hoặc thanh toán qua máy quẹt thẻ (POS) từ khách hàng.
6. **In hóa đơn:** Hệ thống phát lệnh in hóa đơn giấy.
7. **Hướng dẫn sử dụng và giao thuốc:** Dược sĩ ghi chú liều dùng lên vỏ hộp/vỉ thuốc, hướng dẫn dặn dò khách hàng cách sử dụng và bàn giao túi thuốc cùng hóa đơn.
8. **Cập nhật hệ thống:** Sau khi giao dịch hoàn tất, hệ thống tự động trừ tồn kho (tuy nhiên đôi khi có độ trễ do lỗi đồng bộ).

**Sơ đồ BPMN AS-IS:**
Sơ đồ tập trung mô tả tương tác (message flow) giữa làn Khách hàng và làn của Nhà thuốc. Các tác vụ kiểm tra đơn, tra cứu hệ thống được sắp xếp tuần tự, kết thúc bằng sự kiện giao hàng hoàn tất.

*[Hình 4.3: Sơ đồ BPMN AS-IS – Quy trình bán thuốc tại nhà thuốc]*

## 4.4. Quy trình bán thuốc online

Với sự phát triển của thương mại điện tử, Long Châu đã triển khai kênh bán hàng online. Dù vậy, quy trình AS-IS vẫn tồn tại sự đứt gãy giữa nền tảng trực tuyến (app/web) và khâu vận hành thực tế tại kho, đòi hỏi nhiều sự can thiệp thủ công của nhân viên để xác nhận và phân bổ đơn hàng.

**Bảng tóm tắt thông tin quy trình Bán thuốc online (AS-IS)**

| Thành phần | Mô tả chi tiết |
| :--- | :--- |
| **Mục tiêu** | Tiếp nhận, xử lý và giao đơn hàng trực tuyến cho khách hàng một cách chính xác. |
| **Tác nhân tham gia** | Khách hàng, Nhân viên xử lý đơn online (CSKH), Dược sĩ online, Nhân viên kho, Đối tác giao hàng (GHN/GHTK...). |
| **Đầu vào** | Đơn đặt hàng trên website longchau.com hoặc ứng dụng Long Châu. |
| **Đầu ra** | Đơn hàng được giao thành công, hóa đơn điện tử/giấy, thanh toán COD/Online. |
| **Biểu mẫu / Hệ thống** | Website/App Long Châu, Hệ thống quản lý đơn hàng (OMS), Hệ thống của đối tác giao hàng. |
| **Thời gian trung bình** | 2 - 24 giờ tùy khu vực giao hàng. |
| **Tần suất** | Liên tục, đặc biệt cao vào các giờ cao điểm trong ngày. |

**Các bước thực hiện:**
1. **Đặt hàng:** Khách hàng truy cập website hoặc ứng dụng, tìm kiếm sản phẩm, thêm vào giỏ, điền thông tin địa chỉ và hoàn tất thao tác đặt hàng.
2. **Tiếp nhận và xác nhận thủ công:** Hệ thống ghi nhận đơn. Nhân viên CSKH online sẽ gọi điện thoại trực tiếp cho khách hàng để xác nhận lại thông tin đơn hàng, số lượng và địa chỉ (bước này tốn rất nhiều thời gian). Đối với thuốc kê đơn, Dược sĩ online sẽ yêu cầu khách gửi ảnh đơn thuốc qua Zalo/ứng dụng để kiểm duyệt.
3. **Phân bổ đơn hàng:** Nhân viên kiểm tra kho thủ công trên hệ thống để quyết định sẽ xuất hàng từ kho trung tâm hay từ nhà thuốc gần khách hàng nhất.
4. **Soạn hàng và đóng gói:** Nhân viên kho (hoặc nhà thuốc) nhận thông tin đơn hàng, tiến hành nhặt hàng, kiểm tra chất lượng, in phiếu giao hàng và đóng gói bưu kiện.
5. **Bàn giao vận chuyển:** Nhân viên tạo mã vận đơn thủ công trên hệ thống của đối tác giao hàng (ví dụ Giao Hàng Nhanh, Giao Hàng Tiết Kiệm) và bàn giao bưu kiện cho bưu tá khi họ đến lấy.
6. **Theo dõi đơn hàng:** Nhân viên thỉnh thoảng tra cứu mã vận đơn để theo dõi trạng thái, hoặc đợi đối tác gửi báo cáo đối soát.
7. **Hoàn tất:** Khách hàng nhận hàng, thanh toán (nếu là COD). Trạng thái đơn được cập nhật hoàn thành.

**Sơ đồ BPMN AS-IS:**
Sơ đồ BPMN có sự tham gia của một Pool bên ngoài là "Đối tác giao hàng". Các tác vụ liên lạc thủ công qua điện thoại để xác nhận đơn được làm nổi bật như một điểm nghẽn chính trong hệ thống.

*[Hình 4.4: Sơ đồ BPMN AS-IS – Quy trình bán thuốc online]*

## 4.5. Quy trình quản lý kho

Quy trình quản lý kho tại Long Châu trước cải tiến chủ yếu dựa trên sức người và kinh nghiệm của nhân viên. Việc ghi chép thẻ kho, đối chiếu giấy tờ và áp dụng nguyên tắc xuất hàng chưa được tự động hóa triệt để, dễ dẫn đến tình trạng thất thoát hoặc hàng hóa bị cận date (hết hạn sử dụng) mà không được phát hiện kịp thời.

**Bảng tóm tắt thông tin quy trình Quản lý kho (AS-IS)**

| Thành phần | Mô tả chi tiết |
| :--- | :--- |
| **Mục tiêu** | Quản lý chính xác số lượng nhập - xuất - tồn, bảo vệ chất lượng hàng hóa lưu kho. |
| **Tác nhân tham gia** | Nhân viên kho, Trưởng kho, Nhà cung cấp, Nhân viên nhà thuốc. |
| **Đầu vào** | Hàng hóa thực tế, Phiếu xuất kho, Phiếu nhập kho, Lịch kiểm kê. |
| **Đầu ra** | Báo cáo tồn kho, Thẻ kho được cập nhật, Hàng hóa được xuất đúng yêu cầu. |
| **Biểu mẫu / Hệ thống** | Phiếu nhập/xuất (giấy), Thẻ kho (giấy), Excel, Phần mềm ERP cơ bản. |
| **Thời gian trung bình** | Vài giờ cho mỗi đợt nhập/xuất lớn; nhiều ngày cho kiểm kê tổng. |
| **Tần suất** | Hàng ngày (nhập/xuất) và định kỳ hàng tháng (kiểm kê). |

**Các bước thực hiện:**
1. **Nhập kho:**
   - Nhân viên kho tiếp nhận Phiếu giao hàng từ Nhà cung cấp.
   - Bốc dỡ hàng, tiến hành đếm số lượng, kiểm tra đối chiếu bằng mắt thường với phiếu.
   - Nếu khớp, tiến hành ghi chép số liệu vào "Sổ nhập kho" bằng tay, sau đó nhập lại vào Excel hoặc ERP.
   - Hàng hóa được sắp xếp lên kệ một cách thủ công, phụ thuộc vào trí nhớ và thói quen của nhân viên (chưa áp dụng triệt để nguyên tắc FEFO - First Expired First Out bằng hệ thống).
2. **Xuất kho:**
   - Nhận "Phiếu yêu cầu xuất kho" từ các nhà thuốc hoặc bộ phận bán online.
   - Nhân viên kho đi dọc các lối đi, tìm và lấy hàng thủ công dựa trên kinh nghiệm.
   - Đóng gói và ghi chép trừ lùi vào Thẻ kho (giấy) treo tại kệ, đồng thời ghi vào Sổ xuất kho.
3. **Kiểm kê định kỳ:**
   - Hàng tháng, toàn bộ hoạt động xuất nhập tạm ngưng. Nhân viên tiến hành đếm tay từng hộp thuốc trên tất cả các kệ.
   - Số liệu đếm thực tế được ghi ra giấy, sau đó Trưởng kho gõ lại vào Excel để đối chiếu với phần mềm.
   - Nếu có chênh lệch, tiến hành tìm kiếm nguyên nhân và lập biên bản giải trình.

**Sơ đồ BPMN AS-IS:**
Sơ đồ bao gồm các luồng (Sub-process) riêng biệt cho Nhập kho, Xuất kho và Kiểm kê. Sự kiện rẽ nhánh (Gateway) thường xuyên xuất hiện ở các bước đối chiếu số liệu giấy tờ và thực tế.

*[Hình 4.5: Sơ đồ BPMN AS-IS – Quy trình quản lý kho]*

## 4.6. Quy trình tuyển dụng và đào tạo

Với tốc độ mở mới hàng trăm nhà thuốc mỗi năm, nhu cầu nhân sự của Long Châu là cực kỳ lớn. Tuy nhiên, quy trình tuyển dụng và đào tạo hiện tại mang nặng tính hành chính, sàng lọc thủ công, dẫn đến chu kỳ tuyển dụng kéo dài và khó tìm được ứng viên chất lượng một cách kịp thời.

**Bảng tóm tắt thông tin quy trình Tuyển dụng và đào tạo (AS-IS)**

| Thành phần | Mô tả chi tiết |
| :--- | :--- |
| **Mục tiêu** | Tuyển chọn, thu hút nhân sự phù hợp và trang bị kiến thức nền tảng trước khi làm việc. |
| **Tác nhân tham gia** | Bộ phận tuyển dụng (HR), Trưởng bộ phận yêu cầu, Hội đồng phỏng vấn, Ứng viên, Nhân viên đào tạo. |
| **Đầu vào** | Phiếu yêu cầu nhân sự, Hồ sơ ứng viên (CV). |
| **Đầu ra** | Hợp đồng lao động, nhân sự mới đã qua đào tạo sẵn sàng nhận việc. |
| **Biểu mẫu / Hệ thống** | Email, Form đăng ký Google/Excel, Website tuyển dụng, Hồ sơ giấy. |
| **Thời gian trung bình** | 15 - 30 ngày từ khi có yêu cầu đến khi nhân viên bắt đầu làm việc. |
| **Tần suất** | Liên tục hàng tháng theo kế hoạch mở rộng. |

**Các bước thực hiện:**
1. **Yêu cầu tuyển dụng:** Trưởng bộ phận có nhu cầu (ví dụ: Quản lý khu vực) điền form yêu cầu nhân sự, trình ký qua giấy hoặc email và gửi cho Phòng HR.
2. **Phê duyệt và đăng tin:** Trưởng phòng HR xem xét và phê duyệt. Nhân viên tuyển dụng tiến hành biên soạn nội dung và đăng tin thủ công lên website công ty, các nhóm Facebook, hoặc mạng lưới chuyên ngành (LinkedIn, trang việc làm).
3. **Thu nhận và sàng lọc:** Hồ sơ (CV) đổ về qua email hoặc link Google Form. Nhân viên HR phải mở từng CV, đọc và sàng lọc thủ công để chọn ra ứng viên đạt yêu cầu.
4. **Liên hệ và đặt lịch:** HR gọi điện thoại trực tiếp cho từng ứng viên qua vòng hồ sơ để mời phỏng vấn và gửi email xác nhận lịch.
5. **Phỏng vấn vòng 1 (HR):** Phỏng vấn đánh giá mức độ phù hợp về văn hóa, thái độ, kỳ vọng lương.
6. **Phỏng vấn vòng 2 (Chuyên môn):** Hội đồng phỏng vấn (gồm quản lý chuyên môn, dược sĩ trưởng) tiến hành phỏng vấn kiến thức y dược và xử lý tình huống.
7. **Ra quyết định và mời nhận việc:** HR tổng hợp kết quả (thường qua giấy chấm điểm), báo cáo giám đốc duyệt. Nếu trúng tuyển, gửi Thư mời nhận việc (Offer Letter) qua email.
8. **Ký hợp đồng:** Ứng viên đồng ý, đến văn phòng nộp hồ sơ cứng và ký hợp đồng lao động giấy.
9. **Đào tạo hội nhập:** Bộ phận đào tạo tổ chức các lớp học tập trung (offline) về văn hóa công ty, quy trình làm việc và kiến thức sản phẩm.
10. **Kiểm tra và phân công:** Ứng viên làm bài test giấy sau khóa học. Đạt yêu cầu sẽ được phân công về các nhà thuốc để bắt đầu công việc thực tế.

**Sơ đồ BPMN AS-IS:**
Sơ đồ mô phỏng một chuỗi các tác vụ kéo dài với nhiều vòng lặp, đặc biệt là vòng lặp ở khâu sàng lọc hồ sơ và phỏng vấn. Các cổng rẽ nhánh hiển thị kết quả Đạt/Không đạt ở từng vòng.

*[Hình 4.6: Sơ đồ BPMN AS-IS – Quy trình tuyển dụng và đào tạo]*
