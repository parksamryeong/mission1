let u1 = "";

function handleKeyDown(event) {
  if (event.key === "Enter") {
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      u1 = inputValue;

      const listItem = document.createElement("li");
      listItem.textContent = inputValue;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "완료";
      deleteButton.addEventListener("click", function() {
        listItem.remove();
      });

      listItem.appendChild(deleteButton);

      const todo = document.getElementById("todo");
      todo.appendChild(listItem);

      event.target.value = "";
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("todo").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const listItem = event.target.parentNode;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "삭제";
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });

            event.target.parentNode.removeChild(event.target);
            listItem.appendChild(deleteButton);

            document.getElementById("done").appendChild(listItem);
        }
    });

    document.getElementById("done").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const listItem = event.target.parentNode;
            listItem.remove();
        }
    });
});

