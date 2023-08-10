fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const usersContainer = document.getElementById("users-container");
    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("col-sm-4");
      userCard.innerHTML = `
    <div class="cardbody">
      <h6 class="card-title">Name:${user.name}</h6>
      <p class="card-text">Email:${user.email}</p>
      <p class="card-text">Street:${user.address.street}</p>
      <p class="card-text">City:${user.address.city}</p>
     
    </div>
  `;
      usersContainer.appendChild(userCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
