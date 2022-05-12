import styles from "../../styles/website/Footer.module.css"
const Footer = () => {

    return (
        <>

            <div className={styles.container}>
                <div className={styles.contactContainer}>
                    <div className={styles.addressContainer}>
                        <span className={styles.contactInfo}>
                            Teteringsedijk 275
                        </span>
                        <span className={styles.contactInfo}>
                            4817 ME Breda, NL
                        </span>
                    </div>
                    <span className={styles.contactInfo}>
                        info@rngdiving.nl
                    </span>
                    <span className={styles.contactInfo}>
                        KvK: 06-41280374
                    </span>

                </div>
            </div>
        </>
    );
};

export default Footer;
