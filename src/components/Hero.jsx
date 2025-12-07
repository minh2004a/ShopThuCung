import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-orange-50 to-secondary-50 overflow-hidden" id="home">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-400"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
            >
              Chào Mừng Đến Với Shop Thú Cưng
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Ngôi Nhà Hạnh Phúc Cho{' '}
              <span className="text-primary-500 relative inline-block">
                Thú Cưng
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary-200 -z-10"
                ></motion.span>
              </span>
              {' '}Của Bạn
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Khám phá bộ sưu tập đa dạng thú cưng đáng yêu, thức ăn dinh dưỡng và đồ chơi chất lượng cao.
              Chúng tôi cam kết mang đến niềm vui cho người bạn bốn chân của bạn!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold shadow-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 group"
              >
                Khám Phá Ngay
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-500 border-2 border-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Xem Sản Phẩm
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-500">500+</div>
                <div className="text-sm text-gray-600">Sản Phẩm</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-500">5K+</div>
                <div className="text-sm text-gray-600">Khách Hàng</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-500">100%</div>
                <div className="text-sm text-gray-600">Hài Lòng</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Image Placeholder */}
              <div className="relative bg-gradient-to-br from-primary-300 to-secondary-300 rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🐕</div>
                    <p className="text-xl font-semibold">Thú Cưng Đáng Yêu</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🐱</div>
                  <div>
                    <div className="font-semibold text-sm">Mèo Cưng</div>
                    <div className="text-xs text-gray-500">Nhiều giống</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🦴</div>
                  <div>
                    <div className="font-semibold text-sm">Phụ Kiện</div>
                    <div className="text-xs text-gray-500">Chất lượng cao</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
