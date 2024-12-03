import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",

    initialState:{
        tasks:[],
        filterStatus: "All",
        searchQuery: "",
    },

    reducers:{
        addTask: (state,action) =>{
            state.tasks.push({
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                dueDate: action.payload.dueDate,
                status: "Pending",
                completed: false,
                createdAt: new Date().toISOString(),
            });
        },

        toggleTaskStatus: (state,action) =>{
            const task = state.tasks.find((task)=> task.id === action.payload);
            if(task){
                task.completed = !task.completed;
                task.status = task.completed ? "Completed"  : "Pending";
            }
        },

        deleteTask: (state,action)=>{
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },

        setFilterStatus: (state,action) =>{
            state.filterStatus = action.payload;
        },

        setSearchQuery: (state,action) =>{
            state.searchQuery = action.payload;
        },
    },
});

export const {addTask, toggleTaskStatus, deleteTask, setFilterStatus, setSearchQuery} = taskSlice.actions;

export default taskSlice.reducer;