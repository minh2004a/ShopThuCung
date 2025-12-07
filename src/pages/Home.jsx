import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import PromoBanner from '../components/PromoBanner'

const Home = () => {
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

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
      </main>
    </>
  )
}

export default Home
