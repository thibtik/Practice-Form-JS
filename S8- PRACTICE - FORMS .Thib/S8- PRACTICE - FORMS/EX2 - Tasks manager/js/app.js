function addTask(event) {


  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  // TODO
  event.preventDefault();
  // 2- Get the form inputs  information
  // TODO
  let inputTitle=document.querySelector('#taskId').value
  let inputColor=document.querySelector('#color').value
  let inputDate=document.querySelector('#date').value
  // 3- Check if task text, color, date are defined :
  //    If not defined, display a warnning        "You must fill all inputs"
  // TODO
  if (inputTitle === '' || inputColor === '' || inputDate === '') {
    window.confirm('You must fill all inputs');
  }else{
    
    // 4 - If defined:
    // 4-1- Create a span for the taks name
    //    - class = "task-name"
    let taskName=document.createElement('span');
    taskName.className="task-name";
    taskName.textContent=inputTitle;
    taskName.style.color='white'
  // taskName.classList.add('') or

    // TODO
    // 4-2- Create a span for the taks date
    //    - class = "task-date"
    let taskDate=document.createElement('span')
    taskDate.className='task-date'
    taskDate.textContent=inputDate;
    taskDate.style.color='white'
    // 4-3- Create a p containing the 2 spans
    // TODO
    let p=document.createElement('p')
    p.style.backgroundColor=inputColor;
    p.appendChild(taskName)

    p.appendChild(taskDate)
    // 4-4- the P background color is the selected color - the text is back
    // TODO
    document.querySelector('.dashboard').appendChild(p)
  }
  // TODO
}
// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);

