import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      {/* Text "Our Valuable Partners" added */}
      <div className="text-left font-bold mb-4">Our valuable partners</div>
      
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/OIP.4LYZB9aynn2YTARvVuIl1gAAAA?rs=1&pid=ImgDetMain"
            alt="Sponsor Logo"
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfPIE8jTLP_zsHaGQyhXxG6A9dMh0ndr4fg&s"
            style={{ width: "150px", objectFit: "contain" }}
            alt="Pathao Rider logo"
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://ahkhan.com/wp-content/uploads/2018/07/Bkash-Customer-Care1.png"
            style={{ width: "150px", objectFit: "contain" }}
            alt="Bkash Logo"
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/R.f3430e9a0b77a4228f588c2b1fb3c784?rik=8IbqEKuNzDYjsQ&pid=ImgRaw&r=0"
            style={{ width: "150px", objectFit: "contain" }}
            alt="Daraz Logo"
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://th.bing.com/th/id/OIP.sGZdr6_doiLguRZFjpXjlQHaEL?rs=1&pid=ImgDetMain"
            style={{ width: "150px", objectFit: "contain" }}
            alt="Custom Sponsor"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
