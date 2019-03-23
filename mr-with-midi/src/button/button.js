import React from 'react';
import {Button} from "reactstrap";


function MyButton(props){
    return (
    <span>
    <Button color={props.buttonColor}>"button element"</Button>
    </span>
    );
}

function vs const vs class

export default MyButton;