import React from 'react';
import { Header } from "./Header";



export const UnderConstruction = () => {
  return (
    <>
      <Header />
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Page Under Construction</h1>
          <p>We're working hard to get this page up and running. Please check back soon!</p>
        </div>
      
    </>
  );
};
