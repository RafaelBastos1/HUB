import styles from './input.module.css'

function Input({ type, text, nome, placeholder, value, handleOnChange }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={nome}>{text}:</label>
      <input
        type={type}
        id={nome}
        name={nome}
        placeholder={placeholder}
        value={value}                 // <-- valor controlado
        onChange={handleOnChange}     // <-- evento de mudança
      />
    </div>
  )
}

export default Input
