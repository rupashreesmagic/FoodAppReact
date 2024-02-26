import styles from "./FoodInput.module.css";
const FoodInput = () => {

    const handleOnChange = (event) =>{
      console.log(event.target.value);
    }

    return <input type = "text"
     placeholder = "Enter FoodItem here" 
     className={styles.foodInput}
     onChange = {handleOnChange} />
}
export default FoodInput;