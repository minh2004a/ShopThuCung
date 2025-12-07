# Shop Thú Cưng - Pet E-Commerce Website

Cửa hàng thú cưng trực tuyến hiện đại với giao diện đẹp mắt, tối ưu SEO và responsive hoàn toàn.

## ✨ Tính Năng

- 🎨 **Giao diện hiện đại**: Thiết kế đẹp mắt với Tailwind CSS
- 📱 **Responsive Design**: Tối ưu cho mobile, tablet và desktop
- 🎭 **Animations**: Hiệu ứng mượt mà với Framer Motion
- 🔍 **SEO Optimized**: Tối ưu hóa cho công cụ tìm kiếm
- 🇻🇳 **Vietnamese Content**: Nội dung hoàn toàn bằng tiếng Việt
- ⚡ **Fast Performance**: Xây dựng trên Vite cho hiệu suất cao
- 🛒 **E-commerce Features**: Giỏ hàng, danh mục sản phẩm, bộ lọc

## 🚀 Công Nghệ Sử Dụng

- **React 18** - Thư viện UI
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Thư viện animation
- **React Router** - Routing
- **React Helmet Async** - SEO management
- **React Icons** - Icon library

## 📦 Cài Đặt

1. Clone repository hoặc tải về:
```bash
cd ShopThuCung
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập: `http://localhost:3000`

## 🏗️ Build Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Cấu Trúc Thư Mục

```
ShopThuCung/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header với navigation
│   │   ├── Hero.jsx            # Hero section với animations
│   │   ├── Categories.jsx      # Danh mục sản phẩm
│   │   ├── ProductCard.jsx     # Card sản phẩm
│   │   ├── FeaturedProducts.jsx # Sản phẩm nổi bật
│   │   ├── PromoBanner.jsx     # Banner khuyến mãi
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Component chính
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Tính Năng Giao Diện

### Header
- Logo và branding
- Navigation menu responsive
- Mobile menu với animations
- Giỏ hàng với badge đếm sản phẩm
- Tìm kiếm và tài khoản

### Hero Section
- Headline lớn với animations
- Call-to-action buttons
- Thống kê (sản phẩm, khách hàng)
- Floating cards với hiệu ứng

### Categories
- 4 danh mục chính: Thú Cưng, Thức Ăn, Đồ Chơi, Phụ Kiện
- Hover effects mượt mà
- Icon và thông tin chi tiết

### Featured Products
- Bộ lọc theo danh mục
- Product cards với:
  - Hình ảnh sản phẩm
  - Giá và giảm giá
  - Đánh giá sao
  - Nút thêm vào giỏ
  - Nút yêu thích
  - Trạng thái còn/hết hàng

### Promo Banner
- Khuyến mãi đặc biệt
- 4 tính năng nổi bật
- Newsletter đăng ký

### Footer
- Thông tin công ty
- Liên kết hữu ích
- Thông tin liên hệ
- Social media links
- Phương thức thanh toán

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

Tất cả animations được tối ưu hóa cho hiệu suất:
- Fade in/out
- Slide animations
- Hover effects
- Scroll-triggered animations
- Floating animations
- Scale transitions

## 🔍 SEO Features

- Meta tags tối ưu
- Open Graph tags
- Canonical URLs
- Semantic HTML
- Fast loading times
- Mobile-friendly

## 🌈 Color Scheme

- **Primary**: Orange (#f97316)
- **Secondary**: Green (#22c55e)
- **Accent**: Blue, Purple
- **Neutral**: Gray scale

## 📝 Customize

### Thay đổi màu sắc:
Chỉnh sửa file `tailwind.config.js`

### Thêm sản phẩm:
Chỉnh sửa mảng `products` trong `FeaturedProducts.jsx`

### Thay đổi nội dung:
Cập nhật các component tương ứng

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Hãy tạo pull request hoặc issue.

## 📞 Liên Hệ

- Website: https://shopthucung.vn
- Email: support@shopthucung.vn
- Hotline: 1900-xxxx

---

Được xây dựng với ❤️ bởi Claude Code
