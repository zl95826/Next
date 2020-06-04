import React from 'react';
import User from '../../components/User';

const authIndexPage=()=>(
    <div>
        <h1>The Auth Index Page</h1>
        <User name='Lee' age={22} />
    </div>
);

export default authIndexPage;