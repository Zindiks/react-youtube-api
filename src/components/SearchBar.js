import React from "react";





class SearchBar extends React.Component{


    state = {
        value: '',

    }






 onFormSubmit =(e)=>{
        e.preventDefault()

        this.props.onSubmit(this.state.value)

        this.setState({value: ""})

    }
   


    render(){
        return (
 


            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field" >
                        <label>Input</label>
                        <input type="text"  onChange={(e) => this.setState({value: e.target.value})} value={this.state.value}/>
                    </div>
                </form>
            </div>

        )

    }



}

export default SearchBar;
