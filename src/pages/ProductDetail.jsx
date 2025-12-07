import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiHeart, FiStar, FiCheck, FiArrowLeft } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { getProductById, getRelatedProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, isInCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const [showNotification, setShowNotification] = useState(false)

  const product = getProductById(id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy sản phẩm</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id, product.categoryId)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity)
    }
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - Shop Thú Cưng</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Notification */}
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2"
          >
            <FiCheck className="text-xl" />
            <span>Đã thêm vào giỏ hàng!</span>
          </motion.div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary-500">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900">{product.category}</span>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>

          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-primary-500 mb-6"
          >
            <FiArrowLeft />
            <span>Quay lại</span>
          </motion.button>

          {/* Product Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden shadow-xl">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : null}
                <div className="text-9xl" style={{ display: product.image ? 'none' : 'block' }}>
                  {product.emoji}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                      MỚI
                    </span>
                  )}
                  {product.discount && (
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-colors ${
                    isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  <FiHeart className={`text-xl ${isFavorite ? 'fill-current' : ''}`} />
                </motion.button>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-primary-500 font-semibold mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`text-lg ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-900 font-semibold">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} đánh giá)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through mr-3">
                    {product.originalPrice.toLocaleString('vi-VN')}đ
                  </span>
                )}
                <span className="text-4xl font-bold text-primary-500">
                  {product.price.toLocaleString('vi-VN')}đ
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              {product.inStock && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Số lượng
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 1
                          if (val >= 1 && val <= 99) setQuantity(val)
                        }}
                        className="w-16 text-center border-x-2 border-gray-300 py-2 focus:outline-none"
                        min="1"
                        max="99"
                      />
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors ${
                    product.inStock
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FiShoppingCart className="text-xl" />
                  {isInCart(product.id) ? 'Thêm nữa' : 'Thêm vào giỏ'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white border-2 border-primary-500 text-primary-500 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
                >
                  Mua ngay
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-16">
            <div className="flex gap-4 mb-6 border-b">
              {['description', 'features', 'specifications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeTab === tab
                      ? 'text-primary-500 border-b-2 border-primary-500'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'description' && 'Mô tả'}
                  {tab === 'features' && 'Đặc điểm'}
                  {tab === 'specifications' && 'Thông số'}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Sản phẩm liên quan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductDetail
