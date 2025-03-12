import styles from './Switch.module.css'

const Switch = ({isLight, troca}) => {
  return (
    <div className={isLight ? styles.light : ""}>
      <div onClick={troca} id={styles.switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default Switch
