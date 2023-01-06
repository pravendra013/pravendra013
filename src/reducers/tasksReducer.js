 

 
export const tasksReducer= (todos=[], action) => {

  switch (action.type) {

    case "PERSONAL_TASK":
      return action.payLoad

    case "ASSIGNED_TASK":
      return action.payLoad

    case "ASSIGN_TASK":
      return action.payLoad

    case "TOGGLE":
      console.log("Inside disaptch action")
      return todos.map((task)=>{
          if(task._id===action.payLoad.id) task.status=action.payLoad.status
          return task
      }).filter(task=>task.status!=="delete")

    case "EDIT_TASK":
      return todos.map((task)=>{
          if(task._id===action.payLoad.id) task.data=action.payLoad.text
          return task
      })

    case "LOGOUT_TASK":
      return []

    default:
      return todos;

  }
};

