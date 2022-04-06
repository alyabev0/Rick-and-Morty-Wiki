import React, {Component} from 'react'

class Title extends React.Component {
    constructor(){
        super()
        this.state = {}
    }
    componentDidMount(){
        document.title = "Rick and Morty Wiki"
    }
    render(){
        
    
    return (
        <React.Fragment />
    )
}
}

export default Title