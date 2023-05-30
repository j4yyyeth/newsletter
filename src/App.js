import { useState } from "react";
import Submitted from "./components/Submitted";

const App = () => {

  const [email, setEmail] = useState("");
  const [ valid, setValid ] = useState(false);
  const [ submitted, setSubmitted ] = useState(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      console.log('invalid email')
    } else {
      setValid(true);
    }
  }

  const handleSubmit = (e) => {
    if (!valid) {
      e.preventDefault();
      setSubmitted(false);
      setValid(false);
    } else if (valid) {
        setSubmitted(true);
        e.preventDefault();
    }
  }

  return (
    <>
    { !submitted ?
      <div id="newsletter">
        <div className="flex-left">
          <h1>Stay updated!</h1>
          <h4>Join 60,000+ product manager receiving monthly updates on:</h4>
          <ul>
            <li><span>Product discovery and building what matters</span></li>
            <li><span>Measuring to ensure updates are a success</span></li>
            <li><span>And much more!</span></li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <div className="label-container">
                <label>Email address</label>
                {!valid && submitted === false && <label className="invalid-label">Valid email required</label>}
              </div>
              <input
                className={!valid && submitted === false ? 'red' : ''}
                placeholder="email@company.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>

        </div>
        <img src="/illustration-sign-up-desktop.svg" alt="sign-up" />
      </div>
    : <Submitted email={email}/>
    }
    </>
  );
};

export default App;