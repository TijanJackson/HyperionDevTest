let buttonOneProgressCheck = true;
let progressBtnOne = document.getElementById("progressBtnOne");
let tick = document.getElementById("tickOne");

function buttonCheckFunc () {
    if (buttonOneProgressCheck == true) {
        tick.classList.remove('d-none');
        progressBtnOne.classList.add('active-btn');
    }
}