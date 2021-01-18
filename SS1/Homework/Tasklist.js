function save() {
    var new_data = document.getElementById('userInput').value;
    if (new_data === "") {
        alert("Please enter a task");
    } else if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    };
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    localStorage.setItem('data', JSON.stringify(old_data));
    window.location.reload(false);
};
function view() {
    var old_data = JSON.parse(localStorage.getItem('data'));
    for (i = 0; i < old_data.length; i++) {
        document.getElementById('myList').innerHTML += `<li> ${i + 1}.${old_data[i]}</li>`;
    }
    console.log(old_data);
};
view();
// function clear() {
//     var clear = document.getElementById("clearList")
//     var old_data = JSON.parse(localStorage.getItem('data'));
//     clear.addEventListener('click', function () {
//         localStorage.removeItem("data");
//     });
// };
// clear()
