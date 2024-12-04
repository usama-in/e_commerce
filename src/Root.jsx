// src/Root.js
import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './components/Header';

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Render the child routes here */}
      </main>
    </div>
  );
};

export default Root;
