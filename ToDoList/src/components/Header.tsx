import styles from './Header.module.css';
import rocketLogo from '../images/Rocket.png';

export function Header() {
    return (
        <header >
            <div className={styles.headerBackground}>
                <img src={rocketLogo} className={styles.imageSize}/>
                <strong className={styles.TitleTo}>TO</strong>
                <strong className={styles.TitleDo}>DO</strong>
            </div>
        </header>
    );
}