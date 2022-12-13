import React, {Component}  from "react";
import "../movielandCss.css";
import NavBar from "./navBar";
import SideBar from "./sideBar";
import Body from "./body";


class App extends Component {
    state = { movies:[
        {id:1,name:'Die Hard',genre:'Action',rating:8.4,heart:'bi bi-heart' },

        {id:2,name:'Interstaller',genre:'Action',rating:9.5,heart:'bi bi-heart'},

        {id:3,name:'Shutter Island',genre:'Thriller',rating:8.7,heart:'bi bi-heart'},

        {id:4,name:'End game',genre:'Sci-fi',rating:8.5,heart:'bi bi-heart'},

        {id:5,name:'Ted',genre:'Comedy',rating:7.5,heart:'bi bi-heart'},

        {id:6,name:'Bruce almighty',genre:'Comedy',rating:8.3,heart:'bi bi-heart'},

        {id:7,name:'Split',genre:'Thriller',rating:8.9,heart:'bi bi-heart'},

        {id:8,name:'Scar-face',genre:'Thriller',rating:8.6,heart:'bi bi-heart'},

        {id:9,name:'Man in Black',genre:'Sci-fi',rating:8.8,heart:'bi bi-heart'},

        {id:10,name:'2012',genre:'Sci-fi',rating:7.5,heart:'bi bi-heart'},

        {id:11,name:'The Dictator',genre:'Comedy',rating:9.5,heart:'bi bi-heart'},

        {id:12,name:'Focus',genre:'Thriller',rating:8.5,heart:'bi bi-heart'},

        {id:13,name:'The Vow',genre:'Romance',rating:9.2,heart:'bi bi-heart'},

        {id:14,name:'IT',genre:'Horror',rating:6.8,heart:'bi bi-heart'}
    ],
    genresList: [],
    disGenre:[],
    genreArray:[],
    sumGenre: 0,
    mainPageOn: true,
    numOfMoviesInPages:0,
    restOfMovies:0,
    numOfPages:[],


}
    render() { 
        return (
            <React.Fragment>
            <div className='s m-0 ml-0'>
                <div className='row r1'>
                    <div class='Header' className='col'><NavBar // contains the site logo and page filter
                    movies={this.state.movies}
                    bringBackMovies={()=>this.bringBackMovies()}
                    howManyMoviesInPage={(e)=>this.howManyMoviesInPage(e)}
                    changePages={(e)=>this.changePages(e)}
                    pages={this.state.numOfPages}
                    /></div>
                </div>
                <div className='row'>
                    <div class='Categories' className='col-2 r2 '><SideBar // contains the categorie list, created by the handleGenre functions
                    genres={this.state.genresList}
                    genreArray={this.state.genreArray}
                    disGenre={(e)=>this.displayGenre(e)} 
                    handleGenre={()=>this.handleGenre()}
                    handleGenreNum={()=>this.handleGenreNum()}
                    handleGenreSum={()=>this.handleGenreSum()}
                    bringBackMovies={()=>this.bringBackMovies()}
                    /></div>
                    <div class='Main' className='col-10 '><Body // contains all the movies components in the table, and the delete button
                    movies={this.state.disGenre} 
                    myDelete={(id)=>this.handleDelete(id)} 
                    fullHeart={(i)=>this.fullHeart(i)}
                    sendMovies={(e,val)=>this.sendMovies(e,val)}
                    bringBackMovies={()=>this.props.bringBackMovies()}
                    /></div>
                </div>
                
            </div>
                


        </React.Fragment> 
        );
    }
    
    componentDidMount=()=>{ // making sure the disGenre array is getting the movies data
        if(this.state.mainPageOn == true){
            this.state.disGenre = [...this.state.movies];
            this.state.mainPageOn = false;
            this.setState({disGenre:this.state.disGenre});
        }
    }
    fullHeart=(i)=>{ // handle the Like button
        let movies=this.state.movies;
        let movies2=this.state.disGenre;
        let index = movies.findIndex(val => val.id === i)
        let index2 = movies2.findIndex(val => val.id === i);
        if(movies[index].heart=='bi bi-heart' && movies2[index2].heart =='bi bi-heart'){
        movies[index].heart='bi bi-suit-heart-fill';
        movies2[index2].heart='bi bi-suit-heart-fill';
        }
        else if( movies[index].heart=='bi bi-suit-heart-fill' && movies2[index2].heart=='bi bi-suit-heart-fill'){
        movies[index].heart='bi bi-heart';
        movies2[index2].heart='bi bi-heart';
        }
        this.setState({disGenre: movies2})
    }
    bringBackMovies=()=>{ // handle the all Categories button on the side bar and Logo
        this.state.disGenre = [...this.state.movies];
        this.setState({disGenre:this.state.disGenre});
    }
    
    handleDelete=(movieId)=>{ //deleting a movie component from the table
        const movies=this.state.movies.filter(val => val.id !== movieId);
        const movies2=this.state.disGenre.filter(val => val.id !== movieId);
        this.state.movies=movies;
        this.state.disGenre=movies2;
        this.handleGenre();
        this.handleGenreNum();
        this.setState({disGenre:this.state.disGenre});
    };
    handleGenre=()=> //filtering the database with Set and making an array with the genres in the database
    {
        let genres = new Set(this.state.movies.map(g =>g.genre ));
        this.state.genresList = Array.from(genres);
        this.setState({genresList: this.state.genresList});

    };
    handleGenreNum=()=>{ // counting the number of times each genre is showed in the database
            const seret = [...this.state.movies];
           const genreCounts = seret.reduce((counts,movie)=>{
            if(counts.hasOwnProperty(movie.genre)){
                counts[movie.genre]++;
            } else {
                counts[movie.genre]=1;
            }
            return counts;
           },[]);
            this.state.genreArray = genreCounts;
            this.setState({genreArray:this.state.genreArray});
        
        }    
    displayGenre=(e)=>{ //filtering the movies array to movies with a specific genre
        const showMovies= this.state.movies.filter(g=>g.genre==e.target.childNodes[0].textContent);
        this.state.disGenre = showMovies;
        this.setState({disGenre:this.state.disGenre})           
        this.handleGenreNum();
    };
    chooseWhatToPrint=()=>{// making sure the disGenre array is getting the movies data and disabling the componentDidMount function
        this.state.disGenre = [...this.state.movies];
        this.state.mainPageOn = false;
    };
    howManyMoviesInPage=(e)=>{ // getting the value inside a navbar button for the pagination
        const index = Math.ceil(this.state.movies.length/e.target.valueAsNumber); // number of pages
        const numOfMoviesInPages = e.target.valueAsNumber; //  number of movies in one page
        const restOfMovies = this.state.movies.length%e.target.valueAsNumber // number of movies left for the last page
        const numOfPages = [];
        for (let i = 1; i <= index; i++) {
            numOfPages.push(i);
        }
        this.state.numOfMoviesInPages=numOfMoviesInPages;
        this.state.restOfMovies=restOfMovies;
        this.state.numOfPages = numOfPages;
        this.setState({numOfMoviesInPages:this.state.numOfMoviesInPages});
        this.setState({restOfMovies:this.state.restOfMovies});
        this.setState({numOfPages:this.state.numOfPages});
        
    }
    changePages=(e)=>{ // updeting the displaied array with the movies i want to show in each page
        const end = e.target.innerHTML * this.state.numOfMoviesInPages;
        const start = end - this.state.numOfMoviesInPages;
        const moviesInPage = this.state.movies.slice(start,end);
       this.state.disGenre = moviesInPage;
       this.setState({disGenre: this.state.disGenre});
        
    }
    sendMovies=(e,val)=>{ //Adding a new movie to the database 
        e.preventDefault();
        const newMovie = {
            id:this.state.movies[this.state.movies.length-1].id+1,
            name:val.moviename,
            genre:val.genre,
            rating:val.rating,
            heart:'bi bi-heart'
        }
        let movies2 = [...this.state.movies];
        movies2.push(newMovie);
        this.state.movies=[...movies2];
        this.setState({movies:this.state.movies});
        this.setState({disGenre:this.state.disGenre});
        alert('a new movies has been added');
        this.handleGenreNum();
        this.handleGenre();
    }
}
 
export default App;