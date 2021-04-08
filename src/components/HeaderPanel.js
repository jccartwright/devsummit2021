import React, { useState, useRef, useEffect } from 'react';
import './HeaderPanel.css';


function HeaderPanel() {
    const headerDiv = useRef(null);
    // headerDiv.current.dispatchEvent(new Event('testme'));


    useEffect(() => {
        if (headerDiv.current) {
            // headerDiv.current.addEventListener('testme', function(e) {
            // //   console.log('headerDiv: ', e);
            // })
        } else {
            console.log('headerDiv not ready');
        }      
    })
  
    return (
        <header className="HeaderPanel" ref={headerDiv}>
            Header
        </header>
    );
}

export default HeaderPanel;