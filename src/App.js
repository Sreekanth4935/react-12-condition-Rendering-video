import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  //   method - 1 conditonal rendering using if-else
  //     renderAuthButton = () => {
  //       const {isLoggedIn} = this.state

  //       if (isLoggedIn === true) {
  //         return <button>Logout</button>
  //       }
  //       return <button>Login</button>
  //     }

  render() {
    let authButton
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }

    return (
      <div className="container">
        <Welcome />
        {/* {this.renderAuthButton()} */}
        {/* {authButton} */}
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
