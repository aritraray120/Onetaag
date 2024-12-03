import { assets } from "../../assets/assets";
import styles from "./Works.module.css";

function Works() {
    return (
        <div className={styles['work-display']}>
            <div className={styles.heading}>
                <h2>
                    Understanding the Mechanics <br />
                    <strong>How It Works</strong>
                </h2>
                <button>Read More</button>
            </div>

            <div className={styles['work-container']}>
                <div className={styles['step-01']}>
                    <h2>Step 01</h2>
                    <img src={assets.order} alt="Order" />
                    <p>Order</p>
                    <p className={styles['step-description']}>
                        Select a card and add-ons. Complete the order process and payment.
                    </p>
                </div>

                <div className={styles['step-02']}>
                    <h2>Step 02</h2>
                    <img src={assets.design} alt="Design" />
                    <p>Design</p>
                    <p className={styles['step-description']}>
                        Provide design input and upload your logo through the design portal.
                    </p>
                </div>

                <div className={styles['step-03']}>
                    <h2>Step 03</h2>
                    <img src={assets.review} alt="Review" />
                    <p>Review</p>
                    <p className={styles['step-description']}>
                        Review the digital design proof and provide feedback.
                    </p>
                </div>

                <div className={styles['step-04']}>
                    <h2>Step 04</h2>
                    <img src={assets.ship} alt="Print & Ship" />
                    <p>Print & Ship</p>
                    <p className={styles['step-description']}>
                        After approval we will program, produce and ship your card.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Works;
