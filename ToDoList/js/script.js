const {createApp}=Vue;
createApp({
    //the function of the data or attributes
    data(){
        return{
            toDo:[]
        }
    },
    methods:{
        create_task(name,description){
            if(this.name && this.description)
           {
            const task=this.toDo.find(task=>task.name===name)
            if(!task)
            {
            this.toDo.push({name:this.name,description:this.description});
            alert("The task is added successfully");
            }
            else{
                alert("The task is exactly exist");
            }
           }
           else {
            alert("please enter the name and description");
           }
        },
        update_task(name,new_name,new_discription){
            if(this.toDo.length===0) {
                alert("There is not any task");
                return;
            }
            const task=this.toDo.find(task=>task.name===name)
            if(task)
            {
                task.name=new_name;
                task.description=new_discription;
                alert("The update is completed successfuly");
            }
            else{
                alert("The task is not found");
            }
        },
        read_task(name){
            if(this.toDo.length===0) {
                alert("There is not any task");
                return;
            }
            const task=this.toDo.find(task=>task.name===name)
            if(task){
              //  alert("The name is :"+task.name+" The description is: "+task.description); old style
              alert(`The name is:${task.name} \nThe description is:${task.description}`) //new style
            }
            else alert("The task is not found");
        },
        delete_task(name){
            if(this.toDo.length===0) {
                alert("There is not any task");
                return;
            }
            const index=this.toDo.findIndex(task=>task.name===name)
            if(index!==-1)
            {
               this.toDo.splice(index,1);
               alert("The delete is completed successfuly")
            }
            else{
                alert("The task is not found");
            }
        },
        show_all() //updated to the new style
        {
            if(!this.toDo.length) {
                alert("There is not any task");
                return;
            }
            // for(var i=0;i<this.toDo.length;i++)  //old style
            // {
            //     // alert(this.toDo[i].name+" "+this.toDo[i].description);
            // }
            this.toDo.forEach(({name,description},index) => {
                alert(`Task${index+1} The name is:${this.name} \n The discription is:${this.description}`);
            });
        }
    }
}).mount("#ToDo_App")