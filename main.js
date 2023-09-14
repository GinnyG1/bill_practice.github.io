function generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function generateRandomValues() {
    const kWhUsed = generateRandomValue(0, 3000);
    const daysPassed = generateRandomValue(1, 31);
  
    document.getElementById("kWh-used").textContent = kWhUsed;
    document.getElementById("days-passed").textContent = daysPassed;
  }
  
  function calculateTotalBill() {
    const kWhUsedElement = document.getElementById("kWh-used");
    const daysPassedElement = document.getElementById("days-passed");
    const unitRate = parseFloat(document.getElementById("unit-rate").value);
    const standingCharge = parseFloat(document.getElementById("standing-charge").value);
  
    if (!kWhUsedElement.textContent.trim() || !daysPassedElement.textContent.trim()) {
      document.getElementById("error-message").textContent = "Generate values to calculate";
      document.getElementById("result").innerHTML = "";
      return;
    }
  
    if (unitRate >= 1 || standingCharge >= 1) {
      document.getElementById("error-message").textContent = "Unit rates and standing charges should be in pence, such as 0.32";
      document.getElementById("result").innerHTML = "";
      return;
    }
  
    document.getElementById("error-message").textContent = "";
  
    const kWhUsed = parseInt(kWhUsedElement.textContent);
    const daysPassed = parseInt(daysPassedElement.textContent);
  
      const totalBill = kWhUsed * unitRate + daysPassed * standingCharge;
    const formattedTotalBill = "£" + totalBill.toFixed(2);
  
    document.getElementById("result").innerHTML = `Total Bill:<br><span id="result-value">${formattedTotalBill}</span>`;
  }
  
  function generateAnnualRandomValues() {
    const kWhUsed = generateRandomValue(0, 10000);
    const daysPassed = generateRandomValue(365, 365);
    
  
    document.getElementById("annual-kWh-used").textContent = kWhUsed;
    document.getElementById("annual-days-passed").textContent = daysPassed;
  }
  
  function calculateAnnualTotalBill() {
    const kWhUsedElement = document.getElementById("annual-kWh-used");
    const daysPassedElement = document.getElementById("annual-days-passed");
    const unitRate = parseFloat(document.getElementById("annual-unit-rate").value);
    const standingCharge = parseFloat(document.getElementById("annual-standing-charge").value);
  
    if (!kWhUsedElement.textContent.trim() || !daysPassedElement.textContent.trim()) {
      document.getElementById("annual-error-message").textContent = "Generate values to calculate";
      document.getElementById("annual-result").innerHTML = "";
      return;
    }
  
    if (unitRate >= 1 || standingCharge >= 1) {
      document.getElementById("annual-error-message").textContent = "Unit rates and standing charges should be in pence, such as 0.32";
      document.getElementById("annual-result").innerHTML = "";
      return;
    }
  
    document.getElementById("annual-error-message").textContent = "";
  
    const kWhUsed = parseInt(kWhUsedElement.textContent);
    const daysPassed = parseInt(daysPassedElement.textContent);
  
  
    const totalBill = kWhUsed * unitRate + daysPassed * standingCharge;
    const formattedTotalBill = "£" + totalBill.toFixed(2);
  
    document.getElementById("annual-result").innerHTML = `Total Bill:<br><span id="annual-result-value">${formattedTotalBill}</span>`;
  }