import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

class About extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
  }

  render(){
    return (
      <div>
        <h1>About Class Component</h1>
        <UserContext.Consumer>
          {({loggedInUser})=><h1 className='text-xl font-bold'>{loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <UserContext.Consumer>
          {(data)=>{console.log(data);}}
        </UserContext.Consumer> */}
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Dehradun Class"}/>
        {/* <UserClass name={"Second"} location={"US"}/> */}
      </div>
    )
  }
}


export default About