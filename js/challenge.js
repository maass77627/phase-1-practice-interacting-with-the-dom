

// document.addEventListener("DOMContentLoaded", () => {
//     const counter = document.getElementById("counter");
//     const pause = document.getElementById("pause");
//     const minus = document.getElementById("minus");
//     const plus = document.getElementById("plus");
//     const heart = document.getElementById("heart");
//     const restart = document.getElementById("restart"); 
//     let count = 0;
//     let timer = startTimer();
//     let isPaused = false;

//     function startTimer() {
//         return setInterval(() => {
//             count++;
//             counter.textContent = count;
//         }, 1000);
//     }

   
//     pause.addEventListener("click", () => {
//         if (!isPaused) {
//             clearInterval(timer);
//             pause.textContent = "resume";
//             minus.disabled = true;
//             plus.disabled = true;
//             heart.disabled = true;
//         } else {
//             timer = startTimer();
//             pause.textContent = "pause";
//             minus.disabled = false;
//             plus.disabled = false;
//             heart.disabled = false;
//         }

//         isPaused = !isPaused;
//     });

    
//     minus.addEventListener("click", () => {
//         count--;
//         counter.textContent = count;
//     });


//     plus.addEventListener("click", () => {
//         count++;
//         counter.textContent = count;
//     });


//     heart.addEventListener("click", () => {
//         const likeList = document.querySelector(".likes");
//         let li = document.createElement("li");
//         li.textContent = `${count} has been liked 1 time`;
//         likeList.appendChild(li);
//     });

    
//     restart.addEventListener("click", () => {
//         clearInterval(timer);
//         count = 0;
//         counter.textContent = 0;
//         isPaused = false;

        
//         minus.disabled = false;
//         plus.disabled = false;
//         heart.disabled = false;
//         pause.textContent = "pause";

//         timer = startTimer();
//     });

// });

document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter")
    let timer = startTimer()
    let count = 0
    let pause = document.getElementById("pause")
    let isPaused = false
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    

    function startTimer() {
        return setInterval(() => {
            count ++
            counter.textContent = count
            }, 1000)
        }
    
        pause.addEventListener("click", () => {
            if (!isPaused) {
                minus.disabled = true
                plus.disabled = true
                heart.disabled = true
                pause.innerHTML = "resume"
            clearInterval(timer)
            } else {
                minus.disabled = false
                plus.disabled = false
                heart.disabled = false
                pause.innerHTML = "pause"
               timer = startTimer()
            }
            isPaused = !isPaused
        })


        minus.addEventListener("click", () => {
               count --
               counter.textContent = count
        })

        plus.addEventListener("click", () => {
            count ++
            counter.textContent = count

        })

        heart.addEventListener("click", (e) => {
            console.log(count)
            let ul = document.querySelector("ul")
             let likes = document.createElement("li")
             likes.innerHTML = count
               ul.appendChild(likes)
        })
})