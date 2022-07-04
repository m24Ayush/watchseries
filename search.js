// Disable right click
document.oncontextmenu = () => {
    return false;
}

// Disable keys
document.onkeydown = k => {
    // Prevent F12 key
    if(k.key == "F12" ){
        return false;
    }
    // Prevent showing page source by crtl + u
    if(k.ctrlKey && k.key == "u"){
       return false; 
    }
    // Also use 'c' and 'v' in place of 'u' to prevent copy and paste
}


// Search Function
const searchquery = () => {
    // taking the value which we enter in the search box in lower case
    let filter = document.querySelector('input');
    let search = filter.value.toLowerCase();
    // console.log(search);

    // taking all the title. It will store in the form of array
    let series = document.getElementsByClassName('list-item');

    for (let i = 0; i < series.length; i++) {
        // taking the title of the series in lower case
        let titleValue = series[i].innerText.toLowerCase();

        // here indexOf give the position in where the giver word starts
        // if it is present it will give the no. which is always greater than -1
        if (titleValue.indexOf(search) > -1) {
            series[i].style.display = '';
        }
        else {
            // set the display property in none (hide the object)
            series[i].style.display = 'none';
        }
        
    }
    
    let button = document.querySelector('#hiso');
    if (search == "@123ayush_show") {
        console.log("HI");
        button.style.display = null;
        button.addEventListener('click', ()=>{
            filter.value = "";
        });
    }else{
        button.style.display = 'none';
    } 
}
