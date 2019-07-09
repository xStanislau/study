import React, {Fragment, Component} from 'react';
import Form from './Form/Form'
import {Link} from "react-router-dom";
import './Login.css'
import Popup from "../../../components/Popup/Popup";
import Button from "../../../components/Button/Button";

class Login extends Component {
  state = {
    isOpen: false
  };
  openPopup = (evt) => {
    evt.preventDefault();
    this.setState({isOpen: true})
  };
  closePopup = (evt) => {
    evt.preventDefault();
    if (evt.target.className == 'popup-bg' || evt.currentTarget.className == 'close') {
      this.setState({isOpen: false})
    }
  };

  render() {
    return (
        <Fragment>
          <h2 className="text-center">Log in</h2>
          <div className="form-wrapper">
            <Form/>
            <div className="d-flex align-items-center">
              <Button onClick={this.openPopup}>modal</Button>
              <div>-or-</div>
              <Button ><Link to='/main-page'>redirect</Link></Button>
            </div>
            {this.state.isOpen && <Popup onClick={this.closePopup}/>}
          </div>
        </Fragment>
    )
  }
}

export default Login;