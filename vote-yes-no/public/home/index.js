let question = document.getElementById('randomQuestion');
let randomQuestion = fetch('http://localhost:8080/random-question');
randomQuestion
    .then(res => res.json())
    .then(res => question.innerHTML = (res.data.content)+" ?") 