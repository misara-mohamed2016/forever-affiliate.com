//toggle the left nav bar
document.getElementById("humbergur").onclick = function(){
    document.querySelector("body").classList.toggle("navopen");
    document.querySelector(".left_bar").classList.toggle("open_nav");
    document.getElementById("humbergur").classList.toggle("active");
}

//give progress width
document.querySelectorAll(".linprog_value").forEach(progress => {
    progress.style.width = progress.dataset.pvalue + "%";
})