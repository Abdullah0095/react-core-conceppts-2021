import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sakib Al Hasan</h1>
        <h2>Run: {130 - 30}</h2>
        <h3>age: {50 - 34}</h3>
        <Bangladesh></Bangladesh>
        <Bangladesh></Bangladesh>
      </header>
    </div>
  );
}

function Bangladesh() {
  const bdStyle = {
    margin: '5px',
    border: '2px dotted red',
    borderRadius: '5px',
    padding: '0px 15px'
  }
  return (
    <div style={bdStyle}>
      <h1>mashrafee bin mortuja</h1>
      <p>player of the year</p>
    </div>
  )

}

export default App;
