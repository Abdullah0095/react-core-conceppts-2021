import React from 'react';

const Mapping = () => {

    const products = [
        { name: 'Photoshop', price: '$50.99' },
        { name: 'illustrator', price: '$69.99' },
        { name: 'Indesign', price: '$49.99' },
        { name: 'Ai', price: '$99.99' },
        { name: 'PDF', price: '$39.99' },
        { name: 'Pixel Design', price: '$79.99' },
    ];

    const players = ['mashrafe bin mortuza', 'goda sujon', 'C ronaldo', 'Mohammad ali', 'Roger federar'];


    const productNames = products.map(product => product.name);
    console.log(productNames);

    return (
        <div>
            <div>
                <h1>How to map an array</h1>
                <h2>take a variable, in this variable, you have to map the array, an give a name of the single unit</h2>
                <h1>An example is: </h1>
                <p>const heroNames = heros.map(hero => hero.name)</p>
            </div>
            <div>
                <h1>player name</h1>
                <ul>
                
                    {
                        players.map(player => <li>{player}</li>)
                    }
                
                </ul>
            </div>
            <div>
                <h1>Products name list</h1>
                <ol>
                    {
                        products.map(singleProduct => <li>{singleProduct.name}</li>)
                    }
                </ol>
            </div>

        </div>
    );
};

export default Mapping;