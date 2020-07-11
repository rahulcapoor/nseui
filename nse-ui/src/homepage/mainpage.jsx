import AutoComplete from "../components/AutoComplete.jsx";
import React, { Component } from "react";

export default class TraderDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: 'The Shawshank Redemption', year: 1994 },
                { title: 'The Godfather', year: 1972 },
                { title: 'The Godfather: Part II', year: 1974 },
                { title: 'The Dark Knight', year: 2008 },
                { title: '12 Angry Men', year: 1957 }
            ]
        }
    }


    render() {
        return (
            <div style={{ marginTop: 25, marginBottom: 25 }}>
                <AutoComplete
                    label='search stock'
                    data={this.state.data || []}>
                </AutoComplete>
            </div>
        );
    }

}