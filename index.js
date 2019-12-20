document.addEventListener("DOMContentLoaded", () => {
    // let header = document.querySelector("#header")
    let form = document.querySelector("form")
    let mainData = document.querySelector("#mainData")
    let userReviews = document.querySelector("#userReviews")
    let movieBox = document.querySelector("#movieBox")
    let formSubmission = document.querySelector("#formSubmission")
    let reviewButton = document.querySelector("#reviewButton")
    let id;

    const populateMovies = async () => {
        try {
            let movies = await axios.get(`https://ghibliapi.herokuapp.com/films`)
            let movie = movies.data

            movie.forEach(el => {
                let option = document.createElement("option")
                option.innerText = el.title;
                
                movieBox.appendChild(option)



            })
        } catch (err) {
            console.log(err)
        }
    }
    populateMovies()

    const displayReviews = async () => {
        try {
            let allFilms = await axios.get("https://ghibliapi.herokuapp.com/films/")
            let film = allFilms.data;
            let movieTitle = film.title
            let releaseYear = film.release_date
            let movieDescription = film.description

            let h3 = document.createElement("h3")
            h3.innerText = movieTitle
            mainData.appendChild(h3)



            let p1 = document.createElement("p")
            p1.innerText = releaseYear;
            mainData.appendChild(p1)


            let p2 = document.createElement("p")
            p2.innerText = movieDescription;
            mainData.appendChild(p2)



        } catch (err) {
            console.log(err)
        }
    }



    movieBox.addEventListener("change", (event) => {
        document.getElementById("mainData").innerHTML = " ";

        displayReviews(event.currentTarget.value)

    })
})