



document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const pause = document.getElementById("pause");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    let count = 0;


let timer = setInterval(() => {
   count++;
   counter.textContent = count;
}, 1000);

pause.addEventListener("click", () => {
    clearInterval(timer);
    pause.textContent = "resume";
})

minus.addEventListener("click", () => {
    count--;
    counter.textContent = count;
})

plus.addEventListener("click", () => {
    count ++;
    counter.textContent = count;
})

heart.addEventListener("click", () => {
    const likeList = document.querySelector(".likes");
    let like = document.querySelector();
    likeList.appendChild(like);
});


});