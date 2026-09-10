# Hướng dẫn làm việc với GitHub
## Quy trình làm việc
### Bước 1 — Tạo Branch
Vào Repository → chọn `main` → **Create new branch**.
Đặt tên theo mẫu:
`TênBạn-MSSV/CôngViệc`
Ví dụ:
- `hau-25210099/chapter-1`
- `an-25210247/chapter-2`

---

### Bước 2 — Làm phần được giao
- Làm phần công việc theo phân công của nhóm.
- Nếu sửa **file Word chung**, hãy lấy **bản mới nhất trên `main`** trước khi sửa.

---

### Bước 3 — Commit
Sau khi hoàn thành thay đổi, chọn **Commit changes**.
Đặt tên Commit rõ ràng, thể hiện mình đã làm gì.
Ví dụ:
- `Add Chapter 2`
- `Update Chapter 3`
- `Add BPMN`
- `Update business process`

⚠️ **Không commit trực tiếp vào `main`.**

---

### Bước 4 — Tạo Pull Request
Sau khi Commit, chọn **Create pull request**.
Kiểm tra:
- `base: main`
- `compare: branch của mình`
Đặt tên Pull Request giống với công việc đã thực hiện.
Ví dụ:
`Add Chapter 2`
Sau đó chọn **Create pull request**.

---

### Bước 5 — Merge
Nếu Pull Request hiển thị:

- ✅ Ready to merge
- ✅ No conflicts with base branch

Thực hiện:
**Merge pull request → Confirm merge**
Khi Pull Request chuyển sang trạng thái **Merged** thì công việc đã hoàn thành.

---

## ⚠️ LƯU Ý

- ❌ Không commit trực tiếp vào `main`.
- ✅ Mỗi thành viên sử dụng **branch riêng**.
- ✅ Commit phải ghi rõ **mình đã làm gì**.
- ✅ Trước khi sửa file Word chung, lấy **bản mới nhất từ `main`**.
- ✅ Chỉ tính công việc hoàn thành sau khi Pull Request được **Merged**.
- ❌ Không tự ý xóa hoặc sửa phần của thành viên khác.
- 📌 Mục đích của GitHub là để theo dõi **ai làm gì và lịch sử làm việc của nhóm**.
