function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Create a New Account Here">Create Account</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="bottom" title="Log In Here">Login</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Make a Deposit Here">Deposit</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Make a Withdrawal Here">Withdraw</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="See All Data Here">AllData</a>
          </li>      

        </ul>
      </div>
    </nav>
    </>
  );
}