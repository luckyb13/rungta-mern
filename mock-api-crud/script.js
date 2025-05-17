const BASE_URL = "https://6809bda61f1a52874cdd976d.mockapi.io/api/students";

const outputEl = document.getElementById("output");
document.getElementById("btn-get").onclick = getStudents;
document.getElementById("btn-post").onclick = addStudent;
document.getElementById("btn-put").onclick = updateStudent;
document.getElementById("btn-delete").onclick = deleteStudent;

function getStudents() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      outputEl.textContent = JSON.stringify(data, null, 2);
      console.log("GET:", data);
    })
    .catch(err => console.error("GET Error:", err));
}

function addStudent() {
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Omprakash", age: 21 })
  })
    .then(res => res.json())
    .then(data => {
      outputEl.textContent = `User added:\n${JSON.stringify(data, null, 2)}`;
      console.log("POST:", data);
    })
    .catch(err => console.error("POST Error:", err));
}

function updateStudent() {
  fetch(`${BASE_URL}/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Om Prakash (Updated)" })
  })
    .then(res => res.json())
    .then(data => {
      outputEl.textContent = `User updated:\n${JSON.stringify(data, null, 2)}`;
      console.log("PUT:", data);
    })
    .catch(err => console.error("PUT Error:", err));
}

function deleteStudent() {
  fetch(`${BASE_URL}/3`, {
    method: "DELETE"
  })
    .then(() => {
      outputEl.textContent = "User with ID 3 deleted.";
      console.log("DELETE: User deleted");
    })
    .catch(err => console.error("DELETE Error:", err));
}
