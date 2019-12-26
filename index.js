document.addEventListener("DOMContentLoaded", () => {
    // let header = document.querySelector("#header")
    let form = document.querySelector("form")
    let mainData = document.querySelector("#mainData")
    let userReviews = document.querySelector("#userReviews")
    let movieBox = document.querySelector("#movieBox")
    let selectBox = document.querySelector("#selectBox")
    let formSubmission = document.querySelector("#formSubmission")
    let reviewButton = document.querySelector("#reviewButton")
    let id; 

    const populateMovies = async () => {
        try {
            let movies = await axios.get("https://ghibliapi.herokuapp.com/films")
            let movie = movies.data
            
            // await axios.get("https://ghibliapi.herokuapp.com/films/{id}")
            // movies.id
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
    populateMovies()

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
    const userReview = (userR) => {
        let li = document.createElement("li")
        let title = document.createElement("p")
        title.innerText = movieBox.options[movieBox.selectedIndex].text + ": "
        
        let post = document.createElement("p")
        li.innerText = review
        li.className = "reviews"
        li.prepend(title)
        submissions.appendChild(li)
    }



    movieBox.addEventListener("change", (event) => {
        document.getElementById("mainData").innerHTML = " ";
        displayReviews(event.currentTarget.value)

    })
    reviewButton.addEventListener("submit", (event) => {
        event.preventDefault(userInput.value)
        userReview()

        

        userReviews.appendChild(li)


    })   
// dropdown box ; when you change the drop down slector 

// select.addEventListener("change", (event) => {
//     title.innerText = ""
//     releaseEvents.innerText = ""
//     description.innerText = ""
//     getReviews(event.currentTarget.value)
})