import React, { Component } from "react";

export default class PlaceImg extends Component {
    constructor(props) {
        super(props)
        // default values goes here
        this.state = {
            width: 300,
            height: 300,
            category: 'any',
            url: ""
        }
    }
    componentDidMount() {
        var genUrl = ["https://placeimg.com"]

        // push all the props are replace with default if the value is undefined or empty
        genUrl.push(this.props.width !== undefined ? this.props.width : this.state.width)
        genUrl.push(this.props.height !== undefined ? this.props.height : this.state.height)
        genUrl.push((this.props.category !== undefined && this.props.category.trim() !== "") ? this.props.category : this.state.category)
        genUrl.push((this.props.filter !== undefined && this.props.filter.trim() !== "") ? this.props.filter : this.state.filter)
        this.setState({
            url: genUrl.join("/").replace(/\/$/, "") // replace trailing slash with empty string
        })
        
        // add event handler for the image on successfull loading
        this.imgRef.addEventListener("load",()=>{
            if(this.props.onLoad) {
                this.props.onLoad()
            }
        })
    }
    render() {
        return (          
            <img 
                ref={imgRef => this.imgRef = imgRef}
                src={this.state.url}>
            </img>
        )
    }
}