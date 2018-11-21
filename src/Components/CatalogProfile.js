import React, {Component} from 'react';

const style = {
    width : "200px",
    display : "block",
    backgroundColor : "lightblue"
}
class CatalogProfile extends Component {
    render(){
        return (
            <div className="container">
                <div className="row" style={{paddingTop:150, paddingBottom:100}}>
                    <div className="col-6">
                        <div>
                        <img className="img-profil ml-auto" style={style} src="https://i.pinimg.com/originals/a0/ae/b7/a0aeb7cf313bd1f4e3ab8b6fe906aebe.jpg" alt="profile"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div><span>Name : {this.props.name}</span></div>
                        <div><span>Username : {this.props.username}</span></div>
                        <div><span>Email : {this.props.email}</span></div>
                        <div><span>No_telp : {this.props.no_telp}</span></div>
                        <div><span>Address : {this.props.address}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CatalogProfile