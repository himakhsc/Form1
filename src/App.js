import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      fullName:''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const data = this.state
    console.log("Finla data is", data);
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    this.setState({
      fullName: "puli"
    })
  }

  render(){
      const {fullName} = this.state
    return(
      <div>
        <p>Full Name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <p><input type='text' placeholder='your Name' name='fullName' value={fullName} onChange={this.handleInputChange}/></p>
          <p><button>Send Messge</button></p>
        </form>
      </div>
    )
  }
}

export default App;  