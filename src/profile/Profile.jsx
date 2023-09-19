import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsOfArtist from "./ProductsOfArtist";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import "./Profile.css";
function Profile() {
  let [buttonText, setButtonText] = useState("Followed");
  function change(e) {
    if (buttonText === "Followed") setButtonText("Unfollow");
  }
  function change2(e) {
    if (buttonText === "Unfollow") setButtonText("Followed");
  }

  let [profile_user, setProfile_user] = useState({
    name: "Lana Rhodes",
    bio: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam illum perspiciatis nemo, eius dignissimos adipisci animi quos quisquam esse? Suscipit voluptas dolores corrupti blanditiis maxime ratione nemo alias consequuntur.",
    follower_count: 321241231,
    socials: {
      facebook: "https://www.fb.com",
      instagram: "https://www.ig.com",
      linkedin: "https://www.linkedin.com",
    },
    cover_url:
      "https://hdwallsource.com/img/2021/8/lana-rhoades-sexy-wallpaper-73804-76479-hd-wallpapers.jpg",
    pfp_url:
      "https://i.pinimg.com/originals/63/a8/45/63a845bfa536ec51341e74691b4d5796.png",
  });

  let [ProductData, setProductData] = useState([
    {
      productId: 2012030,
      name: "A",
      image:
        "https://www.hlimg.com/images/stories/738X538/1_1544595190-6715e.jpg?w=800&dpr=1.0",
      artistName: "LR",
      price: 200,
    },
    {
      productId: 2012039,
      name: "A",
      image:
        "https://www.hlimg.com/images/stories/738X538/1_1544595254-22e.jpg?w=800&dpr=1.0",
      artistName: "RR",
      price: 200,
    },
    {
      productId: 2012041,
      name: "Bb",
      image:
        "https://www.hlimg.com/images/stories/738X538/1_1544595406-4437e.jpg?w=800&dpr=1.0",
      artistName: "SL",
      price: 200,
    },
    {
      productId: 2012046,
      name: "A",
      image:
        "https://www.hlimg.com/images/stories/738X538/1_1544595471-7553e.jpg?w=800&dpr=1.0",
      artistName: "LR",
      price: 200,
    },
    {
      productId: 2012039,
      name: "A",
      image:
        "https://www.hlimg.com/images/stories/738X538/1_1544595254-22e.jpg?w=800&dpr=1.0",
      artistName: "RR",
      price: 200,
    },
    {
      productId: 2012046,
      name: "A",
      image:
        "https://www.hlimg.com/images/stories/738X538/1_1544595471-7553e.jpg?w=800&dpr=1.0",
      artistName: "LR",
      price: 200,
    },
    {
      productId: 2012047,
      name: "A",
      // image:
      //   "https://qph.fs.quoracdn.net/main-qimg-fca749b950f305ddbf0a4cb2854b6ad1-pjlq",
      artistName: "RR",
      price: 200,
    },
    {
      productId: 2012049,
      name: "A",
      // image:
      //   "https://i1.sndcdn.com/artworks-PZOnPSbRx5SlcIfY-QpdgbA-t500x500.jpg",
      artistName: "LR",
      price: 200,
    },
  ]);
  let followers = profile_user.follower_count;

  console.log(profile_user);
  const { profileId } = useParams();

  const getArtistCard = async () => {
    // should have basic artist information like name followers urls
    // status if the user is followed or not

    const response = await fetch(
      `https://artisans-and-co.onrender.com/api/artist/${profileId}/profile`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    if (data.success === false) {
      return;
    }
    console.log(data);
    setProfile_user(data);
  };

  useEffect(() => {
    getArtistCard();
  }, []);

  let c = 0;
  while (parseInt(followers / 1000) > 0) {
    followers /= 1000;
    c++;
  }
  if (c > 1) {
    followers = String(followers).substring(0, 5) + "M";
  } else if (followers < 1000) {
    followers = String(followers);
  } else {
    followers = String(followers).substring(0, 5) + "K";
  }

  let socials = [];

  for (var i in profile_user.socials) {
    socials.push([i, profile_user.socials[i]]);
  }

  return (
    <div style={{ marginTop: "60px" }}>
      <div className="cover-image">
        <img
          src={'https://www.nationsonline.org/gallery/India/Thiksey-Monastery-Ladakh.jpg'}
          alt=""
          srcset=""
          className="cover-image-pic"
        />
      </div>
      <div className="profile-pic">
        <img
          src={'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQTZIU8CcuN_P7uMp81gSICMoSbt3P9JV-rq4WLVrUS9Qq1OjUZ5uKx1wEIW_BmEiny8dU4EV8KIHQ9BzZHATjVHFrYv4QC'}
          alt=""
          srcset=""
          className="profile-pic-image"
        />
      </div>
      <div className="container">
        <center>
          <h2>
            <b>Jammu District</b>
          </h2>
          <button
            className="mb-3 btn btn-outline-dark"
            onMouseOver={change}
            onMouseLeave={change2}
          >
            {buttonText}
          </button>
          <h6>{'"Jammu Treasures: Unearth the Essence of Exquisite Products"'}</h6>
        </center>
        <hr />
        <div>
          <div className="row text-center m-t-20 d-flex justify-content-center">
            <div className="col-lg-4 col-md-4">
              <h3 className="m-b-0 font-light">{followers}</h3>
              <small>Followers</small>
            </div>
          </div>
          <div className="socials d-flex justify-content-evenly">
            {socials.map((s, i) => {
              console.log(s);
              return (
                <a href={s[1]}>
                  <i class={`btn fab fa-${s[0]}`}></i>
                </a>
              );
            })}
          </div>
        </div>
        <hr />
      </div>

      {/* posts */}

      <ProductsOfArtist products={ProductData} />
    </div>
    //{" "}
  );
}

export default Profile;
