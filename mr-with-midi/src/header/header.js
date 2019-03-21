import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavButton from '../button/button.js';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColor = "primary";
        this.buttonText = "button1textiofjaddgijosgdijsg";
        this.state = { x: 0, y: 0 };
    }
    render() {
        return (
            <HeaderNavButton />
        )
    }


}