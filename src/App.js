// import './App.css';
function App() {

  // const players = ['mashrafe bin mortuza', 'tiger woods', 'C ronaldo', 'Mohammad ali', 'Roger federar'];
  // const professions = ['cricket', 'super golf', 'football', 'mighty boxing', 'tennis']

  const products = [{name: 'Photoshop', price: '$50.99'}, {name: 'illustrator', price: '$69.99'}, {name: 'Indesign', price: '$49.99'}, {name: 'Ai', price: '$99.99'}]

  return (
    <div className="App">
      <header className="App-header">

        <h1>WE ARE IN GRAPHIC DESIGN AREA</h1>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product>



        {/* <h1>Bangladesh Cricket Board Association</h1>
        <h2>List of the PANCHA PANDAB</h2>

        <Bangladesh name={players[0]} fame={professions[0]}></Bangladesh>
        <Bangladesh name={players[1]} fame={professions[1]}></Bangladesh>
        <Bangladesh name={players[2]} fame={professions[2]}></Bangladesh>
        <Bangladesh name={players[3]} fame={professions[3]}></Bangladesh>
        <Bangladesh name={players[4]} fame={professions[4]}></Bangladesh> */}

        
        {/* <Bangladesh name="sakib" fame="no:1 all rounder"></Bangladesh>
        <Bangladesh name="mashrafe" fame="best captain"></Bangladesh>
        <Bangladesh name="mahmudullah" fame="silent killer"></Bangladesh> */}


        
      </header>
    </div>
  );
}

function Product(props){

  const productStyle = {
    border: '2px solid gray',
    borderRadius: '10px',
    margin: '10px',
    padding:'10px',
    backgroundColor: 'lightGray',
    width: '250px',
    float: 'left'
  }

  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h1>{props.price}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, autem!</p>
      <button>Buy now</button>
    </div>
  )
}

function Bangladesh(props) {
  const bdStyle = {
    margin: '5px',
    border: '2px dotted red',
    borderRadius: '5px',
    padding: '0px 15px'
  }
  return (
    <div style={bdStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Profession: {props.fame}</h2>
      <p>player of the year</p>
    </div>
  )

}

export default App;
