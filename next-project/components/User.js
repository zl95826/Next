import React from 'react';
const user=({name,age})=>(
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
<style jsx>{`
div {border:1px solid #eee;
     box-shadow:0 2px 3px #ccc;
    padding:30px;text-align:center;}
`}</style>
    </div>

);

export default user;