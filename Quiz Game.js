const submit = document.getElementById('submit');
const result = document.getElementById('result');
const questions = document.querySelectorAll('.question');
const correctAnswers = ['New Delhi', 'Blue Whale', 'Pacific Ocean', 'Canberra', 'Vatican City'];
submit.addEventListener('click', function() {
let score = 0;
for (let i = 0; i < questions.length; i++) {
let answer = questions[i].querySelector('input:checked');
if (answer && answer.value === correctAnswers[i]) {
score++;
}
}
result.textContent = 'Your score: ' + score + '/' + questions.length;
});