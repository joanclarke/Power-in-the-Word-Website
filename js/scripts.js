
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






// var video_list      = ["video/pwm-church-10802-2.mp4",
//                                 "video/smallGroup2.mp4",
//                                 "video/worship.mp4"
//                             ];
//         var video_index     = 0;
//         var video_player    = null;

//         function onload(){
//             console.log("body loaded");
//             video_player        = document.getElementById("idle_video");
//             video_player.setAttribute("src", video_list[video_index]);
//             video_player.play();
//         }

//         function onVideoEnded(){
//             console.log("video ended");
//             if(video_index < video_list.length - 1){
//                 video_index++;
//             }
//             else{
//                 video_index = 0;
//             }
//             video_player.setAttribute("src", video_list[video_index]);
//             video_player.play();
//         }