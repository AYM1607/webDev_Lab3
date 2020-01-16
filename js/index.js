function watchPostTodoButton() {
  $(".submitButton").on("click", e => {
    e.preventDefault();
    // Get the text from the text area.
    const text = $(".newTodo").val();
    $(".newTodo").val("");

    // Only create the todo if the text is not empty.
    if (text === "") {
      alert("Please input valid text");
      return;
    }

    // Create the new todo element with the appropriate text.
    const newTodo = $(
      `<div class="todo"><p>${text}</p><input type="checkbox" name="todo" class="checkBox"/></div>`
    );

    // Set the listener for the todo checkbox.
    $(newTodo)
      .find("input")
      .on("click", e => {
        e.preventDefault;
        const checkBox = $(e.currentTarget)[0].checked;
        console.log(checkBox);
      });

    // Append the new todo to the existing list.
    $(".listOfTodos").append(newTodo);
  });
}

function watchDeleteButton() {
  $(".deleteButton").on("click", e => {
    e.preventDefault();
    $(".listOfTodos").empty();
  });
}

function watchClearButton() {
  $(".clearButton").on("click", e => {
    e.preventDefault();
    $(".checkBox").prop("checked", false);
  });
}

function watchMarkButton() {
  $(".markAllButton").on("click", e => {
    e.preventDefault();
    $(".checkBox").prop("checked", true);
  });
}

function init() {
  watchPostTodoButton();
  watchDeleteButton();
  watchClearButton();
  watchMarkButton();
}

init();
