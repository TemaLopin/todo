function paginationToDo() {
    let pages = document.querySelectorAll('#pagination li')
    let notesOnPage = 5

  
for (let page of pages) {
  page.addEventListener("click", function () {

    let active = document.querySelector("#pagination li.active_page")
    active.classList.remove('active_page')

    this.classList.add("active_page")
    let pageNum = +this.innerHTML;
    let start = (pageNum - 1) * notesOnPage
    let end = start + notesOnPage
    let notes = TASKS.slice(start, end)

    taskList.innerHTML = ""
    for (let note of notes) {
      let li = document.createElement('li')
      li.innerHTML = note.main
      taskList.appendChild(li)
    }
  });
}
}
