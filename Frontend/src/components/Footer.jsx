import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='banner'>
        <div className='title'>
          <h1>AMAN's</h1>
          <p>Events And Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
        </div>
        <input type="text"  placeholder='E-mail'/>
        <button>Subscribe</button>
      </div>
      <p>Sign up with your email address to receive news!</p>
    </footer>
  );
};

export default Footer