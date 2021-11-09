import React from "react";
import SingleProject from "./SingleProject";
import styles from "../../styles/SingleItem.module.css";
import img1 from "../../public/assets/images/1.jpg";
import img2 from "../../public/assets/images/2.jpg";
import img3 from "../../public/assets/images/3.jpg";
import img4 from "../../public/assets/images/4.jpg";
import img5 from "../../public/assets/images/5.jpg";
import img6 from "../../public/assets/images/6.jpg";
import img7 from "../../public/assets/images/7.jpg";
import img8 from "../../public/assets/images/8.jpg";
import img9 from "../../public/assets/images/9.jpg";
import img10 from "../../public/assets/images/10.jpg";
import img11 from "../../public/assets/images/11.jpg";

export default function AllProjects() {
  return (
    <div className={styles.project__items}>
      <SingleProject
        img={img1.src}
        overviewText="Designed & Devloped From Scratch. Product bundle, Ajax Cart"
        sitename="Babymat"
        sitelink="https://babymat.com.au/"
      />
      <SingleProject
        img={img2.src}
        overviewText="Devloped product bundle, Ajax cart and some section on the product page"
        sitename="Calmingblankets"
        sitelink="https://calmingblankets.co.uk/"
      />

      <SingleProject
        img={img3.src}
        overviewText="Devloped wishlist & cart page"
        sitename="Ever-Pretty"
        sitelink="https://www.ever-pretty.com/"
      />

      <SingleProject
        img={img4.src}
        overviewText="Designed and devloped from scratch"
        sitename="Happybear"
        sitelink="https://happybear-diapers.myshopify.com/"
      />

      <SingleProject
        img={img5.src}
        overviewText="Designed & Devloped minicart"
        sitename="The Honest Dog"
        sitelink="https://thehonestdog.com/"
      />

      <SingleProject
        img={img6.src}
        overviewText="Designed & Devloped product page"
        sitename="Pupnaps"
        sitelink="https://pupnaps.com/"
      />

      <SingleProject
        img={img7.src}
        overviewText="Homepage, Product page, Bundle page, Cart"
        sitename="Bubpods"
        sitelink="https://bubpods.com.au/"
      />

      <SingleProject
        img={img8.src}
        overviewText="Shop & Bundle page"
        sitename="Theoodie UK"
        sitelink="https://theoodie.co.uk/"
      />

      <SingleProject
        img={img9.src}
        overviewText="Designed & Devloped from scratch"
        sitename="Sleepwelltech"
        sitelink="https://sleepwelltech.co/"
      />

      <SingleProject
        img={img10.src}
        overviewText="Updated previous site with new design"
        sitename="Swissdigital"
        sitelink="https://swissdigital-design.myshopify.com/"
      />

      <SingleProject
        img={img11.src}
        overviewText="Updated previous site with new design"
        sitename="Vexmediagroup"
        sitelink="https://www.vexmediagroup.com/"
      />
    </div>
  );
}
