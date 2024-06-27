const nav = document.querySelector("nav");
const li = nav.querySelectorAll("li");


li.forEach((el) => {
  el.addEventListener("mouseover", function() {
    this.style.backgroundColor = "gray";
  });

  el.addEventListener("mouseout", function() {
    this.style.backgroundColor = "black";
  });
});


function myfunction(){

  let name = document.getElementById("name").value;
  let review = document.getElementById("review").value;
  var value = 0;

    if (document.getElementById("rating-5").checked) {
      value =5;
    }
  
    if (document.getElementById("rating-4").checked) {
      value =4;
    }
  
  
    if (document.getElementById("rating-3").checked) {
      value =3;
    }

  
  
    if (document.getElementById("rating-2").checked) {
      value =2;
    }
  
  

    if (document.getElementById("rating-1").checked) {
      value =1;
    }
  
  
  // Create a new row
  var table = document.getElementById("myTable");
  var newRow = table.insertRow(1);
  
  // Insert new cells into the row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 =newRow.insertCell(2);

  // Set the cell values using the input data
  cell1.innerHTML = name;
  cell2.innerHTML = value;
  cell3.innerHTML=review;


    
    // Insert new cells into the row

    
    // Set the cell values using the input data

  
  
  
  // Reset the rating value to 0
  value = 0;
  document.getElementById("name").value='';
  document.getElementById("rating-4").checked=true;
  document.getElementById("review").value='';


}
var countDownDate = new Date("June 30, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval( function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
},1000);
