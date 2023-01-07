import Logo from '../../assets/logo.svg';
import styles from './header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
        <img src={Logo} alt="Logo ToDo" />
    </div>
  )
}