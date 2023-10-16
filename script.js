function addTask() {
    var taskText = document.getElementById("task").value;
    if (taskText === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    ul.appendChild(li);
    document.getElementById("task").value = "";
}

document.getElementById("task").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
