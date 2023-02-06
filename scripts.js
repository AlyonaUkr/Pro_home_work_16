const input = document.getElementById("input");
const divAppear = document.getElementById("div");


input.addEventListener("focus", function() {
    divAppear.classList.toggle("js-appear"); 
})


