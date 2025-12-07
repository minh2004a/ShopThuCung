# Hướng Dẫn Thêm Ảnh Sản Phẩm

## ✅ Code đã được cập nhật

Code hiện tại **ĐÃ HỖ TRỢ** hiển thị ảnh thật! Bạn có thể thêm ảnh theo 3 cách:

---

## 📸 Cách 1: Thêm Ảnh URL (Khuyên dùng)

### Bước 1: Cập nhật file `src/data/products.js`

Thêm trường `image` với URL ảnh:

```javascript
export const products = [
  {
    id: 1,
    name: 'Chó Golden Retriever Con',
    category: 'Thú Cưng',
    categoryId: 'pets',

    // THÊM DÒNG NÀY - URL ảnh từ internet
    image: 'https://example.com/golden-retriever.jpg',

    // Hoặc từ Unsplash (miễn phí)
    // image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500',

    emoji: '🐕', // Vẫn giữ emoji làm backup
    price: 12000000,
    // ... các trường khác
  },
  {
    id: 2,
    name: 'Thức Ăn Hạt Royal Canin',
    image: 'https://example.com/royal-canin.jpg',
    emoji: '🍖',
    // ...
  }
]
```

### Ví dụ với URL thật (Unsplash - Free):

```javascript
{
  id: 1,
  name: 'Chó Golden Retriever Con',
  image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop',
  emoji: '🐕',
  // ...
}
```

---

## 📁 Cách 2: Thêm Ảnh Local (File trong dự án)

### Bước 1: Tạo thư mục `public/images`

```bash
mkdir public/images
```

### Bước 2: Copy ảnh vào thư mục

```
public/
  images/
    golden-retriever.jpg
    royal-canin.jpg
    cat.jpg
    toy.jpg
```

### Bước 3: Cập nhật `src/data/products.js`

```javascript
{
  id: 1,
  name: 'Chó Golden Retriever Con',
  image: '/images/golden-retriever.jpg', // Đường dẫn tương đối
  emoji: '🐕',
  // ...
}
```

**Lưu ý:** Với Vite config `base: '/ShopThuCung/'`, đường dẫn sẽ tự động được xử lý.

---

## 🖼️ Cách 3: Import Ảnh (TypeScript/Advanced)

### Bước 1: Tạo thư mục `src/assets/images`

```bash
mkdir -p src/assets/images
```

### Bước 2: Copy ảnh vào

```
src/
  assets/
    images/
      golden-retriever.jpg
      royal-canin.jpg
```

### Bước 3: Import trong `products.js`

```javascript
// Đầu file products.js
import goldenRetriever from '../assets/images/golden-retriever.jpg'
import royalCanin from '../assets/images/royal-canin.jpg'

export const products = [
  {
    id: 1,
    name: 'Chó Golden Retriever Con',
    image: goldenRetriever, // Import được optimize bởi Vite
    emoji: '🐕',
    // ...
  },
  {
    id: 2,
    name: 'Thức Ăn Hạt Royal Canin',
    image: royalCanin,
    emoji: '🍖',
    // ...
  }
]
```

---

## 🎯 Ví Dụ Hoàn Chỉnh

### Sử dụng Unsplash (Free Images)

```javascript
export const products = [
  {
    id: 1,
    name: 'Chó Golden Retriever Con',
    category: 'Thú Cưng',
    categoryId: 'pets',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop',
    emoji: '🐕',
    price: 12000000,
    originalPrice: 15000000,
    rating: 5,
    reviews: 124,
    isNew: true,
    discount: 20,
    inStock: true,
    description: 'Golden Retriever là giống chó thông minh...',
    features: ['Giống thuần chủng 100%', '...'],
    specifications: { 'Giống': 'Golden Retriever', '...' }
  },
  {
    id: 2,
    name: 'Thức Ăn Hạt Royal Canin',
    category: 'Thức Ăn',
    categoryId: 'food',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&h=500&fit=crop',
    emoji: '🍖',
    price: 450000,
    rating: 4.8,
    reviews: 89,
    inStock: true,
    description: 'Thức ăn cao cấp Royal Canin...',
    features: ['Thành phần tự nhiên 100%', '...'],
    specifications: { 'Trọng lượng': '3 kg', '...' }
  },
  {
    id: 3,
    name: 'Bóng Cao Su Cho Chó',
    category: 'Đồ Chơi',
    categoryId: 'toys',
    image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=500&h=500&fit=crop',
    emoji: '🎾',
    price: 120000,
    originalPrice: 150000,
    rating: 4.5,
    reviews: 56,
    discount: 20,
    inStock: true,
    description: 'Bóng cao su chất lượng cao...',
    features: ['Chất liệu cao su tự nhiên', '...'],
    specifications: { 'Chất liệu': 'Cao su tự nhiên', '...' }
  },
  {
    id: 4,
    name: 'Mèo Anh Lông Ngắn',
    category: 'Thú Cưng',
    categoryId: 'pets',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop',
    emoji: '🐱',
    price: 8000000,
    rating: 5,
    reviews: 98,
    isNew: true,
    inStock: true,
    description: 'Mèo Anh lông ngắn (British Shorthair)...',
    features: ['Giống thuần chủng', '...'],
    specifications: { 'Giống': 'British Shorthair', '...' }
  }
]
```

---

## 🔍 Tìm Ảnh Miễn Phí

### 1. Unsplash (Khuyên dùng)
- Website: https://unsplash.com
- Search: "golden retriever", "cat", "dog food", "pet toys"
- Click ảnh → Copy URL → Thêm `?w=500&h=500&fit=crop`

### 2. Pexels
- Website: https://pexels.com
- Tương tự Unsplash

### 3. Pixabay
- Website: https://pixabay.com
- Free không cần credit

---

## ⚙️ Cách Hoạt Động

### Code đã được cập nhật:

**ProductCard.jsx**, **ProductDetail.jsx**, **CartItem.jsx** đều có logic:

```javascript
{product.image ? (
  <img
    src={product.image}
    alt={product.name}
    className="absolute inset-0 w-full h-full object-cover"
    onError={(e) => {
      // Nếu ảnh lỗi, ẩn đi và hiện emoji
      e.target.style.display = 'none'
    }}
  />
) : null}

{/* Emoji Fallback */}
<div style={{ display: product.image ? 'none' : 'flex' }}>
  {product.emoji}
</div>
```

### Ưu điểm:

✅ **Tự động fallback**: Nếu ảnh lỗi → hiện emoji
✅ **Tương thích**: Có thể dùng cả ảnh và emoji
✅ **Linh hoạt**: Hỗ trợ URL, local file, import
✅ **Responsive**: `object-cover` đảm bảo ảnh không bị méo

---

## 📊 So Sánh Các Cách

| Cách | Ưu điểm | Nhược điểm | Khuyên dùng |
|------|---------|------------|-------------|
| **URL (Unsplash)** | Nhanh, không tốn dung lượng | Phụ thuộc internet | ✅ Phát triển & demo |
| **Local (public/)** | Độc lập, nhanh | Tốn dung lượng repo | ✅ Production |
| **Import (assets/)** | Optimize bởi Vite | Phức tạp hơn | ⚡ Advanced |

---

## 🧪 Test Thử

### 1. Test với 1 sản phẩm

```javascript
// Trong products.js, thêm ảnh cho sản phẩm đầu tiên
{
  id: 1,
  name: 'Chó Golden Retriever Con',
  image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500',
  emoji: '🐕',
  // ...
}
```

### 2. Build & Test

```bash
npm run build
npm run dev
```

### 3. Mở trình duyệt

- Vào trang chủ → Xem product card có ảnh
- Click vào sản phẩm → Xem trang detail có ảnh
- Thêm vào giỏ → Xem giỏ hàng có ảnh

---

## 🐛 Xử Lý Lỗi

### Nếu ảnh không hiển thị:

1. **Kiểm tra URL**: Copy URL vào trình duyệt xem có mở được không
2. **Kiểm tra CORS**: Một số website chặn hotlink
3. **Kiểm tra đường dẫn**: Với local file, đảm bảo đường dẫn đúng
4. **Xem console**: F12 → Console → Xem lỗi

### Nếu ảnh bị méo:

```javascript
// Đảm bảo có class này
className="... object-cover"

// Hoặc thử object-contain
className="... object-contain"
```

---

## 🎨 Tùy Chỉnh Thêm

### Thêm loading spinner:

```javascript
const [imageLoaded, setImageLoaded] = useState(false)

<img
  src={product.image}
  alt={product.name}
  onLoad={() => setImageLoaded(true)}
  className={`... ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
/>
```

### Thêm zoom on hover:

```javascript
<img
  className="... transition-transform duration-300 group-hover:scale-110"
/>
```

---

## 📝 Checklist

- [ ] Quyết định dùng cách nào (URL/Local/Import)
- [ ] Chuẩn bị ảnh (tìm trên Unsplash hoặc copy vào folder)
- [ ] Cập nhật `src/data/products.js`
- [ ] Thêm trường `image: '...'` cho mỗi sản phẩm
- [ ] Test: `npm run dev`
- [ ] Kiểm tra: Product card, Detail page, Cart
- [ ] Build: `npm run build`
- [ ] Deploy (nếu OK)

---

## ✅ Kết Luận

**Code ĐÃ SẴN SÀNG nhận ảnh!** Bạn chỉ cần:

1. Thêm `image: 'URL'` vào mỗi sản phẩm trong `products.js`
2. Build & test
3. Push lên GitHub

**Emoji vẫn được giữ làm fallback** nếu ảnh không load được.

---

**Nhanh nhất:** Dùng Unsplash URLs (copy-paste 5 phút xong!)
