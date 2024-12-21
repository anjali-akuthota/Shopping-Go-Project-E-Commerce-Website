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
            src="https://example.com/headphone-banner.jpg"
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
            <img src="https://example.com/iphone.jpg" alt="iPhone" />
          </div>
          <div className="product-item">
            <img src="https://example.com/samsung.jpg" alt="Samsung Galaxy" />
          </div>
          <div className="product-item">
            <img src="https://example.com/oneplus.jpg" alt="OnePlus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
