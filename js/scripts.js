
/*Trigger the tooltip via JavaScript jQuery:*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


/*Hide and show sections*/
/*with this code i am hiding a portion of text until
the 'Read More' button is clicked. I am also changing
the text on the button (Read More to Read Less) as it
is clicked.*/

function show_hide() {
    var x = document.getElementById("view_more");
    var y = document.getElementById("button_chg");
    if (x.style.display === "none" && y.innerHTML === "Read More") {
        x.style.display = "block";
    	y.innerHTML = "Read Less";
    } else {
        x.style.display = "none";
        y.innerHTML = "Read More";
    }
}
