import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";

class DatosApi extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }

    }

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/tiringuistinguis/Api-3/characters')
        .then(resp => {
            this.setState({
                posts: resp.data
            })
        })
    }

    // componentDidMount(){
    //     fetch('https://my-json-server.typicode.com/tiringuistinguis/Api-3/characters', {method: 'get'})
    //     .then(response => response.json())
    //     .then(dataResponse => {
    //         this.setState({
    //             posts: dataResponse
    //         })
    //     });
    // }

    render(){
        const {posts} = this.state
        return (
            <>
                <div>
                    {
                        posts.map( u => (
                            <>

                               <p>{u.nombre}</p>
                               <p>{u.año}</p>
                               
                               <p><img src={u.imagen} width="300px;"></img></p>
                               <hr/>
                            </>
                        ))
                    }
                </div>
            </>
        )
    }

}

export default DatosApi;