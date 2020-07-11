import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class extends Component {
    constructor(props) {
        super(props);
        console.log("we are in ctor", props);  
        this.state = {
            data: props.data,
            label: props.label       
        }
    }
   
    render() {    
        console.log("we are in render", this.state.data);        
        return (
            <div style={{ width: 300 }}>
                <Autocomplete
                    {...{
                        options: this.state.data || [],
                        getOptionLabel: (option) => option ? option.title : '',}
                    }
                    id="debug"
                    debug
                    renderInput={(params) => <TextField {...params} label={this.state.label} margin="normal" />}
                />
            </div>
        )
    }
}