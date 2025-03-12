import styles from './Perfil.module.css'

const Perfil = ({fotoPerfil, children}) => {
  return (
    <div id={styles.perfil}>
      <img src={fotoPerfil} alt="" />
      <p>{children}</p>
    </div>
  )
}

export default Perfil;
