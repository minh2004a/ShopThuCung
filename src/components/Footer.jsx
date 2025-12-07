import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { PiDogFill } from 'react-icons/pi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Về Chúng Tôi', href: '#about' },
      { name: 'Tin Tức', href: '#news' },
      { name: 'Tuyển Dụng', href: '#careers' },
      { name: 'Liên Hệ', href: '#contact' }
    ],
    support: [
      { name: 'Chính Sách Bảo Hành', href: '#warranty' },
      { name: 'Chính Sách Đổi Trả', href: '#return' },
      { name: 'Hướng Dẫn Mua Hàng', href: '#guide' },
      { name: 'Câu Hỏi Thường Gặp', href: '#faq' }
    ],
    categories: [
      { name: 'Chó Cảnh', href: '#dogs' },
      { name: 'Mèo Cảnh', href: '#cats' },
      { name: 'Thức Ăn', href: '#food' },
      { name: 'Phụ Kiện', href: '#accessories' }
    ]
  }

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: <FiYoutube />, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ]

  const contactInfo = [
    { icon: <FiPhone />, text: '1900-xxxx', label: 'Hotline' },
    { icon: <FiMail />, text: 'support@shopthucung.vn', label: 'Email' },
    { icon: <FiMapPin />, text: 'Hà Nội, Việt Nam', label: 'Địa chỉ' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <PiDogFill className="text-4xl text-primary-500" />
                <span className="text-2xl font-bold text-white">
                  Shop Thú Cưng
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Cửa hàng thú cưng trực tuyến hàng đầu Việt Nam. Chúng tôi mang đến những sản phẩm chất lượng cao nhất cho người bạn bốn chân của bạn.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Công Ty</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-primary-500 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Hỗ Trợ</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-primary-500 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1 text-lg">
                    {info.icon}
                  </span>
                  <div>
                    <div className="text-sm text-gray-500">{info.label}</div>
                    <div className="text-white">{info.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Phương Thức Thanh Toán</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['💳', '🏦', '📱', '💰'].map((emoji, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-3xl"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Shop Thú Cưng. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            <a href="#privacy" className="hover:text-primary-500 transition-colors">
              Chính Sách Bảo Mật
            </a>
            <span className="text-gray-700">•</span>
            <a href="#terms" className="hover:text-primary-500 transition-colors">
              Điều Khoản Sử Dụng
            </a>
            <span className="text-gray-700">•</span>
            <a href="#sitemap" className="hover:text-primary-500 transition-colors">
              Sơ Đồ Trang
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
