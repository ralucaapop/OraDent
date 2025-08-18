import styles from "../css/Home.module.css";
import logo from "../assets/logo.png";
import SecondScreen from "../components/SecondScreen.jsx";
import EventHistory from "../components/EventHistory.jsx";
import Conferences from "../components/Conferences.jsx";
import Workshops from "../components/Workshops.jsx";
import MeetTheTeam from "../components/MeetTheTeam.jsx";
import Conferences_Program from "../components/Conferences_Program.jsx";
import Sponsors from "../components/Sponsors.jsx";
import Contact from "../components/Contact.jsx";
import Edition1 from "../components/Edition1.jsx";
import Edition2 from "../components/Edition2.jsx";
import NavBar from "../components/NavBar.jsx";


function Home(){

    return(
        <div>
            <NavBar/>
        <div id="home" className={styles.home_container}>
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
            <div id="current_event">
                <SecondScreen/>
            </div>
            <div id="past_editions">
                <EventHistory />
            </div>
            <div id="current_conferences">
                <Conferences/>
            </div>
            <div id="current_workshops">
                <Workshops />
            </div>
            <div id="program">
                <Conferences_Program />
            </div>
            <div id="team">
                <MeetTheTeam/>
            </div>
            <div id="edition1">
                <Edition1/>
            </div>
            <div id="edition2">
                <Edition2/>
            </div>
           <div id="sponsors">
               <Sponsors/>
           </div>
          <div id="contact">
              <Contact/>
          </div>

        </div>
    )
}

export default Home;