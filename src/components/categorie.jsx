import React, {Component}  from "react";
import "../movielandCss.css";

class Categorie extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
                <button id={this.props.id} type="button" className="btn btn-dark mt-2 categorie "
                    onClick={this.props.disGenre}>
                    {this.props.genre} 
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle span" >
                       {this.props.genreArray[this.props.genre]}
                    </span>
                </button>
                
                
            </React.Fragment>
        );
    }
}
 
export default Categorie;