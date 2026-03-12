
document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter")
    let timer = startTimer()
    let count = 0
    let pause = document.getElementById("pause")
    let isPaused = false
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let input = document.getElementById("comment-input")
    let submit = document.getElementById("submit")
    let list = document.getElementById("list")

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

        submit.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(input.value)
            let comment = document.createElement("p")
            comment.innerHTML = input.value
            list.appendChild(comment)
        })
})