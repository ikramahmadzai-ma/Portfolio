import React from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  Business,
  Button,
  Service,
  Clints,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Portfolio,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Portfolio/>
        </div>
      </div>

      <div
        className={`bg-primary ${styles.paddingX} ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
           <Stats /> 
          <Business />  
          <Billing /> 
          <Service /> 
          <Testimonials />{" "}
          <Clints /> 
          <CTA /> 
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
