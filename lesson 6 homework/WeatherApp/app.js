let searchInput = document.getElementById('input')
let searchBtn = document.querySelector('.searchIcon')







fetch(`https://weatherdbi.herokuapp.com/data/weather/tbilisi`,{
    method:'GET'
})
.then((response) =>{
    return response.json()
})
.then((data) => {
    // let city = document.querySelector('.city')
    // let comment  = document.querySelector('.comment')
    // let celsius = document.querySelector('.celsius')
    // let img = document.querySelector('.condition')

    // city.innerText = data.region
    // comment.innerText = data.currentConditions.comment
    // celsius.innerHTML = `${data.currentConditions.temp.c}<sup>o</sup>C`
    // img.setAttribute('src',`${data.currentConditions.iconURL}`)

    let container = document.querySelector('.container')

    for (const element of data.next_days) {
        container.innerHTML += 
        `
            <div class="weather-card">
                <h3>curent location</h3>
                <h2 class="city">${data.region}</h2>
                <h4 class="day">${element.day}</h4>
                <div>
                    <span class="comment">${element.comment}</span>
                    <div class="min-max">
                        <span class="celsius mintemp">min temp: ${element.min_temp.c}<sup>o</sup>C</span>
                        <span class="celsius maxtemp">max temp: ${element.max_temp.c}<sup>o</sup>C</span>
                    </div>
                </div>
                <img class="condition" src="${element.iconURL}" alt="">
            </div>
        
        `
        if(container.firstChild){
            document.querySelector('.day').innerHTML = `${element.day} ( today )`
        }
    }

})






















































// fetch(`https://weatherdbi.herokuapp.com/data/weather/kobuleti`,{
//     method:'GET'
// })
// .then((response)=>{
//     return response.json()
// })
// .then((data)=> {
//     let city = document.querySelector('.city')
//     let comment  = document.querySelector('.comment')
//     let celsius = document.querySelector('.celsius')
//     let img = document.querySelector('.condition')

//     city.innerText = data.region
//     comment.innerText = data.currentConditions.comment
//     celsius.innerHTML = `${data.currentConditions.temp.c}<sup>o</sup>C`
//     img.setAttribute('src',`${data.currentConditions.iconURL}`)

//     let container = document.querySelector('.container')
//     data.next_days.forEach( element => {
//         container.innerHTML += 
//         `
//             <div class="weather-card">
//                 <h3>curent location</h3>
//                 <h2 class="city">${data.region}</h2>
//                 <h4 class="day">${element.day}</h4>
//                 <div>
//                     <span class="comment">${element.comment}</span>
//                     <div class="min-max">
//                         <span class="celsius mintemp">min temp: ${element.min_temp.c}<sup>o</sup>C</span>
//                         <span class="celsius maxtemp">max temp: ${element.max_temp.c}<sup>o</sup>C</span>
//                     </div>
//                 </div>
//                 <img class="condition" src="${element.iconURL}" alt="">
//             </div>
        
//         `
//     });

// })