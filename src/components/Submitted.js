const Submitted = (props) => {
  return (
    <div id="submitted">
        <div className="submit-flex">
          <img src="/icon-success.svg" alt="check" />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <span>{props.email}</span>. Please open it and click the button inside to confirm your subscription.</p>
          <button onClick={()=>window.location.reload()}>Dismiss message</button>
        </div>
    </div>
  );
};

export default Submitted;