import React, {Component} from "react";
import PropTypes from "prop-types";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = { value: this.props.productQuantity};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(e){
        this.setState(
            prevState => ({
                value : Number(prevState.value)+1
            }),
            function(){
                this.props.updateQuantity(this.state.value);
            }
        );
        e.preventDefault();
    }

    decrement(e){
        e.preventDefault();
        if(this.state.value<=1){
            return this.state.value;        
        } else {
            this.setState(
                prevState => ({
                    value: Number(prevState.value) - 1
                }),
                function(){
                    this.props.updateQuantity(this.state.value);
                }
            );
        }
    }

    feed(e) {
        this.setState(
            {
                value : this.refs.feedQty.value
            },
            function(){
                this.props.updateQuantity(this.state.value);
            }
        );
    }

    resetQuantity(){
        this.setState({
            value: 1
        });
    }

    render(){
        return (
            <div style={{textAlign:"center", padding: "10px"}}>
                <a href="#" className="decrement" style={{backgroundColor:"darkcyan", color:"white", padding:"5px 13px", borderRadius:"50%"}} onClick={this.decrement}>
                    -
                </a>
                <input
                    ref="feedQty"
                    type="number"
                    className="quantity"
                    value={this.state.value}
                    onChange={this.feed.bind(this)}
                    />
                <a href="#" className="increment" style={{backgroundColor:"darkcyan", color:"white", padding:"5px 10px", borderRadius:"50%"}} onClick={this.increment}>
                    +
                </a>
            </div>
        )
    }
}

Counter.propTypes ={
    value : PropTypes.number
};


export default Counter;