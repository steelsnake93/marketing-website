import styles from "./WelcomeBanner.module.css";

export default function WelcomeBanner() {
    return (
        <div className={styles.welcomeBanner}>
            <h1 className={styles.heading}>
                One Platform That Turns Your
                <br />
                <span className={styles.span}> Devices </span>
                Into Services
            </h1>
            <p className={styles.text}>
                - Cloudify your products and introduce as-a-Service business models.
            </p>
        </div>
    );
}
