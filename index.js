const ratingContainer = document.getElementById('rating');
const thanksContainer = document.getElementById('thank-you')
const rates = ratingContainer.querySelectorAll('label');
const rated = document.getElementById('output');
const validation = document.getElementById('validation');
const btn = document.getElementById('submit');

//Checks if a number has been selected and displays a thank you card.
btn.addEventListener("click", () => {

  if (rated.innerHTML == 0) {
    validation.style.display = "block";
  } else {
    thanksContainer.style.display = 'flex';
    ratingContainer.style.display = 'none';
  }
})

//Outputs the rating in the thank you card.
rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rated.innerHTML = rate.innerHTML;
  })
});