import styles from "../css/contact.module.css";
import mail from "../assets/email.png";
import instagram from "../assets/instagram.png";

function Contact(){
    return (
        <div className={styles.contact_container}>
            <h2 className={styles.contact_title}>CONTACT</h2>
            <p className={styles.contact_description}>
                Pentru orice întrebări sau informații suplimentare, nu ezitați să ne contactați. Urmăriți-ne pentru a fi la curent cu ultimele noutăți și evenimente.
            </p>
            <div className={styles.contacts}>
            <div className={styles.contact}>
                    <img className={styles.contact_icon} src={mail} alt="Email Icon"/>
                    <h3 className={styles.contact_name}>assoradea@gmail.com</h3>
                </div>
            <div className={styles.contact}>
                    <img className={styles.contact_icon} src={instagram} alt="Insta Icon"/>
                    <h3 className={styles.contact_name}>@oradent.congress</h3>
            </div>
            </div>
        </div>
    );
}

export default Contact;