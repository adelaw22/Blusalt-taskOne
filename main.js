let taskOne = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("carousel-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  taskOne++;
  if (taskOne > x.length) {
    taskOne = 1;
  }
  x[taskOne - 1].style.display = "block";
  setTimeout(carousel, 3000);
}

// product dropdown button
// function myFunction() {
//   document.getElementById("Dropdown-content").style.display = "block";
// }

// window.onclick = function(e) {
//   if (!e.target.matches(".dropbtn")) {
//     let myDropdown = document.getElementById("Dropdown-content");
//     if ((myDropdown.style.display = "block")) {
//       myDropdown.style.display = "none";
//     }
//   }
// };

function myFunction() {
  document.getElementById("Dropdown-content").style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("Dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if ((openDropdown.style.display = "block")) {
          openDropdown.style.display = "none";
      }
    }
  }
};
