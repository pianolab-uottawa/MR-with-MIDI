import React from 'react';
import { Button } from 'reactstrap';

export default class Buttons extends React.Component {

    render() {
        return (
            <div>
            <Button color={this.props.buttonColor}>{this.props.buttonText}</Button>{' '}
            </div>
        );
    }
}