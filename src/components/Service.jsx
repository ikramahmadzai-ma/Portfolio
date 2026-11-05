import { useState } from "react";

import styles, { layout } from "../style";

import { services } from "../constants";

import Service_Card from "./Service_Card";

const CardDeal = () => {

  const [activeItem, setactiveItem] = useState(0);

  return (

 <section id="clients" className={`${layout.section} testimonials`}>

  <div className={layout.sectionInfo}>

    <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
      Provided <span className="text-gradient mx-4">Services</span>
    </h2>

    <div>

      {services.map((items, index) => (

        <div
          key={items.id}
          onClick={() => setactiveItem(index)}
          className={`${
            activeItem === index
              ? "active text-gradient"
              : "menu"
          }`}
        >

          {items.title}

        </div>

      ))}

    </div>

  </div>

  {/* RIGHT SIDE */}
  <Service_Card
    services={services}
    activeItem={activeItem}
  />

</section>

  );
};

export default CardDeal;