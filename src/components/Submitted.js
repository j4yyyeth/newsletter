const Submitted = (props) => {
  return (
    <div id="submitted">
        <img src="/icon-success.svg" alt="check" />
        <h1>Thanks for subscribing</h1>
        <p>A confirmation email has been sent to {props.email}. Please open it and click the button inside to confirm your subscription</p>
        <button onClick={()=>window.location.reload()}>Dismiss message</button>
    </div>
  )
}

export default Submitted