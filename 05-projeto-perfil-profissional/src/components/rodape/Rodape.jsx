import styles from './Rodape.module.css'

const Rodape = ({link, children}) => {
  return (
    <footer>
      <p>Feito com 🤍 por 
        <a href={link}>{children}</a></p>
    </footer>
  )
}

export default Rodape;
