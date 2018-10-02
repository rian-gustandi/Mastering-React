import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    // Access Parent Component
    super();

    // State is an object
    this.state = {
      title: 'The Keywords are : ',
      keywords: 'john'
    };
  }

  // How to Change State
  changeStateKeyword(e) {
    this.setState({ keywords: e.target.value });
    this.props.newsSearch(e.target.value);
  }

  // Render
  render() {
    const styles = {
      header: {
        background: '#03a9f4',
        textAlign: 'center'
      },
      logo: {
        color: '#fff',
        fontSize: '40px',
        textAlign: 'center'
      },
      input: {
        fontSize: '20px',
        margin: '20px 0px'
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
        <input
          onInput={this.changeStateKeyword.bind(this)} //this mean this class header
          name="Test"
          type="text"
          style={styles.input}
        />
      </header>
    );
  }
}

export default Header; //export component