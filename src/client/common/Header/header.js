import React, { Component } from 'react';
import SignInSignUp from  '../containers/signInSignUp/signinNsignup';
import './header.scss';

class Header extends React.Component {
    render(){
        return (
                <div className="header">
                    <div className="container">
                        <div className="header-container">
                            <div className="header-left-side">
                                <SignInSignUp/>
                            </div>
                            <div className="header-right-side">
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
};

export default Header;