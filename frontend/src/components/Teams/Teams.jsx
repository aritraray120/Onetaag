import { assets } from "../../assets/assets";
import styles from "./Teams.module.css";

function Teams() {
    return (

        <div className={styles.teams}>

            
            <img src={assets.group_teams} alt="" className={styles['group-teams']} />
            <img src={assets.rectangle_teams} alt="" className={styles['rectangle-teams']}/>
            

            <div className={styles['teams-description']}>

                <h2>For Teams</h2>
                <h2><strong>The #1 Platform for Teams,</strong> <br /> SMBs & Enterprises</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium expedita, ea laudantium voluptatem molestias eius illo corrupti sapiente eos minus, quisquam magnam sit eum quas pariatur quos, iusto itaque veritatis.
                Voluptatem dignissimos molestiae sequi, unde itaque nulla quo quam laborum commodi dolores officiis accusantium incidunt doloremque adipisci. Doloremque ut voluptatum laboriosam facere expedita at. Voluptatem deleniti sint officiis corporis porro.
                Eos vero quod quia optio beatae, voluptatem, doloremque debitis incidunt qui nisi ipsa odio aut molestiae dolor, fugit totam illo veniam exercitationem itaque nesciunt vel. Soluta voluptate at consequuntur deserunt.
                </p>

                <button>Read More</button>
                
            </div>



        </div>

    );
}

export default Teams;