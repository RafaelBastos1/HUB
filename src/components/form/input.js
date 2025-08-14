import styles from './input.module.css'


/*Input dinâmico*/

function Input ({type, text, name, placeholder, handleOnCharge, value}) {
    return (
 
/* Já fica na estrutura de formulário o style.form*/
<div className={styles.form_control}> 

<label htmlFor={name}>{text}:</label>

<input 
    type={type}
    id= {name}
    name={name}
    placeholder={placeholder}
    onChange={handleOnCharge}
    value={value}

/>

</div>
      
 )
}
export default Input