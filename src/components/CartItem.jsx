import { motion } from 'framer-motion'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (delta) => {
    const newQuantity = item.quantity + delta
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6"
    >
      {/* Product Image */}
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <div className="w-full md:w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center overflow-hidden relative">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          ) : null}
          <span className="text-6xl" style={{ display: item.image ? 'none' : 'block' }}>
            {item.emoji}
          </span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <Link to={`/product/${item.id}`}>
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 hover:text-primary-500 transition-colors">
            {item.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
        <div className="flex items-center gap-4 mb-4">
          {item.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {item.originalPrice.toLocaleString('vi-VN')}đ
            </span>
          )}
          <span className="text-xl md:text-2xl font-bold text-primary-500">
            {item.price.toLocaleString('vi-VN')}đ
          </span>
        </div>

        {/* Quantity Controls & Remove Button */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Quantity */}
          <div className="flex items-center border-2 border-gray-300 rounded-lg">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-2 hover:bg-gray-100 transition-colors"
              aria-label="Giảm số lượng"
            >
              <FiMinus />
            </motion.button>
            <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
              {item.quantity}
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-2 hover:bg-gray-100 transition-colors"
              aria-label="Tăng số lượng"
            >
              <FiPlus />
            </motion.button>
          </div>

          {/* Remove Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => removeFromCart(item.id)}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <FiTrash2 />
            <span className="hidden sm:inline">Xóa</span>
          </motion.button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex md:flex-col justify-between md:justify-start items-end gap-2">
        <span className="text-sm text-gray-600 md:hidden">Tổng:</span>
        <span className="text-xl md:text-2xl font-bold text-gray-900">
          {(item.price * item.quantity).toLocaleString('vi-VN')}đ
        </span>
      </div>
    </motion.div>
  )
}

export default CartItem
