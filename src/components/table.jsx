import React, {Component} from 'react';
import Movie from './movie';

class Table extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
               
                <h2>Movies List</h2>
 
                <table className="position-relative table table-dark table-sm mt-3 t">
                    <thead>
                        <tr className="tr">
                            <td className="td">#</td>
                            <td className="td">Name</td>
                            <td className="td">Genre</td>
                            <td className="td">Rating</td>
                            <td className="td">Did you liked the movie?</td>
                            <td className="td">Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map(movie=>
                            <Movie
                            movie={movie}
                            key={movie.id}
                            delet={()=>this.props.myDelete(movie.id)}
                            fullHeart={(i)=>this.props.fullHeart(i)}/>)}
                    </tbody>
                </table>
                
                
            </React.Fragment>
        );
    }
    
    
}
 
export default Table;