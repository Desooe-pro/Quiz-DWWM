// Sélectionner un élément avec son ID
const btn_reset = document.getElementById("reset");

let lst = [];
for (let i = 1; i < 11; i++) {
    lst.push(document.getElementById(`btn-${i}-1`));
    lst.push(document.getElementById(`btn-${i}-2`));
}

// Quiz
let score = 0;
const scoreDiv = document.getElementById("Score");

let lst_resp = [];
for (let i = 1; i < 11; i++) {
    lst_resp.push(document.querySelector(`#rep-${i} > p`));
}

const lst_ans = [false, false, false, false, false, false, false, false, false, false]

for (let i = 0; i < 20; i++) {
    lst[i].addEventListener("click",  () => {
        if (lst[i].classList.value.split(" ").includes("Bon")){
            if (lst_ans[Math.round(i/2 - 0.1)] === false){
                score++
                lst_resp[Math.round(i/2 - 0.1)].classList.add("show-response")
                lst_resp[Math.round(i/2 - 0.1)].style.background = "green";
            } else {
                score -= 1
                alert("Merci de ne pas tricher !")
            }
        } else {
            lst_resp[Math.round(i/2 - 0.1)].classList.add("show-response");
            lst_resp[Math.round(i/2 - 0.1)].style.background = "red";
            if (lst_ans[Math.round(i/2 - 0.1)] === true){
                score -= 1
                alert("Merci de ne pas tricher !")
            }
        }
        lst_ans[Math.round(i/2 - 0.1)] = true
        scoreDiv.innerHTML = `<h2>Score : ${score}/10</h2>`
    })
}

btn_reset.addEventListener("click", () => {
    score = 0;
    for (let i = 0; i < 10; i++) {
        lst_resp[i].classList.remove("show-response");
        lst_resp[i].style.background = "black";
        lst_ans[i] = false;
    }
    scoreDiv.innerHTML = `<h2>Score : ${score}/10</h2>`;
})