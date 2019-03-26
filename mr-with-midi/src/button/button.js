import React from 'react';
import {Button} from "reactstrap";


function MyButton(props){
    return (
    <span>
    <Button color={props.buttonColor}>"button element"</Button>
    </span>
    );
}



export default MyButton;