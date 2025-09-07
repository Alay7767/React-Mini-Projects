import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import Styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    } else {
       const newDisplayValue = calVal + buttonText;
       setCalVal(newDisplayValue);
    }
  }
  return (
    <>
      <div className={Styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer
          onButtonClicked={onButtonClicked}
        ></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
