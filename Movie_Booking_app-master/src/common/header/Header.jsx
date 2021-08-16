import './Header.css';
import React, {Component} from 'react';
import logo from './../logo.svg';
import Button from '@material-ui/core/Button';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: true
        };
        this.changeState = this.changeState.bind(this);
      }
      changeState = () => {
        this.setState({
          login: !this.state.login
        });
      };
    
    render() {
        const { login } = this.state;
        return (
            <div className="header">
               <img src={logo} className="svg" alt="logo" />
               <Button variant="contained" style={{color:"black"}} onClick={this.changeState}>
               {login ? "Login" : " Log Out"}</Button>
            </div>
        );
    }
}
export default Header;