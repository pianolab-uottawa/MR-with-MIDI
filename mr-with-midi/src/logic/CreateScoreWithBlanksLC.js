//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";

class CreateScoreWithBlanksLC extends React.Component {

    constructor(props) {
        super(props);
        this.loopScoreSets = this.loopScoreSets.bind(this);
        this.timeoutID = [];
        this.state={
            score: "",
            imageSizeFactor:"1",
            staffWidth: "1",
            eventDuration: 1,
            scoreIDformatted:"",
        };
    }


    clearAsyncFunctions= () =>{
        let index = this.timeoutID.length;
        while (index--) {
            window.clearTimeout(this.timeoutID[index]);
        }

        this.setState({
            score: "",
            scoreIDformatted:"",
        });

    };



    loopScoreSets = (scoreSet, ptKeyName, loopLocation) => {



        for ( let i=loopLocation, accum=0, id=0 ; i<scoreSet.length ; i++) {

            this.timeoutID[id++]=setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                this.setState({
                    score:scoreSet[i]["score"],
                    imageSizeFactor:scoreSet[i]["imageSizeFactor"],
                    staffWidth:scoreSet[i]["staffWidth"]
                });
                console.log(this.timeoutID)
            },accum);


            this.timeoutID[id++]=setTimeout(()=>{//this removes the score after each eventDuration. we pass empty parameters to remove score.
               this.setState({
                    score:"",
                    imageSizeFactor:"",
                    staffWidth:""
                });

            },accum+=scoreSet[i]["eventDuration"]);



        }
    };


    /* The component receives props from header and re-renders itself. As a result componentDidUpdate gets triggered every time the component receives props, regardless of what's inside the props.
    In componentDidUpdate, we check what's inside the new props.*/
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps ){ //we have to add condition here, to prevent infinity loop
            if(this.props.reset === true ){ //we have to add condition here, to prevent infinity loop
                console.log("catch");
                this.clearAsyncFunctions();
            }
            else {
                this.loopScoreSets(this.props.scoreSet,this.props.ptKeyName,this.props.loopLocation)
            }

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