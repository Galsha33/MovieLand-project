
import { useFormik } from "formik";
import { Link } from 'react-router-dom';
import "../movielandCss.css";

function AddMovie (props) {
    const formik = useFormik({
        initialValues:{
            moviename:"",
            genre:"",
            rating:"",
        },
    })
   
    return ( 

        <form className="border border-dark rounded  form-f"
         onSubmit={(e)=>{
            props.sendMovies(e,formik.values)
            e.target.reset();
            }}>
            
            <div>
                <lable htmlFor="">Movie name:</lable>
                    <input 
                    className="form-control form-in"
                    type="text" 
                    name="moviename" 
                    id="moviename" 
                    placeholder="Ex: Die Hard"
                    value={formik.values.moviename} //initializing the defult value of this input for the one in the formik
                    required
                    onChange={formik.handleChange}
                    />
            </div>
            <div>
                <lable htmlFor="">Genre:</lable>
                    <input
                    className="form-control form-in"
                    type="text" 
                    name="genre" 
                    id="genre" 
                    placeholder="Ex: Action"
                    required
                    onChange={formik.handleChange}
                    />
            </div>
            <div>
                <lable htmlFor="">Rating:</lable>
                    <input 
                    className="form-control form-in"
                    type="text" 
                    name="rating" 
                    id="rating" 
                    placeholder="Ex: 8.9"
                    required
                    onChange={formik.handleChange}
                    />
            </div>
            
            
            <div className="d-flex flex-column">
                <button type="submit" className="btn btn-primary m-2">Add the movie!</button>
                <Link to='/'><button className="btn btn-primary mb-2">Back to home screen</button></Link>
            </div>
        </form>


     );
}
 
export default AddMovie;
