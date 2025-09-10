import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({ to, text, variant = "primary" }) {
  return (
    <Link className={`${styles.btn} ${styles[variant]}`} to={to}>
      {text}
    </Link>
  )
}

export default LinkButton
