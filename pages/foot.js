import React from 'react';
import styles from "../styles/website/Footer.module.css";


const Foot = () => {
    return (
        <div style={{marginBottom: '100px', height: '100vh'}}>

            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.contactContainer}>
                        <div className={styles.addressContainer}>
                        <span className={styles.contactInfo}>
                            Teteringsedijk 275
                        </span>
                            <span className={styles.contactInfo}>
                            4817 ME Breda, NL
                        </span>
                            <span> powered by DiveMonkey</span>
                        </div>
                        <span className={styles.contactInfo}>
                        info@rngdiving.nl
                    </span>
                        <span className={styles.contactInfo}>
                        KvK: 06-41280374
                    </span>

                    </div>
                    <div className={styles.creator}>
                        <span> powered by DiveMonkey</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Foot;
Foot.layout = "L3";
