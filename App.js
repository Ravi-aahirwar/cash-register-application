let Billamount = document.getElementById("billAmount");
let CustomerAmount = document.getElementById("customerAmount");
let btn = document.getElementById("btnHandle");
let noReturn = document.querySelectorAll(".returnNote");
let noOfNotes = [2000, 500, 100, 20, 10, 5, 1];
let hideTable = document.getElementById("TableDisplay");
let cash;
btn.addEventListener("click", () => {
  if (btn.innerText === "Next") {
    if (Billamount.value > 0 && Billamount.value) {
      CustomerAmount.style.display = "block";
      btn.innerText = "Check";
    } else {
      alert("Enter bill Amount");
    }
  } else if (btn.innerText === "Check") {
    if (CustomerAmount.value >= Billamount.value) {
      cash = CustomerAmount.value - Billamount.value;
      hideTable.style.display = "block";
      alert(`return amount ${cash}`);
      billOfTotalAmount();
    } else {
      alert("valid Customer Amount");
    }
  } else {
    alert("invalid both Amount");
  }
});
function billOfTotalAmount() {
  for (let i = 0; i <= noOfNotes.length - 1; i++) {
    let divideAmount = Math.trunc(cash / noOfNotes[i]);
    cash = cash % noOfNotes[i];
    noReturn[i].innerHTML = divideAmount;
    console.log(`return amount ${divideAmount}`);
  }
}
billOfTotalAmount();
