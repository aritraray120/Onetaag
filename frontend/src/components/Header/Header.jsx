import styles from "./Header.module.css";
import { assets } from '../../assets/assets';

function Header() {

    return (

        <div className={styles.navbar}>

            <img src={assets.onetaag_logo} alt="" className={styles.logo} />


            <ul className={styles['navbar-menu']}>
                <a href='#'>Home</a>
                <a href='#'>For Team</a>
                <a href='#'>Features</a>
                <a href='#'>Why Us</a>
                <a href='#'>Share</a>
                <a href='#'>FAQ</a>
                <a href='#'>Testimonials</a>
            </ul>



            <div className={styles['navbar-right']}>
                <button className={styles['login-btn']}>Login</button>
                <button className={styles['teams-btn']}>Onetaag For Teams</button>
            </div>

        </div>

    );
}

export default Header;

