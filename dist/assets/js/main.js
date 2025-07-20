// "user strict";

/**
 * total price set start
 */
const buttons = document.querySelectorAll("#bus-price #ticket-buzz");
const pricePerTicket = 550;
let total = 0;
let totalSeat = 0;
let seatMinus = 40;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    total += pricePerTicket;
    totalSeat++;
    seatMinus--;
    if (totalSeat <= 4) {
      const grantTotal = document.getElementById("grand-total");
      grantTotal.innerText = total;
      // total price set
      const priceTotal = document.getElementById("total-price");
      priceTotal.innerText = total;

      // set seat count
      const seatLest = document.getElementById("total-seat");
      seatLest.innerText = totalSeat;

      //set bus seat minus
      const seatMinusLest = document.getElementById("minus-seat");
      seatMinusLest.innerText = seatMinus;

      // set background color
      btn.classList.add("bg-primary");
    }

    // clicked button disable
    btn.disabled = true;
  });
});
/**
 * total price set end
 */

/**
 * price discount
 */
// disabled remove
const removeDis = document.getElementById("apply-area");
removeDis.disabled = false;

function discountTicket() {
  // input area
  const apply = document.getElementById("discount-area");
  const applyValue = apply.value;

  if (applyValue === "NEW15") {
    // hidden area
    const areaDis = document.getElementById("form-area");
    areaDis.classList.add("hidden");
  }
}

//

function nextAddress() {
  if (valueNum === "number") {
    const sunBtn = document.getElementById("submit-btn");
    sunBtn.removeAttribute("disabled");
    sunBtn.classList.add("bg-[#1dd]");
  }
}
