import React, { useEffect, useState } from 'react';

const DynamicUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div style={{height: '900px'}}>
            <h1>Dynamic Users: {users.length}</h1>
            {/* {console.log(users)} */}
            <ol>
            {
                users.map(user => 
                    
                    <div style={{border: '3px solid gray', margin: '5px', paddingLeft: '5px', float: 'left', width: '300px', height: '250px'}}>
                        <h2>Name: {user.name}</h2>
                        <h4>Email: {user.email}</h4>
                        <h3>User Name{user.username}</h3>
                        <p>Street Address: {user.address.street}</p>
                    </div>

                    )
            }
            </ol>

        </div>
    );
};

export default DynamicUsers;