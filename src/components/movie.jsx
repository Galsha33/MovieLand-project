import React, {Component}  from "react";
import "../movielandCss.css";

class Movie extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <tr className="tr">
                    <td className="td">{this.props.movie.id}</td>
                    <td className="td">{this.props.movie.name}</td>
                    <td className="td">{this.props.movie.genre}</td>
                    <td className="td">{this.props.movie.rating}</td>
                    <td className="td"><i onClick={()=>this.props.fullHeart(this.props.movie.id)} class={this.props.movie.heart}></i></td>
                    <td className="td"><button className="btn btn-primary btn-sm" 
                    onClick={this.props.delet}>Remove</button></td>
                </tr>
            
            </React.Fragment>
        );
    }
}
 
export default Movie;