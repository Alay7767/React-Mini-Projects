import Styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className={`${Styles.welcomeMessage}`}>There are no post.</h1>
    </center>
  );
};

export default WelcomeMessage;
