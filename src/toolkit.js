import React from "react"

export default class Toolkit extends React.Component{
  
    position=()=>{
        console.log(this.props.position)
        return `${this.props.position}`

    }
    render(){
        return(
            <div className={`${this.position()}`}>
            thanks for hovering !! i am a tooltip !
            </div>
        )
    }
}