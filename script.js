var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

// "dets" is a object that has all the attributes of mousemove like
// x-value and y-value and co-ordinates etc..
main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"

})

document.querySelector("#overlay1").addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.left = dets.x + "px"
    document.querySelector("#elem1 img").style.top = dets.y + "px"

})