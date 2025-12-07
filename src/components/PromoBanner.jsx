import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTruck, FiShield, FiPhone, FiPercent } from 'react-icons/fi'

const PromoBanner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <FiTruck className="text-3xl" />,
      title: 'Giao Hàng Miễn Phí',
      description: 'Cho đơn hàng trên 500.000đ',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Bảo Hành Chất Lượng',
      description: 'Đảm bảo 100% chất lượng',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FiPhone className="text-3xl" />,
      title: 'Hỗ Trợ 24/7',
      description: 'Tư vấn mọi lúc mọi nơi',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FiPercent className="text-3xl" />,
      title: 'Ưu Đãi Đặc Biệt',
      description: 'Giảm giá lên đến 50%',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-orange-600 relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse animation-delay-400"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Promo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <span className="text-6xl md:text-7xl">🎉</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Khuyến Mãi Đặc Biệt
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Giảm giá lên đến 50% cho sản phẩm chăm sóc thú cưng
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Mua Ngay
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-all"
            >
              Tìm Hiểu Thêm
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full text-white mb-4 shadow-lg`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Đăng Ký Nhận Tin Khuyến Mãi
            </h3>
            <p className="text-white/80 mb-6">
              Nhận ngay mã giảm giá 10% cho đơn hàng đầu tiên khi đăng ký!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-white/30 bg-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white backdrop-blur-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Đăng Ký
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PromoBanner
