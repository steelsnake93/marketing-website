import styles from './HomePage.module.css';
import WelcomeBanner from './WelcomeBanner/WelcomeBanner';
import Button from '../common/Button/Button';
import Features from './Features/Features';
import { useState } from 'react';

export default function HomePage() {
    // useState hook to initialize the features state
    // Array of objects for each feature
    const [features] = useState([
        {
            "imgSrc": "src/components/assets/images/img-one.jpg",
            "imgAlt": "Description of Feature 1",
            "title": "Feature 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            "imgSrc": "src/components/assets/images/img-two.png",
            "imgAlt": "Description of Feature 2",
            "title": "Feature 2",
            "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "imgSrc": "src/components/assets/images/img-three.png",
            "imgAlt": "Description of Feature 3",
            "title": "Feature 3",
            "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
            "imgSrc": "src/components/assets/images/img-four.jpg",
            "imgAlt": "Description of Feature 4",
            "title": "Feature 4",
            "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        }
    ]);
    return (
        <div className={styles.homePage}>
            <WelcomeBanner />
            <div className={styles.buttons}>
                <Button className={styles.primaryButton}>Scheudule a demo</Button>
                <Button className={styles.secondaryButton}>Start your free trial</Button>
            </div>
            {/* Features component with featureList passed as a prop */}
            <Features featureList={features} />
            {/* Additional content and contact button */}
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className={styles.button}>
                    <Button className={styles.contactButton}>Contact Us</Button>
                </div>
            </div>
        </div>
    );
}
