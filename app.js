const submitBtn = document.querySelector('#submit-btn');
const input = document.querySelector('#input-text');
const tasksContainer = document.querySelector('#tasks-container');
const form = document.querySelector('#task-input');

document.addEventListener('DOMContentLoaded' , getTasks);

function addToLS(task){
    let taskss ;
    if(localStorage.getItem('taskss') === null){
        taskss = [];
    }
    else {
        taskss = JSON.parse(localStorage.getItem('taskss'));
    }
    taskss.push(task);
    localStorage.setItem('taskss' , JSON.stringify(taskss));

}


function addTask(e){
    if(input.value===""){
        
        alert('please write any task');

        
    }
    
    const div = document.createElement('div');
    div.className = 'task-card';
    div.innerHTML = `
    <div class="task-name">${input.value}</div>
                <div class="remove">
                    <button class="r-btn">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
    ` ;
    tasksContainer.appendChild(div);
    addToLS(input.value);
    input.value="" ;
    e.preventDefault();
    
    

    
    

}
form.addEventListener('submit' , addTask)


function removeTask(e){
    
    
    if(e.target.classList.contains('fa-times')){
        e.target.parentElement.parentElement.parentElement.remove();
        removefromLs(e.target.parentElement.parentElement.parentElement) ;

    }
    


}

document.body.addEventListener('click' , removeTask);

document.querySelector('#clear-all').addEventListener('click' , clearAll)

function clearAll(){
    
    
    if(confirm('Are You Sure To Clear All Tasks ?') ){
        input.value= '';
        tasksContainer.innerHTML = ' <h6>Tasks :</h6>';
        localStorage.clear();
        
    }
    
    
    }

    function getTasks(){
        let taskss ;
    if(localStorage.getItem('taskss') === null){
        taskss = [];
    }
    else {
        taskss = JSON.parse(localStorage.getItem('taskss'));
    }
    for(let task of taskss){
        const div = document.createElement('div');
    div.className = 'task-card';
    div.innerHTML = `
    <div class="task-name">${task}</div>
                <div class="remove">
                    <button class="r-btn">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
    ` ;
    tasksContainer.appendChild(div);
    }
        

    }

    
    

    function removefromLs(taskNo){
        let taskss ;
    if(localStorage.getItem('taskss') === null){
        taskss = [];
    }
    else {
        taskss = JSON.parse(localStorage.getItem('taskss'));
    }
    taskss.forEach(function(task , index){
        
            taskss.splice(index , 1)
         
        
    });
    localStorage.setItem('taskss' , JSON.stringify(taskss)) ;
    }
    

    

    
    

    

