import React, {Component} from 'react';
import Item from './Items';

class AllItems extends Component{
    render(){
        const {listItems} = this.props;
		console.log("item: ", listItems);
		let term = this.props.searchTerm;
		console.log("term : ", term)
		if (term == ""){
			return(
				<div className="container">
					<div className="row">
						{/* <div classaName="col-md-4"> */}
					{listItems
						.map((item, key) => {
							return(
								<Item
								key={key}
								name={item.tool_name}
								// desc={item.desc}
								category={item['tool_category.name']}
								price={item.price}
								stock={item.stock}
								url_picture={item.url_picture}
								user_id={item.user_id}
								id={item.id}
								username = {item['users.name']}
								updateQuantity={this.props.updateQuantity}
								addToCart={this.props.addToCart}
								productQuantity={this.props.productQuantity}
								/>
								);
						})
					}
						{/* </div> */}
					</div>
				</div>
			)
		}else{
			return(
				<div className="container">
					<div className="row">
						{/* <div classaName="col-md-4"> */}
					{listItems
						.filter((item)=>{return item.tool_name.toLowerCase().includes(term.toLowerCase()) == term.toLowerCase().includes(term.toLowerCase())})
						.map((item, key) => {
							console.log('adasdadsa')
							return(
								<Item
								key={key}
								name={item.tool_name}
								// desc={item.desc}
								category={item['tool_category.name']}
								price={item.price}
								stock={item.stock}
								url_picture={item.url_picture}
								user_id={item.user_id}
								id={item.id}
								username = {item['users.name']}
								updateQuantity={this.props.updateQuantity}
								addToCart={this.props.addToCart}
								productQuantity={this.props.productQuantity}
								/>
								);
						})
					}
						{/* </div> */}
					</div>
				</div>
			)
		}
    }
}

export default AllItems;