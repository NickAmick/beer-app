import React from 'react';

export default class Header extends React.Component {
    render(){
      return (
        <header>
            <h1>Beer App</h1>
            <p className='dry-hop-legend-text'><span className='dry-hop-legend-icon'></span>Dry Hopped Brews</p>
        </header>
      );
    }
}
