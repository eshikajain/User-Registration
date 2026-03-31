const sideForm = document.getElementById("sideForm");
const userTable = document.getElementById("userTable");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact");
const ageInput = document.getElementById("age");
const educationInput = document.getElementById("education");
const passwordInput = document.getElementById("password");

let users = JSON.parse(localStorage.getItem("users")) || [];

function openForm() {
  sideForm.style.right = "0";
}

function closeForm() {
  sideForm.style.right = "-260px";
}

function saveUser() {
  let user = {
    name: nameInput.value,
    email: emailInput.value,
    contact: contactInput.value,
    age: ageInput.value,
    education: educationInput.value,
    password: passwordInput.value
  };

  if (!user.name || !user.email) {
    alert("Fill Name and Email");
    return;
  }

  users.unshift(user);
  localStorage.setItem("users", JSON.stringify(users));

  showUsers();
  closeForm();
  clearForm();
}

function showUsers() {
  userTable.innerHTML = "";

  users.forEach(u => {
    userTable.innerHTML += `
      <tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.contact}</td>
        <td>${u.age}</td>
        <td>${u.education}</td>
      </tr>
    `;
  });
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  contactInput.value = "";
  ageInput.value = "";
  educationInput.value = "";
  passwordInput.value = "";
}

showUsers();
