# Trang Tri Ân Ngày Nhà Giáo Việt Nam 20/11
### Tập thể lớp D26CNTT05 – Viện Công nghệ số – Trường Đại học Thủ Dầu Một (TDMU)

Trang web được thiết kế và lập trình theo phong cách **Poster thiệp tri ân / Scrapbook nghệ thuật hiện đại**, sang trọng, tinh tế và tối ưu hiển thị hoàn hảo trên mọi thiết bị (Desktop, Tablet, Mobile).

---

## 🎨 1. Phong Cách Thiết Kế & Bảng Màu
- **Nền chính:** Giấy kem ấm (`#FAF7F2`) kết hợp họa tiết sóng màu nước xanh dương nhạt tinh tế ở 4 góc trang.
- **Màu chủ đạo:** Xanh navy trang trọng (`#1B3B6F`) và Xanh dương học thuật (`#2C5AA0`).
- **Màu nhấn:** Vàng nắng ấm áp (`#F2B705`) và Trắng tinh khiết (`#FFFFFF`).
- **Typography:**
  - Tiêu đề nghệ thuật & lời chúc: **Charm** & **Dancing Script** (Google Fonts hỗ trợ tiếng Việt).
  - Nội dung & nhãn: **Be Vietnam Pro** (Google Fonts chuẩn văn bản tiếng Việt).
- **Điểm nhấn UI/UX:**
  - Khung ảnh **Polaroid** chân thực với hiệu ứng băng dính Washi Tape, nghiêng tự nhiên và hiệu ứng xoay thẳng + phóng nhẹ khi hover.
  - Trục **Timeline 4 chặng** kết nối dọc thân trang, cân đối hài hòa giữa văn bản và các bức ảnh tập thể.
  - **Lightbox Modal** mượt mà cho phép bấm vào bất kỳ ảnh nào để xem phóng to sắc nét kèm chú thích và điều hướng bàn phím (`←`, `→`, `Esc`).
  - **Hiệu ứng cánh hoa & lấp lánh (Canvas)** rơi nhẹ nhàng tự nhiên với nút bấm bật/tắt tiện lợi ở góc phải màn hình.
  - **Nhạc nền du dương (Background Music)** với giai điệu tri ân nhẹ nhàng sử dụng Web Audio API (không phụ thuộc file ngoài, không lo lỗi bản quyền).
  - **Nút "Thả tim tri ân"** tương tác vui nhộn kèm pháo hoa giấy và hiệu ứng tim bay bổng.

---

## 📂 2. Cấu Trúc Dự Án
```text
├── app/
│   ├── globals.css           # Cấu hình Tailwind, CSS biến màu, hiệu ứng Polaroid & Washi tape
│   ├── layout.tsx            # Metadata, load Google Fonts tiếng Việt (Charm, Dancing Script, Be Vietnam Pro)
│   └── page.tsx              # Trang chính điều phối Hero, Timeline, Footer và Lightbox modal
├── components/
│   ├── BackgroundMusic.tsx   # Trình phát nhạc nền Web Audio API du dương
│   ├── FooterSection.tsx     # Chân trang gradient navy-xanh học thuật & ký tên tập thể lớp
│   ├── HeartCounter.tsx      # Tương tác thả tim tri ân thầy cô kèm pháo hoa giấy
│   ├── HeroSection.tsx       # Phần mở đầu 2 cột với ảnh Quý Thầy Cô
│   ├── LightboxModal.tsx     # Modal phóng to ảnh dùng chung duy nhất
│   ├── Navbar.tsx            # Thanh điều hướng trên cùng & huy hiệu 20/11
│   ├── PaperAirplaneSVG.tsx  # SVG máy bay giấy nghệ thuật & đường bay lượn
│   ├── PetalsEffect.tsx      # Canvas hiệu ứng cánh hoa rơi & ngôi sao lấp lánh có nút bật/tắt
│   ├── PolaroidPhoto.tsx     # Khung ảnh Polaroid tái sử dụng với góc nghiêng & băng keo washi
│   ├── TimelineCard.tsx      # Thẻ ghi chú nội dung các chặng timeline
│   ├── TimelineSection.tsx   # Trục timeline 4 chặng lồng ghép ảnh lớp 1 & lớp 2
│   └── WatercolorBackground.tsx # Họa tiết màu nước 4 góc mượt mà
├── images/                   # Thư mục ảnh gốc
├── public/
│   └── images/               # Thư mục ảnh công khai phục vụ Next.js
│       ├── anh-thay-co.jpg   # Ảnh Quý Thầy Cô Viện Công nghệ số
│       ├── anh-lop-1.jpg     # Ảnh tập thể lớp D26CNTT05 (Chặng 03)
│       └── anh-lop-2.jpg     # Ảnh tập thể lớp D26CNTT05 (Chặng 04)
├── package.json
├── server.js                 # File khởi chạy Node.js server chuẩn hosting egg (PORT=25110, 0.0.0.0)
├── tailwind.config.js
└── tsconfig.json
```

---

## 🚀 3. Hướng Dẫn Vận Hành Trên Hosting Egg Node.js
Dự án đã được cấu hình sẵn sàng để chạy trực tiếp trên các hệ thống hosting Container / Egg Node.js (như Pterodactyl, cPanel Node.js, v.v.) công khai qua địa chỉ **`r9.ivnbyte.com:25110`**.

### Lệnh khởi động (Startup Command trên Egg panel):
```bash
npm start
```
*(hoặc `node server.js`)*

### Biến môi trường (Environment Variables nếu cần):
- `PORT`: `25110` (Mặc định trong code đã là `25110` và bind trên `0.0.0.0`).
- `NODE_ENV`: `production`

### Các lệnh quản lý qua Terminal:
- Cài đặt thư viện: `npm install`
- Biên dịch sản phẩm: `npm run build`
- Khởi chạy Production: `npm start`
- Chế độ phát triển (Development): `npm run dev`
