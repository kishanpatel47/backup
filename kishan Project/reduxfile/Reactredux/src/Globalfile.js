// import { Text, View } from 'react-native'
// import React, { Component } from 'react'
// import Action from './Action/Action'
// import { connect } from 'react-redux'
// const mapstatetoProps=(props)=>{
// return{
//     incerment:props.Increment,
//     decerment:props.Decrement

// }
// }
// const maptoDispatchtoProps =(dispatch)=>{
// return{
//     incerment:()=>dispatch(Action.Increment()),
//     decerment:()=>dispatch(Action.Increment())
// }
// }
//  class Gobalfile extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Gobalfile   { 0 }  </Text>
//       </View>
//     )
//   }
// }
// export default Gobalfile;
import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Globalfile extends Component {
  render() {
    return (
      <View>
        <Text>Globalfile</Text>
      </View>
    )
  }
}

export default Globalfile