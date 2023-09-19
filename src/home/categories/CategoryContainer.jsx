import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./assets/css/categoryContainer.css";

function CategoryContainer() {
  const [cats, setCats] = useState([
    {artist_name: "Sri Nagar",
    id: 1,
    pfp_url: 'https://www.holidify.com/images/bgImages/SRINAGAR.jpg'
  },
  {artist_name: "Pahalgam",
    id: 2,
    pfp_url: 'https://lh5.googleusercontent.com/p/AF1QipPWoolXeFoxgquGyFgQ__rMBInNN3WIXsODZBQ8=w548-h318-n-k-no'
  },
  {artist_name: "Leh",
    id: 3,
    pfp_url: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT_nrINFcUtwpbBIe9QwZxtHScO0UCWCT8tYcZgFK8ogZyFoV7eeDf_waeOblQXIqYj5Nu1LIulLgQFBctZkuLfccGMaFQb'
  },
  {artist_name: "Jammu",
    id: 4,
    pfp_url: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQTZIU8CcuN_P7uMp81gSICMoSbt3P9JV-rq4WLVrUS9Qq1OjUZ5uKx1wEIW_BmEiny8dU4EV8KIHQ9BzZHATjVHFrYv4QC'
  }
  ]);

  useEffect(() => {
    // getTopArtists();
  }, []);

  // const getTopArtists = async () => {
  //   const response = await fetch(
  //     "https://artisans-and-co.onrender.com/api/artist/bestselling",
  //     {
  //       method: "GET",
  //       mode: "cors",
  //       headers: {
  //         "Access-Control-Allow-Credentials": "true",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     }
  //   );
  //   const data = await response.json();
  //   setCats(data.slice(0, 4));
  // };
  console.log(cats);
  return (
    <div>
      <div className="container-wrap container-fluid">
        <div className="col-md-12 mt-4">
          <center>
            <h2 className="heading-section">
              {" "}
              "<i>
              From the Heavan on Earth...</i>" <br />{" "}
            </h2>
            <h6>
              <i>~ Jammu & Kashmir</i>
            </h6>
          </center>
        </div>
        <div className="blockCat">
          <div className="container">
            <div className="d-flex justify-content-center">
              {cats.map((cat, i) => {
                return (
                  // <div className="category-parent">
                  <a href={`/profile/${cat.id}`}>
                    <div className="col-sm category_parent d-flex flex-column align-items-center btn">
                      <div className="category_item">
                        <img
                          src={cat.pfp_url}
                          alt=""
                          srcset=""
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            overflow: "hidden",
                          }}
                        />
                      </div>
                      <div href="" className="category-item category-link">
                        {cat.artist_name}
                      </div>
                    </div>
                  </a>
                  // </div>
                );
              })}
              <a href={`/districts`}>
                    <div className="col-sm category_parent d-flex flex-column align-items-center btn">
                      <div className="category_item">
                        <img
                          src={'https://static.thenounproject.com/png/816811-200.png'}
                          alt=""
                          srcset=""
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            overflow: "hidden",
                          }}
                        />
                      </div>
                      <div href="" className="category-item category-link">
                        {'View More'}
                      </div>
                    </div>
                  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryContainer;
