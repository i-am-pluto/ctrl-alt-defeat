import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/RollingCarousel.css";
import OwlCarousel from "react-owl-carousel";
import img from "./assets/img/image.png";
import CarouselProduct from "./CarouselProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RollingCarousel({ user, products }) {
  let ProductData = [
    {
      product_name: "Kesar (Saffron)",
      main_image_url: 'https://satvyk.com/wp-content/uploads/2019/02/Kesar-1.jpg',
    },
    {
      product_name: "Handwoven Pashmina Shawl",
      main_image_url: 'https://ramrajcotton.in/cdn/shop/files/02_f064aee3-5fb5-410d-9d14-375cf06472d2.jpg?v=1682681766',
    },
    {
      product_name: "Kashmiri Sweets",
      main_image_url: 'https://static.toiimg.com/thumb/61889491.cms?width=573&height=430&imgsize=661412', // Replace with an actual image URL
    },
    {
      product_name: "Kashmiri Carpets",
      main_image_url: 'https://angiehomes.co/cdn/shop/products/SAHIL-BROWN-KASHMIRI-CARPET--ANGIE-S-INDIA-ANGIE-KRIPALANI-DESIGN---ANGIE-HOMES--ANGIES-INDIA-1618388655.jpg?v=1618388719', // Replace with an actual image URL
    },
    {
      product_name: "Walnut Wood Crafts",
      main_image_url: 'https://example.com/walnut-wood-crafts-image.jpg', // Replace with an actual image URL
    },
    {
      product_name: "Kashmiri Embroidery",
      main_image_url: 'https://example.com/kashmiri-embroidery-image.jpg', // Replace with an actual image URL
    },
    {
      product_name: "Kahwa Tea",
      main_image_url: 'https://example.com/kahwa-tea-image.jpg', // Replace with an actual image URL
    },
    {
      product_name: "Kashmiri Papier-Mâché",
      main_image_url: 'https://example.com/kashmiri-papier-mache-image.jpg', // Replace with an actual image URL
    },
    // Add more products here
  ];
  const [guest, setGuest] = useState("Guest");

  useEffect(() => {
    if (user.name) {
      setGuest(user.name.f_name);
    }
  }, [user]);

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <center>
                <h2 style={{ marginBottom: "40px", marginTop: "-50px" }}>
                  Shop By <b>Categories</b>
                </h2>
              </center>
            </div>
            <div className="col-md-12">
              <OwlCarousel
                classNameName="owl-theme"
                loop={true}
                nav={true}
                autoplay={true}
                margin={30}
                animateOut="fadeOut"
                animateIn="fadeIn"
                dots={true}
                autoplayHoverPause={true}
                items={4}
                navText={[
                  "<span class='ion-ios-arrow-back'></span>",
                  "<span class='ion-ios-arrow-forward'></span>",
                ]}
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                {ProductData.map((el, i) => {
                  return <CarouselProduct product={el} />;
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RollingCarousel;
