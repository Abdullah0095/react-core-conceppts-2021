import React, { useState } from 'react';
import Mapping from '../Mapping/Mapping';

const Destructure = () => {

    const [count, setCount] = useState(0)

    return (
        <div style={{ height: '500px' }}>
            <h1>I am learning "Destruction"!!!</h1>
            <div style={{ textAlign: 'center', fontSize: '2em', border: '3px solid orange', width: '600px', marginLeft: '400px' }}>
                <button onClick={() => setCount(count + 1)}>Add movies</button>
                <h3>Number of movies: {count}</h3>
            </div>
            <div>
                <MovieList movieNumber={count}/>
            </div>
            

        </div>
    );
};

function MovieList(props){
    return (
        <div>
            <h4>Here is the list of movies watched by me</h4>
            <h1>I have watched almost {props.movieNumber}  movies from different aged and different culture</h1>

        </div>
    )
}



export default Destructure;