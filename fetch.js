//using async and await

const getTodos = async () => {
const response = await fetch("todos.json");
const data  = response.json();
return data;
};

getTodos().then(data => {
    console.log("resolved",data);
})

