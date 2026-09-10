/**
 * Interactive Web Slide Controller - 27 Slides Edition (Full Chapters Coverage)
 */

let currentSlide = 1;
const totalSlides = 59;
let isNotesOpen = false;
let timerSeconds = 20 * 60; // 20 minutes
let timerInterval = null;
let isTimerRunning = false;
let wheelCooldown = false;
let isNavigating = false;

// 27 Speaker Notes
const SPEAKER_NOTES = {
  1: "Kính thưa Thầy Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên! Hôm nay, nhóm chúng em xin được đại diện báo cáo đồ án môn học Hệ thống Quản trị Quy trình Nghiệp vụ với đề tài: **'Hệ thống quản trị quy trình nghiệp vụ tại Công ty Cổ phần Dược phẩm FPT Long Châu'**. Nhóm chúng em gồm 6 thành viên và em là Huỳnh Công Hậu, xin phép được mở đầu buổi thuyết trình.",
  2: "Về lý do chọn đề tài: Bán lẻ dược phẩm là ngành kinh doanh có tốc độ tăng trưởng bùng nổ tại Việt Nam. FPT Long Châu khi mở rộng mạng lưới thần tốc trên toàn quốc phải đối mặt với bài toán điều phối vận hành cực kỳ phức tạp. Nếu các quy trình không được chuẩn hóa và số hóa, doanh nghiệp sẽ gặp rủi ro lớn về sai lệch kho, chậm trễ đơn hàng và nguy cơ cận hạn thuốc.",
  3: "Trên màn hình là 8 mục tiêu nghiên cứu cụ thể của đồ án: Đi từ khảo sát cơ cấu doanh nghiệp; phân loại kiến trúc quy trình; mô hình hóa 6 sơ đồ BPMN 2.0 AS-IS; phân tích chuyên sâu lãng phí và điểm nghẽn cho 2 quy trình then chốt; cho đến thiết kế giải pháp TO-BE và xây dựng website mô phỏng trực quan.",
  4: "Về đối tượng và phạm vi: Đề tài tập trung vào hệ thống quy trình nghiệp vụ của FPT Long Châu trên 4 phạm vi: Nội dung nghiên cứu 10 quy trình, mô hình hóa 6 và phân tích sâu 2; Doanh nghiệp gồm toàn bộ hệ thống nhà thuốc và tổng kho; Dữ liệu sử dụng nguồn công khai kết hợp mô phỏng học thuật; và Sản phẩm là Website SPA mô phỏng trực quan tương tác.",
  5: "Để thực hiện đề tài một cách khoa học và toàn diện, nhóm kết hợp 6 phương pháp nghiên cứu chính: (1) Thu thập tài liệu chính thống và chuẩn GPP; (2) Quan sát hoạt động thực tế tại nhà thuốc; (3) Phân tích và tổng hợp dữ liệu; (4) Mô hình hóa chuẩn BPMN 2.0; (5) Phân tích quy trình bằng VA/BVA/NVA, Lean và 5 Whys; và (6) Thiết kế xây dựng website SPA mô phỏng trực quan.",
  6: "Về ý nghĩa thực tiễn, đề tài đóng góp 3 giá trị cốt lõi: Thứ nhất, minh họa phương pháp luận BPM chuẩn mực và nhận diện các thao tác lãng phí NVA; Thứ hai, đề xuất các giải pháp số hóa mang tính thực tế cao như Barcode/QR, chuẩn FEFO và tích hợp WMS-ERP Real-time; Thứ ba, xây dựng website mô phỏng trực quan đóng vai trò là tài liệu tham khảo học thuật giá trị.",
  7: "Báo cáo hoàn chỉnh của nhóm được kết cấu chặt chẽ gồm 7 chương, đi từ bức tranh tổng quan doanh nghiệp, kiến trúc quy trình, website mô phỏng, mô hình AS-IS, phân tích lãng phí, đề xuất TO-BE cho đến kết luận.",
  8: "Sau đây, em xin phép đi vào Chương 1: Giới thiệu về Công ty Cổ phần Dược phẩm FPT Long Châu.",
  9: "Về tổng quan: Chuỗi nhà thuốc do Công ty Cổ phần Dược phẩm FPT Long Châu vận hành, là công ty con của FPT Retail (mã FRT, Tập đoàn FPT). Đến năm 2024, Long Châu dẫn đầu toàn quốc với hơn 1.800 nhà thuốc tại 63 tỉnh thành, 100% đạt chuẩn GPP. Doanh nghiệp hướng tới tầm nhìn chuỗi bán lẻ y tế số 1 Việt Nam, hoạt động với sứ mệnh chăm sóc sức khỏe cộng đồng bằng sự tận tâm, chuyên nghiệp và 4 giá trị cốt lõi vững chắc.",
  10: "Về lịch sử: Khởi đầu từ một nhà thuốc gia đình uy tín tại Quận 5 vào năm 1985, bước ngoặt lớn diễn ra vào năm 2017 khi FPT Retail mua lại và tái cấu trúc chuỗi. Từ vài chục cửa hàng ban đầu, Long Châu đã bứt phá ngoạn mục đạt mốc 1.000 cửa hàng năm 2022 và vượt hơn 1.800 cửa hàng vào năm 2024.",
  11: "Về lĩnh vực hoạt động: Long Châu vận hành dựa trên 4 trụ cột chính: Thứ nhất là bán lẻ dược phẩm với lợi thế số 1 về thuốc kê đơn và thuốc đặc trị; Thứ hai là đa dạng sản phẩm sức khỏe, thực phẩm chức năng và thiết bị y tế chính hãng; Thứ ba là mô hình đa kênh Omnichannel kết nối 1.800 nhà thuốc với Mobile App; và thứ tư là chuỗi cung ứng logistics hiện đại đạt 100% chuẩn mực GPP của Bộ Y tế.",
  12: "Cơ cấu tổ chức của Long Châu được thiết lập theo mô hình trực tuyến - chức năng hiện đại: Đứng đầu là Hội đồng quản trị và Tổng Giám đốc FPT Retail, điều hành trực tiếp Giám đốc chuỗi Long Châu và các khối Mua hàng, QA, HR, IT, Kho vận cho đến từng nhà thuốc cơ sở.",
  13: "Trên thị trường chuỗi dược, Long Châu giữ vị thế số 1 về doanh thu và mạng lưới cửa hàng, vượt trội so với Pharmacity hay An Khang nhờ thế mạnh công nghệ từ tập đoàn FPT, danh mục thuốc kê đơn dồi dào và chính sách giá cạnh tranh.",
  14: "Chiến lược tương lai của Long Châu là hướng tới cột mốc 2.500 nhà thuốc, mở rộng chuỗi trung tâm tiêm chủng vắc xin và đầu tư mạnh mẽ vào trí tuệ nhân tạo (AI) cùng hệ thống quản trị kho tự động. Tiếp theo, em xin kính mời bạn Nguyễn Đức Nhiên trình bày nội dung Chương 2 và Chương 3.",
  15: "Em xin chào Thầy và các bạn, em là Nguyễn Đức Nhiên. Em xin phép tiếp nối phần trình bày với Chương 2: Khảo sát, Liệt kê và Phân loại Quy trình Nghiệp vụ.",
  16: "Đồ án tiếp cận theo chuẩn BPM hiện đại, bám sát vòng đời BPM 6 giai đoạn: Nhận diện, Khám phá, Phân tích, Tái thiết kế, Triển khai và Giám sát vận hành trong môi trường bán lẻ dược phẩm.",
  17: "Dữ liệu nghiên cứu được tổng hợp từ Báo cáo thường niên FPT Retail, tài liệu pháp lý GPP của Bộ Y tế, quan sát luồng giao dịch tại các nhà thuốc và các thông tin công khai trên ứng dụng Long Châu.",
  18: "Theo chuẩn mực BPM quốc tế (Dumas et al.) và Chuỗi giá trị Michael Porter, nhóm phân loại toàn bộ hoạt động của Long Châu thành 3 tầng rõ rệt: Tầng Quản lý (định hướng và kiểm soát chuẩn GPP), Tầng Cốt lõi (trực tiếp tạo dòng giá trị và phục vụ người bệnh) và Tầng Hỗ trợ (cung cấp nguồn lực kho vận, nhân sự và CNTT bảo đảm hệ thống vận hành liên tục).",
  19: "Bản đồ kiến trúc 3 tầng thể hiện mối quan hệ tương hỗ chặt chẽ: Tầng Cốt lõi là dòng chảy giá trị phục vụ người bệnh xuyên suốt từ Mua hàng, Bán tại quầy, Bán online đến Chăm sóc CRM; được nâng đỡ bởi nền móng Kho vận, Nhân sự và CNTT ở Tầng Hỗ trợ; dưới sự định hướng và kiểm soát chuẩn mực GPP của Tầng Quản lý.",
  20: "Trên màn hình là danh mục 10 quy trình nghiệp vụ then chốt đã được nhóm khảo sát và chuẩn hóa tên gọi, bao gồm đầy đủ các khâu từ mua hàng, kho bãi, bán hàng trực tiếp, trực tuyến cho đến quản trị nhân sự và tài chính.",
  21: "Mỗi quy trình đều được nhóm chuẩn hóa thông tin với 5 yếu tố cốt lõi: Mục tiêu, Tác nhân chính, Đầu vào, Đầu ra và Đặc thù ngành dược, tạo nền tảng phân tích đồng bộ.",
  22: "Dựa trên ma trận đánh giá mức độ phức tạp và tầm ảnh hưởng kinh doanh: Nhóm chọn **6 quy trình trọng tâm** để mô hình hóa BPMN 2.0 AS-IS và đưa lên Website mô phỏng; đồng thời định vị **2 quy trình then chốt nhất** (Bán thuốc tại quầy và Quản lý kho) để phân tích định lượng chuyên sâu và xây dựng mô hình TO-BE.",
  23: "Để biến các mô hình lý thuyết thành trải nghiệm trực quan, nhóm đã phát triển một sản phẩm thực tế được trình bày tại Chương 3: Xây dựng Website Mô phỏng Quy trình Nghiệp vụ.",
  24: "Website được xây dựng với mục tiêu là công cụ trực quan hóa tương tác cao, giúp người xem dễ dàng đọc hiểu luồng công việc, theo dõi từng bước xử lý của 6 quy trình và so sánh đối chiếu giữa mô hình AS-IS và TO-BE.",
  25: "Về kiến trúc: Ứng dụng được thiết kế theo mô hình Single Page Application (SPA), cây thành phần gồm ProcessGrid trung tâm, Header điều hướng, Modal BPMN View tích hợp công cụ phóng to và bộ điều khiển Simulation Stepper sinh động.",
  26: "Website sử dụng công nghệ web chuẩn hiện đại: HTML5, Tailwind CSS cho giao diện phản hồi responsive mượt mà, JavaScript ES6+ thuần tối ưu hiệu năng không phụ thuộc framework nặng, biểu tượng FontAwesome và triển khai tĩnh sẵn sàng phục vụ.",
  27: "Dữ liệu được tổ chức dưới dạng các file JSON độc lập: lưu trữ danh mục 6 quy trình, chi tiết các bước thực hiện, tác nhân tham gia và đường dẫn sơ đồ BPMN chuẩn SVG.",
  28: "Giao diện website bao gồm 4 khối chức năng chính: Bộ lọc phân loại quy trình, Tab Tổng quan chi tiết, Tab sơ đồ BPMN tương tác có nút chuyển đổi AS-IS/TO-BE, và Tab Mô phỏng từng bước với hiệu ứng highlight tác nhân trực quan.",
  29: "Trên màn hình là cơ chế mô phỏng chuyên biệt cho 6 quy trình then chốt: từ cảnh báo biến động tồn kho ở Chuỗi cung ứng, rẽ nhánh gateway xử lý thuốc cận date theo chuẩn GPP, rút ngắn chu kỳ phục vụ tại quầy, luân chuyển đơn O2O đa kênh, quản lý kho tự động theo nguyên tắc FEFO cho đến phân luồng song song đào tạo nhân sự. Thầy cô và các bạn có thể nhấp trực tiếp nút Live Demo để tương tác thực tế ngay trên trình duyệt.",
  30: "Theo Bảng 3.2 nghiệm thu, cả 5 module chức năng đều đạt tỷ lệ hoàn thành 100%, thời gian phản hồi dưới 1 giây và giao diện chuẩn nhận diện FPT Long Châu. Về lâu dài, hệ thống có thể nâng cấp thêm backend và tích hợp Camunda BPMS Engine. Em xin khép lại Chương 3 và nhường lời cho bạn Nguyễn Thế Trụ trình bày chi tiết về Mô hình AS-IS ở Chương 4.",
  31: "Kính chào Thầy và các bạn, em là Nguyễn Thế Trụ. Em xin phép trình bày Chương 4: Mô hình hóa Quy trình Nghiệp vụ Hiện tại (AS-IS) của FPT Long Châu theo chuẩn quốc tế OMG BPMN 2.0, khảo sát toàn diện 6 quy trình nghiệp vụ then chốt để nhận diện các nút thắt cổ chai trong vận hành chuỗi hơn 1.800 nhà thuốc.",
  32: "Tại quy trình Chuỗi cung ứng: Các nhà thuốc báo cáo tồn kho định kỳ qua file Excel hoặc email; Trưởng kho tổng hợp số liệu thủ công; việc phê duyệt đơn PO qua email mất từ 1 đến 2 ngày; đồng thời theo dõi xe hàng với Nhà cung cấp phụ thuộc vào liên lạc điện thoại, dẫn đến chu kỳ đặt hàng kéo dài 3 đến 5 ngày và tiềm ẩn sai sót dữ liệu.",
  33: "Với quy trình Quản lý Chất lượng GPP: Khi nhập hàng, dược sĩ kiểm tra chứng từ CO/CQ và bao bì bằng mắt thường, sau đó ghi chép tay vào Sổ kiểm soát chất lượng; việc theo dõi nhiệt ẩm bằng sổ tay dễ mang tính đối phó, và khi có lệnh thu hồi thuốc khẩn cấp từ Cục Quản lý Dược, việc truy vết nguồn gốc lô thuốc mất từ 12 đến 24 giờ do hồ sơ giấy tờ phân tán.",
  34: "Đây là quy trình cốt lõi trọng điểm số 1: Do chưa có hệ thống lấy số phân luồng, khách dồn ứ giờ cao điểm; dược sĩ tra cứu tồn kho trên POS rồi phải rời quầy đi tìm thuốc trên kệ bằng mắt và trí nhớ; chưa có lịch sử bệnh án điện tử. Tổng chu kỳ phục vụ lên tới 13.5 phút/giao dịch, trong đó thời gian chờ đợi và đi lại chiếm tới gần một nửa.",
  35: "Tại kênh bán thuốc Online O2O: Dù khách đặt hàng qua Web hoặc App, nhân viên CSKH vẫn phải gọi điện thoại xác nhận từng đơn rất tốn kém; dược sĩ duyệt toa kê đơn thủ công qua ảnh chụp màn hình; và hệ thống chưa tích hợp API theo dõi vị trí shipper thời gian thực.",
  36: "Tại quy trình Kho trọng điểm số 2: Cả 3 luồng Nhập, Xuất và Kiểm kê đều tồn tại nhiều bất cập. Nhân viên ghi thẻ kho giấy rồi gõ lại vào ERP lần hai; việc lấy hàng chưa áp dụng nguyên tắc FEFO tự động khiến khoảng 5% thuốc bị cận hạn phải tiêu hủy; tỷ lệ sai lệch tồn kho lên tới 8% và kiểm kê phải đóng băng hoạt động kho nhiều ngày.",
  37: "Cuối cùng là quy trình Tuyển dụng: Nhân sự HR phải mở và sàng lọc từng CV thủ công bằng mắt; phỏng vấn 2 vòng kéo dài khiến chu kỳ tuyển dụng mất từ 15 đến 30 ngày; khâu đào tạo tập trung offline tốn kém chi phí cho ứng viên ở tỉnh xa. Tiếp theo, em xin kính mời bạn Phan Duy An trình bày Chương 5: Phân tích Quy trình Nghiệp vụ.",
  38: "Dạ, em xin cảm ơn bạn Trụ! Kính thưa Thầy cùng toàn thể các bạn, em là Phan Duy An. Em xin phép đại diện nhóm 15 tiếp nối buổi báo cáo với Chương 5: Phân tích Quy trình Nghiệp vụ hiện tại (AS-IS). Mục tiêu của chương này là bóc tách các lãng phí vô hình thành những con số định lượng cụ thể, chỉ rõ các điểm nghẽn của hệ thống, làm tiền đề vững chắc để nhóm xây dựng mô hình cải tiến TO-BE ở Chương 6.",
  39: "Tại mục 5.1, nhóm chọn phân tích 2 quy trình trọng điểm là Bán thuốc và Quản lý kho dựa trên 3 tiêu chí: Tần suất giao dịch lớn, Tác động trực tiếp đến doanh thu - chi phí, và Tiềm năng số hóa cao. Nhóm ứng dụng các chuẩn mực BPM gồm: Phân loại chuỗi giá trị VA/NVA, nhận diện 7 Lãng phí Lean, cùng 2 công cụ tìm gốc rễ là 5 Whys và Biểu đồ xương cá Ishikawa.",
  40: "Trên màn hình là 2 mắt xích sống còn của Long Châu: Quy trình Bán thuốc (Front-end) trực tiếp phục vụ khách hàng tại hơn 1.800 nhà thuốc và tạo hơn 80% doanh thu; cùng Quy trình Quản lý kho (Back-end) làm bệ đỡ hậu cần nhập hàng và điều phối thuốc đi toàn quốc. Nhóm sẽ đối chiếu song song 2 quy trình này qua 5 trụ cột phân tích từ Slide 41 đến 45.",
  41: "Tại Trụ cột 1 - Ma trận RACI: Ở quầy, Dược sĩ chịu trách nhiệm chính và duyệt chuyên môn; ở kho, Thủ kho chịu trách nhiệm tác nghiệp và Trưởng kho chịu trách nhiệm toàn diện. Điểm nghẽn chung lớn nhất là: Cả Dược sĩ lẫn Thủ kho đều là nhân sự chuyên môn nhưng đang bị lãng phí rất nhiều thời gian vào các việc thủ công như ghi sổ giấy, tìm thuốc trên kệ và gõ lại dữ liệu vào máy tính.",
  42: "Tại Trụ cột 2 - Chuỗi giá trị: Tại quầy, một lượt mua mất 13.5 phút nhưng lãng phí NVA chiếm tới 48.2% (khách chờ 3 phút, tìm thuốc 2.5 phút); Tại kho, chu kỳ mất 510 phút nhưng lãng phí NVA lên tới 73.5% (đặc biệt kiểm kê đếm tay ngốn tới 240 phút làm đình trệ kho). Cả hai quy trình đều đang bị bóp nghẹt bởi các thao tác không sinh ra giá trị!",
  43: "Tại Trụ cột 3 - 7 Lãng phí Lean, cả hai quy trình đều mắc bộ ba kinh điển: Thứ nhất là lãng phí Chờ đợi: Khách hàng phải chờ mua thuốc tại quầy, trong khi hàng hóa thì nằm chờ kiểm đếm tại kho; Thứ hai là lãng phí Đi lại thừa: Dược sĩ phải đi qua lại giữa các dãy tủ để tìm thuốc, còn thủ kho thì đi bộ tìm hàng vì thiếu bản đồ số; Và thứ ba là lãng phí Quy trình thừa: Quầy in 100% hóa đơn giấy, còn kho thì ghi thẻ giấy rồi lại gõ tay vào phần mềm lần hai, kèm theo rủi ro thuốc bị cận hạn do thiếu cơ chế FEFO tự động.",
  44: "Đến Trụ cột 4 - Nguyên nhân gốc rễ qua 5 Whys và Biểu đồ xương cá: Tại sao bán thuốc lại lâu? Bởi vì dược sĩ tìm thuốc trên kệ lâu, mà nguyên nhân là do máy POS không hiển thị vị trí ô kệ, và sâu xa hơn là do POS chưa kết nối thời gian thực với kho. Tương tự, tại sao kho lại lệch số liệu? Bởi vì nhân viên ghi chép thẻ giấy rồi gõ tay vào máy, mà nguyên nhân là do thiếu thiết bị quét mã vạch tại hiện trường. Từ đó, nhóm rút ra kết luận chiến lược: Nguyên nhân của mọi ách tắc KHÔNG PHẢI do con người, mà do Hạ tầng CNTT chưa được tích hợp đồng bộ thời gian thực!",
  45: "Tại Trụ cột 5 - Bức tranh 3 chiều hiệu suất phản ánh rõ thiệt hại: Về Thời gian, tỷ lệ lãng phí quá lớn khi quầy mất gần 50% và kho mất hơn 70% thời gian cho các việc vô ích; Về Chi phí, thất thoát 10 đến 15% khách hàng bỏ đi vào giờ cao điểm, và phát sinh chi phí tiêu hủy thuốc cận date hàng năm; Về Chất lượng, áp lực đông khách dễ dẫn đến rủi ro phát nhầm thuốc, và số liệu tồn kho thực tế bị lệch từ 5% đến 8%.",
  46: "Để khép lại Chương 5, nhóm đúc kết 3 nút thắt chiến lược cần tháo gỡ cấp bách: Thứ nhất là Nút thắt Thông tin khi dữ liệu bị phân mảnh giữa quầy và kho; Thứ hai là Nút thắt Vận hành khi quy trình phụ thuộc quá nhiều vào thao tác thủ công; Và thứ ba là Nút thắt Rủi ro Hạn dùng do thiếu thuật toán cảnh báo FEFO tự động. Để giải quyết triệt để 3 nút thắt này, sau đây em xin trân trọng kính mời bạn Trịnh Chí Nguyên trình bày Chương 6: Đề xuất cải tiến quy trình mục tiêu TO-BE.",
  47: "Em xin chào Thầy và các bạn, em là Trịnh Chí Nguyên. Em xin phép trình bày Chương 6: Đề xuất Cải tiến Quy trình Nghiệp vụ với mô hình mục tiêu TO-BE.",
  48: "Mục tiêu cải tiến được lượng hóa bằng các KPI cụ thể: Rút ngắn thời gian phục vụ tại quầy từ **13.5 phút xuống còn 4 – 5 phút/khách** (giảm khoảng **60% – 63%**); đưa tỷ lệ sai lệch kho từ 8% xuống dưới 1%; và nâng chỉ số hài lòng khách hàng NPS lên mức 65+.",
  49: "Nhóm đề xuất 4 giải pháp số hóa đột phá tại quầy: 1. Triển khai Kiosk lấy số tự phục vụ để phân luồng khách mua theo đơn và khách cần tư vấn. 2. Nâng cấp POS thông minh nhận diện khách hàng qua mã QR để hiển thị ngay lịch sử bệnh án và dị ứng thuốc. 3. Tích hợp sơ đồ kho ảo trên màn hình POS, chỉ rõ thuốc ở kệ nào, ngăn nào. 4. Chuyển sang thanh toán không tiền mặt và hóa đơn điện tử tự động qua Zalo/App.",
  50: "Tại hệ thống kho: Nhóm đề xuất trang bị thiết bị cầm tay PDA quét mã Barcode/QR 100% lô hàng; cài đặt thuật toán WMS ép buộc xuất hàng nghiêm ngặt theo chuẩn FEFO (hạn gần xuất trước); và thiết lập bot cảnh báo tự động khi tồn kho xuống dưới mức an toàn.",
  51: "Các giải pháp công nghệ làm đòn bẩy bao gồm: Máy quét mã vạch không dây PDA, hạ tầng Real-time ERP đồng bộ dữ liệu tức thời, thuật toán AI dự báo nhu cầu bổ sung hàng và tính năng tự động gửi thông báo nhắc uống thuốc trên App Long Châu.",
  52: "Trên màn hình là 2 sơ đồ BPMN 2.0 TO-BE đã được nhóm thiết kế lại hoàn chỉnh cho Quy trình Bán thuốc và Quản lý kho. Các tác vụ thủ công (Manual Task) đã được thay thế hoàn toàn bằng Service Task tự động của hệ thống, bổ sung các Gateway tự động kiểm tra FEFO và gửi thông điệp Real-time.",
  53: "Bảng so sánh 5 tiêu chí trên slide minh chứng sự vượt trội của TO-BE: Loại bỏ 70% thao tác thừa NVA; thời gian phục vụ tại quầy giảm mạnh từ 13.5 phút xuống 4-5 phút; dữ liệu kho liên thông thời gian thực 100% và chỉ số thiện cảm khách hàng tăng trưởng rõ rệt.",
  54: "Dự án có tính khả thi rất cao nhờ tiềm lực công nghệ và tài chính của tập đoàn mẹ FPT Retail. Thời gian thu hồi vốn (ROI) ước tính dưới 2 năm. Lộ trình triển khai 12 tháng chia làm 3 giai đoạn: Chuẩn bị thiết kế (Tháng 1-3), Triển khai Pilot (Tháng 4-6), và Mở rộng toàn chuỗi (Tháng 7-12). Cuối cùng, xin mời bạn Ngô Quốc Chung tổng kết đề tài tại Chương 7.",
  55: "Kính thưa Thầy ThS. Hà Lê Hoài Trung cùng toàn thể Hội đồng và các bạn sinh viên! Em là Ngô Quốc Chung, xin phép được đại diện Nhóm 15 trình bày phần cuối của buổi báo cáo: **Chương 7 – Kết luận và Hướng phát triển** (Slide 55 đến Slide 59). Tại chương kết này, nhóm sẽ đúc kết 5 kết quả đạt được, nhìn nhận khách quan 4 hạn chế và đề xuất 6 hướng đi chiến lược trong tương lai.",
  56: "Kính thưa Thầy và Hội đồng, xuyên suốt quá trình nghiên cứu, nhóm đã khép kín trọn vẹn vòng đời BPM với **5 đóng góp cốt lõi**: 1. **Khảo sát & Kiến trúc 10 quy trình:** Chuẩn hóa toàn bộ dòng chảy nghiệp vụ của FPT Long Châu theo 3 tầng Michael Porter (Quản lý - Cốt lõi - Hỗ trợ) và lập ma trận định lượng chọn ra 6 quy trình trọng điểm. 2. **Mô hình hóa BPMN 2.0 AS-IS:** Thiết kế chuẩn mực 6 sơ đồ hiện trạng dạng Swim lane phân vai rõ ràng, số hóa toàn diện quy trình giấy tờ thủ công. 3. **Website SPA trực quan hóa:** Xây dựng ứng dụng web hiện đại (HTML5, Tailwind, JS ES6+) với trình xem Vector SVG HD và tính năng so sánh trực tiếp AS-IS vs TO-BE. 4. **Phân tích lãng phí Lean & Root-Cause:** Định lượng dòng giá trị (Quầy bán NVA 48.2%, Kho NVA 73.5%), nhận diện 7 lãng phí Lean và ứng dụng Ishikawa 6M cùng 5 Whys chỉ điểm nguyên nhân gốc rễ. 5. **Thiết kế TO-BE & Lộ trình 12 tháng:** Xây dựng 2 sơ đồ TO-BE tích hợp 4 đòn bẩy công nghệ số (PDA, Real-time ERP, OMS, AI), cắt giảm 63% thời gian và vạch lộ trình khả thi với ROI dưới 2 năm.",
  57: "Trên tinh thần trung thực học thuật, nhóm thẳng thắn nhìn nhận **4 rào cản** của đề tài: 1. **Về bảo mật dữ liệu:** Do chính sách bảo mật của FPT Retail, nhóm không truy xuất trực tiếp database ERP nội bộ. Dữ liệu chu kỳ thời gian và chi phí dựa trên quan sát thực địa, đóng vai khách hàng và mô phỏng học thuật nên có sai số nhất định. 2. **Về môi trường thực nghiệm:** Các giải pháp TO-BE mới dừng lại ở mô hình thiết kế chuẩn và phân tích lý thuyết, chưa có điều kiện thử nghiệm thực tế tại một nhà thuốc Long Châu để đo lường ROI ngoài đời thực. 3. **Về phạm vi đào sâu:** Do giới hạn thời gian đồ án môn học, nhóm chỉ phân tích bóc tách công cụ sâu cho 2 quy trình then chốt (Bán thuốc & Quản lý kho); 4 quy trình còn lại dừng ở mức AS-IS. 4. **Về kiến trúc website:** Ứng dụng hiện tại là Front-end SPA mô phỏng tĩnh, chưa tích hợp Backend cơ sở dữ liệu động và chưa có BPMN Execution Engine (Camunda/Flowable) để tự động điều phối quy trình thực.",
  58: "Từ những hạn chế đó, nhóm đề xuất **6 định hướng chiến lược** để tiếp tục hoàn thiện và đưa giải pháp vào ứng dụng thực tế: 1. **Tối ưu toàn chuỗi giá trị:** Mở rộng phân tích Lean và thiết kế TO-BE cho 4 quy trình còn lại nhằm đồng bộ hóa toàn bộ chuỗi cung ứng. 2. **Xây dựng hệ sinh thái BPMS hoàn chỉnh:** Bổ sung Backend và tích hợp BPMN Engine (như Camunda hay Flowable) để biến website thành hệ thống quản trị và giao việc tự động. 3. **Thực nghiệm Pilot:** Phối hợp triển khai thí điểm tại 1-2 nhà thuốc Long Châu trong 1-3 tháng để thu thập số liệu thực chứng minh hiệu quả. 4. **Tích hợp Process Mining:** Khai phá Event Logs thực từ hệ thống ERP/POS để tự động tái hiện quy trình thực và phát hiện điểm nghẽn vô hình. 5. **Tự động hóa bằng RPA:** Nhúng robot phần mềm xử lý tự động các tác vụ lặp lại như đối chiếu hóa đơn và kiểm kê kho. 6. **Chuỗi lạnh Vaccine & Benchmarking:** Chuẩn hóa quy trình chuỗi lạnh GSP/GDP cho Trung tâm Tiêm chủng Long Châu và đối chuẩn năng lực vận hành với các chuỗi đối thủ.",
  59: "Kính thưa Thầy và Hội đồng, bài báo cáo đồ án môn học Quản trị Quy trình Nghiệp vụ của Nhóm 15 đến đây xin được phép kết thúc! Nhóm chúng em xin bày tỏ lòng biết ơn sâu sắc nhất đến ThS. Hà Lê Hoài Trung đã tận tình định hướng và hướng dẫn nhóm hoàn thành đồ án này. Kính mời Thầy cùng toàn thể Hội đồng quét mã QR trên màn hình hoặc nhấp vào liên kết để trải nghiệm trực tiếp Website Mô phỏng Quy trình do nhóm tự phát triển. Nhóm chúng em rất mong nhận được những nhận xét, đóng góp quý báu từ Thầy và Hội đồng, và chúng em xin sẵn sàng lắng nghe, giải trình các câu hỏi phản biện ạ! Em xin chân thành cảm ơn!"
};

const SLIDE_TITLES = [
  "Bìa Đồ Án",
  "Lý do chọn đề tài",
  "Mục tiêu nghiên cứu",
  "Đối tượng & Phạm vi nghiên cứu",
  "Phương pháp nghiên cứu",
  "Ý nghĩa thực tiễn",
  "Bố cục báo cáo",
  "GIỚI THIỆU VỀ CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU",
  "1.1. Tổng quan về công ty",
  "1.2. Lịch sử hình thành & phát triển",
  "1.3. Lĩnh vực hoạt động",
  "1.4. Cơ cấu tổ chức bộ máy Xem sơ đồ to",
  "1.5. Hoạt động kinh doanh",
  "1.6. Định hướng chiến lược",
  "PHÂN TÍCH QUY TRÌNH NGHIỆP VỤ TẠI FPT LONG CHÂU",
  "2.1. Khái quát về quản trị quy trình nghiệp vụ",
  "2.2. Phương pháp và Nguồn thu thập dữ liệu",
  "2.3. Phân loại quy trình nghiệp vụ",
  "2.4. Kiến trúc quy trình nghiệp vụ",
  "2.5. Danh sách 10 quy trình nghiệp vụ",
  "2.6. Mô tả tổng quan 10 quy trình nghiệp vụ",
  "2.7. Lựa chọn các quy trình mô phỏng & phân tích chuyên sâu",
  "XÂY DỰNG WEBSITE MÔ PHỎNG QUY TRÌNH NGHIỆP VỤ",
  "3.1. Mục tiêu, yêu cầu và phạm vi website",
  "3.2. Kiến trúc hệ thống Phóng to SVG",
  "3.3. Công nghệ và công cụ sử dụng",
  "3.4. Thiết kế cơ sở dữ liệu (JSON)",
  "3.5. Thiết kế giao diện và các chức năng chính",
  "3.6. Mô phỏng 6 quy trình nghiệp vụ trên website",
  "3.7. Đánh giá kết quả xây dựng website",
  "MÔ HÌNH HÓA QUY TRÌNH NGHIỆP VỤ HIỆN TẠI (AS-IS)",
  "4.1. Quy trình Quản lý Chuỗi cung ứng",
  "4.2. Quy trình Quản lý Chất lượng (GPP)",
  "4.3. Quy trình Bán thuốc tại Nhà thuốc",
  "4.4. Quy trình Bán thuốc Online",
  "4.5. Quy trình Quản lý Kho Trung tâm",
  "4.6. Quy trình Tuyển dụng & Đào tạo",
  "PHÂN TÍCH QUY TRÌNH NGHIỆP VỤ",
  "5.1. Tiêu chí và phương pháp phân tích",
  "5.2 & 5.3. Phân tích Quy trình Bán thuốc & Quản lý Kho",
  "5.2.1 & 5.3.1. Phân tích Tác nhân & Ma trận RACI",
  "5.2.2 & 5.3.2. Định lượng Chuỗi giá trị (VA/BVA/NVA)",
  "5.2.3 & 5.3.3. Nhận diện 7 Lãng phí Lean tại Quầy & Kho",
  "5.2.4 & 5.3.4. Nguyên nhân gốc rễ (5 Whys & 6M Ishikawa)",
  "5.2.5 & 5.3.5. Đánh giá 3 chiều Thời gian - Chi phí - Chất lượng",
  "5.4. Tổng hợp các Vấn đề và Điểm nghẽn Quy trình",
  "Chương 6: Đề xuất Cải tiến Quy trình Nghiệp vụ (TO-BE)",
  "6.1. Mục tiêu cải tiến",
  "6.2. Đề xuất cải tiến quy trình bán thuốc tại nhà thuốc",
  "6.3. Đề xuất cải tiến quy trình quản lý kho",
  "6.4. Ứng dụng công nghệ hỗ trợ cải tiến",
  "6.5. Mô hình BPMN TO-BE (Đã tối ưu)",
  "6.6. So sánh quy trình AS-IS và TO-BE",
  "6.7. Đánh giá tính khả thi và lợi ích kỳ vọng",
  "Chương 7: Kết luận và Hướng phát triển",
  "7.1. Kết quả đạt được",
  "7.2. Hạn chế của đề tài",
  "7.3. Hướng phát triển",
  "Lời cảm ơn & Q&A"
];

function getSlideTitle(i) {
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
      'assets/bpmn/hinh_6_1_bpmn_to_be_ban_thuoc_tai_nha_thuoc.svg',
      'Hình 6.1: Sơ đồ BPMN 2.0 TO-BE – Quy trình Bán thuốc tại Nhà thuốc (FPT Long Châu)'
    );
  } else {
    window.openBpmnQuickView(
      'assets/bpmn/hinh_6_2_bpmn_to_be_quan_ly_kho.svg',
      'Hình 6.2: Sơ đồ BPMN 2.0 TO-BE – Quy trình Quản lý Kho Trung tâm (FPT Long Châu)'
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
