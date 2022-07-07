function deleteTask() {
    const close = document.getElementsByClassName("delete_task");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let task = close[i].parentElement.parentElement;
        task.remove();
        for (let j = 0; j < TASKS.length; j++) {
          if (i === j) {
            TASKS.splice(i, 1)
          }
        }
      };
    };
  }
  
