import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isClickSignInSignUp } from './../../actions'
import { bindActionCreators } from 'redux';
import SignInSignUpModal from './../signInSignUpModal/signInSignUp';
import './signInSignUp.scss';

class SignInSignUp extends Component {

    constructor(props){
        super(props);
    }

    isSignInSignUp = () => {
        this.props.isClickSignInSignUp(true);
        console.log('this.props.isSignInSignUp', this.props.isSignInSignUp);
    }

    render() {
        return (
            <div>
                <div className="signInsignUp">
                    <span onClick={()=>this.isSignInSignUp()}>Sign in / sign up</span>
                    <a href="mailto:morven@x-cart.com" className="email">morven@x-cart.com</a>
                </div>
                <SignInSignUpModal/>
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
    return bindActionCreators({ isClickSignInSignUp:isClickSignInSignUp }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInSignUp);