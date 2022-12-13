import React, {Component}  from "react";
import "../movielandCss.css"; 
import {Outlet,Link, Route} from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
            <div class="Header" className="d-flex flex-column text-wrap">
                <div class="Logo" className="logo">
                <Link to="/"> <button onClick={()=>this.props.bringBackMovies()}><h1 className="fw-bold text-wrap logo ">MovieLand</h1></button></Link>
                </div> 
                <div class="add_movie">
                    
                <Link to="/AddMovie"><button type="button" className="add btn btn-light">Add Movie</button></Link>

                </div>
                <div class="page filter" className="filter">
                    <label className="fs-5 filter-label">items in page: </label>
                    <input type="number" onKeyUpCapture={(e)=>this.props.howManyMoviesInPage(e)}></input>
                </div>
                <div className="pageNavBar">
                <nav aria-label="Page navigation">
                        <ul class="pagination">
                            {this.props.pages.map((page,i)=>
                                <li key={i} class="page-item" onClick={(e)=>this.props.changePages(e)}><a class="page-link">{i+1}</a></li>)}
                        </ul>
                </nav>
                </div>
                

            </div>
            
         </React.Fragment>
        );
    }

}
 
export default NavBar;
 
