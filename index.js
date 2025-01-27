// Sélectionner un élément avec son ID
const btn1_1 = document.getElementById("btn-1-1");
const btn1_2 = document.getElementById("btn-1-2");
const btn2_1 = document.getElementById("btn-2-1");
const btn2_2 = document.getElementById("btn-2-2");
const btn3_1 = document.getElementById("btn-3-1");
const btn3_2 = document.getElementById("btn-3-2");
const btn4_1 = document.getElementById("btn-4-1");
const btn4_2 = document.getElementById("btn-4-2");
const btn5_1 = document.getElementById("btn-5-1");
const btn5_2 = document.getElementById("btn-5-2");
const btn6_1 = document.getElementById("btn-6-1");
const btn6_2 = document.getElementById("btn-6-2");
const btn7_1 = document.getElementById("btn-7-1");
const btn7_2 = document.getElementById("btn-7-2");
const btn8_1 = document.getElementById("btn-8-1");
const btn8_2 = document.getElementById("btn-8-2");
const btn9_1 = document.getElementById("btn-9-1");
const btn9_2 = document.getElementById("btn-9-2");
const btn10_1 = document.getElementById("btn-10-1");
const btn10_2 = document.getElementById("btn-10-2");



// Quiz
let score = 1;

const response1 = document.querySelector("#rep-1 > p");
const response2 = document.querySelector("#rep-2 > p");
const response3 = document.querySelector("#rep-3 > p");
const response4 = document.querySelector("#rep-4 > p");
const response5 = document.querySelector("#rep-5 > p");
const response6 = document.querySelector("#rep-6 > p");
const response7 = document.querySelector("#rep-7 > p");
const response8 = document.querySelector("#rep-8 > p");
const response9 = document.querySelector("#rep-9 > p");
const response10 = document.querySelector("#rep-10 > p");
const scoreDiv = document.querySelector("#Score > p");

let q1ans = false;
let q2ans = false;
let q3ans = false;
let q4ans = false;
let q5ans = false;
let q6ans = false;
let q7ans = false;
let q8ans = false;
let q9ans = false;
let q10ans = false;

btn1_1.addEventListener("click",  () => {
    if (!q1ans) {
        score++
        q1ans = true
        response1.classList.add("show-response");
        response1.style.background = "green";
    } else if (q1ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn1_2.addEventListener("click",  () => {
    response1.classList.add("show-response");
    response1.style.background = "red";
    if (q1ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn2_1.addEventListener("click",  () => {
    response2.classList.add("show-response");
    response2.style.background = "red";
    if (q2ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn2_2.addEventListener("click",  () => {
    if (!q2ans){
        score++
        q1ans = true
        response2.classList.add("show-response");
        response2.style.background = "green";
    } else if (q2ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn3_1.addEventListener("click",  () => {
    if (!q3ans){
        score++
        q1ans = true
        response3.classList.add("show-response");
        response3.style.background = "green";
    } else if (q3ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn3_2.addEventListener("click",  () => {
    response3.classList.add("show-response");
    response3.style.background = "red";
    if (q3ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn4_1.addEventListener("click",  () => {
    if (!q4ans){
        score++
        q1ans = true
        response4.classList.add("show-response");
        response4.style.background = "green";
    } else if (q4ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn4_2.addEventListener("click",  () => {
    response4.classList.add("show-response");
    response4.style.background = "red";
    if (q4ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn5_1.addEventListener("click",  () => {
    response5.classList.add("show-response");
    response5.style.background = "red";
    if (q5ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn5_2.addEventListener("click",  () => {
    if (!q5ans){
        score++
        q1ans = true
        response5.classList.add("show-response");
        response5.style.background = "green";
    } else if (q5ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn6_1.addEventListener("click",  () => {
    response6.classList.add("show-response");
    response6.style.background = "red";
    if (q6ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn6_2.addEventListener("click",  () => {
    if (!q6ans){
        score++
        q1ans = true
        response6.classList.add("show-response");
        response6.style.background = "green";
    } else if (q6ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn7_1.addEventListener("click",  () => {
    if (!q7ans){
        score++
        q1ans = true
        response7.classList.add("show-response");
        response7.style.background = "green";
    } else if (q7ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn7_2.addEventListener("click",  () => {
    response7.classList.add("show-response");
    response7.style.background = "red";
    if (q7ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn8_1.addEventListener("click",  () => {
    response8.classList.add("show-response");
    response8.style.background = "red";
    if (q8ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn8_2.addEventListener("click",  () => {
    if (!q8ans){
        score++
        q1ans = true
        response8.classList.add("show-response");
        response8.style.background = "green";
    } else if (q8ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn9_1.addEventListener("click",  () => {
    if (!q9ans){
        score++
        q1ans = true
        response9.classList.add("show-response");
        response9.style.background = "green";
    } else if (q9ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn9_2.addEventListener("click",  () => {
    response9.classList.add("show-response");
    response9.style.background = "red";
    if (q9ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn10_1.addEventListener("click",  () => {
    if (!q10ans){
        score++
        q1ans = true
        response10.classList.add("show-response");
        response10.style.background = "green";
    } else if (q10ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})

btn10_2.addEventListener("click",  () => {
    response10.classList.add("show-response");
    response10.style.background = "red";
    if (q10ans){
        score--
        alert("Merci de ne pas tricher !")
    }
})