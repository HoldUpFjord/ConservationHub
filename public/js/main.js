// made a query selector in var, every input tag with the type checkbox
var checkbox = document.querySelectorAll("input[type=checkbox]");

/*checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});*/
// funtion expression: function with name.  i.e a response to a event listner
function handleCheckbox(){
    //condtional 
    const div = this.parentNode
    const li = div.parentNode
    const span = li.childNodes[1]
        if (this.checked) {
         
          span.classList.remove("not")
          span.classList.add("completed")
         
        } else {
            span.classList.remove("completed")
            span.classList.add("not")
            
          console.log("Checkbox is not checked..");
        }
      }
//  Creates an array of all checkboxes, loop iterates through arr, 
Array.from(checkbox).forEach((el) => {
   // el /  arr[i] listening for a 'change' event, and executing handleCheckbox function
    el.addEventListener('change',handleCheckbox );
}); 
/* added from todos app. Look into how to better incorporate into this one */
const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
} 
