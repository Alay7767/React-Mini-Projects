import Styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className={`${Styles.welcomeMessage}`}>There are no post.</h1>
      <button type="button" className={`btn btn-dark ${Styles.getPostButton}`}
      onClick={onGetPostClick}>
        Get Post from Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
