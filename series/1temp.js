const title = document.querySelector('title');
title.innerText = localStorage.getItem('title');
console.log(title.innerText);
let sInfo = document.querySelector('.series-info');
sInfo.innerHTML = `<h1>${title.innerText}</h1>
                    <p>Genre: ${localStorage.getItem('genre')}</p>`;


const container = document.querySelector('.container');
fetch("series.json")
.then(response => response.json())
.then(data => {
    // console.log(data);
    
    //Display all seasons episodes
    data.forEach(item => {
        // console.log(item.title);
        

        if (title.innerText == item.subtitle) {
            for (let i = 0; i < item.season.length; i++) {
                let season = `<div class="season">
                <h2>Season ${i+1}</h2>
                </div>`;
                container.innerHTML += season;
                
                for (let j = 0; j < item.season[i].length; j++) {
                    let episode = `<button class="button"><a href="https://sbfull.com/${item.season[i][j]}.html">Episode${j+1}</a></button>
                    `;
                    // console.log(episode);
                    container.innerHTML += episode;
                }
                container.innerHTML += `<hr class="line">`;
            }
            
        }
    });
});
