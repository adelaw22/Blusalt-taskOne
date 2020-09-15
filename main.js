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
        taskOne = 1
    }
    x[taskOne - 1].style.display = "block";
    setTimeout(carousel, 3000);
}


function myFunction() {
    document.getElementById("Dropdown-content").style.display = "block";
}


window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("Dropdown-content");
        if (myDropdown.style.display = "block") {
            myDropdown.style.display = "none";
        }
    }
}

$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(".modal-content").slideDown();
    })

    $('.modal-content').click(function () {
        $(".fa-times").slideUp();
    })
});