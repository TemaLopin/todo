const filters = document.querySelectorAll(".filtersBtn");
let filterValue = "All";


filters.forEach(function (filter) {
  filter.addEventListener("click", function () {
    let thisfilter = filter;
    filterValue = filter.innerHTML;
    if (filterValue === "Done") {
      const tasks = TASKS.filter((item) => item.isDone);
      renderTasks(tasks);
    }
     if (filterValue === "Undone") {
      const tasks = TASKS.filter((item) => !item.isDone);
      renderTasks(tasks);
      addnewtask.onclick = createTask;
    }
     if (filterValue === "All") {
      renderTasks(TASKS);
      addnewtask.onclick = createTask;
    }
    filters.forEach(function (filter) {
      filter.classList.remove("active_filter");
      thisfilter.classList.add("active_filter");
    });
    deleteTask();
  });
});

const arrows = document.querySelectorAll(".arrow");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", function () {

   TASKS.reverse()

    arrows.forEach(function (arrow) {
      arrow.classList.toggle("active_arrow");
    });
    renderTasks(TASKS);
    deleteTask();
  });
});

