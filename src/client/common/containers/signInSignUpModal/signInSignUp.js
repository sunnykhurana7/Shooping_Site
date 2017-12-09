import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isClickSignInSignUp } from './../../actions'
import './signInSignUp.scss'
import Modal from 'react-modal';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : '0px',
        width                 : '38%',
        height                : '25%',
        backgroundColor       : 'transparent !important',
        padding               : '0'
    }
}

class SignInSignUpModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalIsOpen:true
        }
    }

    closeModel = () => {
        this.props.isClickSignInSignUp(false);
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen = {this.props.isSignInSignUp}
                    style = {customStyles}
                >
                <div className="cancel_Button">
                    <span className="cross" onClick={()=>this.closeModel()}>
                        <img src= "https://www.shareicon.net/data/512x512/2015/12/18/689220_button_512x512.png" alt="no cross button imaged" />
                    </span>
                </div>
                </Modal>
            </div>
        )
    }
};

function mapStateToProps(state) {
  return {
      isSignInSignUp: state.isSignInSignUp
  }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({isClickSignInSignUp:isClickSignInSignUp}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInSignUpModal);