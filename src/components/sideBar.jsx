import React, {Component}  from "react";
import Categorie from "./categorie";
import "../movielandCss.css";

class SideBar extends Component {
    state = { 
        x:0
     } 
    render() { 
        return (
            <React.Fragment>
                <div className="d-flex flex-column">
                    <h3 class="headLine ">Categories</h3>
                    <button onClick={()=>this.props.bringBackMovies()}  type="button" class="btn btn-dark categorie">All Categories  
                        <span class="badge text-bg-danger px-2">
                            14
                        </span>
                    </button>
                    {this.props.genres.map((g)=>
                        <Categorie
                        genre={g}
                        key={g}
                        id={this.state.x++}
                        disGenre={(e)=>this.props.disGenre(e)}
                        genreArray={this.props.genreArray}
                        />)}

                </div>

            </React.Fragment>
        );
    }
    componentDidMount(){
        {this.props.handleGenre()}
        {this.props.handleGenreNum()}
    }
    
}
 
export default SideBar;