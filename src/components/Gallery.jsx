import Carousel from "better-react-carousel";
import React, { useEffect } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('name')){
      navigate('/login')
    }
  })
  return (
    <>
      <div className="gallery_container">
        <Carousel cols={2} rows={1} gap={20} loop autoplay={3000}>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://www.sweedesi.com/cdn/shop/files/scented-candle-bouquet-sweedesi-911098.jpg?v=1755411448"
                width="300px"
                height="200px"
                alt="Bouquet"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://cdn.zeptonow.com/production/tr:w-312,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/47f66db9-34f7-4f5c-818c-49d6acc4bb63.JPG"
                width="300px"
                height="200px"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://imgcdn.floweraura.com/whispers-of-affection-pink-roses-bouquet-9802810fl-A_0.jpg"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://www.flowersacrossindia.com/cdn/shop/products/FAIHD20170704_500x.jpg?v=1554471115"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://blacktulipflowers.in/wp-content/uploads/2023/06/Beautiful-Moments.png"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://fhflowers.co.uk/cdn/shop/files/IMG_9815_jpg.jpg?v=1746532602&width=1946"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://piscesflower.com.au/cdn/shop/files/20240411205200.jpg?v=1712836224"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ6RWPNrnsA_USMTTiL4lPnVjxVOVLsLFszFIOWhbtgNXqmzqvQiffgcRAepsCFT-KOM&usqp=CAU"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://i0.wp.com/cakeflowerngifts.com/wp-content/uploads/2024/06/7-pink-roses-7-red-Gerbera-flower-bouquet-basket-price-near-me-delivery.jpg?fit=400%2C400&ssl=1"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="gallery_card">
              <img
                src="https://content.jdmagicbox.com/quickquotes/images_main/-eo0cw9sg.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
                alt="Lilies"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
