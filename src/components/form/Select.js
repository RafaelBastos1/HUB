import styles from './Select.module.css'

/*Input dinâmico*/

function Select ({ text, name, options,  handleOnCharge, value}) {
    return ( 
        <div className={styles.form}>
            <label htmlFor={name}>{text}</label>
            <select  name={name} id={name}>
                <option> Selecione um serviço:</option>
            </select>
        </div>



      
    )

}
export default Select