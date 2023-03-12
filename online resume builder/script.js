//generating cv
function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  document.getElementById("weT").innerHTML =
    document.getElementById("we").value;

  document.getElementById("aqT").innerHTML =
    document.getElementById("aq").value;
}

function printCV() {
  window.print();
}
