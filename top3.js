
const cardWrapper = document.querySelector('.cardWrapper');

// array vi henter
const stories = [
     {
         
        id: 1,
        views: 998,
        img: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        txt: "2022 FIFA World Cup. The 2022 FIFA World Cup is scheduled to be the 22nd edition of the FIFA World Cup, the quadrennial international men's association football championship contested by the national teams of the member associations of FIFA"
    },
     {
        id: 2,
        views: 98,
        img: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_UX182_CR0,0,182,268_AL_.jpg",
        txt: "Hei dette var en bra historie"
    },
     {
        id: 3,
        views: 888,
        img: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL_.jpg",
        txt: "Mange ansatte i google beskriver Google som ett selskap som behandler sine ansatte fantastisk og får betalt i form av motiverte og lojale ansatte"
    },
     {
        id: 4,
        views: 878,
        img: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL_.jpg",
        txt: "Hei dette var en bra historie"
    },
     {
        id: 5,
        views: 45,
        img: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL_.jpg",
        txt: "Hei dette var en bra historie"
    },
     {
        id: 6,
        views: 73,
        img: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL_.jpg",
        txt: "Hei dette var en bra historie"
    },
     {
        id: 7,
        views: 23,
        img: "https://m.media-amazon.com/images/M/MV5BMTM0ODI2MzA0NV5BMl5BanBnXkFtZTYwNjUzMzg2._V1_UY268_CR1,0,182,268_AL_.jpg",
        txt: "Hei dette var en bra historie"
    }
];
console.log(stories);

//Hvor mange vi skal vise frem
const max = 3;

//Sorterer ut top 3 basert på views
const topValues = [...stories].sort( (a , b) => b.views-a.views ).slice(max/10);


//Looper ut arrayet, max 3
for (let i = 0; i < max; i++){
    
    cardWrapper.innerHTML += `
    <div class='card'> 
        <img class='cardImg'src='${topValues[i].img}'>
        <div class='cardTxtWrapper'>
            <p class='cardTxt'> ${topValues[i].txt}</p>
            <div class='cardValueWrapper'>
                <p class='cardValue blueInfo'>Read ${topValues[i].views} times</p> 
                <p class='cardValue redInfo'>${topValues[i].views} unique views</p> 
            <div>
            <div>
        </div>
    </div>
`
}

console.log(stories.views);



