import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            job: ''
        };
    }
    handleButton=()=>{
        this.props.updateNames(this.state)
    }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
handleInput=(e)=>{
    this.setState({
    job:e.target.value
    })
}

    render() {
        const { name, job } = this.state; 
        return (
            <form>
                <h2>{name} {job}</h2>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    
                    id="name"
                    
                    onChange={this.handleChange}
                     />
                <label htmlFor="job">Job</label>
                <input 
                    type="text" 
                    
                    id="job"
                     
                    onChange={this.handleInput}
                     />
                <button type="button" onClick={this.handleButton}>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
