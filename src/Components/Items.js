import React, {Component} from "react";
import './Items.css';
import { Link, withRouter } from 'react-router-dom';
import {connect } from "unistore/react";
import {actions} from "../store";
import Counter from "./Counter";

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedProduct: {},
            // quickViewProduct: {},
            isAdded: false
        };
    }

    addToCart(url_picture, name, price, id, quantity){
        this.setState(
            {
                selectedProduct:{
                    url_picture : url_picture,
                    name : name,
                    price : price,
                    id: id,
                    quantity : quantity 
                }

            },
        function(){
            this.props.addToCart(this.state.selectedProduct);
        }
        );
        this.setState(
            {
                isAdded: true
            },
            function(){
                setTimeout(() =>{
                    this.setState(
                        {
                            isAdded : false,
                            selectedProduct : {}
                        }
                    );
                }, 3500);
            }
        );
    }
    render(props){
        let url_picture = this.props.url_picture;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.props.productQuantity;
        const route='/details/'+this.props.id
        if(this.props.is_login){
            return (
                <div className="col-xs-12 col-sm-4">
                <div className="card mb-3">
                    <img className="card-img-top" src={url_picture}
                        alt="Card cap" />
                    <div className="card-body-item" style={{padding:20, backgroundColor:"darkcyan"}}>
                        <h4 className="card-title-item">{name}</h4>
                        <p className="card-text-category">{this.props.category}</p>
                        <p className="card-text-price"><strong style={{padding:"5px"}}>Rp {price},-</strong></p>
                        <p className="card-text-stock">{this.props.stock} items left</p>
                        {/* <p className="card-text-user">seller : {this.props.username}</p> */}
                    <Link to={route}><button style={{backgroundColor:"white", borderRadius:"30px", color:"darkcyan", padding:"7px 9px"}}><strong>Detail</strong></button></Link>
                    </div>
                    <Counter
                        productQuantity={quantity}
                        updateQuantity={this.props.updateQuantity}
                        resetQuantity={this.resetQuantity}
                    />
                    <div className="product-action" style={{textAlign:"center", padding:"10px"}}>
                        <button
                            style={{backgroundColor:"darkcyan", color:"white"}}
                            className={!this.state.isAdded? "":"added"}
                            type="button"
                            onClick={this.addToCart.bind(
                                this,
                                url_picture,
                                name,
                                price,
                                id,
                                quantity
                            )}
                        >   
                            {!this.state.isAdded?<strong>ADD TO CART</strong>:<strong>ADDED</strong>}
                        </button>
                    </div>
                </div>
            </div>
            )
        } else{
            return(
                <div className="col-xs-12 col-sm-4">
                <div className="card mb-3">
                    <img className="card-img-top" src={url_picture}
                        alt="Card cap" />
                    <div className="card-body-item" style={{padding:20, backgroundColor:"darkcyan"}}>
                        <h4 className="card-title-item">{name}</h4>
                        <p className="card-text-category">{this.props.category}</p>
                        <p className="card-text-price"><strong style={{padding:"5px"}}>Rp {price},-</strong></p>
                        <p className="card-text-stock">{this.props.stock} items left</p>
                        {/* <p className="card-text-user">seller : {this.props.username}</p> */}
                    <Link to={route}><button style={{backgroundColor:"white", borderRadius:"30px", color:"darkcyan", padding:"7px 9px"}}><strong>Detail</strong></button></Link>
                    </div>
                </div>
            </div>
            )
        }
    }
}

// export default Item
export default connect("listTools, tool, token, type, is_login", actions)(withRouter(Item))
