fetch('https://jsonplaceholder.typicode.com/photos',{
    method:'GET'
})
.then((response) => {
    if ( response.status != 200 ) {
        throw response.status;
    }
    return response.json()
})
.then((data) => {
    let container = document.querySelector('.container')
    // 5000 მონაცემიდან მხოლოდ 300 წამოღება
    for (let index = 0; index < 300; index++) {
        const element = data[index];
        container.innerHTML +=
        `
            <div class="card">
                <img src="${element.url}" alt="">
                <div class="card-body">
                    <h3 class="title">${element.title}</h3>
                    <p class="id">${element.id}</p>
                </div>
            </div>
        `
    }
})
.catch((error) => {
    console.log(error);
    let err = document.createElement('h1')
    err.setAttribute('class','error')
    err.textContent = `error`
    document.body.appendChild(err)
})













