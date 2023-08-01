
import React from 'react';
import './App.css';
import Toolkit from './toolkit';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      hover: false,
      pos: 'top'
    }
  }

  handleSelectPos=(pos)=>{
    this.setState({
      pos
    })
  }

  handleMouseOut=()=>{
    this.setState({
      hover: false
    })
  }

  handleMouseOver=()=>{
    this.setState({
      hover: true
    })
    console.log(this.state)
  }
  


  render(){
    return (
      <div className="App">
        
        <div className='btn-position'>
        <div className='grp-name'>
            Select where to hover :
          </div>
        <button className= {this.state.pos=== 'top' ? "btn active" :"btn" } onClick={()=>this.handleSelectPos('top')}>TOP</button>
        <button className= {this.state.pos=== 'left' ? "btn active" :"btn" } onClick={()=>this.handleSelectPos('left')}>LEFT</button>
        <button className= {this.state.pos=== 'right' ? "btn active" :"btn" } onClick={()=>this.handleSelectPos('right')}>RIGHT</button>
        <button className= {this.state.pos=== 'bottom' ? "btn active" :"btn" } onClick={()=>this.handleSelectPos('bottom')}>BOTTOM</button>
        </div>

         <div id="button-container">
          <button
          className='btn hover-btn'
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          >
            Hover here!
          </button>
          {this.state.hover && <Toolkit position={this.state.pos}/>}
        </div>
      </div>
  )
  }
}


export default App;
