const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please write something, friend!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "×"; // or use &#x00D7; if you want to be explicit
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData ();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData ();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData ();
    }
}, false);
function saveData () {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

