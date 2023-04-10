import logo from './logo.svg';
import './App.css';

function App() {
  const divStyle = {
    width: '18rem',
    paddingTop: '20rem',
  };

  function handleOnCick() {
    console.log('clicked');
  }
  return (
    <div className="App container-fluid mt-5">
      <div className="card mx-auto my-auto p-2" style={divStyle}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="#" className="btn btn-primary" onClick={handleOnCick}>
            Contact 1
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
