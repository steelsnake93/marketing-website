import styles from './HomePage.module.css';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <div className={styles.subComponents}>
                <WelcomeBanner />
            </div>
        </div>
    );
}
