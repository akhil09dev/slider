
const track = document.querySelector(".event-list")
const events = Array.from(track.children)
const nextBtn =document.querySelector(".event__btn--right")
const prevBtn =document.querySelector(".event__btn--left")
const container = document.querySelector(".event__container")
const slideWidth = events[0].getBoundingClientRect().width;
const conWidth = container.getBoundingClientRect().width;
const slideNum = Math.floor(conWidth/slideWidth);

//buttons
nextBtn.onclick = function(){
    document.querySelector(".event-list").scrollBy({
        top:0,
        left:slideWidth*slideNum,
        behavior:'smooth'
    });
    
}
prevBtn.onclick = function(){
    document.querySelector(".event-list").scrollBy({
        top:0,
        left:-slideWidth*slideNum,
        behavior:'smooth'
    });}