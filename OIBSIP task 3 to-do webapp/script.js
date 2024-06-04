let addTitle = document.getElementById('addTitle');
let addDescription = document.getElementById('addDescription');
let toDoBox = document.getElementById("output")

function add() {
    if (addTitle.value == "" | addDescription.value == "") {
        alert("Please write a Title and Description")
    }else{
        let listItem = document.createElement('li');
        listItem.innerHTML = '<div id="showTitle">'+`${addTitle.value}`+'</div><div id="showDescription">'+`${addDescription.value}`+'</div><div id="delete"><button class="deleteTodo">X</button></div>';
        toDoBox.appendChild(listItem);
        addTitle.value = "";
        addDescription.value = "";

        listItem.querySelector(".deleteTodo").addEventListener(
            "click",
            function() {
                listItem.remove()
            }
        )
        toDoBox.appendChild(listItem)
    }
}