
import React,{useState, useEffect} from 'react'
import MemoTest from './memoTest'


function Parent(){
let [name, setName]=useState(0)
useEffect(()=>{  setInterval( ()=>{setName(prename=>prename+1)
console.log(name)
}

, 2000)
console.log('hello world')},[]
)
console.log('parent')
      return(

     <MemoTest name={name}/>
      )
  
}

export default Parent


// export default class Parent extends Component {
// constructor(props){
//     super(props)
//     this.state={
//         name:"xiao"
//     }
// }
// componentDidMount(){
//     setInterval(()=>{
//         this.setState({
//            name:"xiao"
//         })
//     }, 2000)
// }
// render(){
//     console.log('parent component')
//     return (
//         <MemoTest name={this.state.name}/>
//     )
// }
// }

