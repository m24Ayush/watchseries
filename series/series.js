// fetch data from json file and display all series card
// fetch("item.json")
fetch("series.json")
.then(response => response.json())
.then(data => {
    // console.log(data);
    
    const list = document.querySelector('.list');
    // console.log(list);
    
    // Display multiple series card using json file
    // for (let i = 0; i < data.series.length; i++) {
    data.forEach(element => {
        
        // creating a div element
        const item = document.createElement('div');
        // give it a class name
        item.className = 'list-item';
        
        const listItem = `
        <a href=${element.link}>
        <img class="list-item-img" src=${element.image}>
        <h2 class="list-item-title">${element.title}</h2>
        </a>`;
        
        // adding html in the div tag
        item.innerHTML += listItem;
        list.appendChild(item);
    });
});
