import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProductCard from './ProductCard'
import { products as allProducts } from '../data/products'

const FeaturedProducts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'pets', label: 'Thú Cưng' },
    { id: 'food', label: 'Thức Ăn' },
    { id: 'toys', label: 'Đồ Chơi' },
    { id: 'accessories', label: 'Phụ Kiện' }
  ]

  const products_old = [
    {
      id: 1,
      name: 'Chó Golden Retriever Con',
      category: 'Thú Cưng',
      categoryId: 'pets',
      price: 12000000,
      originalPrice: 15000000,
      rating: 5,
      reviews: 124,
      emoji: '🐕',
      isNew: true,
      discount: 20,
      inStock: true
    },
    {
      id: 2,
      name: 'Thức Ăn Hạt Royal Canin',
      category: 'Thức Ăn',
      categoryId: 'food',
      price: 450000,
      rating: 4.8,
      reviews: 89,
      emoji: '🍖',
      isNew: false,
      inStock: true
    },
    {
      id: 3,
      name: 'Bóng Cao Su Cho Chó',
      category: 'Đồ Chơi',
      categoryId: 'toys',
      price: 120000,
      originalPrice: 150000,
      rating: 4.5,
      reviews: 56,
      emoji: '🎾',
      isNew: false,
      discount: 20,
      inStock: true
    },
    {
      id: 4,
      name: 'Mèo Anh Lông Ngắn',
      category: 'Thú Cưng',
      categoryId: 'pets',
      price: 8000000,
      rating: 5,
      reviews: 98,
      emoji: '🐱',
      isNew: true,
      inStock: true
    },
    {
      id: 5,
      name: 'Vòng Cổ LED Cho Chó',
      category: 'Phụ Kiện',
      categoryId: 'accessories',
      price: 250000,
      rating: 4.6,
      reviews: 73,
      emoji: '🎀',
      isNew: false,
      inStock: true
    },
    {
      id: 6,
      name: 'Pate Cho Mèo Whiskas',
      category: 'Thức Ăn',
      categoryId: 'food',
      price: 35000,
      rating: 4.7,
      reviews: 156,
      emoji: '🥫',
      isNew: false,
      inStock: true
    },
    {
      id: 7,
      name: 'Nhà Gỗ Cho Mèo',
      category: 'Phụ Kiện',
      categoryId: 'accessories',
      price: 1200000,
      originalPrice: 1500000,
      rating: 4.9,
      reviews: 45,
      emoji: '🏠',
      isNew: true,
      discount: 20,
      inStock: true
    },
    {
      id: 8,
      name: 'Chuột Đồ Chơi Cho Mèo',
      category: 'Đồ Chơi',
      categoryId: 'toys',
      price: 80000,
      rating: 4.4,
      reviews: 67,
      emoji: '🐭',
      isNew: false,
      inStock: false
    }
  ]

  const filteredProducts = activeFilter === 'all'
    ? allProducts
    : allProducts.filter(p => p.categoryId === activeFilter)

  return (
    <section className="py-16 md:py-24 bg-gray-50" ref={ref} id="featured">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sản Phẩm Nổi Bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những sản phẩm được yêu thích nhất từ khách hàng của chúng tôi
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
          >
            Xem Thêm Sản Phẩm
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts
