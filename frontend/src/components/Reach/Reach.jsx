import styles from "./Reach.module.css";

function Reach() {
    return (


        <div className={styles.header}>

            <div className={styles['header-contents']}>

                <div className={styles['header-description']}>
                    <h2>Reach Out And Connect</h2>
                    <p>Have something on your mind? Drop us a message and we'll get back <br /> to you as soon as possible </p>
                </div>

                <button>Get in Touch</button>
            </div>

        </div>

    );
}

export default Reach;


