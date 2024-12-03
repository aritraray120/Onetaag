import { assets } from "../../assets/assets";
import styles from "./Customers.module.css";

function Customers() {
  return (

    <div className={styles.heading}>

      <div className={styles['heading-description']}>

        <h2>Check Out These Customers</h2>
        <p>Companies big and small love digital business cards. We have onboarded over 25,000 teams including international banks, construction <br /> companies, retail, roofing, plumbing, marketing agencies, hospitals and many more.</p>

      </div>


      <div className={styles['img-group']}>
        <img src={assets.arrow_left} alt="" className={styles['arrow-left']} />
        <img src={assets.card} alt="" className={styles.card} />
        <img src={assets.arrow_right} alt="" className={styles['arrow-right']} />
      </div>

      <div className={styles['btn-group']}>
        <button className={styles['btn-1']}>Front/Back</button>
        <button className={styles['btn-2']}>Design my own</button>
      </div>


    </div>

  );
}

export default Customers;

