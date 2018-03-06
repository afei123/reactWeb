import React , { Component } from 'react'

class ThreePage extends Component{
    constructor(){
        super();
        
    }

    componentWillReceiveProps(nextProps){
        alert(123)
    }

    render(){
        return(<div>
            threePage
        </div>)
    }
}

export default ThreePage