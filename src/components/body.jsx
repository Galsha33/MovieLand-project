import React, {Component}  from "react";
import Movie from './movie';
import "../movielandCss.css";
import { BrowserRouter, Routes,Route, Router} from 'react-router-dom';
import AddMovie from "./addMovie";
import Table from "./table";

class Body extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <Routes>

                    <Route path="/" element={<Table 
                    movies={this.props.movies} 
                    myDelete={(id)=>this.props.myDelete(id)} 
                    fullHeart={(i)=>this.props.fullHeart(i)}/>}/>


                    <Route path="/AddMovie" element={<AddMovie sendMovies={(e,val)=>this.props.sendMovies(e,val)}
                    />}/>

                 </Routes>
            </React.Fragment>
        );
    }
    
    
}
 
export default Body;