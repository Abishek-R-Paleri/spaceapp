function checkHabitability() {
    const distance = parseFloat(document.getElementById("distance").value);
    const type = document.getElementById("type").value;
    const result = document.getElementById("result");
  
    // Basic conditions for habitability
    let isHabitable = false;
    let message = "";
  
    if (type === "rocky" && distance >= 0.8 && distance <= 1.5) {
      isHabitable = true;
      message = "This planet could potentially support life!";
    } else if (type === "gas-giant" || type === "ice-giant") {
      isHabitable = false;
      message = "Gas giants and ice giants are unlikely to support life.";
    } else if (type === "rocky" && (distance < 0.8 || distance > 1.5)) {
      isHabitable = false;
      message = "This rocky planet is either too close or too far from the sun to support life.";
    } else {
      message = "Unknown planet type or distance. Please check your inputs.";
    }
  
    result.textContent = message;
    result.style.color = isHabitable ? "lightgreen" : "red";
  }
