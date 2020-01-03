document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    let mainData = document.querySelector("#mainData")
    let userReviews = document.querySelector("#userReviews")
    let movieBox = document.querySelector("#movieBox")
    let selectBox = document.querySelector("#selectBox")
    let formSubmission = document.querySelector("#formSubmission")
    let reviewButton = document.querySelector("#reviewButton")
    let id;


    // for each movie, print it's title to moviebox selector 
    const populateMovies = async () => {
        try {
            let movies = await axios.get("https://ghibliapi.herokuapp.com/films")
            let movie = movies.data
            movie.forEach(el => {
                let option = document.createElement("option")
                option.innerText = el.title;
                option.value = el.id
                movieBox.appendChild(option)
            })
        } catch (err) {
            console.log(err)
        }
    }
    populateMovies()  // invoke it 


    //for each movie, grab the title... release year and description's value.. and 
    // then append it to the body/div

    const displayReviews = async (id) => {
        try {
            let allFilms = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
            let film = allFilms.data;
            let movieTitle = film.title
            let releaseYear = film.release_date
            let movieDescription = film.description

            let h3 = document.createElement("h3")
            h3.innerText = movieTitle
            mainData.appendChild(h3)

            let p1 = document.createElement("p")
            p1.innerText = releaseYear
            mainData.appendChild(p1)

            let p2 = document.createElement("p")
            p2.innerText = movieDescription;
            mainData.appendChild(p2)
        } catch (err) {
            console.log(err)
        }
    }
    // when a movie is selected (change), display the review
    movieBox.addEventListener("change", (event) => {
        displayReviews(event.currentTarget.value)
    })

    // when the review button is clicked, add the user's value
    reviewButton.addEventListener("click", (event) => {
        event.preventDefault()
        let filmTitle = document.querySelector("h3");
        let li = document.createElement("li");
        let input = document.querySelector("#formSubmission");
        li.innerText = input.value
        let ul = document.querySelector("#userReviews")
        ul.appendChild(li)
    })
})