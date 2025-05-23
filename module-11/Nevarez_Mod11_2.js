var list = []

function addToList() {
    var input = document.getElementById("input").value;
    if (input) {
        list.push(input);
        document.getElementById("input").value = "";
        alert(`You have added ${input} to the list as item ${list.length}!`);
    }
}

function deleteFromList() {
    if (list.length === 0) {
        alert("The list is empty!")
        return;
    }

    var itemToDelete = prompt("Which item would you like to delete? (1 - " + list.length + ")");
    list.splice(itemToDelete - 1, 1);
    alert(`You have deleted item ${itemToDelete} from the list!`);
}

function displayList() {
    var listElement = document.getElementById("list");
    listElement.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        li.textContent = `Item ${i + 1} - ${list[i]}`;
        listElement.appendChild(li);
    }
}