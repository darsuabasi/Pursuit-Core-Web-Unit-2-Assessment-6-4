document.addEventListener("DOMContentLoaded", () => {
    let header = document.querySelector("#header")
    let selectBox = document.querySelector("#selectBox")
    let mainData = document.querySelector("#mainData")
    let infoButton = document.querySelector("#infoButton")
    let userReviews = document.querySelector("#userReviews")
    let movieBox = document.querySelector("#movieBox")
    let formSubmission = document.querySelector("#formSubmission")
    let id ;

    const displayMovies = async () => {
        try {
            let movies = await axios.get(`https://ghibliapi.herokuapp.com/films${id}`)
            let title = movies.title
            title.forEach(movies => {
                // let title = movies.title;
                let option = document.createElement("option")
                option.innerText = title;
                movieBox.appendChild(option)
            })
        }catch (err) {
            console.log(err)
        }
    }
    const getReviews = async () => {
        try {
            let allFilms = await axios.get("https://ghibliapi.herokuapp.com/films")

            allFilms.forEach(el => {
                let movieTitle = allFilms.title;
                let releaseYear = allFilms.release_date;
                let movieDescription = allFilms.description;

                h3.innerText = movieTitle;
                let h3 = document.createElement("h3")
                mainData.appendChild(h3)

                p1.innerText = releaseYear;
                let p1 = document.createElement("p")
                mainData.appendChild(p1)

                p2.innerText = movieDescription;
                let p2 = document.createElement("p")
                mainData.appendChild(p2)

            })

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






