import Styles from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
  return (
      <div className={`d-flex justify-content-center ${Styles.spinner}`}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  );
};

export default LoadingSpinner;
