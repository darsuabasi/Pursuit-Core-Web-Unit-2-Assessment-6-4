document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector("#header")
    let selectBox = document.querySelector("#selectBox")
    let mainData = document.querySelector("#mainData")
    let infoButton = document.querySelector("#infoButton")
    let userReviews = document.querySelector("#userReviews")
    let movieBox = document.querySelector("#movieBox")
    let formSubmission = document.querySelector("#formSubmission")
    // let url = "https://ghibliapi.herokuapp.com/films"
    let id ;

    const displayMovies = async () => {
        try {
            let movies = await axios.get(`https://ghibliapi.herokuapp.com/films`)
            let movie = movies.data

            movie.forEach(el => {
                let option = document.createElement("option")
                option.innerText = el.title;
                option.value = el.url          // for each value, grab the url; make it the innerText
                movieBox.appendChild(option)
            })
        }catch (err) {
            console.log(err)
        }
    }
   displayMovies()
    const getReviews = async () => {
        try {
            let allFilms = await axios.get("https://ghibliapi.herokuapp.com/films")
            let filmInfo = allFilms.data
            console.log(filmInfo)
            // allFilms.forEach(el => {
            //     let movieTitle = filmInfo.title;
            //     let releaseYear = filmInfo.release_date;
            //     let movieDescription = filmInfo.description;

            //     h3.innerText = movieTitle;
            //     let h3 = document.createElement("h3")
            //     mainData.appendChild(h3)

            //     p1.innerText = releaseYear;
            //     let p1 = document.createElement("p")
            //     mainData.appendChild(p1)

            //     p2.innerText = movieDescription;
            //     let p2 = document.createElement("p")
            //     mainData.appendChild(p2)

            // })
            title.innerText = filmInfo.title
            releaseYear.innerText = filmInfo.releaseYear
            movieDescription.innerText = filmInfo.movieDescription

        } catch (err) {
            console.log(err)
        }
    }
    infoButton.addEventListener("click", () => {
        document.getElementById("mainData").innerHTML = " ";
        getReviews()
    })
    formSubmission.addEventListener("submit",(event) =>{
        event.preventDefault()
        let newLi = document.createElement("li")
        newLi.innerText = "userInput.value"
        userReviews.appendChild(newLi)
    
    
    })

})

// dropdown box ; when you change the drop down slector 

// select.addEventListener("change", (event) => {
//     title.innerText = ""
//     releaseEvents.innerText = ""
//     description.innerText = ""
//     getReviews(event.currentTarget.value)
// })






