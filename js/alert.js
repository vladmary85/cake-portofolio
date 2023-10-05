const buttons = document.querySelectorAll("#btn");

document.getElementById("btn").addEventListener("click", showAlert);

function showAlert() {
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name.");
    return false;
  } else {
    alert(`Hello,${name}! You'll receive a confirmation message in 3 days.`);
  }
}
