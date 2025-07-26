import styles from "../css/conferences.module.css"
import conference1 from "../assets/conference_section/conference1.png";
import conference2 from "../assets/conference_section/conference2.png";
import left_arrow from "../assets/conference_section/arrow_left.png";
import right_arrow from "../assets/conference_section/arrow_right.png";
import medic_photo from "../assets/conference_section/medic1.png";
import click_here from "../assets/conference_section/click.png";
import {useState} from "react";

const conferences =[
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
        detalis: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 3,
        image: medic_photo,
        conferenceTitle: "Conference 3",
        medicName: "Dr. Alice Johnson",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        detalis: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]


function Conferences() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? conferences.length - 1 : prevIndex - 1
        );
        setIsFlipped(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === conferences.length - 1 ? 0 : prevIndex + 1
        );
        setIsFlipped(false);
    };

    const currentConference = conferences[currentIndex];

  return (
      <div className={styles.conferences_page}>
          <h2 className={styles.section_title}>CONFERINȚE</h2>

          <div className={styles.image_wrapper1}>
              <img src={conference2} alt="Conference 1"/>
              <div className={styles.green_overlay}></div>
          </div>

          <div className={styles.image_wrapper2}>
              <img src={conference1} alt="Conference 2"/>
              <div className={styles.green_overlay}></div>
          </div>


          <div className={styles.conferences_presentation}>
              {!isFlipped && (<img src={left_arrow} alt="Left" onClick={handlePrev} className={styles.left_arrow}/>)}

              <div className={styles.conference_details}>
                  {!isFlipped ? (
                      <>
                          <h3 className={styles.conference_title}>{currentConference.conferenceTitle}</h3>
                          <div className={styles.medic_info}>
                              <img
                                  src={currentConference.image}
                                  alt={currentConference.conferenceTitle}
                                  className={styles.medic_photo}
                              />
                              <h4 className={styles.medic_name}>{currentConference.medicName}</h4>
                          </div>
                          <p className={styles.description}>{currentConference.description}</p>
                          <button
                              className={styles.more_details}
                              onClick={() => setIsFlipped(true)}
                          >
                              Vezi mai mult
                              <img src={click_here} alt="Arrow" className={styles.click_icon}/>
                          </button>
                      </>
                  ) : (
                      <div className={styles.conference_details_flipped}>
                          <h3 className={styles.conference_info_title}>Detalii suplimentare despre conferință</h3>
                          <p className={styles.description}>
                              {currentConference.detalis}
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

  );
}

export default Conferences;