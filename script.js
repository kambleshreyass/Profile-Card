
document.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y,
    scale:1,
    transform: "translate(-50%,-50%)"
  })
})
document.addEventListener("mousemove",function(dets){
  gsap.to(".cursor-1",{
    left:dets.x,
    top:dets.y,
    scale:1,
    transform: "translate(-50%,-50%)"
  })
})

var card = document.querySelector("#card");
var cursor = document.querySelector("#cursor");

card.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    scale:1,
    opacity:1,
    display: "block"
  })
})
