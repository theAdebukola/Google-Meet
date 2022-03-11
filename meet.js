//handleDate
let date = new Date();
let monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let dayArray = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
let currentDate = ` ${dayArray[date.getDay()]},${monthArray[date.getMonth()]}${date.getDate()}`;
let currentDay = `${date.getHours()} : ${date.getMinutes()} .`;
document.getElementById('display').innerHTML = currentDate;
document.getElementById('display2').innerHTML = currentDay;

//handleSlides
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//to display the new meeting options
let hold = document.getElementById("pick");
 function handleList() {
   if(hold.style.display == "block"){
     hold.style.display = "none";
   }
   else{
     hold.style.display = "block";
   }
  }

  //to display the new support options
let sup = document.getElementById('supprt');
function handleSupport() {
  if(sup.style.display == "block"){
    sup.style.display = "none";
  }
  else{
    sup.style.display = "block";
  }
 }

//for the create meeting link option
function popModal() {
  $(document).ready(function() {
    $("#modal").modal("show");

    $(".pop").click(function() {
        $("#modal").modal("hide");
    });

    $("#modal").on('hide.bs.modal', function() {
    });
});
}

//for the feedback modal
function handleFeedback() {  
  //alert('page working');
  $(document).ready(function() {
    $("#feedback").modal("show");

    $(".feed").click(function() {
        $("#feedback").modal("hide");
    });

    $("#feedback").on('hide.bs.modal', function() {
    }); 
});
}

//for generating random links
function generateRandom(length) {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 document.getElementById('link').innerHTML = `meet.google.com/${result}`;
 
}
console.log(generateRandom(10));

//to copy link generated
function handleCopy(){
  let range = document.createRange();
  range.selectNode(document.getElementById("link"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
