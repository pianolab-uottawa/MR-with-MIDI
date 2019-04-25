//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";

class CreateScoreWithBlanksLC extends React.Component {

    constructor(props) {
        super(props);
        this.loopScoreSets = this.loopScoreSets.bind(this);
        this.state={
            score: "",
            imageSizeFactor:"1",
            staffWidth: "1",
            eventDuration: 1,
            scoreIDformatted:"",
        };
    }


    clearAsyncFunctions= () =>{
        let setTimeoutID = window.setTimeout(() => {}, 0);
        while (setTimeoutID) {
            window.clearTimeout(setTimeoutID);
            setTimeoutID--;
        }
        this.setState({
            score: "",
            scoreIDformatted:"",
        });

    };



    loopScoreSets = (scoreSet, ptKeyName, loopLocation) => {

        console.log(scoreSet[1]);

        for ( let i=loopLocation, accum=0 ; i<scoreSet.length ; i++) {

            setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                this.setState({
                    score:scoreSet[i]["score"],
                    imageSizeFactor:scoreSet[i]["imageSizeFactor"],
                    staffWidth:scoreSet[i]["staffWidth"]
                });



            },1000*i);

            setTimeout(()=>{//this removes the score after each eventDuration. we pass empty parameters to remove score.
               /* this.setState({
                    score:"",
                    imageSizeFactor:"",
                    staffWidth:""
                });*/
            },2000);

        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.loopScoreSets(this.props.scoreSet,this.props.ptKeyName,this.props.loopLocation)
        }
    }


    render() {
        return (
            <div>
                <DisplayLC score={this.state.score} imageSizeFactor={this.state.imageSizeFactor} staffWidth= {this.state.staffWidth}/>
            </div>
        );
    }
}

export default CreateScoreWithBlanksLC;