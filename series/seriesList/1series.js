let title = document.querySelector('title').innerText;
console.log(title);
const container = document.querySelector('.container');
const ep = document.createElement('div'); 
ep.className = "season-episode";


fetch("/series/series.json")
.then(response => response.json())
.then(data => {
    // console.log(data);

    //Display all seasons episodes
    data.forEach(item => {
        // console.log(item.title);

        if (title.indexOf(item.title) > -1) {
            for (let i = 0; i < item.season.length; i++) {
                let season = `<div class="season">
                <h2>Season ${i+1}</h2>
                </div>`;
                container.innerHTML += season;
                
                for (let j = 0; j < item.season[i].length; j++) {
                    let episode = `<button class="button"><a href="${item.season[i][j]}">Episode${j+1}</a></button>
                    `;
                    // console.log(episode);
                    // ep.innerHTML += episode;
                    container.innerHTML += episode;
                }
                // console.log(ep)
                container.innerHTML += `<hr class="line">`;
            }
            
        }
    });
});
