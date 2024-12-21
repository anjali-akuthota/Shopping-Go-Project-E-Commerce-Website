import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      {/* Categories Section */}
      <div className="categories">
        <button>Mobiles</button>
        <button>Accessories</button>
        <button>Electronics</button>
        <button>Sports</button>
        <button>Laptops</button>
        <button>Headphones</button>
      </div>

      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://example.com/phone-banner.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Branded Phones</h3>
            <p>Be connected with your loved ones.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Felectronic-product-banner&psig=AOvVaw3vmqmYs3V_YYRqMzmPA2Hg&ust=1734842618946000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDx2NiGuIoDFQAAAAAdAAAAABAE"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Headphones</h3>
            <p>Experience premium sound quality.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Product Section */}
      <div className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tomsguide.com%2Fnews%2Fiphone-15&psig=AOvVaw0435Z50YWUcgW_4Zj4W7T7&ust=1734842682017000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCJrvWGuIoDFQAAAAAdAAAAABAE" alt="iPhone" />
          </div>
          <div className="product-item">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fin%2Fexplore%2Fbrand%2F5-best-5g-android-mobile-phones-in-india%2F&psig=AOvVaw10NJLj9I4fibyW62qZar8j&ust=1734842735620000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8mI6HuIoDFQAAAAAdAAAAABAE" alt="Samsung Galaxy" />
          </div>
          <div className="product-item">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oneplus.in%2Fpress-photos&psig=AOvVaw0rCXG6xG8KOwkFgexXck7h&ust=1734842764414000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCs9JqHuIoDFQAAAAAdAAAAABAE" alt="OnePlus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
