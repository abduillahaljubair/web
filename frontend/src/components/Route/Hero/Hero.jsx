import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/02/99/02/0299026ae1a0156e20f94b05c6079312.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#cdba5e] font-[600] capitalize`}
        >
          Best Collection for <br /> Cooking
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#eee6e9ba]">
        Transform your kitchen into a culinary haven with our Best Cooking Collection! 
        This all-in-one set features premium cookware like non-stick pans, stainless
         steel pots, and cast iron skillets, designed for effortless cooking and lasting durability
         Enhance your culinary skills with essential utensils such as high-quality knives and versatile spatulas
           and explore new recipes with our exclusive cookbook selection curated by world-class chefs
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
