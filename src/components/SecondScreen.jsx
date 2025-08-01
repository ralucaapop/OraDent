import styles from '../css/second_screen.module.css';
import surprise from '../assets/surprise.png';
import workshop from '../assets/workshop.png';
import conference from '../assets/conference.png';
function SecondScreen(){
    return(
        <div className={styles.second_screen_container}>

            <div className={styles.second_screen_header}>
                <h2 className={styles.second_screen_title}>UITE CE TE AȘTEAPTĂ LA ACEASTĂ EDIȚIE</h2>
            </div>

            <div className={styles.second_screen_content}>
                <hr className={styles.horizontal_line}/>
                <div className={styles.conference_section}>
                    <img src={conference} className={styles.conference_img}/>
                    <h3 className={styles.subtitles}>Conferințe</h3>
                    <p className={styles.section_text}>Specialiști de renume vor împărtăși cele mai noi tendințe,
                        cercetări și soluții din medicina dentară</p>
                </div>
                <hr className={styles.horizontal_line}/>
                <div className={styles.workshop_section}>
                    <img src={workshop} className={styles.workshop_img}/>
                    <h3 className={styles.subtitles}>Workshop-uri</h3>
                    <p className={styles.section_text}>Ateliere interactive cu teme variate, o experiență practică,
                        alături de traineri dedicați și colegi pasionați.</p>
                </div>
                <hr className={styles.horizontal_line}/>
                <div className={styles.surprise_section}>
                    <img src={surprise} className={styles.surprise_img}/>
                    <h3 className={styles.subtitles}>Surprize</h3>
                    <p className={styles.section_text}>Tombole și momente speciale - adăugăm un strop de surpriză
                        fiecărei zile împreună cu partenerii noștri</p>
                </div>
            </div>

        </div>
    )
}

export default SecondScreen;