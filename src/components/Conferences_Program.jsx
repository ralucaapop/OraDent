import styles from "../css/conferences_program.module.css";
import firstTitle from "../assets/conferences_program/first_title.jpg";
import secondTitle from "../assets/conferences_program/second_title.jpg"
import {useState} from "react";
import time_icon from "../assets/conferences_program/time_icon.png";
import time_icon_black from "../assets/conferences_program/time_icon_black.png";
import lunch_time from "../assets/conferences_program/lunch.png";
import coffe_break from "../assets/conferences_program/coffee-break.png";


function Conferences_Program(){

    const [active_day, setActiveDay] = useState(0);

    return(
        <div className={styles.program_section}>
            <div className={styles.header_container}>
                <div className={styles.header_title}>
                    <div className={styles.title_container}>
                        <h2 className={styles.section_title}>PROGRAMUL</h2>
                        <img className={styles.title_img1} src={firstTitle}/>
                    </div>
                    <div className={styles.title_container}>
                        <img className={styles.title_img2} src={secondTitle}/>
                        <h2 className={styles.section_title2}>CONFERINȚELOR</h2>
                    </div>
                </div>
                <div className={styles.days}>
                    <h4 className={active_day === 0 ? styles.day_active : styles.day} onClick={() => setActiveDay(0)}>
                        JOI
                    </h4>
                    <h4 className={active_day === 1 ? styles.day_active : styles.day} onClick={() => setActiveDay(1)}>
                        VINERI
                    </h4>
                    <h4 className={active_day === 2 ? styles.day_active : styles.day} onClick={() => setActiveDay(2)}>
                        SÂMBĂTĂ
                    </h4>
                </div>
                {active_day === 0 && (
                    <>
                        <div className={styles.description}>
                            <p className={styles.description_text}>
                                Ceremonia de deschidere <br/> ORADENT CONGRESS
                            </p>
                            <h3 className={styles.time}>9:00 - 9:30</h3>
                        </div>
                        <div className={styles.conference}>
                            <div className={styles.conference_details}>
                                <p className={styles.conference_title}>CALEA CORECTĂ CĂTRE UN ENDO DE SUCCES</p>
                                <h4 className={styles.doctor_name}>Dr. Radu Borlan</h4>
                            </div>
                            <div className={styles.conference_time}>
                                <img src={time_icon} alt={'Time'} className={styles.time_logo}/>
                                <h3 className={styles.time1}>9:30 - 10:30</h3>
                            </div>
                        </div>

                        <div className={styles.two_conferences}>
                            <div className={styles.conference1}>
                                <p className={styles.conference_title}>CALEA CORECTĂ CĂTRE UN ENDO DE SUCCES</p>
                                <h4 className={styles.doctor_name}>Dr. Radu Borlan</h4>
                                <div className={styles.conference_time1}>
                                    <img src={time_icon_black} alt={'Time'} className={styles.time_logo1}/>
                                    <h3 className={styles.time2}>9:30 - 10:30</h3>
                                </div>
                            </div>
                            <div className={styles.conference1}>
                            <p className={styles.conference_title}>CALEA CORECTĂ CĂTRE UN ENDO DE SUCCES</p>
                            <h4 className={styles.doctor_name}>Dr. Radu Borlan</h4>
                            <div className={styles.conference_time1}>
                                <img src={time_icon_black} alt={'Time'} className={styles.time_logo1}/>
                                <h3 className={styles.time2}>9:30 - 10:30</h3>
                            </div>
                        </div>
                        </div>

                        <div className={styles.lunch_time}>
                            <h4 className={styles.lunch_title}>LUNCH TIME</h4>
                            <img src={lunch_time} className={styles.lunch_time_logo}/>
                            <h4 className={styles.lunch_clock}>12:00-13:00</h4>
                        </div>

                        <div className={styles.lunch_time}>
                            <h4 className={styles.lunch_title}>COFFE BREAK</h4>
                            <img src={coffe_break} className={styles.lunch_time_logo}/>
                            <h4 className={styles.lunch_clock}>16:00-16:30</h4>
                        </div>
                    </>
                )}
                {active_day == 1 && (
                    <div>

                    </div>)
                }
                {active_day == 2 && (
                    <div>

                    </div>)
                }
            </div>
        </div>
    );

}

export default Conferences_Program;