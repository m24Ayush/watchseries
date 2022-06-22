// Search Function
const searchquery = () => {
    // taking the value which we enter in the search box in lower case
    let filter = document.getElementById('input').value.toLowerCase();
    // console.log(filter);

    // taking all the title. It will store in the form of array
    let series = document.getElementsByClassName('list-item');

    for (let i = 0; i < series.length; i++) {
        // taking the title of the series in lower case
        let titleValue = series[i].innerText.toLowerCase();

        // here indexOf give the position in where the giver word starts
        // if it is present it will give the no. which is always greater than -1
        if (titleValue.indexOf(filter) > -1) {
            series[i].style.display = '';
        }
        else {
            // set the display property in none (hide the object)
            series[i].style.display = 'none';
        }
    }
}