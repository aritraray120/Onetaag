import { assets } from '../../assets/assets';
import styles from './Hero.module.css';

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles['hero-description']}>
                <h2>Digital Business <br /> Cards More Than <br /> Just Cards.</h2>
                <p>Imagine a digital toolset that transforms your business <br /> interactions—where each connection is a step towards greater <br /> visibility and success.</p>
                <div className={styles['btn-group']}>
                    <button>Create Your Free Profile</button>
                    <button className={styles['btn-2']}>For Teams</button>
                </div>
            </div>
            <div className={styles['hero-images']}>
                <img src={assets.hand_card} alt="Hand Card" className={styles['hand-card']} />
                <img src={assets.rectangle_hero} alt="Rectangle Hero" className={styles['rectangle-hero']} />
            </div>
        </div>


    );
}

export default Hero;