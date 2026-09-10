# CHƯƠNG 3: XÂY DỰNG WEBSITE MÔ PHỎNG QUY TRÌNH NGHIỆP VỤ

Chương này trình bày chi tiết về quá trình phân tích, thiết kế và xây dựng website mô phỏng các quy trình nghiệp vụ của Công ty Cổ phần Dược phẩm FPT Long Châu. Trong bối cảnh môn học Hệ thống Quản trị Quy trình Nghiệp vụ, việc chuyển hóa các phân tích lý thuyết và sơ đồ BPMN thành một công cụ trực quan hóa đóng vai trò quan trọng trong việc đánh giá và kiểm chứng tính hợp lý của quy trình. Website được xây dựng không đóng vai trò là một hệ thống quản lý thực tế tham gia vào hoạt động vận hành của doanh nghiệp, mà đóng vai trò như một môi trường giả lập (simulation environment). Qua đó, hệ thống cho phép người dùng tương tác, theo dõi luồng thông tin, nhận diện rõ ràng các tác nhân (actors), các đầu vào và đầu ra tại từng bước công việc. Các phần tiếp theo sẽ trình bày cụ thể về kiến trúc hệ thống, cấu trúc dữ liệu mô phỏng, cũng như thiết kế giao diện để hiện thực hóa 6 quy trình trọng tâm đã được phân tích ở các chương trước.

## 3.1. Mục tiêu, yêu cầu và phạm vi website

**Mục tiêu**:
**Mục tiêu**:
Website được phát triển với mục tiêu cốt lõi là trực quan hóa 6 quy trình nghiệp vụ trọng yếu của FPT Long Châu. Nền tảng này cung cấp cho người dùng khả năng tiếp cận và xem xét các sơ đồ BPMN một cách tương tác, theo dõi chi tiết từng bước xử lý trong quy trình, đồng thời hiểu rõ vai trò của từng tác nhân cũng như luồng thông tin và dữ liệu luân chuyển qua các bước. Từ đó, website giúp minh họa rõ nét sự khác biệt và những điểm cải tiến giữa mô hình hiện tại (AS-IS) và mô hình đề xuất (TO-BE).

**Yêu cầu chức năng**:

- **Hiển thị danh mục quy trình**: Cung cấp giao diện tổng hợp danh sách 6 quy trình nghiệp vụ trọng tâm.
- **Xem thông tin chi tiết từng quy trình**: Trình bày rõ ràng mục tiêu, các tác nhân tham gia, cùng với thông tin đầu vào và đầu ra của quy trình.
- **Hiển thị sơ đồ BPMN tương tác**: Tích hợp công cụ hiển thị sơ đồ BPMN cho phép người dùng phóng to, thu nhỏ và tương tác với các thành phần (event, gateway, task) trên sơ đồ.
- **Mô phỏng từng bước xử lý**: Cung cấp tính năng diễn hoạt (animation) các bước thực thi, cho phép chuyển tiếp (next) và quay lại (back) để quan sát chi tiết luồng công việc.
- **So sánh AS-IS và TO-BE**: Hỗ trợ chuyển đổi nhanh chóng giữa hai trạng thái quy trình để làm nổi bật các điểm tối ưu hóa.

**Yêu cầu phi chức năng**:

- **Tính đáp ứng (Responsive)**: Giao diện hiển thị tốt trên các thiết bị khác nhau (desktop, tablet, mobile).
- **Hiệu năng**: Thời gian tải trang ban đầu và phản hồi tương tác dưới 3 giây, đảm bảo trải nghiệm người dùng mượt mà.
- **Tính tương thích**: Hỗ trợ ổn định trên các trình duyệt web phổ biến hiện nay như Google Chrome, Mozilla Firefox, Safari và Microsoft Edge.

**Phạm vi**:
**Phạm vi**:
Website được thiết kế chủ yếu đóng vai trò frontend hoạt động phía client dưới dạng tĩnh hoặc động dựa trên dữ liệu giả lập. Hệ thống không bao gồm backend để xử lý nghiệp vụ thực tế hay thao tác trên cơ sở dữ liệu quan hệ, mà sử dụng dữ liệu định dạng JSON được cấu trúc sẵn để phục vụ mục đích mô phỏng và trình diễn quy trình.

## 3.2. Kiến trúc hệ thống

Website được thiết kế theo kiến trúc Single Page Application (SPA), giúp tối ưu hóa trải nghiệm người dùng thông qua việc không cần tải lại toàn bộ trang web khi chuyển hướng giữa các chức năng. Kiến trúc này bao gồm các thành phần chính:

- **Frontend**: Ứng dụng nền tảng HTML5 ngữ nghĩa kết hợp hệ thống utility-first của Tailwind CSS, điều khiển toàn bộ tương tác giao diện bằng Vanilla JavaScript (ES6+). Kiến trúc hướng module thuần túy giúp ứng dụng vận hành cực kỳ mượt mà, phản hồi tức thì và hoàn toàn không phụ thuộc vào các thư viện build cồng kềnh.
- **Công cụ trực quan hóa BPMN**: Sử dụng định dạng đồ họa vector chuẩn cao (HD Vector SVG) được nhúng trực tiếp vào giao diện, kết hợp cơ chế Modal View động cho phép người dùng phóng to, thu nhỏ, cuộn và xem toàn màn hình (full-screen) chi tiết từng phần tử (Pool, Swimlane, Task, Gateway, Event).
- **Điều hướng và Quản lý trạng thái**: Áp dụng mô hình điều khiển DOM sự kiện (Event-driven DOM Manipulation) thông qua tệp mã điều khiển `app.js`. Các trạng thái lọc danh mục, chuyển đổi tab chức năng (Tổng quan, BPMN, Mô phỏng, So sánh) và tiến trình Stepper đều được quản lý tập trung và phản hồi tức thì.
- **Tầng dữ liệu (Data Layer)**: Dữ liệu nghiệp vụ được cấu trúc hóa trong tệp JavaScript tĩnh `js/data.js`, lưu trữ đầy đủ thông tin về 6 quy trình trọng tâm, các tác nhân tham gia, chi tiết từng bước công việc (đầu vào, đầu ra, mô tả) và đường dẫn liên kết đến các tệp sơ đồ SVG.
- **Triển khai (Deploy)**: Ứng dụng web tĩnh được lưu trữ và triển khai tối ưu trên nền tảng Netlify (cùng phương án dự phòng trên Vercel / GitHub Pages), đảm bảo khả năng sẵn sàng phục vụ cao, thời gian tải trang dưới 1 giây và tương thích trơn tru trên mọi nền tảng thiết bị.

**Sơ đồ Cấu trúc Thành phần (Component Tree)**:

```mermaid
graph TD
    App[Trang Web SPA - index.html] --> Header[Header & Brand Navigation]
    App --> Hero[Hero Section - Giới thiệu hệ thống]
    App --> ProcessCards[Danh mục 6 Thẻ Quy trình - Filter & Search]
    App --> ProcessModal[Modal Chi tiết Quy trình - js/app.js]
  
  
    ProcessModal --> Tabs[Hệ thống 4 Tabs Điều hướng]
    Tabs --> TabOverview[Tab 1: Tổng quan quy trình & Bảng tác nhân]
    Tabs --> TabBPMN[Tab 2: Sơ đồ BPMN - Trình xem Vector SVG HD]
    Tabs --> TabSimulation[Tab 3: Mô phỏng từng bước - Stepper Wizard]
    Tabs --> TabCompare[Tab 4: Bảng so sánh chuyên sâu AS-IS / TO-BE]
  
  
    App --> DataModule[Module dữ liệu tĩnh - js/data.js]
    App --> BpmnAssets[Kho tài nguyên Sơ đồ - assets/bpmn/*.svg]
```

## 3.3. Công nghệ và công cụ sử dụng

Để xây dựng hệ thống mô phỏng đáp ứng các yêu cầu đề ra, nhóm đã lựa chọn và phối hợp sử dụng các công nghệ, công cụ hiện đại, được liệt kê chi tiết trong Bảng 3.1.

*Bảng 3.1: Các công nghệ và công cụ sử dụng trong xây dựng website*

| Tên công nghệ / Công cụ | Phiên bản    | Mục đích sử dụng                                                                                                                               |
| ---------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML5 & CSS3**       | Chuẩn W3C     | Xây dựng cấu trúc trang web ngữ nghĩa và tối ưu hóa khả năng hiển thị giao diện.                                                     |
| **Tailwind CSS**       | 3.x (CDN)      | Thiết kế giao diện hiện đại theo phong cách glassmorphism, responsive linh hoạt trên mobile/desktop.                                       |
| **Vanilla JavaScript** | ES6+           | Xử lý logic Single Page Application, điều hướng tabs, stepper mô phỏng và modal tương tác.                                              |
| **Vector SVG Engine**  | Chuẩn SVG 2.0 | Render sơ đồ BPMN chuẩn xác ở mọi độ phân giải, hỗ trợ phóng to/thu nhỏ không vỡ nét.                                             |
| **Font Awesome**       | 6.x            | Cung cấp hệ thống biểu tượng trực quan cho các tác nhân, phân loại và trạng thái nghiệp vụ.                                        |
| **VS Code & Git**      | N/A            | Soạn thảo mã nguồn và quản lý phiên bản mã nguồn, phối hợp nhóm qua GitHub repository.                                                |
| **Netlify / Vercel**   | N/A            | Nền tảng cloud lưu trữ và phân phối ứng dụng web tĩnh với tốc độ phản hồi cực nhanh, tự động cấp phát SSL và CDN toàn cầu. |
|                              |                |                                                                                                                                                     |

## 3.4. Thiết kế cấu trúc dữ liệu

Do tính chất của dự án là website mô phỏng (simulation frontend) và không sử dụng hệ quản trị cơ sở dữ liệu quan hệ nặng nề, dữ liệu được thiết kế dưới dạng đối tượng JavaScript tĩnh (JavaScript Object) lưu trữ tập trung tại `js/data.js`. Cấu trúc dữ liệu được tổ chức chuẩn hóa và nhất quán để ánh xạ trực tiếp vào giao diện người dùng.

Tệp dữ liệu `js/data.js` bao gồm các mảng cấu trúc chính:

- `processes`: Mảng danh sách 6 quy trình nghiệp vụ (mã định danh `id`, tên quy trình `title`, phân loại `category`, mô tả ngắn `desc`, icon đại diện, đường dẫn sơ đồ AS-IS và TO-BE).
- `actors`: Định nghĩa danh sách các tác nhân tham gia vào từng quy trình (tên tác nhân, vai trò chính trong swimlane, màu sắc nhận diện).
- `steps`: Danh sách các bước công việc tuần tự của từng quy trình, quy định rõ tác nhân thực hiện (`actor`), thông tin/chứng từ đầu vào (`inputs`), kết quả đầu ra (`outputs`), và mô tả chi tiết thao tác nghiệp vụ.
- `comparisonData`: Bảng đối chiếu chi tiết các chỉ số định lượng và định tính giữa hai mô hình AS-IS và TO-BE.

**Ví dụ cấu trúc dữ liệu JavaScript cho quy trình Bán thuốc tại nhà thuốc (`js/data.js`):**

```JavaScript
{
  id: "ban-thuoc-tai-quay",
  title: "Bán thuốc tại nhà thuốc",
  category: "core",
  badge: "Quy trình cốt lõi",
  bpmnAsIs: "assets/bpmn/hinh_4_3_bpmn_as_is_ban_thuoc_tai_quay.svg",
  bpmnToBe: "assets/bpmn/hinh_6_1_bpmn_to_be_ban_thuoc_tai_nha_thuoc.svg",
  actors: [
    { name: "Khách hàng", role: "Trình bày nhu cầu / toa thuốc, thanh toán và nhận thuốc" },
    { name: "Dược sĩ tư vấn", role: "Tiếp đón, kiểm tra toa, tư vấn sử dụng thuốc và hướng dẫn" },
    { name: "Hệ thống POS / WMS", role: "Tra cứu tồn kho, ghi nhận đơn hàng, cập nhật thẻ kho real-time" },
    { name: "Thu ngân", role: "Thu tiền, xuất hóa đơn điện tử" }
  ],
  steps: [
    {
      step: 1,
      name: "Tiếp nhận và xác định nhu cầu",
      actor: "Dược sĩ tư vấn",
      inputs: "Triệu chứng của khách hàng hoặc đơn thuốc từ bác sĩ",
      outputs: "Xác định danh mục dược phẩm cần cung cấp",
      desc: "Dược sĩ lắng nghe triệu chứng, đối chiếu tính hợp lệ của đơn thuốc kê toa theo chuẩn GPP."
    },
    {
      step: 2,
      name: "Tra cứu tồn kho & vị trí kệ thuốc",
      actor: "Hệ thống POS / WMS",
      inputs: "Mã hoạt chất / Tên thuốc biệt dược",
      outputs: "Vị trí ngăn kệ (Bin/Location) và số lượng tồn kho khả dụng",
      desc: "Hệ thống thông minh tự động gợi ý vị trí thuốc và các sản phẩm thay thế tương đương nếu hết hàng."
    },
    {
      step: 3,
      name: "Lấy thuốc và thanh toán xuất hóa đơn",
      actor: "Dược sĩ tư vấn & Thu ngân",
      inputs: "Danh mục thuốc đã chọn",
      outputs: "Hóa đơn điện tử, đơn thuốc hoàn chỉnh, cập nhật tồn kho tức thì",
      desc: "Quét mã vạch kiểm tra hạn sử dụng (FEFO), thu tiền và in hướng dẫn liều dùng tự động."
    }
  ]
}
```

## 3.5. Thiết kế giao diện và các chức năng chính

### 3.5.1. Trang chủ và danh mục quy trình

Giao diện trang chủ được thiết kế nhằm mang lại cái nhìn tổng quan và định hướng người dùng ngay từ lần đầu truy cập. Phía trên cùng là **Hero section** với logo FPT Long Châu nổi bật, kèm theo thông điệp giới thiệu về hệ thống mô phỏng các quy trình nghiệp vụ cốt lõi.

Giao diện trang chủ được thiết kế nhằm mang lại cái nhìn tổng quan và định hướng người dùng ngay từ lần đầu truy cập. Phía trên cùng là **Hero section** với logo FPT Long Châu nổi bật, kèm theo thông điệp giới thiệu về hệ thống mô phỏng các quy trình nghiệp vụ cốt lõi.

Phần trọng tâm của trang chủ là **Grid danh sách quy trình**, hiển thị dưới dạng 6 thẻ (card) trực quan. Mỗi thẻ bao gồm icon đại diện, tên quy trình, phân loại (Quy trình cốt lõi, Quy trình hỗ trợ, Quy trình quản lý) và một đoạn mô tả ngắn gọn. Để hỗ trợ việc tìm kiếm, trang web cung cấp thanh tìm kiếm (Search bar) và các nút lọc (Filter buttons) dựa trên phân loại quy trình. Màu sắc chủ đạo sử dụng là xanh dương và trắng – bộ nhận diện thương hiệu của Long Châu, kết hợp với các hiệu ứng hover mượt mà nhằm tăng trải nghiệm UI/UX.

### 3.5.2. Chức năng xem thông tin quy trình

Khi người dùng chọn một quy trình từ trang chủ, hệ thống sẽ điều hướng đến trang chi tiết quy trình. Trang này được cấu trúc theo dạng Tab (thẻ điều hướng) bao gồm: Tổng quan, Sơ đồ BPMN, Mô phỏng, và So sánh.

Tại **Tab Tổng quan**, thông tin quy trình được trình bày rõ ràng thông qua các bảng biểu. Nội dung bao gồm mục tiêu quy trình, các tác nhân (swimlane roles) liên quan, các tài liệu/thông tin đầu vào và đầu ra. Dưới cùng là danh sách các bước xử lý (tasks) được đánh số thứ tự tuần tự, giúp người dùng nắm bắt nhanh luồng công việc tổng thể trước khi đi sâu vào sơ đồ kỹ thuật.

### 3.5.3. Chức năng hiển thị sơ đồ BPMN

Chức năng này đóng vai trò cốt lõi trong việc minh họa nghiệp vụ chuyên sâu. Tại **Tab Sơ đồ BPMN**, sơ đồ BPMN 2.0 được hiển thị dưới dạng đồ họa vector SVG chất lượng cao (HD Vector SVG).

Chức năng này đóng vai trò cốt lõi trong việc minh họa nghiệp vụ chuyên sâu. Tại **Tab Sơ đồ BPMN**, sơ đồ BPMN 2.0 được hiển thị dưới dạng đồ họa vector SVG chất lượng cao (HD Vector SVG).

Sơ đồ không chỉ hiển thị sắc nét ở mọi kích thước màn hình mà còn cung cấp các công cụ tương tác: người dùng có thể nhấp để mở Modal xem phóng to, thu nhỏ (zoom in/out), kéo rê (pan) khung nhìn để khám phá các quy trình phức tạp, hoặc xem toàn màn hình. Các đường phân luồng (sequence flow) và các phân làn (swimlane) được thể hiện chuẩn hóa, trực quan, tuân thủ nghiêm ngặt chuẩn mô hình hóa BPMN 2.0 quốc tế.

### 3.5.4. Chức năng mô phỏng các bước xử lý

Chức năng mô phỏng (Simulation) mang lại giá trị thực tiễn nhất của website. Tại **Tab Mô phỏng**, quy trình được chia nhỏ thành một trình tự các bước thông qua component Stepper (Wizard). Người dùng điều khiển luồng bằng các nút "Next" và "Back".

Tại mỗi bước, hệ thống áp dụng animation để làm nổi bật tác nhân đang thực thi nhiệm vụ tương ứng trên một sơ đồ minh họa thu gọn. Bên cạnh đó, các thông số về dữ liệu đầu vào và kết quả đầu ra của bước hiện tại được hiển thị sinh động. Một thanh tiến trình (Progress bar) trực quan giúp người dùng biết họ đang ở giai đoạn nào của quy trình. Đặc biệt, người dùng có thể sử dụng nút toggle "Xem AS-IS" và "Xem TO-BE" để trực tiếp đối chiếu luồng công việc, từ đó đánh giá được tác động của các điểm thắt cổ chai (bottleneck) đã được giải quyết trong quy trình mới.

## 3.6. Mô phỏng 6 quy trình nghiệp vụ trên website

Website cung cấp trải nghiệm mô phỏng chuyên biệt, làm nổi bật đặc thù của 6 quy trình nghiệp vụ cốt lõi tại FPT Long Châu:

### 3.6.1. Quản lý chuỗi cung ứng

Giao diện mô phỏng quy trình này tập trung vào sự luân chuyển hàng hóa và thông tin giữa nhà cung cấp, tổng kho trung tâm và các nhà thuốc chi nhánh. Sơ đồ mô phỏng làm nổi bật các gateway quyết định (tái đặt hàng, kiểm tra chất lượng) và minh họa trực quan sự thay đổi trạng thái tồn kho (từ "Đang vận chuyển" đến "Đã nhập kho") thông qua các cảnh báo màu sắc tương tác.

### 3.6.2. Quản lý chất lượng

Quy trình được mô phỏng tập trung vào khâu kiểm định đạt chuẩn GPP. Giao diện Stepper mô phỏng các task như kiểm tra cảm quan, kiểm tra lô/hạn sử dụng. Khi có sự cố giả định (ví dụ thuốc cận date), luồng BPMN sẽ rẽ nhánh (exclusive gateway) để hướng dẫn người dùng theo dõi cách xử lý trả hàng hoặc tiêu hủy một cách rõ ràng và trực quan.

### 3.6.3. Bán thuốc tại nhà thuốc

Đây là quy trình có tần suất cao nhất, do đó giao diện tập trung vào tương tác giữa dược sĩ, khách hàng và hệ thống ERP/POS. Trong mô phỏng TO-BE, chức năng làm nổi bật việc tích hợp quét mã vạch và kiểm tra tồn kho tự động, rút ngắn số bước so với AS-IS, được thể hiện rõ rệt qua việc thanh tiến trình (progress bar) hoàn thành nhanh hơn.

### 3.6.4. Bán thuốc online

Mô phỏng quy trình này thể hiện hành trình đa kênh (Omnichannel), từ lúc khách hàng thao tác trên website/app Long Châu đến khi tổng đài viên xác nhận và nhân viên giao hàng (Shipper) tiếp nhận. Hoạt ảnh (animation) minh họa chi tiết sự chuyển giao trách nhiệm giữa các swimlane hệ thống, telesale và vận chuyển.

### 3.6.5. Quản lý kho

Giao diện của quy trình này làm rõ các thao tác xuất, nhập, và kiểm kê kho tại chi nhánh nhà thuốc. Tính năng mô phỏng đặc biệt chú trọng vào việc minh họa hệ thống quản lý theo FEFO (First Expired, First Out - Hết hạn trước, Xuất trước). Sơ đồ TO-BE cho thấy rõ sự can thiệp của ERP trong việc tự động đề xuất vị trí lấy thuốc thay vì tìm kiếm thủ công như AS-IS.

### 3.6.6. Tuyển dụng và đào tạo

Quy trình mô phỏng các bước từ việc xác định nhu cầu nhân sự, phỏng vấn dược sĩ đến đào tạo hội nhập và chuyên môn. Trải nghiệm tập trung vào việc thể hiện luồng xét duyệt nhiều cấp (Trưởng cửa hàng, Nhân sự vùng, Giám đốc đào tạo). Các task có tính song song (parallel gateway) như chuẩn bị tài liệu và xếp lịch thực hành được trực quan hóa sinh động.

## 3.7. Đánh giá kết quả xây dựng website

Sau quá trình thiết kế và phát triển, website mô phỏng quy trình nghiệp vụ của FPT Long Châu đã hoàn thiện và đáp ứng cơ bản các yêu cầu đặt ra. Việc xây dựng công cụ này giúp nhóm có cái nhìn trực quan và sâu sắc hơn về luồng tương tác giữa các tác nhân và dữ liệu theo chuẩn BPM.

**Bảng 3.2: Đánh giá trạng thái hoàn thành các chức năng**

| Chức năng              | Trạng thái | Ghi chú                                                                  |
| ------------------------ | ------------ | ------------------------------------------------------------------------- |
| Trang chủ & Danh mục   | Hoàn thành | Hoạt động mượt mà, phân loại 3 tầng rõ ràng.                   |
| Chi tiết quy trình     | Hoàn thành | Hiển thị đầy đủ thông tin từ module dữ liệu tĩnh.              |
| Chức năng              | Trạng thái | Ghi chú                                                                  |
| ------------------------ | ------------ | ------------------------------------------------------------------------- |
| Trang chủ & Danh mục   | Hoàn thành | Hoạt động mượt mà, phân loại 3 tầng rõ ràng.                   |
| Chi tiết quy trình     | Hoàn thành | Hiển thị đầy đủ thông tin từ module dữ liệu tĩnh.              |
| Hiển thị sơ đồ BPMN | Hoàn thành | Nhúng Vector SVG sắc nét, tích hợp modal phóng to toàn màn hình. |
| Mô phỏng theo bước   | Hoàn thành | Animation hoạt động tốt, highlight rõ ràng tác nhân.              |
| So sánh AS-IS và TO-BE | Hoàn thành | Chuyển đổi trạng thái nhanh, không cần load lại trang.            |
| Mô phỏng theo bước   | Hoàn thành | Animation hoạt động tốt, highlight rõ ràng tác nhân.              |
| So sánh AS-IS và TO-BE | Hoàn thành | Chuyển đổi trạng thái nhanh, không cần load lại trang.            |

**Đánh giá về Giao diện và Trải nghiệm (UI/UX)**:
Giao diện website được thiết kế bám sát bộ nhận diện thương hiệu của FPT Long Châu. Các nguyên tắc responsive design được áp dụng triệt để, cho phép hiển thị tốt và tương tác ổn định trên đa nền tảng thiết bị. Trải nghiệm người dùng được tối ưu hóa thông qua các hiệu ứng chuyển cảnh mượt mà và tính năng tooltip hỗ trợ thông tin ngữ cảnh.

**Hạn chế của hệ thống**:
Bên cạnh những điểm tích cực, do giới hạn về mặt thời gian và phạm vi đồ án, website vẫn tồn tại một số hạn chế nhất định. Hệ thống hiện hoạt động hoàn toàn ở phía client (Static Frontend SPA) mà không có backend xử lý nghiệp vụ thực tế hay cơ sở dữ liệu động. Dữ liệu được cấu trúc dưới dạng tệp JavaScript tĩnh `js/data.js`, do đó việc cập nhật hoặc chỉnh sửa quy trình đòi hỏi phải can thiệp trực tiếp vào mã nguồn. Hệ thống cũng chưa tích hợp phân quyền đăng nhập hay quản lý phiên người dùng (session management).

**Đề xuất cải thiện trong tương lai**:
Để nâng cấp hệ thống thành một công cụ quản lý toàn diện hơn, các hướng phát triển trong tương lai có thể bao gồm: (1) Xây dựng backend (Node.js hoặc Java Spring Boot) và sử dụng cơ sở dữ liệu quan hệ (PostgreSQL) để quản lý metadata của quy trình; (2) Tích hợp một hệ thống BPM Engine thực thụ (như Camunda Engine) để tự động hóa và thực thi các quy trình nghiệp vụ; (3) Thêm tính năng phân quyền người dùng (Dược sĩ, Quản lý, Giám đốc) để cá nhân hóa việc truy cập và thực thi các task trên quy trình.
