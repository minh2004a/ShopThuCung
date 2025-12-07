// ========================================
// VÍ DỤ: products.js VỚI ẢNH THẬT
// ========================================
// Copy code này vào file: src/data/products.js
// Thay thế toàn bộ nội dung cũ

export const products = [
  {
    id: 1,
    name: 'Chó Golden Retriever Con',
    category: 'Thú Cưng',
    categoryId: 'pets',

    // ✅ Thêm ảnh từ Unsplash (miễn phí)
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=600&h=600&fit=crop&q=80',

    emoji: '🐕', // Vẫn giữ emoji làm fallback
    price: 12000000,
    originalPrice: 15000000,
    rating: 5,
    reviews: 124,
    isNew: true,
    discount: 20,
    inStock: true,
    description: 'Golden Retriever là giống chó thông minh, thân thiện và trung thành. Rất phù hợp với gia đình có trẻ nhỏ. Được tiêm phòng đầy đủ, có giấy tờ xuất xứ rõ ràng.',
    features: [
      'Giống thuần chủng 100%',
      'Độ tuổi: 2-3 tháng',
      'Đã tiêm phòng đầy đủ',
      'Có giấy chứng nhận xuất xứ',
      'Bảo hành sức khỏe 30 ngày',
      'Tư vấn chăm sóc miễn phí'
    ],
    specifications: {
      'Giống': 'Golden Retriever',
      'Màu sắc': 'Vàng kim',
      'Cân nặng': '3-5 kg',
      'Chiều cao': '25-30 cm',
      'Xuất xứ': 'Việt Nam',
      'Giới tính': 'Đực/Cái'
    }
  },
  {
    id: 2,
    name: 'Thức Ăn Hạt Royal Canin',
    category: 'Thức Ăn',
    categoryId: 'food',

    // ✅ Ảnh thức ăn cho chó
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&h=600&fit=crop&q=80',

    emoji: '🍖',
    price: 450000,
    rating: 4.8,
    reviews: 89,
    isNew: false,
    inStock: true,
    description: 'Thức ăn cao cấp Royal Canin dành cho chó trưởng thành. Công thức dinh dưỡng cân bằng, giúp chó khỏe mạnh, lông mượt và hệ tiêu hóa tốt.',
    features: [
      'Thành phần tự nhiên 100%',
      'Giàu protein và vitamin',
      'Hỗ trợ tiêu hóa',
      'Tăng cường miễn dịch',
      'Lông mượt, da khỏe',
      'Hạn sử dụng: 12 tháng'
    ],
    specifications: {
      'Trọng lượng': '3 kg',
      'Hương vị': 'Gà, bò',
      'Độ tuổi': 'Trưởng thành',
      'Thương hiệu': 'Royal Canin',
      'Xuất xứ': 'Pháp',
      'Bảo quản': 'Nơi khô ráo'
    }
  },
  {
    id: 3,
    name: 'Bóng Cao Su Cho Chó',
    category: 'Đồ Chơi',
    categoryId: 'toys',

    // ✅ Ảnh đồ chơi bóng
    image: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600&h=600&fit=crop&q=80',

    emoji: '🎾',
    price: 120000,
    originalPrice: 150000,
    rating: 4.5,
    reviews: 56,
    isNew: false,
    discount: 20,
    inStock: true,
    description: 'Bóng cao su chất lượng cao, an toàn cho thú cưng. Giúp chó vận động, giải trí và làm sạch răng. Độ bền cao, chịu được cắn nhai mạnh.',
    features: [
      'Chất liệu cao su tự nhiên',
      'An toàn, không độc hại',
      'Độ đàn hồi tốt',
      'Làm sạch răng',
      'Nhiều màu sắc',
      'Đường kính 7cm'
    ],
    specifications: {
      'Chất liệu': 'Cao su tự nhiên',
      'Kích thước': '7cm',
      'Màu sắc': 'Đỏ, xanh, vàng',
      'Độ tuổi': 'Mọi lứa tuổi',
      'Thương hiệu': 'Pet Toys',
      'Xuất xứ': 'Việt Nam'
    }
  },
  {
    id: 4,
    name: 'Mèo Anh Lông Ngắn',
    category: 'Thú Cưng',
    categoryId: 'pets',

    // ✅ Ảnh mèo British Shorthair
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop&q=80',

    emoji: '🐱',
    price: 8000000,
    rating: 5,
    reviews: 98,
    isNew: true,
    inStock: true,
    description: 'Mèo Anh lông ngắn (British Shorthair) với bộ lông mềm mại, tính cách dễ thương và thân thiện. Giống mèo hoàn hảo cho căn hộ và gia đình.',
    features: [
      'Giống thuần chủng',
      'Độ tuổi: 2-3 tháng',
      'Đã tiêm phòng',
      'Tính cách hiền lành',
      'Dễ nuôi, dễ chăm sóc',
      'Bảo hành sức khỏe'
    ],
    specifications: {
      'Giống': 'British Shorthair',
      'Màu sắc': 'Xám, trắng',
      'Cân nặng': '1-2 kg',
      'Chiều cao': '20-25 cm',
      'Xuất xứ': 'Việt Nam',
      'Giới tính': 'Đực/Cái'
    }
  },
  {
    id: 5,
    name: 'Vòng Cổ LED Cho Chó',
    category: 'Phụ Kiện',
    categoryId: 'accessories',

    // ✅ Ảnh vòng cổ cho chó
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop&q=80',

    emoji: '🎀',
    price: 250000,
    rating: 4.6,
    reviews: 73,
    isNew: false,
    inStock: true,
    description: 'Vòng cổ LED an toàn, giúp bạn dễ dàng theo dõi thú cưng vào ban đêm. Pin sạc USB, có thể điều chỉnh kích thước phù hợp nhiều giống chó.',
    features: [
      'Đèn LED siêu sáng',
      'Pin sạc USB',
      'Chống nước IPX4',
      'Điều chỉnh kích thước',
      'Thời gian sử dụng: 8 giờ',
      '3 chế độ: nhấp nháy, sáng liên tục'
    ],
    specifications: {
      'Chất liệu': 'Nylon, LED',
      'Kích thước': '35-50 cm',
      'Màu sắc': 'Đỏ, xanh, vàng',
      'Nguồn điện': 'USB sạc',
      'Thương hiệu': 'Pet Safety',
      'Xuất xứ': 'Trung Quốc'
    }
  },
  {
    id: 6,
    name: 'Pate Cho Mèo Whiskas',
    category: 'Thức Ăn',
    categoryId: 'food',

    // ✅ Ảnh thức ăn cho mèo
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&h=600&fit=crop&q=80',

    emoji: '🥫',
    price: 35000,
    rating: 4.7,
    reviews: 156,
    isNew: false,
    inStock: true,
    description: 'Pate Whiskas với nhiều hương vị thơm ngon, dinh dưỡng cân bằng dành cho mèo mọi lứa tuổi. Mềm, dễ ăn, dễ tiêu hóa.',
    features: [
      'Dinh dưỡng cân bằng',
      'Nhiều hương vị',
      'Dễ tiêu hóa',
      'Giàu protein',
      'Vitamin & khoáng chất',
      'Hộp 80g tiện lợi'
    ],
    specifications: {
      'Trọng lượng': '80g',
      'Hương vị': 'Cá ngừ, gà, bò',
      'Độ tuổi': 'Mọi lứa tuổi',
      'Thương hiệu': 'Whiskas',
      'Xuất xứ': 'Thái Lan',
      'HSD': '18 tháng'
    }
  },
  {
    id: 7,
    name: 'Nhà Gỗ Cho Mèo',
    category: 'Phụ Kiện',
    categoryId: 'accessories',

    // ✅ Ảnh nhà cho mèo
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=600&fit=crop&q=80',

    emoji: '🏠',
    price: 1200000,
    originalPrice: 1500000,
    rating: 4.9,
    reviews: 45,
    isNew: true,
    discount: 20,
    inStock: true,
    description: 'Nhà gỗ cao cấp cho mèo với thiết kế 2 tầng, có cào móng và nệm êm. Chất liệu gỗ tự nhiên, an toàn và thân thiện môi trường.',
    features: [
      'Gỗ tự nhiên cao cấp',
      'Thiết kế 2 tầng',
      'Có cột cào móng',
      'Nệm êm ái',
      'Dễ lắp ráp',
      'Kích thước: 60x40x80cm'
    ],
    specifications: {
      'Chất liệu': 'Gỗ thông tự nhiên',
      'Kích thước': '60x40x80 cm',
      'Màu sắc': 'Nâu gỗ',
      'Tải trọng': 'Đến 15kg',
      'Thương hiệu': 'Pet Home',
      'Xuất xứ': 'Việt Nam'
    }
  },
  {
    id: 8,
    name: 'Chuột Đồ Chơi Cho Mèo',
    category: 'Đồ Chơi',
    categoryId: 'toys',

    // ✅ Ảnh đồ chơi cho mèo
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=600&fit=crop&q=80',

    emoji: '🐭',
    price: 80000,
    rating: 4.4,
    reviews: 67,
    isNew: false,
    inStock: false,
    description: 'Chuột đồ chơi vui nhộn với lông mềm, có chuông kêu. Kích thích bản năng săn mồi tự nhiên của mèo, giúp mèo vận động và giải trí.',
    features: [
      'Lông mềm mại',
      'Có chuông kêu',
      'Kích thước phù hợp',
      'Màu sắc bắt mắt',
      'An toàn cho mèo',
      'Bộ 3 con'
    ],
    specifications: {
      'Chất liệu': 'Vải nhung, bông',
      'Kích thước': '8-10 cm',
      'Màu sắc': 'Xám, trắng',
      'Số lượng': '3 con/bộ',
      'Thương hiệu': 'Cat Fun',
      'Xuất xứ': 'Việt Nam'
    }
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getRelatedProducts = (productId, categoryId, limit = 4) => {
  return products
    .filter(p => p.id !== productId && p.categoryId === categoryId)
    .slice(0, limit)
}

// ========================================
// HƯỚNG DẪN SỬ DỤNG:
// ========================================
// 1. Copy toàn bộ code này
// 2. Mở file: src/data/products.js
// 3. Thay thế toàn bộ nội dung bằng code này
// 4. Lưu file
// 5. Chạy: npm run dev
// 6. Kiểm tra trang web - ảnh sẽ hiển thị!
//
// Nếu muốn đổi ảnh khác:
// - Vào https://unsplash.com
// - Tìm ảnh phù hợp
// - Copy URL và thêm: ?w=600&h=600&fit=crop&q=80
// - Thay thế vào trường "image"
// ========================================
