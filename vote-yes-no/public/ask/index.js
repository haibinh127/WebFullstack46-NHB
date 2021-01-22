const createForm = document.getElementById('form-question');
const textAreaQuestion = document.getElementById('create-textarea');
createForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const content = textAreaQuestion.value;

    if (content != "") {
        const question = { content }
        fetch('http://localhost:8080/create-question', {
            method: 'POST',
            body: new URLSearchParams(question)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(window.location.href = "/home");
    } else {
        alert("Please enter the question correctly");
        window.location.href = "/ask";
    };
});

var myText = document.getElementById("create-textarea");
var wordCount = document.getElementById("wordCount");
myText.addEventListener("keyup", () => {
    var characters = myText.value.split('');
    wordCount.innerText = characters.length;
    if (characters.length > 200) {
        myText.value = myText.value.substring(0, 200);
        wordCount.innerText = 200;
    }
})