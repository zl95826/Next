import React from 'react';
import User from '../../components/User';

const authIndexPage=({posts})=>(
    <div>
        <h1>The Auth Index Page:<span className='auth'> {posts.title}</span></h1>
        <User name='Lee' age={22} />
<style jsx>{
    `.auth{color:red;}
    `
}</style>
    </div>
);
// const authIndexPage=(props)=>(
//     <div>
//         <h1>The Auth Index Page: {props.posts.title}</h1>
//         <User name='Lee' age={22} />
//     </div>
// );
export async function getStaticProps() {
    const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const posts=await res.json();
    return {props:{posts}}
}

export default authIndexPage;