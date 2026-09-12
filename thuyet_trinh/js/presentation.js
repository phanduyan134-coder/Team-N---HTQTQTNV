/**
 * Interactive Web Slide Controller - 27 Slides Edition (Full Chapters Coverage)
 */

let currentSlide = 1;
const totalSlides = 51;
let isNotesOpen = false;
let timerSeconds = 20 * 60; // 20 minutes
let timerInterval = null;
let isTimerRunning = false;
let wheelCooldown = false;
let isNavigating = false;

// 27 Speaker Notes
const SPEAKER_NOTES = {
  1: "Kính thưa Thầy Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên! Hôm nay, nhóm chúng em xin được đại diện báo cáo đồ án môn học Hệ thống Quản trị Quy trình Nghiệp vụ với đề tài: **'Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu'**. Nhóm chúng em gồm 6 thành viên, xin phép được mở đầu buổi thuyết trình.",
  2: "Về lý do chọn đề tài: Bán lẻ dược phẩm là ngành kinh doanh có tốc độ tăng trưởng bùng nổ tại Việt Nam. FPT Long Châu khi mở rộng mạng lưới thần tốc trên toàn quốc phải đối mặt với bài toán điều phối vận hành cực kỳ phức tạp. Nếu các quy trình không được chuẩn hóa và số hóa, doanh nghiệp sẽ gặp rủi ro lớn về sai lệch kho, chậm trễ đơn hàng và nguy cơ cận hạn thuốc.",
  3: "Trên màn hình là 7 mục tiêu nghiên cứu cụ thể của đồ án: Đi từ khảo sát cơ cấu doanh nghiệp; phân loại 10 quy trình theo 3 tầng BPM; số hóa 6 quy trình AS-IS chuẩn BPMN 2.0; phân tích định lượng chuỗi giá trị VA/NVA và truy vết nguyên nhân gốc rễ bằng 5 Whys & 6M; từ đó tái thiết kế mô hình BPMN 2.0 TO-BE tối ưu và xây dựng lộ trình thực thi khả thi.",
  4: "Về đối tượng và phạm vi: Đề tài tập trung vào hệ thống quy trình nghiệp vụ của FPT Long Châu trên 4 khía cạnh: Dòng luân chuyển vật phẩm y tế, Dòng thông tin & chứng từ, Các bên tác nhân liên quan, và Hệ thống công nghệ hỗ trợ. Đóng góp trọng tâm là bộ giải pháp mô hình hóa BPMN 2.0 AS-IS, TO-BE và lộ trình công nghệ khả thi với thời gian thu hồi vốn dưới 2 năm.",
  5: "Để thực hiện đề tài một cách khoa học và toàn diện, nhóm kết hợp 6 phương pháp nghiên cứu chính: (1) Thu thập dữ liệu thứ cấp từ báo cáo FRT và tiêu chuẩn Bộ Y tế; (2) Quan sát thực tế tại nhà thuốc; (3) Mô hình hóa chuẩn OMG BPMN 2.0; (4) Phân tích chuỗi giá trị VA/NVA; (5) Phân tích Lean Six Sigma, 5 Whys & 6M Ishikawa; và (6) Tái thiết kế quy trình TO-BE cùng lộ trình triển khai khả thi.",
  6: "Về ý nghĩa thực tiễn, đề tài đóng góp 3 giá trị cốt lõi: Thứ nhất, minh họa phương pháp luận BPM chuẩn mực và nhận diện các thao tác lãng phí NVA; Thứ hai, đề xuất các giải pháp số hóa mang tính thực tế cao như Barcode/QR, chuẩn FEFO và tích hợp WMS-ERP Real-time; Thứ ba, xây dựng website mô phỏng trực quan đóng vai trò là tài liệu tham khảo học thuật giá trị.",
  7: "Báo cáo hoàn chỉnh của nhóm được kết cấu chuẩn mực gồm 6 chương: Chương 1 Giới thiệu tổng quan Công ty CP Dược phẩm FPT Long Châu; Chương 2 Khảo sát, Liệt kê và Phân loại Quy trình Nghiệp vụ; Chương 3 Mô hình hóa Quy trình Nghiệp vụ Hiện tại (AS-IS) với 6 quy trình; Chương 4 Phân tích Quy trình Nghiệp vụ chuyên sâu; Chương 5 Đề xuất Cải tiến Quy trình Nghiệp vụ (TO-BE); và Chương 6 Kết luận và Hướng phát triển.",
  8: "Sau đây, em xin phép đi vào Chương 1: Giới thiệu về Công ty Cổ phần Dược phẩm FPT Long Châu.",
  9: "Về tổng quan: Chuỗi nhà thuốc do Công ty Cổ phần Dược phẩm FPT Long Châu vận hành, là công ty con của FPT Retail (mã FRT, Tập đoàn FPT). Đến năm 2024, Long Châu dẫn đầu toàn quốc với hơn 1.800 nhà thuốc tại 63 tỉnh thành, 100% đạt chuẩn GPP. Doanh nghiệp hướng tới tầm nhìn chuỗi bán lẻ y tế số 1 Việt Nam, hoạt động với sứ mệnh chăm sóc sức khỏe cộng đồng bằng sự tận tâm, chuyên nghiệp và 4 giá trị cốt lõi vững chắc.",
  10: "Về lịch sử: Khởi đầu từ một nhà thuốc gia đình uy tín tại Quận 5 vào năm 1985, bước ngoặt lớn diễn ra vào năm 2017 khi FPT Retail mua lại và tái cấu trúc chuỗi. Từ vài chục cửa hàng ban đầu, Long Châu đã bứt phá ngoạn mục đạt mốc 1.000 cửa hàng năm 2022 và vượt hơn 1.800 cửa hàng vào năm 2024.",
  11: "Về lĩnh vực hoạt động: Long Châu vận hành dựa trên 4 trụ cột chính: Thứ nhất là bán lẻ dược phẩm với lợi thế số 1 về thuốc kê đơn và thuốc đặc trị; Thứ hai là đa dạng sản phẩm sức khỏe, thực phẩm chức năng và thiết bị y tế chính hãng; Thứ ba là mô hình đa kênh Omnichannel kết nối 1.800 nhà thuốc với Mobile App; và thứ tư là chuỗi cung ứng logistics hiện đại đạt 100% chuẩn mực GPP của Bộ Y tế.",
  12: "Cơ cấu tổ chức của Long Châu được thiết lập theo mô hình trực tuyến - chức năng hiện đại: Đứng đầu là Hội đồng quản trị và Tổng Giám đốc FPT Retail, điều hành trực tiếp Giám đốc chuỗi Long Châu và các khối Mua hàng, QA, HR, IT, Kho vận cho đến từng nhà thuốc cơ sở.",
  13: "Trên thị trường chuỗi dược, Long Châu giữ vị thế số 1 về doanh thu và mạng lưới cửa hàng, vượt trội so với Pharmacity hay An Khang nhờ thế mạnh công nghệ từ tập đoàn FPT, danh mục thuốc kê đơn dồi dào và chính sách giá cạnh tranh.",
  14: "Chiến lược tương lai của Long Châu là hướng tới cột mốc 2.500 nhà thuốc, mở rộng chuỗi trung tâm tiêm chủng vắc xin và đầu tư mạnh mẽ vào trí tuệ nhân tạo (AI) cùng hệ thống quản trị kho tự động. Tiếp theo, nhóm xin kính mời Thầy và các bạn theo dõi nội dung Chương 2 và Chương 3.",
  15: "Kính thưa Thầy và các bạn, đại diện nhóm xin phép tiếp nối phần trình bày với Chương 2: Khảo sát, Liệt kê và Phân loại Quy trình Nghiệp vụ.",
  16: "Đồ án tiếp cận theo chuẩn BPM hiện đại, bám sát vòng đời BPM 6 giai đoạn: Nhận diện, Khám phá, Phân tích, Tái thiết kế, Triển khai và Giám sát vận hành trong môi trường bán lẻ dược phẩm.",
  17: "Dữ liệu nghiên cứu được tổng hợp từ Báo cáo thường niên FPT Retail, tài liệu pháp lý GPP của Bộ Y tế, quan sát luồng giao dịch tại các nhà thuốc và các thông tin công khai trên ứng dụng Long Châu.",
  18: "Theo chuẩn mực BPM quốc tế (Dumas et al.) và Chuỗi giá trị Michael Porter, nhóm phân loại toàn bộ hoạt động của Long Châu thành 3 tầng rõ rệt: Tầng Quản lý (định hướng và kiểm soát chuẩn GPP), Tầng Cốt lõi (trực tiếp tạo dòng giá trị và phục vụ người bệnh) và Tầng Hỗ trợ (cung cấp nguồn lực kho vận, nhân sự và CNTT bảo đảm hệ thống vận hành liên tục).",
  19: "Mục 2.4 trong báo cáo chuẩn hóa toàn bộ 10 Sơ đồ Kiến trúc phân rã (Level 2 Architecture - từ Hình 2.2 đến Hình 2.11) cấu trúc theo 3 tầng nghiệp vụ: Tầng Quản lý (Chuỗi cung ứng, Chất lượng, Tài chính, Pháp lý); Tầng Cốt lõi (Bán thuốc tại quầy, Bán online, CRM); và Tầng Hỗ trợ (Kho vận, Tuyển dụng đào tạo, CNTT). Thầy và các bạn có thể click chọn trực tiếp từng quy trình trên slide để xem chi tiết sơ đồ phân rã của quy trình đó.",
  20: "Trên màn hình là danh mục 10 quy trình nghiệp vụ then chốt đã được nhóm khảo sát và chuẩn hóa tên gọi, bao gồm đầy đủ các khâu từ mua hàng, kho bãi, bán hàng trực tiếp, trực tuyến cho đến quản trị nhân sự và tài chính.",
  21: "Mỗi quy trình đều được nhóm chuẩn hóa hồ sơ thuộc tính (Process Profile) với 7 yếu tố toàn diện theo chuẩn BPM quốc tế: Mục tiêu, Đối tượng khách hàng (Nội bộ & Bên ngoài), Tác nhân chính, Đầu vào, Đầu ra, Các khả năng kết quả (Tích cực, Tiêu cực, Ngoại lệ) và Điểm đặc thù ngành dược, tạo nền tảng phân tích đồng bộ và khép kín dòng giá trị.",
  22: "Dựa trên ma trận đánh giá mức độ phức tạp và tầm ảnh hưởng kinh doanh: Nhóm chọn **6 quy trình trọng tâm** để mô hình hóa BPMN 2.0 AS-IS chi tiết ở Chương 3; đồng thời định vị **2 quy trình then chốt nhất** (Bán thuốc tại quầy và Quản lý kho) để phân tích định lượng chuyên sâu ở Chương 4 và xây dựng mô hình cải tiến TO-BE ở Chương 5.",
  23: "Kính chào Thầy và các bạn, đại diện nhóm xin phép trình bày Chương 3: Mô hình hóa Quy trình Nghiệp vụ Hiện tại (AS-IS) của FPT Long Châu theo chuẩn quốc tế OMG BPMN 2.0, khảo sát toàn diện 6 quy trình nghiệp vụ then chốt để nhận diện các nút thắt cổ chai trong vận hành chuỗi hơn 1.800 nhà thuốc.",
  24: "Tại quy trình Chuỗi cung ứng: Các nhà thuốc báo cáo tồn kho định kỳ qua file Excel hoặc email; Trưởng kho tổng hợp số liệu thủ công; việc phê duyệt đơn PO qua email mất từ 1 đến 2 ngày; đồng thời theo dõi xe hàng với Nhà cung cấp phụ thuộc vào liên lạc điện thoại, dẫn đến chu kỳ đặt hàng kéo dài 3 đến 5 ngày và tiềm ẩn sai sót dữ liệu.",
  25: "Với quy trình Quản lý Chất lượng GPP: Khi nhập hàng, dược sĩ kiểm tra chứng từ CO/CQ và bao bì bằng mắt thường, sau đó ghi chép tay vào Sổ kiểm soát chất lượng; việc theo dõi nhiệt ẩm bằng sổ tay dễ mang tính đối phó, và khi có lệnh thu hồi thuốc khẩn cấp từ Cục Quản lý Dược, việc truy vết nguồn gốc lô thuốc mất từ 12 đến 24 giờ do hồ sơ giấy tờ phân tán.",
  26: "Đây là quy trình cốt lõi trọng điểm số 1: Do chưa có hệ thống lấy số phân luồng, khách dồn ứ giờ cao điểm; dược sĩ tra cứu tồn kho trên POS rồi phải rời quầy đi tìm thuốc trên kệ bằng mắt và trí nhớ; chưa có lịch sử bệnh án điện tử. Tổng chu kỳ phục vụ lên tới 13.5 phút/giao dịch, trong đó thời gian chờ đợi và đi lại chiếm tới gần một nửa.",
  27: "Tại kênh bán thuốc Online O2O: Dù khách đặt hàng qua Web hoặc App, nhân viên CSKH vẫn phải gọi điện thoại xác nhận từng đơn rất tốn kém; dược sĩ duyệt toa kê đơn thủ công qua ảnh chụp màn hình; và hệ thống chưa tích hợp API theo dõi vị trí shipper thời gian thực.",
  28: "Tại quy trình Kho trọng điểm số 2: Cả 3 luồng Nhập, Xuất và Kiểm kê đều tồn tại nhiều bất cập. Nhân viên ghi thẻ kho giấy rồi gõ lại vào ERP lần hai; việc lấy hàng chưa áp dụng nguyên tắc FEFO tự động khiến khoảng 5% thuốc bị cận hạn phải tiêu hủy; tỷ lệ sai lệch tồn kho lên tới 8% và kiểm kê phải đóng băng hoạt động kho nhiều ngày.",
  29: "Cuối cùng là quy trình Tuyển dụng: Nhân sự HR phải mở và sàng lọc từng CV thủ công bằng mắt; phỏng vấn 2 vòng kéo dài khiến chu kỳ tuyển dụng mất từ 15 đến 30 ngày; khâu đào tạo tập trung offline tốn kém chi phí cho ứng viên ở tỉnh xa. Tiếp theo, nhóm xin chuyển sang Chương 4: Phân tích Quy trình Nghiệp vụ.",
  30: "Kính thưa Thầy cùng toàn thể các bạn, đại diện Nhóm 15 xin phép tiếp nối buổi báo cáo với Chương 4: Phân tích Quy trình Nghiệp vụ hiện tại (AS-IS). Mục tiêu của chương này là bóc tách các lãng phí vô hình thành những con số định lượng cụ thể, chỉ rõ các điểm nghẽn của hệ thống, làm tiền đề vững chắc để nhóm xây dựng mô hình cải tiến TO-BE ở Chương 5.",
  31: "Tại mục 4.1, nhóm lựa chọn phân tích chuyên sâu 2 quy trình trọng điểm là Bán thuốc tại nhà thuốc và Quản lý kho dựa trên 3 tiêu chí: Tần suất giao dịch lớn, Tác động trực tiếp đến doanh thu - chi phí, và Tiềm năng số hóa cao. Nhóm chuẩn hóa phương pháp luận BPM gồm: Khung phân loại chuỗi giá trị VA/BVA/NVA, nhận diện 3 nhóm lãng phí Lean Move – Hold – Overdo, cùng 2 công cụ truy vết nguyên nhân gốc rễ là Sơ đồ Xương cá Fishbone 6M và Kỹ thuật 5 Whys.",
  32: "Trên màn hình là 2 mắt xích sống còn của Long Châu: Quy trình Bán thuốc (Front-end) trực tiếp phục vụ khách hàng tại hơn 1.800 nhà thuốc và tạo hơn 80% doanh thu; cùng Quy trình Quản lý kho (Back-end) làm bệ đỡ hậu cần nhập hàng và điều phối thuốc đi toàn quốc. Nhóm sẽ đối chiếu và phân tích chuyên sâu 2 quy trình này qua các trụ cột từ Slide 33 đến 37.",
  33: "Tại Trụ cột 1 - Chuỗi giá trị: Tại quầy bán thuốc, một lượt phục vụ khách hàng mất trung bình 13.5 phút nhưng lãng phí NVA chiếm tới 48.2% (khách chờ 3 phút, tìm thuốc trên kệ 2.5 phút); Tại kho trung tâm, chu kỳ quản lý kho mất 510 phút nhưng lãng phí NVA lên tới 70.6% (đặc biệt đợt kiểm kê đếm tay ngốn tới 240 phút làm đình trệ kho). Cả hai quy trình đều đang bị bóp nghẹt bởi các thao tác thủ công không sinh ra giá trị!",
  34: "Tại Trụ cột 2 - Bóc tách Lãng phí Lean: Cả hai quy trình đều mắc bộ ba lãng phí kinh điển: Thứ nhất là Move (Di chuyển thừa): Dược sĩ phải đi lại nhiều vòng tìm tủ thuốc, còn thủ kho phải đi bộ 8-10 km mỗi ngày vì thiếu bản đồ ô kệ số; Thứ hai là Hold (Chờ đợi & Tồn ứ): Khách hàng chờ mua giờ cao điểm, hàng chờ ký chứng từ giấy, và thuốc cận date bị đè phía trong do thiếu cơ chế FEFO tự động gây thiệt hại hàng tỷ đồng; Thứ ba là Overdo (Làm thừa & Sửa sai): Quầy in 100% hóa đơn giấy dù khách bỏ lại, còn kho thì ghi thẻ kho giấy rồi lại gõ tay vào phần mềm ERP lần thứ hai.",
  35: "Tại Slide 35, nhóm trình bày Sơ đồ Xương cá Fishbone 6M - Hình 4.1 trong báo cáo cùng Cây 5 Whys cho quy trình Bán thuốc: Phân tích 6 yếu tố Man, Machine, Method, Material, Measurement và Milieu chỉ rõ các xung đột vận hành. Khi áp dụng 5 Whys truy vết: Tại sao phục vụ lâu? Vì dược sĩ tìm thuốc lâu; do POS không hiển thị vị trí ô kệ; do POS chưa kết nối thời gian thực với kho; và do kiến trúc phần mềm phân tán đồng bộ theo đợt. Căn nguyên gốc rễ (Why 5) không nằm ở kỹ năng dược sĩ, mà do Hạ tầng CNTT chưa được đầu tư nâng cấp thành nền tảng tích hợp thời gian thực!",
  36: "Tiếp theo tại Slide 36 là Sơ đồ Xương cá Fishbone 6M - Hình 4.2 cùng Cây 5 Whys cho quy trình Quản lý kho: Kho trung tâm gặp rủi ro sai lệch tồn 5-8% và nguy cơ hủy thuốc cận date. Bóc tách 6M cho thấy thủ kho mệt mỏi vì đếm tay, thiếu thiết bị quét mã vạch PDA chuyên dụng, và thiếu thuật toán ép xuất FEFO. Cây 5 Whys chỉ rõ căn nguyên cốt lõi (Why 5): Doanh nghiệp chưa đầu tư hệ thống WMS thông minh tích hợp IoT và máy PDA Barcode để tự động hóa định vị ô kệ và kiểm soát hạn dùng. Đây là lý do sống còn cần triển khai WMS số hóa!",
  37: "Tại Slide 37, nhóm lượng hóa bức tranh tổn thất trên 3 chiều cốt lõi: Về Thời gian, hiệu suất chu kỳ PCE tại quầy chỉ đạt 44.4% và tại kho chỉ 23.5%; Về Chi phí, toàn chuỗi phải trả hơn 18.7 tỷ đồng mỗi tháng chi phí nhân công cho thời gian chết (NVA) tại quầy, và thiệt hại 27 đến 36 tỷ đồng mỗi năm do hủy thuốc quá hạn tại kho; Về Chất lượng, tỷ lệ khách bỏ hàng vì chờ lâu từ 8-10%, và sai lệch tồn kho thực tế lên tới 5% đến 8%.",
  38: "Để khép lại Chương 4, tại Bảng 4.7, nhóm đúc kết 5 vấn đề then chốt và 3 nút thắt chiến lược cần tháo gỡ cấp bách: Thứ nhất là Nút thắt Thông tin (dữ liệu tồn kho bị đứt gãy); Thứ hai là Nút thắt Vận hành (quá phụ thuộc vào ghi chép thủ công); và Thứ ba là Nút thắt Rủi ro Date & GPP do thiếu cơ chế FEFO tự động. Toàn bộ các phát hiện định lượng này là cơ sở khoa học đanh thép để nhóm bước sang Chương 5: Đề xuất cải tiến quy trình (TO-BE) ngay sau đây.",
  39: "Kính thưa Thầy và các bạn, đại diện nhóm xin phép trình bày Chương 5: Đề xuất Cải tiến Quy trình Nghiệp vụ (TO-BE). Mục tiêu là đưa ra các giải pháp tự động hóa và đồng bộ thời gian thực để giải quyết triệt để 5 vấn đề cốt lõi đã được bạn An chỉ ra ở Chương 4.",
  40: "Mục tiêu cải tiến được lượng hóa bằng các KPI cụ thể: Rút ngắn thời gian phục vụ tại quầy từ **13.5 phút xuống còn 4 – 5 phút/khách** (giảm khoảng **60% – 63%**); đưa tỷ lệ sai lệch kho từ 8% xuống dưới 1%; và nâng chỉ số hài lòng khách hàng NPS lên mức 65+.",
  41: "Nhóm đề xuất 4 giải pháp số hóa đột phá tại quầy: 1. Triển khai Kiosk lấy số tự phục vụ để phân luồng khách mua theo đơn và khách cần tư vấn. 2. Nâng cấp POS thông minh nhận diện khách hàng qua mã QR để hiển thị ngay lịch sử bệnh án và dị ứng thuốc. 3. Tích hợp sơ đồ kho ảo trên màn hình POS, chỉ rõ thuốc ở kệ nào, ngăn nào. 4. Chuyển sang thanh toán không tiền mặt và hóa đơn điện tử tự động qua Zalo/App.",
  42: "Tại hệ thống kho: Nhóm đề xuất trang bị thiết bị cầm tay PDA quét mã Barcode/QR 100% lô hàng; cài đặt thuật toán WMS ép buộc xuất hàng nghiêm ngặt theo chuẩn FEFO (hạn gần xuất trước); và thiết lập bot cảnh báo tự động khi tồn kho xuống dưới mức an toàn.",
  43: "Các giải pháp công nghệ làm đòn bẩy bao gồm: Máy quét mã vạch không dây PDA, hạ tầng Real-time ERP đồng bộ dữ liệu tức thời, thuật toán AI dự báo nhu cầu bổ sung hàng và tính năng tự động gửi thông báo nhắc uống thuốc trên App Long Châu.",
  44: "Trên màn hình là 2 sơ đồ BPMN 2.0 TO-BE đã được nhóm thiết kế lại hoàn chỉnh cho Quy trình Bán thuốc và Quản lý kho. Các tác vụ thủ công (Manual Task) đã được thay thế hoàn toàn bằng Service Task tự động của hệ thống, bổ sung các Gateway tự động kiểm tra FEFO và gửi thông điệp Real-time.",
  45: "Bảng so sánh 5 tiêu chí trên slide minh chứng sự vượt trội của TO-BE: Loại bỏ 70% thao tác thừa NVA; thời gian phục vụ tại quầy giảm mạnh từ 13.5 phút xuống 4-5 phút; dữ liệu kho liên thông thời gian thực 100% và chỉ số thiện cảm khách hàng tăng trưởng rõ rệt.",
  46: "Dự án có tính khả thi rất cao nhờ tiềm lực công nghệ và tài chính của tập đoàn mẹ FPT Retail. Thời gian thu hồi vốn (ROI) ước tính dưới 2 năm. Lộ trình triển khai 12 tháng chia làm 3 giai đoạn: Chuẩn bị thiết kế (Tháng 1-3), Triển khai Pilot (Tháng 4-6), và Mở rộng toàn chuỗi (Tháng 7-12). Cuối cùng, nhóm xin tổng kết đề tài tại Chương 6 ngay sau đây.",
  47: "Kính thưa Thầy ThS. Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên, đại diện Nhóm 15 xin phép trình bày phần cuối của buổi báo cáo: **Chương 6 – Kết luận và Hướng phát triển** (Slide 47 đến Slide 51). Tại chương kết này, nhóm sẽ đúc kết 5 kết quả đạt được, nhìn nhận khách quan 4 hạn chế và đề xuất 6 hướng đi chiến lược trong tương lai.",
  48: "Kính thưa Thầy và Hội đồng, xuyên suốt quá trình nghiên cứu, nhóm đã khép kín trọn vẹn vòng đời BPM với **5 đóng góp cốt lõi**: 1. **Khảo sát & Kiến trúc 10 quy trình:** Chuẩn hóa toàn bộ dòng chảy nghiệp vụ của FPT Long Châu theo 3 tầng Michael Porter (Quản lý - Cốt lõi - Hỗ trợ) và lập ma trận định lượng chọn ra 6 quy trình trọng điểm. 2. **Mô hình hóa BPMN 2.0 AS-IS:** Thiết kế chuẩn mực 6 sơ đồ hiện trạng dạng Swim lane phân vai rõ ràng, số hóa toàn diện quy trình giấy tờ thủ công. 3. **Phân tích lãng phí Lean & Root-Cause:** Định lượng dòng giá trị (Quầy bán NVA 48.2%, Kho NVA 73.5%), nhận diện 7 lãng phí Lean và ứng dụng Ishikawa 6M cùng 5 Whys chỉ điểm nguyên nhân gốc rễ. 4. **Tái thiết kế quy trình TO-BE:** Xây dựng 2 sơ đồ TO-BE chuẩn BPMN 2.0 tích hợp 4 đòn bẩy công nghệ số (PDA, Real-time ERP, OMS, AI), cắt giảm tới 63% thời gian xử lý. 5. **Đánh giá khả thi & Lộ trình thực thi:** Phân tích toàn diện tính khả thi, quản trị rủi ro và vạch lộ trình 3 giai đoạn 12 tháng với thời gian thu hồi vốn ROI dưới 2 năm.",
  49: "Trên tinh thần trung thực học thuật, nhóm thẳng thắn nhìn nhận **4 rào cản** của đề tài: 1. **Về bảo mật dữ liệu:** Do chính sách bảo mật của FPT Retail, nhóm không truy xuất trực tiếp database ERP nội bộ. Dữ liệu chu kỳ thời gian và chi phí dựa trên quan sát thực địa, đóng vai khách hàng và mô phỏng học thuật nên có sai số nhất định. 2. **Về môi trường thực nghiệm:** Các giải pháp TO-BE mới dừng lại ở mô hình thiết kế chuẩn và phân tích lý thuyết, chưa có điều kiện thử nghiệm thực tế tại một nhà thuốc Long Châu để đo lường ROI ngoài đời thực. 3. **Về phạm vi đào sâu:** Do giới hạn thời gian đồ án môn học, nhóm chỉ phân tích bóc tách công cụ sâu cho 2 quy trình then chốt (Bán thuốc & Quản lý kho); 4 quy trình còn lại dừng ở mức AS-IS. 4. **Về thời gian và nguồn lực:** Do khuôn khổ đồ án môn học, một số tham số chu kỳ thời gian và chi phí dựa trên quan sát thực địa kết hợp phỏng vấn giả định, cần được kiểm chứng thêm qua số liệu vận hành thực tế dài hạn.",
  50: "Từ những hạn chế đó, nhóm đề xuất **6 định hướng chiến lược** để tiếp tục hoàn thiện và đưa giải pháp vào ứng dụng thực tế: 1. **Tối ưu toàn chuỗi giá trị:** Mở rộng phân tích Lean và thiết kế TO-BE cho 4 quy trình còn lại nhằm đồng bộ hóa toàn bộ chuỗi cung ứng. 2. **Xây dựng hệ sinh thái BPMS hoàn chỉnh:** Bổ sung Backend và tích hợp BPMN Engine (như Camunda hay Flowable) để xây dựng hệ thống quản trị và giao việc quy trình tự động. 3. **Thực nghiệm Pilot:** Phối hợp triển khai thí điểm tại 1-2 nhà thuốc Long Châu trong 1-3 tháng để thu thập số liệu thực chứng minh hiệu quả. 4. **Tích hợp Process Mining:** Khai phá Event Logs thực từ hệ thống ERP/POS để tự động tái hiện quy trình thực và phát hiện điểm nghẽn vô hình. 5. **Tự động hóa bằng RPA:** Nhúng robot phần mềm xử lý tự động các tác vụ lặp lại như đối chiếu hóa đơn và kiểm kê kho. 6. **Chuỗi lạnh Vaccine & Benchmarking:** Chuẩn hóa quy trình chuỗi lạnh GSP/GDP cho Trung tâm Tiêm chủng Long Châu và đối chuẩn năng lực vận hành với các chuỗi đối thủ.",
  51: "Kính thưa Thầy và Hội đồng, bài báo cáo đồ án môn học Quản trị Quy trình Nghiệp vụ của Nhóm 15 đến đây xin được phép kết thúc! Nhóm chúng em xin bày tỏ lòng biết ơn sâu sắc nhất đến ThS. Hà Lê Hoài Trung đã tận tình định hướng và hướng dẫn nhóm hoàn thành đồ án này. Nhóm chúng em rất mong nhận được những nhận xét, đóng góp quý báu từ Thầy và Hội đồng, và chúng em xin sẵn sàng lắng nghe, giải trình các câu hỏi phản biện ạ! Em xin chân thành cảm ơn!",
};

const SLIDE_TITLES = [
  "Trang bìa đồ án",
  "Lý do chọn đề tài",
  "Mục tiêu nghiên cứu",
  "Đối tượng & Phạm vi nghiên cứu",
  "Phương pháp nghiên cứu",
  "Ý nghĩa thực tiễn của đề tài",
  "Bố cục báo cáo (6 Chương)",
  "CHƯƠNG 1: GIỚI THIỆU VỀ CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU",
  "1.1. Tổng quan về công ty",
  "1.2. Lịch sử hình thành & phát triển",
  "1.3. Lĩnh vực hoạt động",
  "1.4. Cơ cấu tổ chức bộ máy",
  "1.5. Hoạt động kinh doanh & Vị thế cạnh tranh",
  "1.6. Định hướng chiến lược phát triển",
  "CHƯƠNG 2: KHẢO SÁT, LIỆT KÊ VÀ PHÂN LOẠI QUY TRÌNH NGHIỆP VỤ",
  "2.1. Khái quát về Quản trị Quy trình Nghiệp vụ (BPM)",
  "2.2. Phương pháp và nguồn thu thập dữ liệu",
  "2.3. Phân loại quy trình nghiệp vụ (Ngôi nhà BPM)",
  "2.4. Kiến trúc quy trình nghiệp vụ của FPT Long Châu",
  "2.5. Danh sách 10 quy trình nghiệp vụ",
  "2.6. Mô tả tổng quan 10 quy trình nghiệp vụ",
  "2.7. Lựa chọn các quy trình mô phỏng & phân tích chuyên sâu",
  "CHƯƠNG 3: MÔ HÌNH HÓA QUY TRÌNH NGHIỆP VỤ HIỆN TẠI (AS-IS)",
  "3.1. Quy trình Quản lý Chuỗi cung ứng (AS-IS)",
  "3.2. Quy trình Quản lý Chất lượng (GPP / GDP) (AS-IS)",
  "3.3. Quy trình Bán thuốc tại Nhà thuốc (AS-IS)",
  "3.4. Quy trình Bán thuốc Online (Omnichannel O2O) (AS-IS)",
  "3.5. Quy trình Quản lý Kho Trung tâm (AS-IS)",
  "3.6. Quy trình Tuyển dụng & Đào tạo Dược sĩ (AS-IS)",
  "CHƯƠNG 4: PHÂN TÍCH QUY TRÌNH NGHIỆP VỤ (AS-IS)",
  "4.1. Tiêu chí và phương pháp phân tích quy trình",
  "4.2 & 4.3. Phân tích Quy trình Bán thuốc & Quản lý Kho",
  "4.2.1 & 4.3.1. Định lượng Chuỗi giá trị (VA / BVA / NVA)",
  "4.2.2 & 4.3.2. Bóc tách Lãng phí Lean (Move – Hold – Overdo)",
  "4.2.3. Nguyên nhân gốc rễ: Fishbone 6M & 5 Whys Bán thuốc",
  "4.3.3. Nguyên nhân gốc rễ: Fishbone 6M & 5 Whys Quản lý kho",
  "4.2.4 & 4.3.4. Phân tích Định lượng: Thời gian – Chi phí – Chất lượng",
  "4.4. Tổng hợp các Vấn đề và Điểm nghẽn cốt lõi",
  "CHƯƠNG 5: ĐỀ XUẤT CẢI TIẾN QUY TRÌNH NGHIỆP VỤ (TO-BE)",
  "5.1. Mục tiêu cải tiến & Nguyên tắc cốt lõi",
  "5.2. Đề xuất cải tiến Quy trình Bán thuốc tại Nhà thuốc",
  "5.3. Đề xuất cải tiến Quy trình Quản lý Kho Dược",
  "5.4. Ứng dụng 4 giải pháp công nghệ hỗ trợ cải tiến",
  "5.5. Mô hình BPMN 2.0 TO-BE (Đã tối ưu hóa)",
  "5.6. So sánh toàn diện quy trình AS-IS và TO-BE",
  "5.7. Đánh giá tính khả thi, rủi ro và lộ trình triển khai",
  "CHƯƠNG 6: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN",
  "6.1. Kết quả đạt được của đề tài",
  "6.2. Nhìn nhận khách quan hạn chế của đề tài",
  "6.3. Hướng phát triển và tiềm năng ứng dụng",
  "Xin chân thành cảm ơn & Q&A"
];

function getSlideTitle(i) {
  if (typeof document !== 'undefined') {
    const slideEl = document.querySelector(`.slide[data-slide="${i}"]`);
    if (slideEl) {
      const heading = slideEl.querySelector("h2, h1");
      if (heading) {
        let text = heading.textContent.replace(/\s+/g, ' ').trim();
        text = text.replace(/Phóng to sơ đồ.*/i, '').trim();
        text = text.replace(/Xem sơ đồ to.*/i, '').trim();
        if (text) return text;
      }
    }
  }
  return SLIDE_TITLES[i - 1] || `Slide ${i}`;
}

window.goToSlide = function(num) {
  if (num >= 1 && num <= totalSlides) {
    currentSlide = num;
    updateSlideView();
    try {
      history.replaceState(null, null, `#slide-${currentSlide}`);
    } catch(e) {}
  }
};

window.nextSlide = function() {
  if (isNavigating) return;
  isNavigating = true;
  setTimeout(() => { isNavigating = false; }, 280);

  if (currentSlide < totalSlides) {
    window.goToSlide(currentSlide + 1);
  }
};

window.prevSlide = function() {
  if (isNavigating) return;
  isNavigating = true;
  setTimeout(() => { isNavigating = false; }, 280);

  if (currentSlide > 1) {
    window.goToSlide(currentSlide - 1);
  }
};

window.toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.warn(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
};

window.toggleHeader = function() {
  const isHidden = document.body.classList.toggle("header-hidden");
  const icon = document.getElementById("header-toggle-icon");
  if (icon) {
    if (isHidden) {
      icon.className = "fa-solid fa-chevron-down";
    } else {
      icon.className = "fa-solid fa-chevron-up";
    }
  }
};

window.toggleTheme = function() {
  const isLight = document.body.classList.toggle("theme-light");
  localStorage.setItem("slide_theme", isLight ? "light" : "dark");
  const icon = document.getElementById("theme-icon");
  if (icon) {
    if (isLight) {
      icon.className = "fa-solid fa-moon text-blue-600";
    } else {
      icon.className = "fa-solid fa-sun text-amber-300";
    }
  }
};

window.toggleSpeakerNotes = function() {
  isNotesOpen = !isNotesOpen;
  const drawer = document.getElementById("speaker-notes-drawer");
  if (drawer) {
    if (isNotesOpen) drawer.classList.add("open");
    else drawer.classList.remove("open");
  }
};

window.toggleTimer = function() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    document.getElementById("timer-status-icon")?.classList.replace("fa-pause", "fa-play");
  } else {
    isTimerRunning = true;
    document.getElementById("timer-status-icon")?.classList.replace("fa-play", "fa-pause");
    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        renderTimerDisplay();
      } else {
        clearInterval(timerInterval);
        isTimerRunning = false;
        alert("Đã hết 20 phút thuyết trình!");
      }
    }, 1000);
  }
};

window.resetTimer = function() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 20 * 60;
  renderTimerDisplay();
  document.getElementById("timer-status-icon")?.classList.replace("fa-pause", "fa-play");
};

function renderTimerDisplay() {
  const m = Math.floor(timerSeconds / 60);
  const s = timerSeconds % 60;
  const el = document.getElementById("timer-display");
  if (el) el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ==================== FULLSCREEN BPMN PAN & ZOOM ENGINE ====================
let bpmnZoom = 1;
let bpmnPanX = 0;
let bpmnPanY = 0;
let isBpmnPanning = false;
let bpmnStartX = 0;
let bpmnStartY = 0;

window.openBpmnQuickView = function(svgPath, title) {
  const modal = document.getElementById("bpmn-quick-modal");
  const img = document.getElementById("bpmn-quick-image");
  const titleEl = document.getElementById("bpmn-quick-title");
  
  if (modal && img && titleEl) {
    img.src = svgPath;
    titleEl.textContent = title;
    modal.classList.remove("hidden");
    window.resetBpmnZoom();
    initBpmnViewportInteractions();
  }
};

window.closeBpmnModal = function() {
  const modal = document.getElementById("bpmn-quick-modal");
  if (modal) modal.classList.add("hidden");
};

// ==================== SLIDE 52: TO-BE BPMN TABS & ZOOM ====================
let currentToBeTab = 1;

window.switchToBeTab = function(tabIndex) {
  currentToBeTab = tabIndex;
  const img1 = document.getElementById("img-6-1");
  const img2 = document.getElementById("img-6-2");
  const btn1 = document.getElementById("tab-btn-6-1");
  const btn2 = document.getElementById("tab-btn-6-2");

  if (tabIndex === 1) {
    if (img1) img1.classList.remove("hidden");
    if (img2) img2.classList.add("hidden");
    if (btn1) {
      btn1.className = "px-4 py-1.5 border rounded-xl font-bold bg-cyan-600 border-cyan-400 text-white transition-all shadow-md text-xs sm:text-sm flex items-center gap-1.5";
    }
    if (btn2) {
      btn2.className = "px-4 py-1.5 border border-slate-600 rounded-xl font-bold bg-slate-800 text-slate-300 transition-all shadow-md hover:bg-slate-700 text-xs sm:text-sm flex items-center gap-1.5";
    }
  } else {
    if (img1) img1.classList.add("hidden");
    if (img2) img2.classList.remove("hidden");
    if (btn1) {
      btn1.className = "px-4 py-1.5 border border-slate-600 rounded-xl font-bold bg-slate-800 text-slate-300 transition-all shadow-md hover:bg-slate-700 text-xs sm:text-sm flex items-center gap-1.5";
    }
    if (btn2) {
      btn2.className = "px-4 py-1.5 border rounded-xl font-bold bg-cyan-600 border-cyan-400 text-white transition-all shadow-md text-xs sm:text-sm flex items-center gap-1.5";
    }
  }
};

window.zoomActiveToBe = function() {
  if (currentToBeTab === 1) {
    window.openBpmnQuickView(
      'assets/bpmn/hinh_5_1_bpmn_to_be_ban_thuoc_tai_nha_thuoc.svg',
      'Hình 5.1: Sơ đồ BPMN 2.0 TO-BE – Quy trình Bán thuốc tại Nhà thuốc (FPT Long Châu)'
    );
  } else {
    window.openBpmnQuickView(
      'assets/bpmn/hinh_5_2_bpmn_to_be_quan_ly_kho.svg',
      'Hình 5.2: Sơ đồ BPMN 2.0 TO-BE – Quy trình Quản lý Kho Trung tâm (FPT Long Châu)'
    );
  }
};


window.zoomBpmn = function(delta) {
  bpmnZoom = Math.max(0.6, Math.min(4.0, bpmnZoom + delta));
  applyBpmnTransform();
};

window.resetBpmnZoom = function() {
  bpmnZoom = 1;
  bpmnPanX = 0;
  bpmnPanY = 0;
  applyBpmnTransform();
};

function applyBpmnTransform() {
  const wrapper = document.getElementById("bpmn-transform-wrapper");
  const zoomLevel = document.getElementById("bpmn-zoom-level");
  
  if (wrapper) {
    wrapper.style.transform = `translate(${bpmnPanX}px, ${bpmnPanY}px) scale(${bpmnZoom})`;
  }
  if (zoomLevel) {
    zoomLevel.textContent = `${Math.round(bpmnZoom * 100)}%`;
  }
}

let isBpmnInteractionsInitialized = false;

function initBpmnViewportInteractions() {
  if (isBpmnInteractionsInitialized) return;
  isBpmnInteractionsInitialized = true;
  
  const viewport = document.getElementById("bpmn-modal-viewport");
  if (!viewport) return;

  viewport.addEventListener("wheel", (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    window.zoomBpmn(delta);
  }, { passive: false });

  viewport.addEventListener("mousedown", (e) => {
    isBpmnPanning = true;
    bpmnStartX = e.clientX - bpmnPanX;
    bpmnStartY = e.clientY - bpmnPanY;
    viewport.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isBpmnPanning) return;
    bpmnPanX = e.clientX - bpmnStartX;
    bpmnPanY = e.clientY - bpmnStartY;
    applyBpmnTransform();
  });

  window.addEventListener("mouseup", () => {
    if (isBpmnPanning) {
      isBpmnPanning = false;
      const vp = document.getElementById("bpmn-modal-viewport");
      if (vp) vp.style.cursor = "grab";
    }
  });

  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("bpmn-quick-modal");
    if (!modal || modal.classList.contains("hidden")) return;

    if (e.key === "+" || e.key === "=") {
      e.preventDefault();
      window.zoomBpmn(0.25);
    } else if (e.key === "-" || e.key === "_") {
      e.preventDefault();
      window.zoomBpmn(-0.25);
    } else if (e.key === "0") {
      e.preventDefault();
      window.resetBpmnZoom();
    }
  });
}

function updateSlideView() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((el, index) => {
    const sNum = index + 1;
    if (sNum === currentSlide) {
      el.classList.add("active");
      el.style.display = "flex";
      el.style.opacity = "1";
      el.style.visibility = "visible";
    } else {
      el.classList.remove("active");
      el.style.display = "none";
      el.style.opacity = "0";
      el.style.visibility = "hidden";
    }
  });

  const counter = document.getElementById("slide-counter");
  if (counter) {
    counter.textContent = `${String(currentSlide).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
  }

  const select = document.getElementById("slide-jump-select");
  if (select) select.value = currentSlide;

  const percent = Math.max(1, Math.round((currentSlide / totalSlides) * 100));
  const fillWidth = `${(currentSlide / totalSlides) * 100}%`;

  const progressFill = document.getElementById("slide-progress-fill");
  if (progressFill) {
    progressFill.style.width = fillWidth;
  }

  const progressPercent = document.getElementById("slide-progress-percent");
  if (progressPercent) {
    progressPercent.textContent = `${percent}%`;
  }

  const topLoadingLine = document.getElementById("top-loading-line");
  if (topLoadingLine) {
    topLoadingLine.style.width = fillWidth;
  }

  const prevBtn = document.getElementById("btn-prev-slide");
  const nextBtn = document.getElementById("btn-next-slide");
  if (prevBtn) prevBtn.disabled = (currentSlide === 1);
  if (nextBtn) nextBtn.disabled = (currentSlide === totalSlides);

  const notesContent = document.getElementById("notes-text-content");
  if (notesContent) {
    notesContent.textContent = SPEAKER_NOTES[currentSlide] || "Không có ghi chú cho slide này.";
  }

  if (currentSlide === 19 && typeof window.selectArchProcess === "function") {
    window.selectArchProcess(currentArchIndex || 0);
  }
}

function initSlideNavigator() {
  const track = document.getElementById("slide-progress-track");
  const tooltip = document.getElementById("slide-progress-tooltip");

  if (track) {
    track.addEventListener("click", (e) => {
      const rect = track.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const targetSlide = Math.max(1, Math.min(totalSlides, Math.round(ratio * (totalSlides - 1)) + 1));
      window.goToSlide(targetSlide);
    });

    if (tooltip) {
      track.addEventListener("mousemove", (e) => {
        const rect = track.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, mouseX / rect.width));
        const hoverSlide = Math.max(1, Math.min(totalSlides, Math.round(ratio * (totalSlides - 1)) + 1));

        tooltip.textContent = `Slide ${String(hoverSlide).padStart(2, '0')}: ${getSlideTitle(hoverSlide)}`;
        const tipX = Math.max(30, Math.min(rect.width - 30, mouseX));
        tooltip.style.left = `${tipX}px`;
        tooltip.style.opacity = "1";
      });

      track.addEventListener("mouseleave", () => {
        tooltip.style.opacity = "0";
      });
    }
  }

  const select = document.getElementById("slide-jump-select");
  if (select) {
    select.innerHTML = "";
    for (let i = 1; i <= totalSlides; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${String(i).padStart(2, '0')}. ${getSlideTitle(i)}`;
      select.appendChild(opt);
    }
    select.addEventListener("change", (e) => {
      window.goToSlide(parseInt(e.target.value));
    });
  }
}

function initKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    const bpmnModal = document.getElementById("bpmn-quick-modal");
    if (bpmnModal && !bpmnModal.classList.contains("hidden")) {
      if (e.key === "Escape") window.closeBpmnModal();
      return;
    }

    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      window.nextSlide();
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      window.prevSlide();
    } else if (e.key === "Home") {
      e.preventDefault();
      window.goToSlide(1);
    } else if (e.key === "End") {
      e.preventDefault();
      window.goToSlide(totalSlides);
    } else if (e.key.toLowerCase() === "f") {
      window.toggleFullscreen();
    } else if (e.key.toLowerCase() === "n") {
      window.toggleSpeakerNotes();
    } else if (e.key.toLowerCase() === "t") {
      window.toggleTimer();
    } else if (e.key.toLowerCase() === "h") {
      window.toggleHeader();
    } else if (e.key.toLowerCase() === "b") {
      const modal = document.getElementById("bpmn-quick-modal");
      if (modal && !modal.classList.contains("hidden")) {
        window.closeBpmnModal();
      } else if (currentSlide === 52) {
        window.zoomActiveToBe();
      } else {
        const activeSlide = document.querySelector(`.slide[data-slide="${currentSlide}"]`);
        if (activeSlide) {
          const zoomBtn = activeSlide.querySelector("button[onclick*='openBpmnQuickView'], [onclick*='openBpmnQuickView']");
          if (zoomBtn) zoomBtn.click();
        }
      }
    }
  });

  window.addEventListener("wheel", (e) => {
    if (e.target.closest("#bpmn-quick-modal") || e.target.closest("#speaker-notes-drawer")) return;
    
    if (wheelCooldown) return;
    if (Math.abs(e.deltaY) > 30) {
      wheelCooldown = true;
      if (e.deltaY > 0) {
        window.nextSlide();
      } else {
        window.prevSlide();
      }
      setTimeout(() => { wheelCooldown = false; }, 400);
    }
  }, { passive: true });
}

function initControls() {
  document.getElementById("btn-prev-slide")?.addEventListener("click", window.prevSlide);
  document.getElementById("btn-next-slide")?.addEventListener("click", window.nextSlide);
  document.getElementById("btn-fullscreen")?.addEventListener("click", window.toggleFullscreen);
  document.getElementById("btn-notes-close")?.addEventListener("click", window.toggleSpeakerNotes);
  document.getElementById("btn-toggle-header")?.addEventListener("click", window.toggleHeader);
  document.getElementById("btn-show-header")?.addEventListener("click", window.toggleHeader);
  document.getElementById("btn-toggle-theme")?.addEventListener("click", window.toggleTheme);

  document.getElementById("timer-badge")?.addEventListener("click", window.toggleTimer);
  document.getElementById("timer-reset-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    window.resetTimer();
  });
}


// ==================== SLIDE 19: ARCHITECTURE DECOMPOSITION VIEWER ====================
const ARCH_PROCESSES = [
  {
    code: "QT-01",
    name: "Quản lý chuỗi cung ứng",
    tier: "Tầng Quản lý",
    tierClass: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    btnBorder: "border-purple-500/70 bg-purple-950/70 text-purple-200 ring-2 ring-purple-400/50",
    fig: "Hình 2.2",
    img: "assets/bpmn/hinh_2_2_kientruc_chuoi_cung_ung.png",
    title: "Hình 2.2: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý chuỗi cung ứng dược phẩm",
    sys: "ERP SAP S/4HANA, Portal NCC, EDI",
    input: "Dự báo nhu cầu, Báo cáo tồn kho quầy",
    output: "Đơn đặt hàng PO & Hợp đồng phân phối"
  },
  {
    code: "QT-02",
    name: "Quản lý chất lượng",
    tier: "Tầng Quản lý",
    tierClass: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    btnBorder: "border-purple-500/70 bg-purple-950/70 text-purple-200 ring-2 ring-purple-400/50",
    fig: "Hình 2.3",
    img: "assets/bpmn/hinh_2_3_kientruc_quan_ly_chat_luong.png",
    title: "Hình 2.3: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý chất lượng dược phẩm (QA/QC)",
    sys: "Phần mềm QA/QC, Cảm biến IoT nhiệt ẩm",
    input: "Lô hàng từ NCC, Giấy chứng nhận COA",
    output: "Biên bản kiểm nghiệm đạt GPP/GDP"
  },
  {
    code: "QT-03",
    name: "Bán thuốc tại nhà thuốc",
    tier: "Tầng Cốt lõi",
    tierClass: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    btnBorder: "border-emerald-500/70 bg-emerald-950/70 text-emerald-200 ring-2 ring-emerald-400/50",
    fig: "Hình 2.4",
    img: "assets/bpmn/hinh_2_4_kientruc_ban_thuoc_tai_nha_thuoc.png",
    title: "Hình 2.4: Sơ đồ Kiến trúc phân rã – Quy trình Bán thuốc tại nhà thuốc",
    sys: "Phần mềm Smart POS, Tra cứu kho chuỗi",
    input: "Toa thuốc bác sĩ, Triệu chứng bệnh nhân",
    output: "Thuốc cấp phát, Hóa đơn VAT, Trừ tồn"
  },
  {
    code: "QT-04",
    name: "Bán thuốc online (O2O)",
    tier: "Tầng Cốt lõi",
    tierClass: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    btnBorder: "border-emerald-500/70 bg-emerald-950/70 text-emerald-200 ring-2 ring-emerald-400/50",
    fig: "Hình 2.5",
    img: "assets/bpmn/hinh_2_5_kientruc_ban_thuoc_online.png",
    title: "Hình 2.5: Sơ đồ Kiến trúc phân rã – Quy trình Bán thuốc online (O2O)",
    sys: "Website, Mobile App, OMS, Shipper App",
    input: "Đơn hàng online, Ảnh chụp toa thuốc",
    output: "Kiện thuốc niêm phong, Giao hỏa tốc 30p"
  },
  {
    code: "QT-05",
    name: "Quản lý kho dược phẩm",
    tier: "Tầng Hỗ trợ",
    tierClass: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    btnBorder: "border-cyan-500/70 bg-cyan-950/70 text-cyan-200 ring-2 ring-cyan-400/50",
    fig: "Hình 2.6",
    img: "assets/bpmn/hinh_2_6_kientruc_quan_ly_kho.png",
    title: "Hình 2.6: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý kho dược phẩm (WMS)",
    sys: "Phần mềm WMS, Máy quét Barcode/QR",
    input: "Phiếu nhập/xuất kho, Lô hàng đạt chuẩn",
    output: "Thuốc xếp chuẩn FEFO, Cập nhật tồn kho"
  },
  {
    code: "QT-06",
    name: "Tuyển dụng và đào tạo",
    tier: "Tầng Hỗ trợ",
    tierClass: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    btnBorder: "border-cyan-500/70 bg-cyan-950/70 text-cyan-200 ring-2 ring-cyan-400/50",
    fig: "Hình 2.7",
    img: "assets/bpmn/hinh_2_7_kientruc_tuyen_dung_dao_tao.png",
    title: "Hình 2.7: Sơ đồ Kiến trúc phân rã – Quy trình Tuyển dụng và đào tạo Dược sĩ",
    sys: "HRM Portal, Long Châu E-Learning",
    input: "Hồ sơ ứng viên Dược sĩ có CCHN",
    output: "Dược sĩ tốt nghiệp GPP Academy"
  },
  {
    code: "QT-07",
    name: "Quản lý công nghệ thông tin",
    tier: "Tầng Hỗ trợ",
    tierClass: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    btnBorder: "border-cyan-500/70 bg-cyan-950/70 text-cyan-200 ring-2 ring-cyan-400/50",
    fig: "Hình 2.8",
    img: "assets/bpmn/hinh_2_8_kientruc_quan_ly_cntt.png",
    title: "Hình 2.8: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý công nghệ thông tin & Hạ tầng số",
    sys: "Hạ tầng Cloud AWS/FPT, Jira Helpdesk",
    input: "Phiếu yêu cầu IT Ticket, Cảnh báo lỗi",
    output: "Hệ thống Uptime ≥ 99.9%, Dữ liệu sao lưu"
  },
  {
    code: "QT-08",
    name: "Quản lý tài chính – Kế toán",
    tier: "Tầng Quản lý",
    tierClass: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    btnBorder: "border-purple-500/70 bg-purple-950/70 text-purple-200 ring-2 ring-purple-400/50",
    fig: "Hình 2.9",
    img: "assets/bpmn/hinh_2_9_kientruc_tai_chinh_ke_toan.png",
    title: "Hình 2.9: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý tài chính – Kế toán",
    sys: "Phần mềm Kế toán ERP, Cổng thanh toán",
    input: "Chứng từ kế toán, Giao dịch POS quầy",
    output: "Đối soát doanh thu, Báo cáo tài chính VAS"
  },
  {
    code: "QT-09",
    name: "Quan hệ khách hàng (CRM)",
    tier: "Tầng Cốt lõi",
    tierClass: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    btnBorder: "border-emerald-500/70 bg-emerald-950/70 text-emerald-200 ring-2 ring-emerald-400/50",
    fig: "Hình 2.10",
    img: "assets/bpmn/hinh_2_10_kientruc_quan_he_khach_hang_crm.png",
    title: "Hình 2.10: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý quan hệ khách hàng (CRM)",
    sys: "Hệ thống FPT CRM, AI Chatbot chăm sóc",
    input: "Thông tin hội viên, Đơn thuốc tái khám",
    output: "Tích điểm F-Reward, Nhắc lịch thuốc tự động"
  },
  {
    code: "QT-10",
    name: "Quản lý tuân thủ pháp lý & dược",
    tier: "Tầng Quản lý",
    tierClass: "bg-purple-500/20 text-purple-300 border-purple-400/30",
    btnBorder: "border-purple-500/70 bg-purple-950/70 text-purple-200 ring-2 ring-purple-400/50",
    fig: "Hình 2.11",
    img: "assets/bpmn/hinh_2_11_kientruc_tuan_thu_phap_ly_duoc.png",
    title: "Hình 2.11: Sơ đồ Kiến trúc phân rã – Quy trình Quản lý tuân thủ pháp lý & dược",
    sys: "Cơ sở dữ liệu Dược Quốc gia, Văn bản BYT",
    input: "Quy định Bộ Y tế, Hồ sơ pháp lý cơ sở",
    output: "100% nhà thuốc duy trì chuẩn GPP/GDP"
  }
];

let currentArchIndex = 0;

window.selectArchProcess = function(idx) {
  currentArchIndex = idx;
  const p = ARCH_PROCESSES[idx];
  if (!p) return;
  
  const tierEl = document.getElementById('arch-preview-tier');
  const titleEl = document.getElementById('arch-preview-title');
  const imgEl = document.getElementById('arch-preview-img');
  const sysEl = document.getElementById('arch-sys-text');
  const inputEl = document.getElementById('arch-input-text');
  const outputEl = document.getElementById('arch-output-text');
  
  if (tierEl) {
    tierEl.textContent = p.tier;
    tierEl.className = `text-xs font-bold px-2.5 py-0.5 rounded-md border uppercase shrink-0 ${p.tierClass}`;
  }
  if (titleEl) titleEl.textContent = `${p.fig}: Kiến trúc ${p.name}`;
  if (imgEl) {
    imgEl.src = p.img;
    imgEl.alt = p.title;
  }
  if (sysEl) sysEl.textContent = p.sys;
  if (inputEl) inputEl.textContent = p.input;
  if (outputEl) outputEl.textContent = p.output;
  
  // Update button active state
  for (let i = 0; i < ARCH_PROCESSES.length; i++) {
    const btn = document.getElementById(`arch-btn-${i}`);
    if (btn) {
      const isSpan2 = (i === 8 || i === 6);
      const spanClass = isSpan2 ? "col-span-2 " : "";
      const titleSpan = btn.querySelector('.arch-btn-title');
      const descSpan = btn.querySelector('.arch-btn-desc');
      const iconEl = btn.querySelector('.arch-btn-icon');
      
      if (i === idx) {
        btn.className = `arch-btn ${spanClass}text-left p-2 sm:p-2.5 rounded-xl border transition flex items-center justify-between group shadow-lg ${p.btnBorder}`;
        if (titleSpan) titleSpan.className = 'arch-btn-title text-xs sm:text-sm font-bold text-white block truncate';
        if (descSpan) descSpan.className = 'arch-btn-desc text-[11px] sm:text-xs text-white/80 block truncate';
        if (iconEl) iconEl.className = 'arch-btn-icon fa-solid fa-magnifying-glass-plus text-xs text-white shrink-0 ml-1.5';
      } else {
        btn.className = `arch-btn ${spanClass}text-left p-2 sm:p-2.5 rounded-xl border border-white/10 bg-slate-800/60 hover:bg-slate-700/60 transition flex items-center justify-between group text-slate-300`;
        if (titleSpan) titleSpan.className = 'arch-btn-title text-xs sm:text-sm font-bold text-slate-200 block truncate group-hover:text-white';
        if (descSpan) descSpan.className = 'arch-btn-desc text-[11px] sm:text-xs text-slate-400 block truncate group-hover:text-slate-300';
        if (iconEl) iconEl.className = 'arch-btn-icon fa-solid fa-magnifying-glass-plus text-xs text-slate-500 group-hover:text-slate-300 shrink-0 ml-1.5 transition';
      }
    }
  }
};

window.zoomCurrentArch = function() {
  const p = ARCH_PROCESSES[currentArchIndex];
  if (p && window.openBpmnQuickView) {
    window.openBpmnQuickView(p.img, p.title);
  }
};

function initPresentation() {
  initSlideNavigator();
  initKeyboardNavigation();
  initControls();

  // Restore saved theme
  if (localStorage.getItem("slide_theme") === "light") {
    document.body.classList.add("theme-light");
    const icon = document.getElementById("theme-icon");
    if (icon) icon.className = "fa-solid fa-moon text-blue-600";
  }

  const hash = window.location.hash;
  if (hash && hash.startsWith("#slide-")) {
    const s = parseInt(hash.replace("#slide-", ""));
    if (!isNaN(s) && s >= 1 && s <= totalSlides) {
      currentSlide = s;
    }
  }

  updateSlideView();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPresentation);
} else {
  initPresentation();
}
