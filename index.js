let buttonOneProgressCheck = true;
let progressBtnOne = document.getElementById("progressBtnOne");
let tick = document.getElementById("tickOne");

//Vanilla js function to adjust styling of progress buttons if boolean value is true
function buttonCheckFunc () {
    if (buttonOneProgressCheck == true) {
        tick.classList.remove('d-none');
        progressBtnOne.classList.add('active-btn');
    }
}

// Multiple jquery functions to toggle display classes

$("#menu-toggle").click(function(){
    $(".toggle").toggle();
    $(".navbar-nav").toggleClass('shadow-sm');
  });

  $("#question").mouseenter(function(){
    $("#explain").toggleClass('explain-display');
  });

  $("#question").mouseleave(function(){
    $("#explain").toggleClass('explain-display');
  });