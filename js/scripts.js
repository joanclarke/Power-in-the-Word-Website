
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


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};



