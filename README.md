# Thiệp chúc mừng 20/10 — gửi người thương 🌷

## Chạy trên VS Code
1. Giải nén thư mục dự án.
2. Mở thư mục `thiep_20_10` bằng Visual Studio Code.
3. Cài extension **Live Server** (Ritwick Dey), nếu máy chưa có.
4. Nhấn chuột phải vào `index.html` → **Open with Live Server**.
   - Bạn cũng có thể mở trực tiếp `index.html` bằng trình duyệt, nhưng Live Server thuận tiện hơn.

## Thêm nhạc nền
1. Tạo thư mục tên `music` nằm cạnh `index.html`.
2. Chép một file nhạc MP3 bạn có quyền sử dụng vào đó và đổi tên thành `music.mp3`.
3. Cấu trúc sẽ là:
   ```
   thiep_20_10/
   ├── index.html
   ├── style.css
   ├── script.js
   └── music/
       └── music.mp3
   ```
4. Tải lại trang và bấm **Bật nhạc**. Trình duyệt không cho tự phát nhạc khi người dùng chưa tương tác, vì vậy nhạc cần được bật bằng nút.

## Tùy chỉnh lời chúc
Mở `script.js`, tìm dòng:
```js
const greeting = "Chúc bạn luôn xinh đẹp, hạnh phúc và được yêu thương mỗi ngày!";
```
Thay phần chữ trong dấu ngoặc kép bằng lời chúc của bạn.

## Công nghệ
- HTML: cấu trúc thiệp.
- CSS: màu pastel, responsive, hiệu ứng cánh hoa và trái tim.
- JavaScript: mở thiệp, hiệu ứng gõ chữ, tạo hoa/trái tim, bật/tắt nhạc.
