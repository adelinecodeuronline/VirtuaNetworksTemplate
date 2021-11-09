
let references = document.querySelectorAll(".references").forEach(item =>{
    item.addEventListener("mouseover", startReferences)
});
let timer;


function startReferences() {
    timer=setInterval(scrollRef,3000);

}

function scrollRef() {
    this.scrollLeft= 50;
}