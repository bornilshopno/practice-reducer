import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
     <>
    
      <h1 className="bg-amber-400">Vite + React</h1>
     <Link className='btn btn-secondary my-3' to={"/form"}>Normal Form</Link>
     <Link className='btn btn-secondary my-3' to={"/reducer"}>Form with Reducer</Link>
    
    </>
    );
};

export default Home;