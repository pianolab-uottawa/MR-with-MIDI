import React from 'react';
import {Button} from "reactstrap";

class MyButton extends React.Component {
    render() {
        return (
            <span>
                <Button color={this.props.buttonColor}>"button element"</Button>

            </span>);
    }
}


/* This function below is equivalent to the function above from React's point of view.
see https://reactjs.org/docs/components-and-props.html for more details

function MyButton(props){
    return (
    <span>
    <Button color={props.buttonColor}>"button element"</Button>
    </span>
    );
}*/

export default MyButton;