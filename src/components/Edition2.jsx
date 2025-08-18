import styles from "../css/edition2.module.css";
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
        conferenceTitle: "Detatrajul ",
        medicName: "Dr. Dorin Patroc",
        description: "Pe parcursul prezentării, va fi subliniat rolul crucial al detartrajului, nu doar în menținerea sănătății orale, dar și ca prim pas fundamental pentru succesul tratamentului ulterior.",
    },
    {
        id: 2,
        image: medic_photo,
        conferenceTitle: "Planificare inversă în estetica dentară: de la proiectul digital, la zâmbetul final",
        medicName: "Dr. Eduard Duda",
        description: "Această prezentare va oferi o perspectivă asupra utilizării tehnologiilor digitale în estetica dentară, punând accent pe importanța planificării precise și a colaborării interdisciplinare.",
    },
    {
        id: 3,
        image: medic_photo,
        conferenceTitle: "Implantologia orală simplificată și predictibilă",
        medicName: "Dr. Robert Tuce",
        description: "Această prezentare oferă o perspectivă practică asupra utilizării implanturilor hibride, demonstrând cum acestea pot evita regenerările tisulare multiple, gestiona remodelarea osoasă și preveni perimplantita.",
    },
    {
        id: 4,
        image: medic_photo,
        conferenceTitle: "Implantele în zona estetică",
        medicName: "Dr. Costin Timofte",
        description: "Participanții vor avea ocazia să înțeleagă provocările și soluțiile pentru planificarea eficientă a tratamentului cu implanturi în zona estetică, pentru a obține rezultate naturale și armonioase."},
    {
        id: 5,
        image: medic_photo,
        conferenceTitle: "Tratamentul cariei dentare pentru cei pasionați de arta restaurării directe",
        medicName: "Dr. Anca Kovacs",
        description: "Această prezentare va explora în detaliu cum poate fi restaurată morfologia naturală a dinților afectați, oferind soluții terapeutice mai puțin invazive, cum ar fi utilizarea rășinilor compozite."},
    {
        id: 6,
        image: medic_photo,
        conferenceTitle: "Atrofia osoasă severă",
        medicName: "Prof. Univ. Dr. Mihai Juncar",
        description: "Această prezentare va explora metode moderne de reconstrucție osoasă, inclusiv augmentarea subantrală și reconstrucțiile extinse cu grefe osoase, dar și utilizarea implanturilor speciale, cum ar fi cele zigomatice" },
    {
        id: 7,
        image: medic_photo,
        conferenceTitle: "Managementul Urgențelor în Medicina Dentară",
        medicName: "Dr. Raluca Cristina Iurcov",
        description: "Participanții vor avea ocazia să afle mai multe despre tehnicile de urgență și modul în care acestea pot transforma rezultatele tratamentelor dentare."},
    {
        id: 8,
        image: medic_photo,
        conferenceTitle: "Cariile, traumatismele și anomaliile dento-maxilare",
        medicName: "Dr. Abel Moca",
        description: "Prezentarea va explora impactul prevenției și al intervențiilor comunitare asupra sănătății orale, oferind exemple concrete din experiența sa profesională. "},
    {
        id: 9,
        image: medic_photo,
        conferenceTitle: "Case review. De la eroare la experiență",
        medicName: "Dr. Alin Gabor",
        description: "Această prezentare îți va arăta cum erorile din tratamentele stomatologice se pot transforma în lecții valoroase, ce duc la rezultate mai sigure și de succes."},
    {
        id: 10,
        image: medic_photo,
        conferenceTitle: "Ameliorarea dezechilibrelor scheletice asociate anomaliilor dento-maxilare",
        medicName: "Prof. Univ. Dr. Ligia Vaida",
        description: "Dr. Vaida va prezenta soluții interdisciplinare moderne pentru corectarea dezechilibrelor scheletice, cu accent pe estetică dento-facială și funcționalitate optimă."},
    {
        id: 11,
        image: medic_photo,
        conferenceTitle: "Managementul ageneziei incisivilor laterali în era digitală",
        medicName: "Dr. Ioan “Johnny” Barbur",
        description: "Prezentarea va conține abordarea ageneziei incisivilor laterali, soluții interdisciplinare între ortodont, chirurg și protetician, utilizarea tehnologiilor digitale pentru tratamente precise și estetice."},
    {
        id: 12,
        image: medic_photo,
        conferenceTitle: "How NOT to break a file",
        medicName: "Dr. Vlad Lup",
        description: "Conferința va aborda prevenirea separării instrumentelor în endodonție, explicând cauzele și măsurile practice pentru a reduce riscul accidentelor, potrivită atât pentru practicieni experimentați, cât și pentru cei începători."},
    {
        id: 13,
        image: medic_photo,
        conferenceTitle: "Abordarea pacientului dificil",
        medicName: "Dr. Gabriela Ciavoi",
        description: "Prezentarea va aborda gestionarea pacienților dificili, oferind soluții practice pentru îmbunătățirea relației medic-pacient și integrarea aspectelor psihologice și clinice în tratamente."},
    {
        id: 14,
        image: medic_photo,
        conferenceTitle: "Posibilități și limite ale chirurgiei parodontale",
        medicName: "Prof. Dr. Ionuț Luchian",
        description: "Dr. Luchian este un expert internațional în parodontologie, cunoscut pentru inovații în diagnostic și tratament și pentru prezentările sale la congrese internaționale."},

    {
        id: 15,
        image: medic_photo,
        conferenceTitle: "Tratamentul tumorilor de glandă parotid",
        medicName: "Dr. Țenț Andrei",
        description: "Dr. Țenț, Medic Primar în Chirurgie Orală și Maxilo-Facială, este recunoscut internațional pentru contribuțiile sale și participările la conferințe și publicații de specialitate."},

    {
        id: 16,
        image: medic_photo,
        conferenceTitle: "Supraprotezarea cu sprijin dentar",
        medicName: "Conf. Univ. Dr. Liana Todor  ",
        description: "Conferința va prezenta metoda de supraprotezare pentru edentație parțială, asigurând stabilitate, retenție și păstrarea osului pentru implanturi viitoare."},

    {
        id: 17,
        image: medic_photo,
        conferenceTitle: "Estetică/Funcție",
        medicName: "Dr. Alex Rugină",
        description: "În cadrul conferinței sale, va împărtăși soluții practice și totodată simplificate, pentru a transforma conceptele complexe în rezultate aplicabile zilnic."}



]

const workshops =[
    {
        id: 1,
        image: medic_photo,
        workshopTitle: "Scanarea interorala",
        medicName: "Dr. Teofana Bota",
        description: "Un workshop interactiv despre amprentarea digitală și tehnologia CAD/CAM, unde teoria se îmbină cu practica pentru a evidenția avantajele noilor metode.",
    },
    {
        id: 2,
        image: medic_photo,
        workshopTitle: "Skills in Oral Surgery",
        medicName: "Dr. Țenț Andrei",
        description: "În cadrul acestui curs, se vor prezenta atât noțiuni teoretice, cât și practice, iar participanții vor avea oportunitatea de a realiza extracții dentare, lambouri și suturi, pe mandibule de bovină.",
    },
    {
        id: 3,
        image: medic_photo,
        workshopTitle: "Reabilitarea dinților temporari frontali cu ajutorul capelor de celuloid",
        medicName: "Dr. Abel Moca",
        description: "Workshop-ul va prezenta utilizarea unei metode durabile pentru restaurarea dinților primari afectați de carii extinse sau probleme structurale.",
    },
    {
        id: 4,
        image: medic_photo,
        workshopTitle: "My First Implant",
        medicName: "Dr. Mihai Juncar",
        description: "Workshop-ul te va învăța pașii esențiali pentru planificarea și inserarea implantului dentar, de la analiza situs-ului până la prevenirea complicațiilor.",
    },
    {
        id: 5,
        image: medic_photo,
        workshopTitle: "Rolul Irigatorului Bucal în Igiena și Prevenția Dentară",
        medicName: "Dr. Eduard Duda",
        description: "Se va discuta despre felul în care acest instrument revoluționar transformă ritualul de îngrijire, devenind un element esențial în rutina zilnică.",
    },
    {
        id: 6,
        image: medic_photo,
        workshopTitle: "Wave one gold- sistem de ace în mișcare reciprocativă pentru tratamentul de canal",
        medicName: "Sebastian Neatu",
        description: "Workshop-ul te va învăța utilizarea sistemului de ace Wave One Gold, teoretic și practic, pe blocuri de plastic cu endomotorul X Smart Plus.",
    },
    {
        id: 7,
        image: medic_photo,
        workshopTitle: "Restaurarea directă a dinților postoperatorii",
        medicName: "Dr. Florentina Bolborici",
        description: "În acest workshop vei explora două tehnici de restaurare directă – “Stamp Technique”, pentru o reproducere fidelă și rapidă a dintelui natural, și “Cusp by Cusp”, pentru o anatomie detaliată obținută prin modelare progresivă.",
    },  {
        id: 8,
        image: medic_photo,
        workshopTitle: "Cum poti devenii un medic antreprenor de succes?",
        medicName: "BT - Divizia pentru medici",
        description: "Participă la acest workshop pentru a învăța cum colaborarea cu BT poate face diferența în gestionarea eficientă a resurselor tale și în creșterea clinicii tale, oferindu-ți un sprijin dedicat și flexibil.",
    },
    {
        id: 9,
        image: medic_photo,
        workshopTitle: "Inițiere în inserarea implanturilor",
        medicName: "Alexandru Moldovan",
        description: "În acest workshop vei învăța bazele inserării implanturilor dentare conform protocolului corect și vei descoperi opțiuni protetice premium, menite să ofere soluții sigure și eficiente.",
    },
    {
        id: 10,
        image: medic_photo,
        workshopTitle: "Tratament minim invaziv- tehnica ICON",
        medicName: "Dr. Consuela Bungău",
        description: "Acest atelier va oferi participanților o perspectivă atât teoretică, cât și practică asupra acestei metode minim-invazive, ce restabilește aspectul natural al dinților, fără intervenții complexe.",
    },{
        id: 11,
        image: medic_photo,
        workshopTitle: "Protaper Next – sistem de ace în mișcare rotativă pentru tratament de canal",
        medicName: "Alexandru Moldovan",
        description: "În acest workshop vei învăța utilizarea sistemului de ace Protaper Next în mișcare rotativă, prin noțiuni teoretice și aplicare practică pe blocuri de plastic cu endomotorul X Smart Plus.",
    },
    {
        id: 12,
        image: medic_photo,
        workshopTitle: "Preparații fațete",
        medicName: "Dr. Alex Rugină",
        description: "Acest workshop își propune să aducă în prim-plan cele mai avansate tehnici și metode de preparare a fațetelor dentare, esențiale pentru obținerea unor rezultate excepționale!",
    },
    {
        id: 13,
        image: medic_photo,
        workshopTitle: "Preparații fațete",
        medicName: "Alexandra Vlad",
        description: "Workshop-ul va aborda un protocol detaliat și riguros, destinat perfecționării abilităților clinice în terapia odontală, prin tehnica STAMP",
    },
    {
        id: 14,
        image: medic_photo,
        workshopTitle: "Preparații fațete",
        medicName: "Anca Kovacs",
        description: "Vei învăța restaurarea dinților posteriori cu rășini compozite și tehnici de adeziune, cu exerciții practice pe cavități de clasa I sub digă",
    }
]

const photodump=[medic_photo, edition_photo]


function Edition2() {
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

    const circles = [
        { id: 1, size: 60, top: '10%', left: '5%' },
        { id: 2, size: 40, top: '25%', left: '80%' },
        { id: 3, size: 25, top: '60%', left: '20%' },
        { id: 4, size: 50, top: '70%', left: '70%' },
    ];

    return (
        <div className={styles.edition2_section}>
            <div className={styles.circles_wrapper}>
                {circles.map(circle => (
                    <div
                        key={circle.id}
                        className={styles.circle}
                        style={{
                            width: `${circle.size}px`,
                            height: `${circle.size}px`,
                            top: circle.top,
                            left: circle.left,
                        }}
                    />
                ))}
            </div>
            <div className={styles.header}>
                <h2 className={styles.title}>Oradent Congress</h2>
                <div className={styles.edition_subtitle}>
                    <hr className={styles.horizontal_line}/>
                    <h3 className={styles.presents}>presents</h3>
                    <hr className={styles.horizontal_line}/>
                </div>
                <h2 className={styles.edition_number}>EDIȚIA II</h2>
            </div>
            <div className={styles.edition_photo_div}>
                <img src={edition_photo} className={styles.edition_photo}/>
                <p className={styles.edition_description}> A doua ediție OraDent Congress a fost plină de energie și
                    momente speciale! <br/>
                    Discuții interesante, prezentări inspiraționale și multe descoperiri.
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
                            <img src={white_right_arrow} alt="Right" onClick={handleNext}
                                 className={styles.right_arrow}/>
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
                            <img src={white_left_arrow} alt="Left" onClick={handlePrevWs}
                                 className={styles.left_arrow}/>
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
                    <img src={white_left_arrow} alt="Left" onClick={handlePrevPd} className={styles.left_arrow}/>
                    <img src={currentPhoto} className={styles.photo_style}/>
                    <img src={white_right_arrow} alt="Right" onClick={handleNextPd}
                         className={styles.right_arrow}/>

                </div>
            </div>
        </div>
    );
}

export default Edition2;