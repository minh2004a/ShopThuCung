import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi'
import { PiDogFill } from 'react-icons/pi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(3)

  const menuItems = [
    { name: 'Trang Chủ', href: '#home' },
    { name: 'Thú Cưng', href: '#pets' },
    { name: 'Thức Ăn', href: '#food' },
    { name: 'Đồ Chơi', href: '#toys' },
    { name: 'Phụ Kiện', href: '#accessories' },
    { name: 'Liên Hệ', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <PiDogFill className="text-3xl md:text-4xl text-primary-500" />
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              Shop Thú Cưng
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 hover:text-primary-500 transition-colors"
              aria-label="Tìm kiếm"
            >
              <FiSearch className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 hover:text-primary-500 transition-colors"
              aria-label="Tài khoản"
            >
              <FiUser className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 hover:text-primary-500 transition-colors relative"
              aria-label="Giỏ hàng"
            >
              <FiShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-gray-700 hover:text-primary-500 font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
              <div className="flex items-center justify-around mt-6 pt-6 border-t border-gray-200">
                <button className="p-2 text-gray-700 hover:text-primary-500">
                  <FiSearch className="text-xl" />
                </button>
                <button className="p-2 text-gray-700 hover:text-primary-500">
                  <FiUser className="text-xl" />
                </button>
                <button className="p-2 text-gray-700 hover:text-primary-500 relative">
                  <FiShoppingCart className="text-xl" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
