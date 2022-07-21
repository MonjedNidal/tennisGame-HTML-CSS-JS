const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const target = document.querySelector('#target');

let counter1 = p1Score.innerText;
let counter2 = p2Score.innerText;
p1Button.addEventListener('click', () => {

    if (counter1 < target.value) {
        counter1++;
        p1Score.innerText = counter1;
        if (target.value == counter1) {
            p1Score.classList.toggle('win')
            p2Score.classList.toggle('lose')
        }
    }
})

p2Button.addEventListener('click', () => {
    if (counter1 < target.value) {
        counter2++;
        p2Score.innerText = counter2;
        if (target.value == counter2) {
            p2Score.classList.toggle('win');
            p1Score.classList.toggle('lose');
        }
    }
})

reset.addEventListener('click', () => {
    p1Score.innerText = '0';
    p2Score.innerText = '0';
    target.value = '1';
    if (p1Score.classList.contains('win')) {
        p1Score.classList.remove('win');
        p2Score.classList.remove('lose');
    } else {
        p1Score.classList.remove('lose');
        p2Score.classList.remove('win');
    }
})

// function check(counter) {
//     if (target.value === counter) {

//     }
// }

// function scoreAdder(counter, score) {
//     counter++;
//     score.innerText = counter;
// }
