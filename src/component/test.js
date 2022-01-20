import React, {Component} from 'react';
class Test extends Component{
    constructor(props){
    super(props)
    this.state={
        count:0
    }
    }
    componentDidMount(){
        console.log('hello world')
        document.title=`click ${this.state.count} times`
    }
    componentDidUpdate(){
        console.log(`${this.state.count} render`)
        document.title=`click ${this.state.count} times`
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}
export default Test