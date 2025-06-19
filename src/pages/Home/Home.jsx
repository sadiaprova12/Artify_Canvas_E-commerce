import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="text-center py-10 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Explore Handmade Canvas Art
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Unique and creative handmade canvases crafted with love and passion. Beautify your home or gift someone special.
        </p>
        <Link to="/products">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Shop Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
