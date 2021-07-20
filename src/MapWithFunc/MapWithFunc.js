import React from 'react';

const MapWithFunc = () => {
    
    const products = [
        { name: 'Photoshop', price: '$50.99' },
        { name: 'illustrator', price: '$69.99' },
        { name: 'Indesign', price: '$49.99' },
        { name: 'Ai', price: '$99.99' },
        { name: 'PDF', price: '$39.99' },
        { name: 'Pixel Design', price: '$79.99' },
    ];
    
    return (
        <div>
            <h1>Mapping With Function</h1>
            {
                products.map(singleProduct => <ProductName singleProduct={singleProduct}></ProductName>)
            }
        </div>
    );
};

function ProductName(props){
    const productStyle = {
        border: '2px solid gray',
        borderRadius: '10px',
        margin: '10px',
        padding:'10px',
        backgroundColor: 'lightGray',
        width: '150px',
        float: 'left'
      }
    return (
        <div style={productStyle}>
            <h3>{props.singleProduct.name}</h3>
            <h1>{props.singleProduct.price}</h1>

        </div>
    )
}

export default MapWithFunc;