const question = document.getElementById('randomQuestion')
fetch('http://localhost:8080/random-question')
.then(res => res.json())
.then(res => question.innerHTML = res.content.content);