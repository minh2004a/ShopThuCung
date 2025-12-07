# Quick Reference - Shop Thú Cưng

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Pages

| URL | Page | Description |
|-----|------|-------------|
| `/` | Home | Hero, categories, featured products |
| `/product/1` | Product Detail | Full product information |
| `/cart` | Shopping Cart | Cart management & checkout |

## 🛒 Shopping Cart Features

### Add to Cart
- Click product card → Product detail
- Select quantity
- Click "Thêm vào giỏ" button
- See cart badge update

### Manage Cart
- Click cart icon in header
- Adjust quantities with +/- buttons
- Remove items with trash icon
- Clear all items

### Cart Badge
- Shows total item count
- Animates on add/remove
- Persists across page refreshes

## 📦 Product Data

### Location
`src/data/products.js`

### 8 Products Available
1. Chó Golden Retriever Con - 12,000,000đ
2. Thức Ăn Hạt Royal Canin - 450,000đ
3. Bóng Cao Su Cho Chó - 120,000đ
4. Mèo Anh Lông Ngắn - 8,000,000đ
5. Vòng Cổ LED Cho Chó - 250,000đ
6. Pate Cho Mèo Whiskas - 35,000đ
7. Nhà Gỗ Cho Mèo - 1,200,000đ
8. Chuột Đồ Chơi Cho Mèo - 80,000đ

### Add New Product
```javascript
// In src/data/products.js
{
  id: 9,
  name: 'Product Name',
  category: 'Category',
  categoryId: 'pets|food|toys|accessories',
  price: 100000,
  originalPrice: 120000, // Optional for discount
  rating: 4.5,
  reviews: 50,
  emoji: '🐶',
  isNew: true,
  discount: 20, // Optional
  inStock: true,
  description: 'Full description',
  features: ['Feature 1', 'Feature 2'],
  specifications: {
    'Key': 'Value'
  }
}
```

## 🔧 Cart Context Usage

```javascript
import { useCart } from './context/CartContext'

const MyComponent = () => {
  const {
    cartItems,        // Array of cart items
    addToCart,        // (product, quantity) => void
    removeFromCart,   // (productId) => void
    updateQuantity,   // (productId, quantity) => void
    clearCart,        // () => void
    getCartTotal,     // () => number
    getCartCount,     // () => number
    isInCart          // (productId) => boolean
  } = useCart()

  // Use cart functions
  addToCart(product, 1)
  updateQuantity(1, 5)
  removeFromCart(1)
}
```

## 🎨 Key Components

### Pages
- `src/pages/Home.jsx` - Homepage
- `src/pages/ProductDetail.jsx` - Product details
- `src/pages/Cart.jsx` - Shopping cart

### Components
- `src/components/Header.jsx` - Navigation + cart badge
- `src/components/ProductCard.jsx` - Product card with cart
- `src/components/CartItem.jsx` - Cart item row
- `src/components/FeaturedProducts.jsx` - Product grid

### Context
- `src/context/CartContext.jsx` - Cart state management

### Data
- `src/data/products.js` - Product database

## 🔍 Common Tasks

### Change Header Logo
Edit: `src/components/Header.jsx`
```javascript
<span className="text-xl md:text-2xl font-bold">
  Your Shop Name
</span>
```

### Modify Cart Badge Color
Edit: `src/components/Header.jsx`
```javascript
className="... bg-primary-500 ..." // Change primary-500
```

### Update Free Shipping Threshold
Edit: `src/pages/Cart.jsx`
```javascript
const shippingFee = total >= 500000 ? 0 : 30000
// Change 500000 to desired amount
```

### Add Product Category
1. Add to `src/data/products.js` with new categoryId
2. Add filter in `src/components/FeaturedProducts.jsx`
```javascript
const filters = [
  // ...existing
  { id: 'new-category', label: 'New Category' }
]
```

## 📊 File Sizes

- **CartContext**: ~2.5 KB
- **Product Data**: ~6 KB (8 products)
- **ProductDetail**: ~10 KB
- **Cart Page**: ~8 KB
- **CartItem**: ~3 KB

## 🎯 Key Features

✅ Product browsing with filtering
✅ Product detail pages
✅ Shopping cart (add/remove/update)
✅ Cart persistence (localStorage)
✅ Responsive design (mobile/tablet/desktop)
✅ Smooth animations
✅ SEO optimized
✅ Vietnamese language
✅ Stock status
✅ Discount pricing
✅ Related products
✅ Free shipping threshold

## 🐛 Troubleshooting

### Cart not persisting
Check browser localStorage:
```javascript
localStorage.getItem('cartItems')
```

### Products not showing
Verify: `src/data/products.js` is imported correctly

### Routes not working
Check: React Router is properly configured in `src/App.jsx`

### Build errors
```bash
npm run build
# Check console for specific errors
```

## 📈 Next Steps

1. Add real product images
2. Implement checkout flow
3. Add user authentication
4. Connect to backend API
5. Add payment processing
6. Implement order tracking

## 🔗 Important Links

- **Repository**: https://github.com/minh2004a/ShopThuCung
- **GitHub Pages**: https://minh2004a.github.io/ShopThuCung/
- **Documentation**: See README.md, FEATURES.md, DEPLOYMENT.md

## 📞 Support

For issues or questions:
1. Check FEATURES_UPDATE.md for feature details
2. Check DEPLOYMENT.md for deployment help
3. Open issue on GitHub

---

**Quick Commands**

```bash
npm run dev          # Start dev server
npm run build        # Build production
npm run preview      # Preview production
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub
```
