import { assets } from "../../assets/assets";
import styles from "./Footer.module.css";

function Footer() {
    return ( 

        <div className={styles.footer}>

        <div className={styles['footer-content']}>

            <div className={styles['footer-content-left']}>
                <img src={assets.onetaag_logo_footer} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut doloremque incidunt eaque ipsa autem reiciendis mollitia perspiciatis fugiat fuga.</p>
                <div className={styles['footer-social-icons']}>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.telegram_icon} alt="" />
                </div>

            </div>

            <div className={styles['footer-content-center']}>
                <h2>Quick Nav</h2>
                <ul>
                    <li>About Us</li>
                    <li>Features</li>
                    <li>Why Us</li>
                    <li>Testimonials</li>
                </ul>
                
            </div>


            <div className={styles['footer-content-right']}>

                <h2>Solution</h2>
                <ul>
                    <li>918 Abner Road, Hudson</li>
                    <li>example@mail.com</li>
                    <li>+1234 567 890</li>
                    <li>07.00 AM - 23.00 PM</li>
                </ul>

            </div>

            

        </div>

        <hr />
        <p className={styles['footer-copyright']}>
            Copyright 2024 ©️ Onetaag - All Rights Reserved. | Terms And Conditions | Privacy Policy
        </p>



    </div> 

     );
}

export default Footer;