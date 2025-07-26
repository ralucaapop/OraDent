import styles from "../css/Home.module.css";
import logo from "../assets/logo.png";
import SecondScreen from "../components/SecondScreen.jsx";
import EventHistory from "../components/EventHistory.jsx";
import Conferences from "../components/Conferences.jsx";
import Workshops from "../components/Workshops.jsx";
import MeetTheTeam from "../components/MeetTheTeam.jsx";
import Conferences_Program from "../components/Conferences_Program.jsx";


function Home(){

    return(
        <div>
        <div className={styles.home_container}>
            <img src={logo} alt="Oradent Logo" className={styles.logo} />

            <h1 className={styles.oradent_title}>ORADENT</h1>

            <div className={styles.subtitle_container}>
                <hr className={styles.horizontal_line}/>
                <h2 className={styles.congress_subtitle}>CONGRESS</h2>
                <hr className={styles.horizontal_line}/>
            </div>

            <div className={styles.event_time}>
                <p className={styles.event_time_text}>EDIȚIA A-III-A</p>
                <p className={styles.event_time_text}>27 OCT. - 1 NOV.</p>
            </div>

            <button className={styles.buy_ticket_button}> Bilete disponibile curând </button>

            <div className={styles.buildings_image}></div>
        </div>
            <SecondScreen/>
            <EventHistory/>
            <Conferences/>
            <Workshops/>
            <Conferences_Program/>
            <MeetTheTeam/>
        </div>
    )
}

export default Home;