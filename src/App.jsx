import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Shop Thú Cưng - Cửa Hàng Thú Cưng Trực Tuyến Hàng Đầu Việt Nam</title>
        <meta name="description" content="Shop Thú Cưng cung cấp đa dạng thú cưng, thức ăn, đồ chơi và phụ kiện chất lượng cao. Giao hàng toàn quốc, giá tốt nhất thị trường." />
        <meta property="og:title" content="Shop Thú Cưng - Cửa Hàng Thú Cưng Trực Tuyến" />
        <meta property="og:description" content="Chuyên cung cấp thú cưng, thức ăn, đồ chơi và phụ kiện chất lượng cao" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://shopthucung.vn" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Categories />
          <FeaturedProducts />
          <PromoBanner />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
