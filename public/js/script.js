
console.log("foodshare loaded");

// donate food

const foodform = document.getElementById("foodform");

if (foodform) {

  foodform.addEventListener("submit", async (e) => {

    e.preventDefault();

    const foodname = document.getElementById("foodname").value;

    const quantity = document.getElementById("quantity").value;

    const expirytime = document.getElementById("expirytime").value;

    const response = await fetch("/food/addfood", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        foodname,
        quantity,
        expirytime
      })

    });

    const data = await response.text();

    alert(data);

    foodform.reset();

  });

}

// load foods dynamically

const foodscontainer = document.getElementById("foodscontainer");

if (foodscontainer) {

  async function loadfoods() {

    const response = await fetch("/food/allfoods");

    const foods = await response.json();

    foodscontainer.innerHTML = "";

    foods.forEach((food) => {

      foodscontainer.innerHTML += `

        <div class="food-card">

          <h3>${food.foodname}</h3>

          <p><strong>quantity:</strong> ${food.quantity}</p>

          <p><strong>expiry:</strong> ${food.expirytime}</p>

          <button onclick="requestfood()">
            request food
          </button>

        </div>

      `;

    });

  }

  loadfoods();

}

// request food

function requestfood() {

  alert("food requested successfully");

}

// login/register

const loginform = document.getElementById("loginform");

if (loginform) {

  loginform.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const response = await fetch("/user/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        password
      })

    });

    const data = await response.text();

    alert(data);

    loginform.reset();

  });

}