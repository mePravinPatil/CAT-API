async function getData() {
    const data = await fetch("https://cataas.com/api/cats",
        { method: "GET" }
    );
    const users = await data.json();
    console.log(users);
    return users;
};
async function CatApi() {
    const data = await getData();
    const listId = document.querySelector(".user-list")
    console.log(data);
    data.forEach(element => {
        listId.innerHTML += `
        <div>
        <ul id="myUL">
  <li><a href="#">${element.id}</a></li>
</ul></div>`
    });
}

CatApi();
