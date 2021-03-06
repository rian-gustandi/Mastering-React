import React, { Component } from 'react';

class Header extends Component {
  // Event Function Read Attribute
  readAttributeName(e) {
    console.log(e.target.name);
  }

  // Event Input Change Function Read Value
  readInputChange(e) {
    console.log(e.target.value);
  }

  // Render
  render() {
    const styles = {
      header: {
        background: '#03a9f4'
      },
      logo: {
        color: '#fff',
        textAlign: 'center'
      }
    };

    return (
      <header style={styles.header}>
        <div
          style={styles.logo}
          onClick={() => {
            console.log('Click');
          }}
        >
          Logo
        </div>
        <input onInput={this.readInputChange} name="Test" type="text" /> //this
        mean this class header
      </header>
    );
  }
}

export default Header; //export component
