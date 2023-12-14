import styles from './Features.module.css';
import Button from '../../common/Button/Button';

// Features component with featureList prop
export default function Features({ featureList }) {
    return (
        // WelcomeBanner with applied CSS class
        <section className={styles.features}>
            {/* Mapping over featureList array to render each feature */}
            {featureList.map((feature, index) => (
                // Article for each feature
                <article key={index} className={styles.featureItem}>
                    <img src={feature.imgSrc} alt={feature.imgAlt} />
                    <h3 className={styles.title}>{feature.title}</h3>
                    <p className={styles.description}>{feature.description}</p>
                    <div className={styles.moreBtn}>
                        <Button className={styles.featureButton}>Read More
                            <span className={styles.arrow}>&#129170;</span>
                        </Button>
                    </div>
                </article>
            ))}
        </section>
    );
}
