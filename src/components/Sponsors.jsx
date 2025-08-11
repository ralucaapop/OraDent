import styles from "../css/sponsors.module.css";
import elmex from "../assets/sponsors/elmex.jpg";


function Sponsors() {
  return (
    <div className={styles.sponsors_container}>
      <h2 className={styles.sponsors_title}>Sponsori</h2>
      <p className={styles.sponsors_description}>Suntem profund recunoscători tuturor sponsorilor care contribuie la realizarea acestui eveniment:</p>
        <div className={styles.sponsors_list}>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
            <div className={styles.sponsor}>
                <img className={styles.sponsor_photo} src={elmex}/>
                <h4 className={styles.sponsor_name}>ELMEX</h4>
            </div>
        </div>
        <p className={styles.sponsors_offer}>Dacă doriți să deveniți sponsor ORADent ne puteți contacta la
            adresadeemail@gmail.com</p>
    </div>
  );
}

export default Sponsors;