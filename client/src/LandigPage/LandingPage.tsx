import { useHistory } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const history = useHistory();

  const goToForm = () => {
    history.push('/form');
  };

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegister = () => {
      history.push('/register');
  };

  return (
    <div className="landing-container">
      <button className="login-button" onClick={goToLogin}>
        Log In
      </button>
        <button className="register-button" onClick={goToRegister}>
            Register
        </button>
      <h1>CourierHub</h1>
      <button className="landing-button" onClick={goToForm}>
        Load Form
      </button>
    </div>
  );
};

export default LandingPage;
