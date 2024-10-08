
function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "content-Type": "application/json",
            "Accept":  "application/json",
        },
        body:JSON.stringify({
            name:name,
            email:email
        }),
    })
    .then((response) => response.json())
    .then((data) =>{
        const newId = data.id
        const p = document.createElement("p")
        p.textContent =`The user ID is: ${newId}`
        document.querySelector("body").appendChild(p)
    })
    .catch((error) =>{
        const p =document.createElement("p")
        p.textContent = error.message
        document.querySelector("body").appendChild(p)
        
    })

}
submitData("Joyce", "joywamo@gmail.com");
