import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 1)
  }

  const handleFavoriteClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 aspect-square">
        {/* Product Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-7xl">
          {product.emoji}
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
              MỚI
            </span>
          )}
          {product.discount && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2 rounded-full shadow-lg transition-colors ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
          }`}
        >
          <FiHeart className={isFavorite ? 'fill-current' : ''} />
        </motion.button>

        {/* Quick Add Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg ${
              product.inStock
                ? 'bg-white text-gray-900 hover:bg-gray-100'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <FiShoppingCart />
            {product.inStock ? 'Thêm Vào Giỏ' : 'Hết Hàng'}
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-4 md:p-6">
        {/* Category */}
        <p className="text-sm text-primary-500 font-semibold mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating) ? 'fill-current' : ''
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.reviews} đánh giá)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
            <span className="text-xl md:text-2xl font-bold text-primary-500">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>

        {/* Stock Status */}
        <div className="mt-3 flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              product.inStock ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
          <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>
      </div>
    </motion.div>
    </Link>
  )
}

export default ProductCard
