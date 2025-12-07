# 🚀 Quick Start Guide - Shop Thú Cưng

## Khởi Động Nhanh

### 1️⃣ Cài Đặt Dependencies
```bash
npm install
```

### 2️⃣ Chạy Development Server
```bash
npm run dev
```

Mở trình duyệt và truy cập: **http://localhost:3000**

### 3️⃣ Build Production
```bash
npm run build
```

### 4️⃣ Preview Production Build
```bash
npm run preview
```

## 📱 Kiểm Tra Responsive

Trong Developer Tools, kiểm tra các breakpoints:
- **Mobile**: iPhone SE (375px)
- **Tablet**: iPad (768px)
- **Desktop**: 1920px

## 🎨 Tùy Chỉnh Nhanh

### Thay Đổi Màu Chủ Đạo
Mở `tailwind.config.js` và chỉnh sửa:
```javascript
colors: {
  primary: {
    500: '#f97316', // Màu chính
  }
}
```

### Thêm Sản Phẩm Mới
Mở `src/components/FeaturedProducts.jsx` và thêm vào mảng `products`:
```javascript
{
  id: 9,
  name: 'Tên Sản Phẩm',
  category: 'Danh Mục',
  categoryId: 'category-id',
  price: 100000,
  rating: 5,
  reviews: 50,
  emoji: '🐶',
  isNew: true,
  inStock: true
}
```

### Thay Đổi Nội Dung Hero
Mở `src/components/Hero.jsx` và chỉnh sửa text trong các thẻ `<h1>` và `<p>`.

## 📦 Cấu Trúc Project

```
ShopThuCung/
├── src/
│   ├── components/        # Tất cả React components
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static files
├── dist/                 # Production build (sau khi build)
└── package.json          # Dependencies
```

## ✨ Tính Năng Chính

✅ Responsive Design (Mobile, Tablet, Desktop)
✅ Smooth Animations với Framer Motion
✅ SEO Optimized
✅ Vietnamese Content
✅ Modern UI/UX
✅ Fast Performance (Vite)
✅ Clean Code Structure

## 🐛 Troubleshooting

### Port 3000 đã được sử dụng?
Chỉnh sửa `vite.config.js`:
```javascript
server: {
  port: 3001, // Đổi sang port khác
}
```

### Lỗi khi install?
```bash
# Xóa node_modules và package-lock.json
rm -rf node_modules package-lock.json
# Cài lại
npm install
```

## 📚 Scripts Có Sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build

## 🎯 Next Steps

1. Thêm backend API integration
2. Implement shopping cart functionality
3. Add user authentication
4. Connect payment gateway
5. Add product detail pages
6. Implement search functionality

---

Chúc bạn code vui vẻ! 🎉
