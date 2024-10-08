import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from '../components/ProductCard';


const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const latestProducts = product.slice(0, 3);

  return (
    <div className="p-4 max-w-[1300px] mx-auto my-16">
      <div className="hero-content text-center mb-24">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-teal-700">RenderSpark</span>
          </h1>
          <p className="py-6">
          Elevate your digital presence with our premium Figma designs and custom web development solutions. From sleek UI/UX concepts to fully functional websites, we offer the tools and expertise to bring your vision to life.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/shop" className="btn btn-accent mt-4">
              Shop
            </a>
          </div>
        </div>
      </div>
      
      <ProductCard product={latestProducts} />
    </div>
  )
}

export default Home