import styles from './Button.module.css';


// Button component wich accepts children (content inside the button), whith onClick function
const Button = ({ children, onClick, className, ...props }) => {
    return (
        <button
            // Combining default button style from module CSS and any additional className passed as props
            className={`${styles.button} ${className}`}
            // Handle click events
            onClick={onClick}
            // Spreading other props on the button element
            {...props}
        >
            {/* Rendering children inside the button */}
            {children}
        </button>
    );
};

export default Button;