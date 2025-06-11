
  document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Forhindrer siden i at reloade

    const emailInput = document.getElementById("emailInput");

    if (emailInput.checkValidity()) {
      alert("Tak for din tilmelding!");
      emailInput.value = ""; // Ryd feltet efter det indlæst og brugt
    } else {
      alert("Indtast venligst en gyldig e-mailadresse."); // Giver en alert, pop up, at det er tilmeldt
    }
  });

