import styles from "../css/workshops.module.css"
import workshop1 from "../assets/conference_section/workshop1.png";
import workshop2 from "../assets/conference_section/workshop2.png";
import left_arrow from "../assets/conference_section/white_arrow_left.png";
import right_arrow from "../assets/conference_section/white_arrow_right.png";
import medic_photo from "../assets/conference_section/medic1.png";
import {useState} from "react";
import click_here from "../assets/conference_section/click.png";
function Workshops (){

    const workshops =[
        {
            id: 1,
            image: medic_photo,
            conferenceTitle: "Implantele in zona estetica, echilibrul înre alb si roz",
            medicName: "Dr. John Doe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            detalis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        },
        {
            id: 2,
            image: medic_photo,
            conferenceTitle: "Conference 2",
            medicName: "Dr. Jane Smith",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            detalis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 3,
            image: medic_photo,
            conferenceTitle: "Conference 3",
            medicName: "Dr. Alice Johnson",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            detalis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? workshops.length - 1 : prevIndex - 1
        );
        setIsFlipped(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === workshops.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipped(false);
    };

    const currentWorkshop = workshops[currentIndex];
    return(
        <div className={styles.workshops_section}>
            <h2 className={styles.section_title}>WORKSHOPS</h2>

            <div className={styles.image_wrapper1}>
                <img src={workshop2} alt="Workshop 1"/>
                <div className={styles.green_overlay}></div>
            </div>

            <div className={styles.image_wrapper2}>
                <img src={workshop1} alt="Workshop 2"/>
                <div className={styles.green_overlay}></div>
            </div>


            <div className={styles.workshops_presentation}>
                {!isFlipped && (<img src={left_arrow} alt="Left" onClick={handlePrev} className={styles.left_arrow}/>)}

                <div className={styles.workshops_details}>
                    {!isFlipped ? (
                            <>
                    <h3 className={styles.workshops_title}>{currentWorkshop.conferenceTitle}</h3>
                    <div className={styles.medic_info}>
                        <img
                            src={currentWorkshop.image}
                            alt={currentWorkshop.conferenceTitle}
                            className={styles.medic_photo}
                        />
                        <h4 className={styles.medic_name}>{currentWorkshop.medicName}</h4>
                    </div>
                    <p className={styles.description}>{currentWorkshop.description}</p>
                    <button onClick={() => setIsFlipped(true)} className={styles.more_details}>Vezi mai mult
                        <img src={click_here} alt="Arrow" className={styles.click_icon}/>
                    </button>
                            </>
                    ) :  (
                        <div className={styles.workshop_details_flipped}>
                            <h3 className={styles.workshop_info_title}>Detalii suplimentare despre workshop</h3>
                            <p className={styles.description}>
                                {currentWorkshop.detalis}
                            </p>
                            <button
                                className={styles.more_details}
                                onClick={() => setIsFlipped(false)}
                            >
                                Înapoi
                            </button>
                        </div>
                    )}
                </div>

                {!isFlipped && (<img src={right_arrow} alt="Right" onClick={handleNext} className={styles.right_arrow}/>)}
            </div>
        </div>
    )
};

export default Workshops;