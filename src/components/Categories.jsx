import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Categories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const categories = [
    {
      id: 1,
      title: 'Thú Cưng',
      description: 'Chó, mèo, thỏ và nhiều hơn nữa',
      icon: '🐾',
      color: 'from-orange-400 to-orange-600',
      count: '150+ giống',
      link: '#pets'
    },
    {
      id: 2,
      title: 'Thức Ăn',
      description: 'Dinh dưỡng cao cấp cho thú cưng',
      icon: '🍖',
      color: 'from-green-400 to-green-600',
      count: '200+ sản phẩm',
      link: '#food'
    },
    {
      id: 3,
      title: 'Đồ Chơi',
      description: 'Vui chơi và giải trí',
      icon: '🎾',
      color: 'from-blue-400 to-blue-600',
      count: '100+ món đồ',
      link: '#toys'
    },
    {
      id: 4,
      title: 'Phụ Kiện',
      description: 'Mọi thứ bạn cần cho thú cưng',
      icon: '🎀',
      color: 'from-purple-400 to-purple-600',
      count: '250+ phụ kiện',
      link: '#accessories'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Danh Mục Sản Phẩm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập đa dạng các sản phẩm dành cho thú cưng của bạn
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {categories.map((category) => (
            <motion.a
              key={category.id}
              href={category.link}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl md:text-7xl mb-4"
                >
                  {category.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {category.description}
                </p>

                {/* Count */}
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-semibold`}>
                  {category.count}
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute top-6 right-6 text-2xl"
                >
                  →
                </motion.div>
              </div>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Không tìm thấy những gì bạn cần?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Xem Tất Cả Sản Phẩm
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Categories
