let data = [
    { id: 1, name: "Nisha", email: "nisha@1" },
    { id: 2, name: "Asha", email: "asha@1" }
]



function readAll() {
    localStorage.setItem("data", JSON.stringify(data));
    let getData = JSON.parse(localStorage.getItem("data"));
    let elements = "";
    getData.map((val, ind) => {
        elements += `
        <tr key={${ind}}>
        <td>${val.name}</td>
        <td>${val.email}</td>
        <td>
         <button onclick={edit(${val.id})}>Edit</button>
         <button onclick={remove(${val.id})}>Delete</button>
        </td>
        </tr>
        `
    });
    document.querySelector("#table_data").innerHTML = elements;
}

readAll();

function add() {
    document.querySelector("#add_btn").style.display = "none";
    document.querySelector("#create_form").style.display = "block";
}

function create() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let newObj = { id: data.length + 1, name, email };
    data.push(newObj);
    document.querySelector("#add_btn").style.display = "block";
    document.querySelector("#create_form").style.display = "none";
    readAll();
}

function edit(id) {
    document.querySelector("#update_form").style.display = "block";
    let userId = data.find(val => val.id === id);
    document.querySelector("#id").value = userId.id;
    document.querySelector("#uname").value = userId.name;
    document.querySelector("#uemail").value = userId.email;
}

function update() {
    let userId = parseInt(document.querySelector("#id").value);
    let name = document.querySelector("#uname").value;
    let email = document.querySelector("#uemail").value;
    let index = data.findIndex(val => val.id === userId);
    data[index] = { name, email }
    document.querySelector("#update_form").style.display = "none";
    readAll();
}

function remove(id){
    data=data.filter(val=>val.id !== id);
    readAll();
}
console.log(data);