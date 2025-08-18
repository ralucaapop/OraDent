import styles from "../css/edition1.module.css";
import edition_photo from "../assets/edition1/representative_photo.jpeg";
import blue_left_arrow from "../assets/edition1/b_l_a.png";
import blue_right_arrow from "../assets/edition1/b_r_a.png";
import white_left_arrow from "../assets/edition1/w_l_a.png";
import white_right_arrow from "../assets/edition1/w_r_a.png";
import medic_photo from "../assets/conference_section/medic1.png";
import {useState} from "react";

const conferences =[
    {
        id: 1,
        image: medic_photo,
        conferenceTitle: "Principiile restaurării canalelor radiculare",
        medicName: "Dr. Ştefan Jitaru",
        description: "Dr. Ștefan Jitaru, specialist în endodonție și cadru didactic asociat la UMF Cluj-Napoca, va prezenta la OraDent tema „Principiile restaurării canalelor radiculare”.\n",
    },
    {
        id: 2,
        image: medic_photo,
        conferenceTitle: "Principii de tratament ortodontic la copil, adolescent și adult",
        medicName: "Dr. Ligia Vaida",
        description: "Conferința va aborda tratamentele ortodontice la copii, adolescenți și adulți, evidențiind opțiuni interdisciplinare, abordări personalizate și tehnici pentru rezultate funcționale și stabile.",
    },
    {
        id: 3,
        image: medic_photo,
        conferenceTitle: "Transformă-ți pacienții în brand ambassadori",
        medicName: "Dr. Gabriel Toma",
        description: "Prezentarea va explora cum să transformăm pacienții în „ambasadori de brand” prin loializare și politici eficiente de customer care, stimulând recomandările naturale și creșterea pacienților noi.",
    },
    {
        id: 4,
        image: medic_photo,
        conferenceTitle: "Reabilitarea pacientului parodontopat",
        medicName: "Dr. Horia Câlniceanu",
        description: "Prezentarea va aborda reabilitarea pacienților parodontopati, parcurgând pașii terapeutici și recomandările clinice de la diagnostic până la terapia suportivă personalizată.",
    },
    {
        id: 5,
        image: medic_photo,
        conferenceTitle: "Ghid complet al restaurărilor din litiu disilicat (LiSi)",
        medicName: "Dr. Bogdan Galfi",
        description: "Prezentarea va oferi un ghid complet pentru restaurările din litiu disilicat (LiSi), acoperind alegerea materialului, proprietățile mecanice, prepararea coroanelor, incrustațiilor și fațetelor, precum și protocolul complet de cimentare adezivă.",
    },
    {
        id:6,
        image: medic_photo,
        conferenceTitle: "Managementul tratamentelor endodontice primare cu grad crescut de dificultate",
        medicName: "Dr. Alexandru Gliga",
        description: "Dr. Alexandru Gliga, specialist în endodonție și asistent universitar la UMF “Carol Davila” București, cu multiple premii și burse internaționale, va susține la Congresul OraDent prezentarea „Managementul tratamentelor endodontice primare cu grad crescut de dificultate”.",
    },
    {
        id: 7,
        image: medic_photo,
        conferenceTitle: "Dificultăți și soluții în montarea matricilor sectoriale",
        medicName: "Dr. Marius Bud",
        description: "Prezentarea va evidenția importanța acestora în restaurările directe ale cavităților proximale, pentru a preveni caria marginală și a asigura puncte de contact corecte și rezultate predictibile.",
    },
    {
        id: 8,
        image: medic_photo,
        conferenceTitle: "Tips and tricks to improve our interdisciplinary treatment protocols",
        medicName: "Dr. Petcu Roxana",
        description: "Prezentarea va evidenția importanța colaborării interdisciplinare prin pași clari de tratament și numeroase exemple clinice, subliniind avantajele și limitele diferitelor abordări.",
    },
    {
        id: 9,
        image: medic_photo,
        conferenceTitle: "Etiologia, epidemiologia, caracterele clinice, metode de tratament și reconstrucție în cancerul de cavitate orală în Jud. Bihor",
        medicName: "Dr. Țenț Andrei",
        description: "Dr. Țenț, absolvent al Facultății de Medicină Dentară Oradea și al Facultății de Medicină Cluj-Napoca, se remarcă prin articole de specialitate și participări la conferințe naționale și internaționale în chirurgia orală și maxilo-facială.",
    },
    {
        id: 10,
        image: medic_photo,
        conferenceTitle: "Cum ne apărăm de malpraxis?",
        medicName: "Dr. Liana Todor",
        description: "Prezentarea va evidenția vulnerabilitățile practicii stomatologice și va oferi soluții și recomandări esențiale pentru un act medical sigur, etic și conform reglementărilor legale.",
    },
    {
        id: 11,
        image: medic_photo,
        conferenceTitle: "De la student la medic: ghid, provocări, satisfacții",
        medicName: "Dr. Cristi Nedelcu și Dr. Alin Tanase",
        description: "Prezentarea va ilustra parcursul profesional al celor doi medici, cu experiențe reale, provocări și lecții învățate, de la primele începuturi până la cazuri complexe de succes.",
    },
    {
        id: 12,
        image: medic_photo,
        conferenceTitle: "Tratamentul Protetic Post-Ortodontic",
        medicName: "Dr. Sebastian Fechete",
        description: "Prezentarea explorează conștientizarea crescută a pacienților cu privire la sănătatea orală. Abordează tratamente simple și complexe, adesea asociate cu tratamentele ortodontice, evidențiind eficacitatea acestora în cazul ocluziilor disfuncționale.",
    },
    {
        id: 13,
        image: medic_photo,
        conferenceTitle: "Tehnici de restaurare directă a morfologiei dinților posteriori",
        medicName: "Dr. Anca Kovacs",
        description: "Prezentarea va aborda tratamentul cariei dentare, de la prevenție la restaurări coronare complexe, incluzând protocoale de restaurare directă, tehnici de stratificare, adeziune, precum și finisarea și lustruirea compozitelor.",
    },
    {
        id: 14,
        image: medic_photo,
        conferenceTitle: "Autopercepția în estetica dentară",
        medicName: "Dr. Gabriela Ciavoi",
        description: "În cadrul prezentării se va analiza cum stima de sine influențează tratamentele estetice și oferind soluții pentru alinierea percepției pacientului cu cea a medicului.",
    },
    {
        id: 15,
        image: medic_photo,
        conferenceTitle: "Alternative noi și vechi în abordarea afecțiunilor mucoasei orale",
        medicName: "Dr. Scrobotă Ioana",
        description: "În cadrul acestei prezentări, se atrage atenția asupra faptului că, deși protocoalele terapeutice au evoluat, afecțiunile cavității orale rămân frecvente.",
    },
    {
        id: 16,
        image: medic_photo,
        conferenceTitle: "Stomatologia pediatrică minim-invazivă",
        medicName: "Dr. Abel Moca",
        description: "Prezentarea evidențiază importanța tratamentelor minim invazive în gestionarea cariei dentare, atât la dinții temporari, cât și la cei permanenți.",
    },
    {
        id: 17,
        image: medic_photo,
        conferenceTitle: "Dental implant - a nail in the wall or foundation for a smile",
        medicName: "Dr. Horia Barbu",
        description: "Prof. Univ. Dr. Barbu Horia, specialist în chirurgie dento-alveolară și coordonator la Universitatea Titu Maiorescu, va prezenta la OraDent tema Dental implant – a nail in the wall or foundation for a smile?",
    },{
        id: 18,
        image: medic_photo,
        conferenceTitle: "Distalizarea Molarilor: Metode și Implicații Clinice",
        medicName: "Dr. Bungău Consuela",
        description: "Prezentarea evidențiază această tehnică este eficientă în corectarea înghesuirilor dentare și evitarea extracțiilor în scop ortodontic, abordarea terapeutică fiind realizată pe baza unui protocol de diagnostic precis și personalizat pentru fiecare pacient",
    },
    {
        id: 19,
        image: medic_photo,
        conferenceTitle: "Shape anterior composite veneers",
        medicName: "Dr.Dan Lazar",
        description: "Dr. Dan Lazar, fondator al Clinicii LAZAR, este lector în fotografia dentară, restaurări estetice din compozit și protetică, punând accent pe restaurări durabile, estetice și finisaje perfecte.",
    },

]

const workshops =[
    {
        id: 1,
        image: medic_photo,
        workshopTitle: "Reciproc Blue în tratamentul endodontic primar",
        medicName: "Dr. Alexandru Gliga",
        description: "Workshop-ul va permite exersarea preparării mecanice în mișcare de reciprocitate pe blocuri de plastic sau dinți extrași și va prezenta algoritmii și principiile tratamentului endodontic de la diagnostic la follow-up.",
    },
    {
        id: 2,
        image: medic_photo,
        workshopTitle: "Tendințe și opțiuni actuale în implantologie– încărcarea imediată",
        medicName: "Dr. Tudor Coroș",
        description: "Workshop-ul va prezenta noutăți în inserarea implanturilor și încărcarea imediată, incluzând exerciții practice și trucuri pentru o operație de succes.",
    },
    {
        id: 3,
        image: medic_photo,
        workshopTitle: "Basic Life Support",
        medicName: "Caravana cu Medici Bihor",
        description: "Caravana cu Medici Bihor oferă consultații în zone defavorizate și instruiește comunitățile în manevrele de resuscitare, promovând conștientizarea și pregătirea pentru salvarea vieților.",
    },
    {
        id: 4,
        image: medic_photo,
        workshopTitle: "Utilizarea tehnicii Themocure în Pedodonție",
        medicName: "Dr. Abel Moca",
        description: "Workshop-ul va prezenta beneficiile și modul de utilizare al materialului Equia Forte, oferind participanților șansa de a realiza o obturație prin tehnica Thermocure.",
    },
    {
        id: 5,
        image: medic_photo,
        workshopTitle: "Skills in Oral Surgery",
        medicName: "Dr. Țenț Andrei",
        description: "Workshop-ul le oferă studenților șansa de a-și dezvolta abilități practice în chirurgie orală, incluzând extracții dentare, lambouri și suturi, alături de noțiunile teoretice necesare.",
    },
    {
        id: 6,
        image: medic_photo,
        workshopTitle: "Amprenta pe implanturi",
        medicName: "Dr. Ștefania Iancu",
        description: "În cadrul workshop-ului se va discuta despre:protocolul amprentării în lingura deschisă, tipuri de bonturi protetice și alegerea bontului protetic în funcție de caz, hints and tips pentru cazuri clinice particulare.",
    },
    {
        id: 7,
        image: medic_photo,
        workshopTitle: "Fixarea adezivă a restaurărilor integral ceramice",
        medicName: "Dr. Sebastian Fechete",
        description: "În cadrul workshop-ului se va discuta despre: substratul la care se face fixarea, cimenturile cu care se face fixarea, adeziunea și clasele de adezivi folosiți in fixare, armamentarium fixare, protocolul de fixare pas cu pas.",
    },
    {
        id: 8,
        image: medic_photo,
        workshopTitle: "Terapia Ghidată a Biofilmului",
        medicName: "Dr. Gabriel Toma",
        description: "Workshop-ul va prezenta conceptul GBT și echipamentele dedicate, iar participanții vor aplica practic protocolul cu Master Prophylaxis și dispozitivele AIRFLOW, PERIOFLOW și PIEZON, exersând curățarea și prevenția afecțiunilor parodontale și periimplantare.",
    },
    {
        id: 9,
        image: medic_photo,
        workshopTitle: "Tehnici de restaurare directă a morfologiei dinților posteriori",
        medicName: "Dr. Anca Kovacs",
        description: "Workshop-ul oferă participanților ocazia de a învăța și exersa restaurări directe cu rășini compozite pe modele ce simulează cazuri clinice reale, pentru a perfecționa tratamentele dinților posteriori.",
    },
    {
        id: 10,
        image: medic_photo,
        workshopTitle: "Individually trained oral prophylaxis",
        medicName: "Dr. Camelia Roman",
        description: "Workshop-ul prezintă cele mai noi concepte iTOP privind igiena orală, oferind informații practice despre prevenția cariilor și a afecțiunilor parodontale, pentru viitorii medici stomatologi și populație.",
    },
    {
        id: 11,
        image: medic_photo,
        workshopTitle: "Laserul Diodă în Stomatologia Modernă",
        medicName: "Dr. Mihaela Moisa",
        description: "Workshop-ul prezintă utilizarea laserului diodă pentru țesuturile moi, inclusiv activarea fibrei optice, și explorează beneficiile aplicării sale în diferite domenii stomatologice pentru pacienți și medici.",
    },
    {
        id: 12,
        image: medic_photo,
        workshopTitle: "My first implant",
        medicName: "Dr. Horia Barbu",
        description: "Workshop-ul va aborda pe scurt: analiza situs-ului și planificarea poziției implantului, alegerea dimensiunilor implantului, utilizarea trusei chirurgicale, prevenirea complicațiilor, componentele protetice și realizarea amprentei clasice cu lingura deschisă.",
    },
    {
        id: 13,
        image: medic_photo,
        workshopTitle: "Restaurarea predictibilă și anatomică a punctului de contact în cls 2 cu Palodent V3 și 360 - Dr. Diana Chifăr",
        medicName: "Dr. Diana Chifăr",
        description: "Acest workshop se concentrează pe învățarea tehnicilor de utilizare a celor două sisteme de matrici, Palodent V3 și Palodent 360. Inițial, se vor explora aspectele teoretice și se va prezenta sistemul, urmate de sesiuni practice hands-on.",
    }
]

const photodump=[medic_photo, edition_photo]


function Edition1() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? conferences.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === conferences.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentConference = conferences[currentIndex];

    const [currentIndexWs, setCurrentIndexWs] = useState(0);
    const handlePrevWs = () => {
        setCurrentIndexWs((prevIndexWs) =>
            prevIndexWs === 0 ? workshops.length - 1 : prevIndexWs - 1
        );
    };

    const handleNextWs = () => {
        setCurrentIndexWs((prevIndexWs) =>
            prevIndexWs === workshops.length - 1 ? 0 : prevIndexWs + 1
        );
    };

    const currentWorkshop = workshops[currentIndexWs];


    const [currentIndexPd, setCurrentIndexPd] = useState(0);
    const handlePrevPd = () => {
        setCurrentIndexPd((prevIndexPd) =>
            prevIndexPd === 0 ? photodump.length - 1 : prevIndexPd - 1
        );
    };

    const handleNextPd = () => {
        setCurrentIndexPd((prevIndexPd) =>
            prevIndexPd === photodump.length - 1 ? 0 : prevIndexPd + 1
        );
    };

    const currentPhoto = photodump[currentIndexPd];

    return (
        <div className={styles.edition1_section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Oradent Congress</h2>
                <div className={styles.edition_subtitle}>
                    <hr className={styles.horizontal_line}/>
                    <h3 className={styles.presents}>presents</h3>
                    <hr className={styles.horizontal_line}/>
                </div>
                <h2 className={styles.edition_number}>EDIȚIA I</h2>
            </div>
            <div className={styles.edition_photo_div}>
                <img src={edition_photo} className={styles.edition_photo}/>
                <p className={styles.edition_description}>Prima ediție a creat momente speciale pentru toți <br/>
                    De la inovații în tratamente dentare, la conexiuni valoroase cu colegii, fiecare moment a contat
                </p>
            </div>


            <div className={styles.events_section}>
                <div className={styles.conferences}>
                    <h3 className={styles.conference_header}>Conferințe</h3>
                    <div className={styles.conference_details}>
                        <h3 className={styles.conference_title}>{currentConference.conferenceTitle}</h3>

                        <div className={styles.conference_navigation}>
                            <img src={white_left_arrow} alt="Left" onClick={handlePrev} className={styles.left_arrow}/>
                            <img
                                src={currentConference.image}
                                alt={currentConference.conferenceTitle}
                                className={styles.medic_photo}
                            />
                            <img src={white_right_arrow} alt="Right" onClick={handleNext} className={styles.right_arrow}/>
                        </div>
                        <h4 className={styles.medic_name}>{currentConference.medicName}</h4>
                        <p className={styles.description}>{currentConference.description}</p>

                    </div>
                </div>

                <div className={styles.workshops}>
                    <h3 className={styles.workshop_header}>Workshops</h3>
                    <div className={styles.workshop_details}>
                        <h3 className={styles.workshop_title}>{currentWorkshop.workshopTitle}</h3>

                        <div className={styles.workshop_navigation}>
                            <img src={white_left_arrow} alt="Left" onClick={handlePrevWs} className={styles.left_arrow}/>
                            <img
                                src={currentWorkshop.image}
                                alt={currentWorkshop.conferenceTitle}
                                className={styles.medic_photo}
                            />
                            <img src={white_right_arrow} alt="Right" onClick={handleNextWs}
                                 className={styles.right_arrow}/>
                        </div>
                        <h4 className={styles.medic_name}>{currentWorkshop.medicName}</h4>
                        <p className={styles.description}>{currentWorkshop.description}</p>

                    </div>
                </div>
            </div>

            <div className={styles.photo_dump}>
                <h3 className={styles.photo_dump_title}>photo dump</h3>
                <div className={styles.photo_dump_navigation}>
                    <img src={blue_left_arrow} alt="Left" onClick={handlePrevPd} className={styles.left_arrow}/>
                    <img src={currentPhoto} className={styles.photo_style} />
                    <img src={blue_right_arrow} alt="Right" onClick={handleNextPd}
                         className={styles.right_arrow}/>

                </div>
            </div>
        </div>
    );
}

export default Edition1;