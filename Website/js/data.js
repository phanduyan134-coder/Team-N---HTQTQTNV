/**
 * FPT Long Châu BPMS Simulation Data
 * Dữ liệu 6 quy trình nghiệp vụ trọng điểm khớp 100% với Báo cáo Đồ án
 * Quản lý kho sử dụng Hình 4.5 (BPMN AS-IS Quản lý kho)
 */

const PROCESS_DATA = [
  {
    id: "ban-thuoc-tai-quay",
    code: "QT-03",
    name: "Bán thuốc tại nhà thuốc (Tại quầy)",
    category: "Cốt lõi",
    categoryBadge: "bg-blue-100 text-blue-800 border-blue-200",
    dept: "Khối Bán lẻ & Dược sĩ Nhà thuốc",
    complexity: "Trung bình",
    frequency: "Liên tục hàng ngày (>1.800 nhà thuốc)",
    icon: "fa-pills",
    color: "#0284c7",
    bpmnSvg: "assets/bpmn/hinh_4_3_bpmn_as_is_ban_thuoc_tai_quay.svg",
    toBeSvg: "assets/bpmn/hinh_6_1_bpmn_to_be_ban_thuoc_tai_nha_thuoc.svg",
    toBeTitle: "Hình 6.1: Sơ đồ BPMN 2.0 (TO-BE) – Bán thuốc tại nhà thuốc",
    desc: "Quy trình đón tiếp khách hàng, tư vấn đơn thuốc, tra cứu tồn kho, thanh toán và hướng dẫn sử dụng thuốc tại quầy.",
    overview: {
      objective: "Tư vấn đúng bệnh, đúng thuốc, đảm bảo an toàn sử dụng thuốc theo chuẩn GPP và tối ưu hóa doanh thu bán lẻ.",
      actors: [
        { name: "Khách hàng", role: "Người mua thuốc, cung cấp triệu chứng hoặc đơn thuốc" },
        { name: "Dược sĩ tư vấn", role: "Kiểm tra đơn, tư vấn chuyên môn, lấy thuốc và dặn dò liều dùng" },
        { name: "Thu ngân / POS", role: "Tính tiền, quẹt thẻ/thu tiền mặt, in hóa đơn và trừ tồn kho" },
        { name: "Quản lý nhà thuốc", role: "Giám sát quy chế chuyên môn và xử lý ngoại lệ" }
      ],
      input: "Khách hàng tới quầy; Đơn thuốc từ bác sĩ hoặc mô tả triệu chứng bệnh.",
      output: "Thuốc đã kiểm tra HSD; Hóa đơn bán lẻ; Hướng dẫn sử dụng thuốc an toàn.",
      avgTime: "13.5 phút/khách (AS-IS) → 4 - 5 phút/khách (TO-BE)",
      forms: "Hóa đơn bán lẻ POS, Sổ theo dõi thuốc kê đơn, Thẻ kho quầy"
    },
    steps: [
      { num: 1, name: "Tiếp đón khách hàng tại quầy", actor: "Dược sĩ tư vấn", type: "VA", time: "1 phút", desc: "Chào đón khách, lắng nghe nhu cầu mua theo đơn hoặc mua thuốc theo triệu chứng." },
      { num: 2, name: "Kiểm tra đơn thuốc", actor: "Dược sĩ tư vấn", type: "BVA", time: "1 phút", desc: "Đối chiếu tính hợp lệ của đơn thuốc (chữ ký bác sĩ, ngày kê đơn, liều lượng, tương tác thuốc)." },
      { num: 3, name: "Tư vấn & chốt sản phẩm", actor: "Dược sĩ tư vấn", type: "VA", time: "2 phút", desc: "Tư vấn phác đồ, giải thích tác dụng phụ, gợi ý thực phẩm chức năng bổ trợ." },
      { num: 4, name: "Tra cứu tồn kho trên máy", actor: "Dược sĩ tư vấn", type: "NVA", time: "1.5 phút", desc: "Gõ tìm kiếm thủ công từng mã thuốc trên phần mềm xem chi nhánh còn hàng hay không." },
      { num: 5, name: "Đi tìm & lấy thuốc trên kệ", actor: "Dược sĩ tư vấn", type: "NVA", time: "2 phút", desc: "Di chuyển vật lý qua các dãy kệ thuốc, tìm bằng mắt thường và đối chiếu HSD." },
      { num: 6, name: "Thanh toán & in hóa đơn", actor: "Thu ngân / POS", type: "VA", time: "1.5 phút", desc: "Nhập mã, thu tiền mặt hoặc quẹt thẻ POS, in hóa đơn giấy giao khách." },
      { num: 7, name: "Dặn dò liều dùng & giao thuốc", actor: "Dược sĩ tư vấn", type: "VA", time: "1 phút", desc: "Ghi bút lông liều dùng lên vỏ hộp, dặn khách cách uống và bảo quản." }
    ],
    simulation: [
      { step: 1, title: "Khách hàng đến quầy", actor: "Khách hàng", action: "Xuất trình đơn thuốc hoặc mô tả triệu chứng bệnh cần tư vấn.", state: "Bắt đầu giao dịch", progress: 15 },
      { step: 2, title: "Phân loại đơn thuốc", actor: "Dược sĩ tư vấn", action: "Gateway kiểm tra: Thuốc kê đơn (Rx) hay Thuốc không kê đơn (OTC)?", state: "Rẽ nhánh kiểm định", progress: 30 },
      { step: 3, title: "Tư vấn chuyên môn", actor: "Dược sĩ tư vấn", action: "Đưa ra lời khuyên dược lý, chốt danh mục thuốc và liều lượng phù hợp.", state: "Tạo giá trị (VA)", progress: 45 },
      { step: 4, title: "Tra cứu & Lấy thuốc trên kệ", actor: "Dược sĩ tư vấn", action: "Kiểm tra tồn kho phần mềm, di chuyển lấy thuốc vật lý và soi hạn dùng (HSD).", state: "Thao tác tìm kiếm", progress: 65 },
      { step: 5, title: "Thanh toán giao dịch", actor: "Thu ngân / POS", action: "Quét mã vạch thuốc, thu tiền mặt/chuyển khoản và in hóa đơn giấy.", state: "Xác thực tài chính", progress: 85 },
      { step: 6, title: "Bàn giao & Hướng dẫn sử dụng", actor: "Dược sĩ tư vấn", action: "Ghi hướng dẫn uống thuốc lên bao bì, bàn giao thuốc và kết thúc giao dịch.", state: "Hoàn tất quy trình", progress: 100 }
    ],
    comparison: {
      asIsIssues: [
        "Khách hàng phải chờ đợi lâu vào giờ cao điểm, không có hệ thống phân luồng",
        "Dược sĩ mất nhiều thời gian đi lại tìm thuốc do chưa số hóa vị trí kệ",
        "Không lưu trữ hồ sơ tiền sử bệnh khách hàng, phải hỏi lại từ đầu mỗi lần",
        "In hóa đơn giấy lãng phí, trừ kho còn độ trễ"
      ],
      toBeSolutions: [
        "Kiosk tự phục vụ lấy số và phân luồng thông minh tại cửa ra vào",
        "Hệ thống POS tích hợp WMS chỉ định vị trí ngăn kệ thuốc chính xác",
        "Nhận diện khách hàng thân thiết qua App/Zalo, hiển thị ngay lịch sử bệnh án",
        "Thanh toán QR động, xuất hóa đơn điện tử và tự động nhắc lịch uống thuốc qua App"
      ],
      kpis: [
        { metric: "Thời gian phục vụ 1 khách", asIs: "13.5 phút", toBe: "4 - 5 phút", imp: "Rút ngắn ~63%" },
        { metric: "Tỷ lệ khách bỏ đi do chờ", asIs: "15%", toBe: "< 3%", imp: "Giảm 80%" },
        { metric: "Thao tác phần mềm POS", asIs: "3 phút", toBe: "1 phút", imp: "Tiết kiệm 66%" },
        { metric: "Chi phí in ấn hóa đơn giấy", asIs: "Mức cao", toBe: "Giảm mạnh (E-invoice)", imp: "Tiết kiệm 70%" }
      ]
    }
  },

  {
    id: "quan-ly-kho",
    code: "QT-05",
    name: "Quản lý kho (Hình 4.5: Nhập - Xuất - Kiểm kê)",
    category: "Hỗ trợ",
    categoryBadge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    dept: "Bộ phận Kho vận & Logistics Trung tâm",
    complexity: "Cao",
    frequency: "Liên tục 24/7 (3 ca làm việc)",
    icon: "fa-warehouse",
    color: "#059669",
    bpmnSvg: "assets/bpmn/hinh_4_5_bpmn_as_is_quan_ly_kho.svg",
    toBeSvg: "assets/bpmn/hinh_6_2_bpmn_to_be_quan_ly_kho.svg",
    toBeTitle: "Hình 6.2: Sơ đồ BPMN 2.0 (TO-BE) – Quản lý kho dược phẩm",
    desc: "Quy trình tiếp nhận hàng từ NCC, nhập kho, lưu trữ bảo quản, soạn hàng xuất cho nhà thuốc và kiểm kê đối soát tồn kho định kỳ.",
    overview: {
      objective: "Bảo đảm cung ứng thuốc đầy đủ, chính xác, bảo quản đúng tiêu chuẩn GSP và ngăn ngừa thất thoát/cận hạn.",
      actors: [
        { name: "Nhân viên kho", role: "Bốc dỡ, kiểm đếm, ghi sổ, xếp hàng lên kệ và soạn hàng xuất" },
        { name: "Trưởng kho", role: "Phê duyệt phiếu nhập/xuất, điều phối nhân lực và giải trình kiểm kê" },
        { name: "Nhà cung cấp (NCC)", role: "Giao hàng và hóa đơn/phiếu xuất xưởng" },
        { name: "Nhà thuốc nhận hàng", role: "Gửi phiếu đề nghị cấp hàng và nhận kiện hàng" }
      ],
      input: "Phiếu giao hàng NCC; Phiếu yêu cầu xuất thuốc từ chuỗi nhà thuốc; Lịch kiểm kê định kỳ.",
      output: "Biên bản nhập kho; Kiện hàng xuất kho niêm phong; Báo cáo đối soát tồn kho.",
      avgTime: "Nhập kho 3-4 giờ/lô; Xuất kho 1-2 giờ/đơn; Kiểm kê 2-3 ngày",
      forms: "Phiếu nhập kho, Phiếu xuất kho, Thẻ kho giấy, Biên bản kiểm kê định kỳ"
    },
    steps: [
      { num: 1, name: "Tiếp nhận hàng hóa từ Nhà cung cấp", actor: "Nhân viên kho", type: "VA", time: "30 phút", desc: "Bốc dỡ các pallet/thùng thuốc từ xe tải vào khu vực trung chuyển." },
      { num: 2, name: "Kiểm đếm số lượng & đối chiếu hóa đơn", actor: "Nhân viên kho", type: "NVA", time: "45 phút", desc: "Đếm tay từng hộp thuốc, đối chiếu thủ công với danh sách giấy giao hàng." },
      { num: 3, name: "Kiểm tra hạn sử dụng & ngoại quan", actor: "Nhân viên kho", type: "BVA", time: "20 phút", desc: "Soi date từng hộp xem có móp méo, rách vỡ hoặc cận date dưới 12 tháng không." },
      { num: 4, name: "Ghi chép sổ sách & nhập liệu ERP", actor: "Nhân viên kho", type: "NVA", time: "35 phút", desc: "Ghi tay sổ kho rồi vào máy tính gõ lại lần hai vào hệ thống ERP." },
      { num: 5, name: "Xếp hàng lên kệ theo trí nhớ", actor: "Nhân viên kho", type: "VA", time: "40 phút", desc: "Đẩy xe hàng đến các khu vực kệ còn trống, sắp xếp không theo chuẩn vị trí." },
      { num: 6, name: "Soạn hàng xuất kho thủ công", actor: "Nhân viên kho", type: "VA", time: "30 phút", desc: "Cầm phiếu in giấy đi dọc các kệ nhặt thuốc, dễ lấy nhầm lô thuốc mới thay vì lô cũ." },
      { num: 7, name: "Kiểm kê định kỳ toàn diện bằng tay", actor: "Nhân viên kho", type: "NVA", time: "240 phút", desc: "Đếm tay toàn bộ kho, gây gián đoạn hoạt động xuất nhập trong nhiều ngày." }
    ],
    simulation: [
      { step: 1, title: "Tiếp nhận lô hàng NCC (Luồng 1: Nhập kho)", actor: "Nhà cung cấp / Kho", action: "Xe tải cập bến, nhân viên tiếp nhận kiện hàng và phiếu giao hàng giấy.", state: "Nhập hàng", progress: 20 },
      { step: 2, title: "Kiểm đếm & Soát hạn dùng", actor: "Nhân viên kho", action: "Đếm từng lốc thuốc bằng mắt thường, phát hiện lỗi bao bì hoặc cận hạn.", state: "Kiểm tra thủ công", progress: 40 },
      { step: 3, title: "Ghi thẻ kho giấy & Nhập ERP", actor: "Nhân viên kho", action: "Lập phiếu nhập kho giấy, sau đó gõ lại số liệu vào máy vi tính.", state: "Nhân đôi thao tác", progress: 60 },
      { step: 4, title: "Soạn hàng xuất kho (Luồng 2: Xuất kho)", actor: "Nhân viên kho", action: "Cầm phiếu giấy đi nhặt hàng trên kệ, đóng thùng carton niêm phong.", state: "Soạn đơn xuất", progress: 80 },
      { step: 5, title: "Kiểm kê định kỳ đếm tay (Luồng 3: Kiểm kê)", actor: "Trưởng kho / NV Kho", action: "Đếm tay từng ô kệ, đối chiếu sổ sách và lập báo cáo chênh lệch tồn kho.", state: "Tổng kết đối soát", progress: 100 }
    ],
    comparison: {
      asIsIssues: [
        "Kiểm đếm thủ công bằng tay tốn hàng giờ, dễ nhầm lẫn số lượng",
        "Duy trì song song sổ sách thẻ kho giấy và ERP gây nhân đôi công việc",
        "Không tuân thủ nguyên tắc FEFO do nhặt hàng theo thói quen/tiện tay",
        "Kiểm kê định kỳ đóng băng hoạt động kho, tỷ lệ sai lệch tồn kho tới 8%"
      ],
      toBeSolutions: [
        "Trang bị máy quét mã vạch / QR Code cầm tay (PDA) cho mọi thao tác",
        "Số hóa 100%, bỏ hoàn toàn thẻ kho giấy; dữ liệu đồng bộ Real-time vào ERP",
        "Thuật toán WMS ép buộc xuất hàng FEFO, chỉ đường chính xác đến kệ chứa lô cận hạn",
        "Áp dụng kiểm kê xoay vòng (Cycle counting) theo khu vực mà không gián đoạn kho"
      ],
      kpis: [
        { metric: "Tỷ lệ sai lệch số liệu tồn kho", asIs: "5% - 8%", toBe: "< 1%", imp: "Giảm >85%" },
        { metric: "Tỷ lệ thuốc bị hủy do cận hạn", asIs: "5%", toBe: "< 0.5%", imp: "Giảm 90%" },
        { metric: "Thời gian xuất một đơn hàng", asIs: "60 phút", toBe: "20 phút", imp: "Rút ngắn 66%" },
        { metric: "Năng suất xử lý của nhân viên", asIs: "100 đơn/ngày", toBe: "250 đơn/ngày", imp: "Tăng 150%" }
      ]
    }
  },

  {
    id: "ban-thuoc-online",
    code: "QT-04",
    name: "Bán thuốc online (Website & App)",
    category: "Cốt lõi",
    categoryBadge: "bg-blue-100 text-blue-800 border-blue-200",
    dept: "Phòng TMĐT & Bộ phận CSKH Online",
    complexity: "Cao",
    frequency: "Liên tục 24/7",
    icon: "fa-shopping-cart",
    color: "#9333ea",
    bpmnSvg: "assets/bpmn/hinh_4_4_bpmn_as_is_ban_thuoc_online.svg",
    desc: "Quy trình khách đặt hàng trên Web/App Long Châu, CSKH gọi điện xác nhận, Dược sĩ duyệt đơn thuốc và bàn giao đối tác vận chuyển giao tận nhà.",
    overview: {
      objective: "Mở rộng kênh bán hàng đa kênh (Omnichannel), giao thuốc tận tay người bệnh nhanh chóng và đúng quy chế dược.",
      actors: [
        { name: "Khách hàng online", role: "Tìm kiếm sản phẩm, đặt hàng trên Web/App, nhận hàng" },
        { name: "Nhân viên CSKH", role: "Gọi điện xác nhận thông tin đơn hàng và địa chỉ giao" },
        { name: "Dược sĩ online", role: "Thẩm định ảnh chụp đơn thuốc tải lên và tư vấn liều lượng" },
        { name: "Nhân viên kho / Nhà thuốc", role: "Đóng gói bưu kiện thuốc" },
        { name: "Đối tác giao hàng (GHN/GHTK)", role: "Lấy hàng và giao tận nơi cho khách" }
      ],
      input: "Giỏ hàng online; Thông tin giao nhận; Ảnh chụp toa thuốc (nếu có thuốc Rx).",
      output: "Đơn hàng hoàn tất; Bưu kiện niêm phong; Tiền thu hộ COD hoặc thanh toán online.",
      avgTime: "2 - 4 giờ giao nội thành (hoặc 1 - 2 ngày liên tỉnh)",
      forms: "Đơn hàng điện tử OMS, Phiếu gửi hàng đối tác (Vận đơn), Phiếu kiểm soát đơn thuốc"
    },
    steps: [
      { num: 1, name: "Khách đặt hàng trên Web/App", actor: "Khách hàng online", type: "VA", time: "5 phút", desc: "Chọn thuốc, nhập địa chỉ nhận hàng và tải ảnh đơn thuốc nếu là thuốc kê đơn." },
      { num: 2, name: "Gọi điện xác nhận đơn hàng thủ công", actor: "Nhân viên CSKH", type: "NVA", time: "10 phút", desc: "Nhân viên gọi điện thoại cho khách để xác thực lại từng món hàng và địa chỉ." },
      { num: 3, name: "Thẩm định toa thuốc online", actor: "Dược sĩ online", type: "BVA", time: "5 phút", desc: "Kiểm tra tính hợp lệ của ảnh chụp toa thuốc gửi lên hệ thống." },
      { num: 4, name: "Chuyển đơn về kho/nhà thuốc gần nhất", actor: "Hệ thống / NV điều phối", type: "NVA", time: "15 phút", desc: "Tra cứu thủ công xem chi nhánh nào gần khách và còn tồn kho để phân bổ đơn." },
      { num: 5, name: "Đóng gói bưu kiện", actor: "Nhân viên kho", type: "VA", time: "10 phút", desc: "Soạn thuốc, bọc chống sốc, dán nhãn thông tin người nhận." },
      { num: 6, name: "Bàn giao đơn vị vận chuyển", actor: "Đối tác giao hàng", type: "VA", time: "60 - 120 phút", desc: "Shipper đến lấy kiện hàng, giao tới nhà khách và thu tiền COD." }
    ],
    simulation: [
      { step: 1, title: "Đặt hàng trên App", actor: "Khách hàng", action: "Khách chọn sản phẩm vào giỏ hàng, chọn phương thức thanh toán.", state: "Gửi đơn hàng", progress: 20 },
      { step: 2, title: "Gọi điện xác nhận thủ công", actor: "CSKH Long Châu", action: "Nhân viên gọi điện cho khách hỏi xác nhận, dễ gặp tình trạng khách không bắt máy.", state: "Điểm nghẽn chờ đợi", progress: 40 },
      { step: 3, title: "Dược sĩ duyệt đơn thuốc", actor: "Dược sĩ online", action: "Xem ảnh chụp đơn thuốc bác sĩ, bấm duyệt đơn hợp lệ.", state: "Kiểm định y khoa", progress: 60 },
      { step: 4, title: "Đóng gói tại quầy/kho", actor: "Nhân viên kho", action: "In phiếu nhặt hàng, đóng gói thuốc vào túi niêm phong.", state: "Soạn hàng", progress: 80 },
      { step: 5, title: "Giao hàng tận nơi", actor: "Đối tác giao hàng", action: "Shipper giao thuốc đến địa chỉ, thu tiền COD hoặc xác nhận nhận hàng.", state: "Giao dịch thành công", progress: 100 }
    ],
    comparison: {
      asIsIssues: [
        "Phải gọi điện thoại xác nhận từng đơn gây tốn kém cước phí và chậm trễ",
        "Phân bổ kho thủ công dẫn đến tình trạng chi nhánh hết hàng phải điều phối lại",
        "Khách hàng không theo dõi được thời gian thực đơn hàng đang ở đâu"
      ],
      toBeSolutions: [
        "Hệ thống OMS tự động xác nhận (Auto-confirm) qua tin nhắn Zalo ZNS / SMS OTP",
        "Thuật toán AI tự động tìm nhà thuốc gần nhất còn đủ tồn kho để bắn đơn tức thì",
        "Tích hợp API trực tiếp với GHN/Ahamove/Grab cho phép khách theo dõi GPS shipper"
      ],
      kpis: [
        { metric: "Thời gian xác nhận đơn", asIs: "15 - 30 phút", toBe: "Tức thì (< 1 phút)", imp: "Nhanh hơn 95%" },
        { metric: "Tỷ lệ hủy đơn do chờ lâu", asIs: "12%", toBe: "< 4%", imp: "Giảm 66%" },
        { metric: "Tốc độ giao nội thành", asIs: "3 - 5 giờ", toBe: "Dưới 60 phút", imp: "Nhanh gấp 3 lần" }
      ]
    }
  },

  {
    id: "chuoi-cung-ung",
    code: "QT-01",
    name: "Quản lý chuỗi cung ứng (Mua hàng & Phân phối)",
    category: "Quản lý",
    categoryBadge: "bg-amber-100 text-amber-800 border-amber-200",
    dept: "Phòng Mua hàng & Kế hoạch Cung ứng",
    complexity: "Cao",
    frequency: "Định kỳ hàng tuần & Đột xuất",
    icon: "fa-truck",
    color: "#2563eb",
    bpmnSvg: "assets/bpmn/hinh_4_1_bpmn_as_is_chuoi_cung_ung.svg",
    desc: "Quy trình dự báo nhu cầu thuốc, lập đơn đặt hàng NCC, thương thảo giá, theo dõi vận chuyển và phân bổ hàng hóa cho mạng lưới toàn quốc.",
    overview: {
      objective: "Bảo đảm nguồn cung ứng thuốc ổn định, giá thành cạnh tranh, không đứt gãy nguồn hàng phục vụ bệnh nhân.",
      actors: [
        { name: "Nhân viên mua hàng", role: "Tổng hợp nhu cầu, lập PO (Purchase Order) và liên hệ NCC" },
        { name: "Trưởng phòng Mua hàng", role: "Phê duyệt kế hoạch đặt hàng và hạn mức ngân sách" },
        { name: "Nhà cung cấp dược", role: "Xác nhận đơn, chuẩn bị hàng và giao đến kho tổng" },
        { name: "Giám đốc Chuỗi", role: "Phê duyệt các hợp đồng cung ứng chiến lược giá trị lớn" }
      ],
      input: "Báo cáo tồn kho nhà thuốc; Kế hoạch kinh doanh; Báo giá từ các hãng dược phẩm.",
      output: "Hợp đồng mua bán; Đơn đặt hàng (PO) đã duyệt; Lô hàng nhập về kho tổng.",
      avgTime: "3 - 7 ngày/chu kỳ đặt hàng",
      forms: "Phiếu đề xuất mua hàng, Đơn đặt hàng PO, Hợp đồng nguyên tắc, Biên bản nghiệm thu"
    },
    steps: [
      { num: 1, name: "Thu thập số liệu tồn kho chi nhánh", actor: "Nhân viên mua hàng", type: "NVA", time: "4 giờ", desc: "Tổng hợp các file Excel báo tồn kho gửi về từ các cụm nhà thuốc." },
      { num: 2, name: "Tính toán lượng đặt hàng dự kiến", actor: "Nhân viên mua hàng", type: "BVA", time: "2 giờ", desc: "Ước lượng số lượng cần mua dựa trên doanh số tuần trước." },
      { num: 3, name: "Lập đơn đặt hàng (PO)", actor: "Nhân viên mua hàng", type: "VA", time: "1 giờ", desc: "Nhập danh sách mã thuốc, số lượng và đơn giá thỏa thuận." },
      { num: 4, name: "Trình duyệt qua Email", actor: "Trưởng phòng Mua hàng", type: "NVA", time: "8 giờ", desc: "Chờ trưởng phòng và giám đốc xem xét, phê duyệt chữ ký qua email." },
      { num: 5, name: "Gửi đơn hàng sang Nhà cung cấp", actor: "Nhân viên mua hàng", type: "VA", time: "30 phút", desc: "Gửi PO qua email cho đại diện hãng dược và gọi điện thoại chốt lịch." },
      { num: 6, name: "Theo dõi tiến độ giao hàng", actor: "Nhân viên mua hàng", type: "NVA", time: "1 - 2 ngày", desc: "Thường xuyên gọi điện hỏi tiến độ vận chuyển xe hàng của NCC." }
    ],
    simulation: [
      { step: 1, title: "Tổng hợp nhu cầu bổ sung hàng", actor: "Phòng Mua hàng", action: "Đọc báo cáo tồn kho các vùng, nhận diện các mặt hàng sắp hết.", state: "Khởi động nhu cầu", progress: 20 },
      { step: 2, title: "Lập phiếu đặt hàng PO", actor: "Nhân viên Mua hàng", action: "Tạo đơn hàng trên hệ thống, phân loại theo từng nhà sản xuất.", state: "Lập PO", progress: 40 },
      { step: 3, title: "Phê duyệt hạn mức ngân sách", actor: "Trưởng phòng / Giám đốc", action: "Xem xét báo giá, ký duyệt lệnh mua hàng.", state: "Phê duyệt quản lý", progress: 60 },
      { step: 4, title: "Nhà cung cấp xác nhận & Giao hàng", actor: "Nhà cung cấp", action: "Hãng dược tiếp nhận đơn, chuẩn bị xe tải giao hàng đến kho tổng Long Châu.", state: "Vận chuyển", progress: 80 },
      { step: 5, title: "Nhập kho tổng & Điều phối chuỗi", actor: "Kho trung tâm", action: "Nghiệm thu hàng hóa và điều xe tải phân bổ về các nhà thuốc tỉnh.", state: "Hoàn tất chu kỳ", progress: 100 }
    ],
    comparison: {
      asIsIssues: [
        "Tổng hợp số liệu bằng Excel phân tán, độ trễ thông tin từ 1 - 2 ngày",
        "Phê duyệt đơn hàng qua email gây tắc nghẽn khi lãnh đạo đi công tác",
        "Theo dõi vận chuyển bằng gọi điện thoại thủ công, thiếu tính minh bạch"
      ],
      toBeSolutions: [
        "Hệ thống tự động tính toán nhu cầu đặt hàng bằng thuật toán AI Demand Forecasting",
        "Phê duyệt trực tuyến tức thời trên ứng dụng di động cho lãnh đạo (Mobile Approval)",
        "Kết nối cổng thông tin EDI (Electronic Data Interchange) trực tiếp với các hãng dược"
      ],
      kpis: [
        { metric: "Thời gian chu kỳ đặt hàng", asIs: "5 - 7 ngày", toBe: "1 - 2 ngày", imp: "Nhanh hơn 70%" },
        { metric: "Tỷ lệ đứt hàng (Out of stock)", asIs: "6%", toBe: "< 1.5%", imp: "Giảm 75%" },
        { metric: "Chi phí tồn trữ hàng thừa", asIs: "Cao", toBe: "Tối ưu hóa Just-In-Time", imp: "Tiết kiệm 20%" }
      ]
    }
  },

  {
    id: "quan-ly-chat-luong",
    code: "QT-02",
    name: "Quản lý chất lượng dược (Chuẩn GPP / GDP)",
    category: "Quản lý",
    categoryBadge: "bg-amber-100 text-amber-800 border-amber-200",
    dept: "Phòng Đảm bảo Chất lượng (QA/QC)",
    complexity: "Cao",
    frequency: "Định kỳ hàng tháng & Đột xuất",
    icon: "fa-shield-halved",
    color: "#d97706",
    bpmnSvg: "assets/bpmn/hinh_4_2_bpmn_as_is_quan_ly_chat_luong.svg",
    desc: "Quy trình kiểm soát chất lượng thuốc đầu vào, giám sát nhiệt độ độ ẩm nhà thuốc, kiểm định hồ sơ pháp lý và xử lý thu hồi thuốc lỗi.",
    overview: {
      objective: "Bảo đảm 100% thuốc lưu hành trong hệ thống đều đạt tiêu chuẩn chất lượng Bộ Y tế, bảo vệ sức khỏe người dùng.",
      actors: [
        { name: "Dược sĩ QA", role: "Kiểm tra hồ sơ kiểm nghiệm, COA và điều kiện bảo quản thực tế" },
        { name: "Nhân viên kho / Nhà thuốc", role: "Ghi nhật ký nhiệt ẩm kế hàng ngày và báo cáo thuốc hỏng" },
        { name: "Cơ quan Quản lý Dược", role: "Ban hành thông báo chất lượng hoặc lệnh thu hồi thuốc" },
        { name: "Hội đồng xử lý chất lượng", role: "Ra quyết định tiêu hủy hoặc trả về nhà sản xuất" }
      ],
      input: "Phiếu kiểm nghiệm (COA) từ nhà sản xuất; Nhật ký nhiệt ẩm kế; Khiếu nại chất lượng từ khách hàng.",
      output: "Biên bản kiểm định đạt chuẩn GPP; Quyết định thu hồi/tiêu hủy thuốc lỗi; Báo cáo chất lượng định kỳ.",
      avgTime: "Kiểm tra đầu vào: 2 - 4 giờ; Xử lý thu hồi: 24 - 48 giờ",
      forms: "Sổ theo dõi nhiệt độ độ ẩm, Biên bản lấy mẫu kiểm nghiệm, Phiếu xử lý khiếu nại thuốc"
    },
    steps: [
      { num: 1, name: "Kiểm tra giấy tờ pháp lý & COA", actor: "Dược sĩ QA", type: "BVA", time: "1 giờ", desc: "Soát giấy phép lưu hành, số đăng ký và phiếu kiểm nghiệm của từng lô thuốc." },
      { num: 2, name: "Kiểm tra ngoại quan & cảm quan", actor: "Dược sĩ QA", type: "VA", time: "1 giờ", desc: "Lấy mẫu ngẫu nhiên kiểm tra màu sắc viên nén, độ trong dung dịch tiêm, niêm phong tem nhãn." },
      { num: 3, name: "Giám sát điều kiện bảo quản (GSP/GPP)", actor: "Nhân viên nhà thuốc", type: "BVA", time: "15 phút", desc: "Đọc nhiệt kế, ẩm kế và ghi chép tay vào sổ theo dõi 2 lần/ngày." },
      { num: 4, name: "Tiếp nhận thông tin cảnh báo thuốc lỗi", actor: "Dược sĩ QA", type: "BVA", time: "30 phút", desc: "Nhận công văn từ Cục Quản lý Dược hoặc phản ánh từ nhà thuốc." },
      { num: 5, name: "Niêm phong & Thu hồi hàng loạt", actor: "Dược sĩ QA / Kho", type: "VA", time: "12 - 24 giờ", desc: "Ban hành thông báo dừng bán và gom thuốc lỗi về kho cách ly chờ tiêu hủy." }
    ],
    simulation: [
      { step: 1, title: "Lấy mẫu kiểm định chất lượng", actor: "Dược sĩ QA", action: "Rút mẫu ngẫu nhiên từ lô thuốc mới về, kiểm tra cảm quan và tem chống giả.", state: "Kiểm nghiệm đầu vào", progress: 25 },
      { step: 2, title: "Đối chiếu tiêu chuẩn Dược điển", actor: "Dược sĩ QA", action: "Kiểm tra hồ sơ COA, đối chiếu hạn dùng và số lô với cổng thông tin Cục Quản lý Dược.", state: "Thẩm định hồ sơ", progress: 50 },
      { step: 3, title: "Đánh giá đạt chuẩn lưu hành", actor: "Dược sĩ QA", action: "Cổng Gateway: Thuốc đạt chuẩn cho phép nhập kho; nếu không đạt lập biên bản từ chối.", state: "Ra quyết định GPP", progress: 75 },
      { step: 4, title: "Giám sát nhiệt ẩm định kỳ", actor: "Nhà thuốc / Kho", action: "Theo dõi điều kiện mát (15-25°C), tủ lạnh (2-8°C) bảo đảm dược tính của thuốc.", state: "Kiểm soát liên tục", progress: 100 }
    ],
    comparison: {
      asIsIssues: [
        "Ghi sổ nhiệt ẩm kế bằng tay dễ bị làm đối phó, không cảnh báo kịp thời khi mất điện",
        "Truy xuất nguồn gốc lô thuốc khi có lệnh thu hồi mất nhiều thời gian do tra cứu thủ công",
        "Hồ sơ COA giấy lưu trữ cồng kềnh, dễ thất lạc"
      ],
      toBeSolutions: [
        "Lắp đặt cảm biến IoT tự động đo nhiệt độ/độ ẩm 24/7, tự động hú còi và gửi tin nhắn cảnh báo",
        "Hệ thống số hóa mã vạch lô (Batch Tracking) cho phép truy vết và khóa bán toàn hệ thống trong 5 phút",
        "Kho lưu trữ hồ sơ điện tử e-COA trên nền tảng đám mây, tra cứu tức thời"
      ],
      kpis: [
        { metric: "Thời gian khóa bán thuốc khi có lệnh thu hồi", asIs: "12 - 24 giờ", toBe: "< 15 phút", imp: "Nhanh hơn 98%" },
        { metric: "Độ chính xác giám sát nhiệt ẩm", asIs: "Thủ công (sai số cao)", toBe: "IoT tự động 24/7", imp: "Độ tin cậy 100%" },
        { metric: "Thời gian tra cứu hồ sơ chất lượng", asIs: "2 - 4 giờ", toBe: "30 giây", imp: "Tiết kiệm 99%" }
      ]
    }
  },

  {
    id: "tuyen-dung-dao-tao",
    code: "QT-06",
    name: "Tuyển dụng và đào tạo nhân sự",
    category: "Hỗ trợ",
    categoryBadge: "bg-purple-100 text-purple-800 border-purple-200",
    dept: "Phòng Nhân sự (HR) & Học viện Đào tạo Long Châu",
    complexity: "Cao",
    frequency: "Liên tục hàng tháng (Mở mới hàng trăm cửa hàng)",
    icon: "fa-user-graduate",
    color: "#7c3aed",
    bpmnSvg: "assets/bpmn/hinh_4_6_bpmn_as_is_tuyen_dung_dao_tao.svg",
    desc: "Quy trình tiếp nhận đề xuất nhân sự, đăng tin, sàng lọc hồ sơ ứng viên, phỏng vấn 2 vòng (HR & Chuyên môn Dược), ký HĐ và đào tạo hội nhập trước khi ra quầy.",
    overview: {
      objective: "Bảo đảm bổ sung đủ nguồn nhân lực Dược sĩ chuyên môn cao, đạt chuẩn văn hóa phục vụ Long Châu cho tốc độ mở rộng chuỗi.",
      actors: [
        { name: "Ứng viên (Tìm việc)", role: "Nộp hồ sơ xin việc, tham gia phỏng vấn, học đào tạo và thi test" },
        { name: "Bộ phận Chuyên môn", role: "Lập yêu cầu tuyển dụng và phỏng vấn chuyên môn Dược (Vòng 2)" },
        { name: "Phòng Nhân sự (HR)", role: "Đăng tuyển, sàng lọc CV, phỏng vấn văn hóa (Vòng 1) và ký hợp đồng" },
        { name: "Bộ phận Đào tạo", role: "Tổ chức lớp học tập trung và kiểm tra bài test sát hạch" }
      ],
      input: "Phiếu đề xuất tuyển dụng chi nhánh mới; Hồ sơ CV ứng viên; Giáo trình đào tạo dược.",
      output: "Hợp đồng lao động ký kết; Dược sĩ đã qua sát hạch được phân công về nhà thuốc.",
      avgTime: "20 - 30 ngày/chu kỳ tuyển dụng một đợt",
      forms: "Phiếu yêu cầu nhân sự, Phiếu chấm điểm phỏng vấn, Hợp đồng thử việc, Bài thi sát hạch"
    },
    steps: [
      { num: 1, name: "Lập phiếu yêu cầu nhân sự", actor: "Trưởng bộ phận chuyên môn", type: "BVA", time: "1 ngày", desc: "Lập phiếu giấy/email đề xuất số lượng dược sĩ cần bổ sung cho chi nhánh mới." },
      { num: 2, name: "Biên soạn & Đăng tin tuyển dụng", actor: "Phòng Nhân sự (HR)", type: "VA", time: "2 ngày", desc: "Đăng tin thủ công lên Facebook, Website, các hội nhóm việc làm dược." },
      { num: 3, name: "Mở từng CV & sàng lọc thủ công", actor: "Phòng Nhân sự (HR)", type: "NVA", time: "3 ngày", desc: "Tải từng file CV gửi về email/form, chấm điểm bằng mắt thường." },
      { num: 4, name: "Gọi điện đặt lịch hẹn phỏng vấn", actor: "Phòng Nhân sự (HR)", type: "NVA", time: "1 ngày", desc: "Gọi điện thoại trực tiếp cho từng ứng viên đạt chuẩn để chốt lịch." },
      { num: 5, name: "Phỏng vấn 2 vòng (HR & Chuyên môn)", actor: "HR & Hội đồng Dược", type: "VA", time: "3 - 5 ngày", desc: "Chấm điểm trên phiếu giấy về thái độ, lương và kiến thức dược lý." },
      { num: 6, name: "Ký hợp đồng lao động giấy", actor: "HR & Ứng viên", type: "VA", time: "1 ngày", desc: "Tiếp nhận hồ sơ công chứng và ký hợp đồng thử việc bằng văn bản giấy." },
      { num: 7, name: "Tổ chức lớp đào tạo tập trung & Thi test", actor: "Bộ phận Đào tạo", type: "VA", time: "7 - 10 ngày", desc: "Học tập trung tại trung tâm, chấm bài thi giấy trước khi phân bổ về cửa hàng." }
    ],
    simulation: [
      { step: 1, title: "Yêu cầu tuyển dụng", actor: "Trưởng bộ phận", action: "Đề xuất nhu cầu nhân sự cho đợt mở rộng nhà thuốc mới.", state: "Khởi tạo nhu cầu", progress: 15 },
      { step: 2, title: "Đăng tuyển & Sàng lọc CV", actor: "HR Long Châu", action: "Đăng tin, nhận hồ sơ ứng viên gửi về và lọc thủ công các CV đạt tiêu chuẩn bằng cấp Dược.", state: "Sàng lọc hồ sơ", progress: 35 },
      { step: 3, title: "Phỏng vấn Vòng 1 (HR)", actor: "Phòng Nhân sự", action: "Phỏng vấn thái độ, kỹ năng giao tiếp và mức lương mong muốn.", state: "Đánh giá văn hóa", progress: 55 },
      { step: 4, title: "Phỏng vấn Vòng 2 (Chuyên môn)", actor: "Hội đồng Dược sĩ", action: "Hỏi đáp sâu về kê đơn, tương tác thuốc và quy chế dược phẩm.", state: "Sát hạch chuyên môn", progress: 75 },
      { step: 5, title: "Ký HĐ & Đào tạo hội nhập", actor: "Bộ phận Đào tạo", action: "Học nghiệp vụ quầy, làm bài test đạt chuẩn và nhận quyết định phân công công tác.", state: "Gia nhập đội ngũ", progress: 100 }
    ],
    comparison: {
      asIsIssues: [
        "Sàng lọc hàng ngàn hồ sơ CV thủ công gây tốn nhân lực và sót ứng viên tiềm năng",
        "Gọi điện thoại hẹn lịch phỏng vấn rời rạc, tỷ lệ ứng viên bùng hẹn cao",
        "Đào tạo hoàn toàn tập trung offline tốn chi phí đi lại cho dược sĩ ở các tỉnh xa",
        "Ký hợp đồng giấy cồng kềnh, thủ tục hành chính mất nhiều ngày"
      ],
      toBeSolutions: [
        "Hệ thống ATS (Applicant Tracking System) tự động phân tích CV bằng AI Matching",
        "Hệ thống tự gửi tin nhắn Zalo/SMS cho phép ứng viên tự bấm chọn khung giờ phỏng vấn tiện lợi",
        "Nền tảng E-learning số hóa 70% bài giảng lý thuyết, kiểm tra trắc nghiệm online có camera AI",
        "Ký hợp đồng điện tử (E-contract) qua chữ ký số xác thực CCCD gắn chip"
      ],
      kpis: [
        { metric: "Thời gian đóng 1 vị trí tuyển dụng", asIs: "25 - 30 ngày", toBe: "10 - 12 ngày", imp: "Rút ngắn 60%" },
        { metric: "Chi phí tuyển dụng / 1 nhân sự", asIs: "Mức cao", toBe: "Giảm 45%", imp: "Tiết kiệm 45%" },
        { metric: "Tỷ lệ vượt qua sát hạch sau đào tạo", asIs: "80%", toBe: "95%", imp: "Tăng 15%" }
      ]
    }
  }
];
