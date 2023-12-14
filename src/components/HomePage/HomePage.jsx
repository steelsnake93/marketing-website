import styles from './HomePage.module.css';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';
import Button from '../common/Button/Button'

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <WelcomeBanner />
            <div className={styles.buttons}>
                <Button className={styles.primaryButton}>Scheudule a demo</Button>
                <Button className={styles.secondaryButton}>Start your free trial</Button>
            </div>
        </div>
    );
}
