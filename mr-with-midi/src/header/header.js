import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";
import {intervalCPositionSolid, intervalCPositionBroken} from "../score/index";
import CreateScoreWithBlanksLC from "../logic/CreateScoreWithBlanksLC";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.scoreSetTemp = [];
        this.reset=false;
        this.keyLock = false;

        this.state = {
            ptKeyName:"",
            loopLocation:1,
            scoreSet:[],
        };
    }



    scoreSetSwitcher = (elementID) => {

        switch(elementID) {

            case intervalCPositionSolid[0]["scoreIDformatted"]:

                this.reset=false;
                this.scoreSetTemp = intervalCPositionSolid;
                break;

            case intervalCPositionBroken[0]["scoreIDformatted"]:

                this.reset=false;
                this.scoreSetTemp = intervalCPositionBroken;
                break;

            case "resetCurrent":

                this.reset=true;
                this.setState({
                    ptKeyName:"",
                    scoreSet:[]
                });
                break;

            default:
                break;
        }

    };


    handleMouseDown = (event) => {
            this.scoreSetSwitcher(event.target.id);
    };

    handleKeyDown = (event) => {
        document.getElementById("scoreLoopBundle").style.display="block";

        for (let i=0;i<this.scoreSetTemp.length;i++)
        {
            if ((this.scoreSetTemp[i]["ptKeyName"] === event.key) && (!this.keyLock)){
                console.log("lock");
                //lock up the keyboard for x secs, to prevent multiple press down
                this.keyLock = true;
                setTimeout(()=>{
                    this.keyLock = false;
                },3000);
                //end of lock up
                this.setState({
                    ptKeyName: event.key,
                    scoreSet:this.scoreSetTemp,
                    loopLocation:i
                });
            }
            else {
                //console.log(this.keyLock)
            }

        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);//global
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <div>
                    <Button color={this.buttonColorPrm} id={intervalCPositionBroken[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{intervalCPositionBroken[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color={this.buttonColorPrm} id={intervalCPositionSolid[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{intervalCPositionSolid[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color={this.buttonColorSnd} id="resetCurrent" onClick={this.handleMouseDown}>Reset Current</Button>
                </div>

                <div>
                    <CreateScoreWithBlanksLC scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} reset={this.reset}/>
                    {console.log("pass")}
                </div>
            </div>
        )
    }
}