import styles from "../css/meet_the_team.module.css"
import vice1 from "../assets/team_section/person1.png"
import iulia_borsa from "../assets/team_section/iulia_borsa.jpg"
import mircea_one from "../assets/team_section/mircea_one.jpg"
import iulia_perte from "../assets/team_section/iulia_perte.jpg"
import aida_zemko from "../assets/team_section/aida_zemko.jpg"
import aleyna_topal from "../assets/team_section/aleyna_topal.jpg"
import diana_florea from "../assets/team_section/diana_florea.jpg"
import georgiana_sabau from "../assets/team_section/georgiana_sabau.jpg"
import ilinca_filip from "../assets/team_section/ilinca_filip.jpg"
import iulia_orban from "../assets/team_section/iulia_orban.jpg"
import luca_otoiu from "../assets/team_section/luca_otoiu.jpg"
import robert_rengle from "../assets/team_section/robert_rengle.jpg"
import valeria_vrednic from "../assets/team_section/valeria_vrednic.jpg"
import denisa_ciuciu from "../assets/team_section/denisa_ciuciu.jpg"

function MeetTheTeam(){
    return(
        <div className={styles.meet_the_team_section}>
            <div className={styles.header_container}>
                <h2 className={styles.section_title}>MEET THE TEAM</h2>
                <p className={styles.section_descrition}>Fiecare zâmbet, fiecare activitate, fiecare moment de la acest
                    eveniment poartă amprenta unei echipe dedicate. </p>
            </div>
            <div className={styles.team_members}>
                <div className={styles.head_part}>
                    <div className={styles.vice_member}>
                        <img src={iulia_perte} className={styles.vice_photo}/>
                        <h4 className={styles.personFunction}>VICEPRESEDINTE</h4>
                        <h4 className={styles.personName}>Iulia Perțe</h4>
                    </div>
                    <div className={styles.president}>
                        <img src={iulia_borsa} className={styles.president_photo}/>
                        <h4 className={styles.personFunction}>PRESEDINTE</h4>
                        <h4 className={styles.personName}>Iulia Borșa</h4>
                    </div>
                    <div className={styles.vice_member}>
                        <img src={mircea_one} className={styles.vice_photo}/>
                        <h4 className={styles.personFunction}>VICEPRESEDINTE</h4>
                        <h4 className={styles.personName}>Mirecea One</h4>
                    </div>
                </div>

                <div className={styles.volunteers}>
                    <div className={styles.department}>
                        <h4 className={styles.department_name}>SECRETARIAT</h4>
                        <div className={styles.department_members}>
                            <div className={styles.volunteer_member}>
                                <img src={vice1} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Ștefi Turcu</h4>
                            </div>
                            <div className={styles.volunteer_member}>
                                <img src={iulia_orban} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Iulia Orban</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.department}>
                        <h4 className={styles.department_name}>SPONSORIZĂRI</h4>
                        <div className={styles.department_members}>
                            <div className={styles.volunteer_member}>
                                <img src={georgiana_sabau} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Georgiana Sabău</h4>
                            </div>
                            <div className={styles.volunteer_member}>
                                <img src={aida_zemko} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Aida Zemko</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.department}>
                        <h4 className={styles.department_name}>TEHNIC ȘI LOGISTIC</h4>
                        <div className={styles.department_members}>
                            <div className={styles.volunteer_member}>
                                <img src={robert_rengle} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Robert Rengle</h4>
                            </div>
                            <div className={styles.volunteer_member}>
                                <img src={valeria_vrednic} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Valeria Vrednic</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.department}>
                        <h4 className={styles.department_name}>SOCIAL</h4>
                        <div className={styles.department_members}>
                            <div className={styles.volunteer_member}>
                                <img src={diana_florea} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Diana Florea </h4>
                            </div>
                            <div className={styles.volunteer_member}>
                                <img src={vice1} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Lorenzo</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.department}>
                        <h4 className={styles.department_name}>GRAFICĂ ȘI DESIGN</h4>
                        <div className={styles.department_members}>
                            <div className={styles.volunteer_member}>
                                <img src={mircea_one} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Mircea One</h4>
                            </div>
                            <div className={styles.volunteer_member}>
                                <img src={aleyna_topal} className={styles.volunteer_photo}/>
                                <h4 className={styles.personName}>Aleyna Topal</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.volunteers}>
                    <div className={styles.department}>
                            <h4 className={styles.department_name}>RELATII EXTERNE</h4>
                            <div className={styles.department_members}>
                                <div className={styles.volunteer_member}>
                                    <img src={luca_otoiu} className={styles.volunteer_photo}/>
                                    <h4 className={styles.personName}>Luca Oțoiu </h4>
                                </div>
                            </div>
                        </div>
                    <div className={styles.department}>
                            <h4 className={styles.department_name}>WORKSHOP-URI</h4>
                            <div className={styles.department_members}>
                                <div className={styles.volunteer_member}>
                                    <img src={ilinca_filip} className={styles.volunteer_photo}/>
                                    <h4 className={styles.personName}>Inlinca Filip</h4>
                                </div>
                                <div className={styles.volunteer_member}>
                                    <img src={vice1} className={styles.volunteer_photo}/>
                                    <h4 className={styles.personName}>Edi</h4>
                                </div>
                                <div className={styles.volunteer_member}>
                                    <img src={denisa_ciuciu} className={styles.volunteer_photo}/>
                                    <h4 className={styles.personName}>Denisa Ciuciu</h4>
                                </div>
                            </div>
                        </div>
                    <div className={styles.department}>
                            <h4 className={styles.department_name}>PR</h4>
                            <div className={styles.department_members}>
                                <div className={styles.volunteer_member}>
                                    <img src={iulia_perte} className={styles.volunteer_photo}/>
                                    <h4 className={styles.personName}>Iulia Perțe</h4>
                                </div>
                            </div>
                        </div>
                </div>


            </div>
        </div>
    )
}

export default MeetTheTeam