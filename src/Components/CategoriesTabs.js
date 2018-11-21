import React, {Component} from 'react';
import Item from './Items';

class Categories extends Component {
	render(){
		const {listItems} = this.props;
		console.log("item: ", listItems);
		return (
			<div id='Categories'>

			<div className="container">
				<ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" role="tab" aria-controls="home"
							aria-selected="true">Shoes</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" role="tab" aria-controls="profile"
							aria-selected="false">Clothing</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" role="tab" aria-controls="contact"
							aria-selected="false">Sports Bag</a>
					</li>
				</ul>


				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show" id="home" role="tabpanel" aria-labelledby="home-tab">
						<div className="container">
							<div className="row">
									{listItems.filter((elem)=>{return elem.category === "1"}).map((item, key) => {
									return (
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
									})}
					
							</div>
						</div>
					
					</div>
					
					<div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<div className="container">
							<div className="row">
								{listItems.filter((elem)=>{return elem.category === "2"}).map((item, key) => {
								return (
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
								})}
							</div>
						</div>
					</div>
					
					<div className="tab-pane fade show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<div className="container">
							<div className="row">

								{listItems.filter((elem)=>{return elem.category === "3"}).map((item, key) => {
								return (
									<Item
									key={key}
									name={item.tool_name}
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
								})}	
							</div>
						</div>
					</div>  
					
				</div>
			</div>

		</div>
	)
}
}

export default Categories