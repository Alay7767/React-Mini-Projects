import Styles from "./Display.module.css";

const Display = ({displayValue}) => {
  return (
    <input
      className={Styles.display}
      type="text"
      placeholder="Enter Number Here"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
