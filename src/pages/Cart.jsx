import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiArrowRight, FiTrash2 } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, getCartTotal, getCartCount, clearCart } = useCart()

  const total = getCartTotal()
  const itemCount = getCartCount()
  const shippingFee = total >= 500000 ? 0 : 30000
  const finalTotal = total + shippingFee

  return (
    <>
      <Helmet>
        <title>Giỏ Hàng - Shop Thú Cưng</title>
        <meta name="description" content="Giỏ hàng của bạn tại Shop Thú Cưng" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Giỏ Hàng
              </h1>
              <p className="text-gray-600">
                {itemCount > 0 ? `${itemCount} sản phẩm` : 'Giỏ hàng trống'}
              </p>
            </div>
            {cartItems.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearCart}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <FiTrash2 />
                <span className="hidden sm:inline">Xóa tất cả</span>
              </motion.button>
            )}
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-8xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Giỏ hàng của bạn đang trống
              </h2>
              <p className="text-gray-600 mb-8">
                Hãy thêm sản phẩm yêu thích vào giỏ hàng!
              </p>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                >
                  Tiếp tục mua sắm
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            /* Cart with Items */
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </AnimatePresence>

                {/* Continue Shopping */}
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-colors"
                  >
                    Tiếp tục mua sắm
                  </motion.button>
                </Link>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Tóm tắt đơn hàng
                  </h2>

                  {/* Summary Items */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Tạm tính ({itemCount} sản phẩm):</span>
                      <span className="font-semibold">
                        {total.toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Phí vận chuyển:</span>
                      <span className="font-semibold">
                        {shippingFee === 0 ? (
                          <span className="text-green-600">Miễn phí</span>
                        ) : (
                          `${shippingFee.toLocaleString('vi-VN')}đ`
                        )}
                      </span>
                    </div>
                    {total < 500000 && (
                      <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                        Mua thêm{' '}
                        <span className="font-semibold text-primary-500">
                          {(500000 - total).toLocaleString('vi-VN')}đ
                        </span>{' '}
                        để được miễn phí vận chuyển!
                      </p>
                    )}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">
                          Tổng cộng:
                        </span>
                        <span className="text-2xl font-bold text-primary-500">
                          {finalTotal.toLocaleString('vi-VN')}đ
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Thanh toán
                    <FiArrowRight className="text-xl" />
                  </motion.button>

                  {/* Payment Methods */}
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-600 mb-3">
                      Phương thức thanh toán:
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {['💳', '🏦', '📱', '💰'].map((emoji, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t text-center">
                    <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                      <span className="text-green-500">🔒</span>
                      Thanh toán an toàn & bảo mật
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
