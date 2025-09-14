// Global variables
let cartCount = 0;

// Selectors
const cartBtn = document.getElementById("cartBtn");
const cartCountSpan = document.getElementById("cartCount");
const cartMessage = document.getElementById("cartMessage");
const modal = document.getElementById("cartModal");
const closeModal = document.getElementById("closeModal");
const buyBtns = document.querySelectorAll(".buy-btn");
const flipCards = document.querySelectorAll(".flip-card");

// Function: Add to cart
function addToCart(itemName) {
  cartCount++;
  cartCountSpan.textContent = cartCount;
  return `${itemName} added to cart!`;
}

// Function: Update modal message
function updateCartMessage() {
  let msg = cartCount > 0 
    ? `You have ${cartCount} item(s) in your cart.` 
    : "Your cart is empty.";
  cartMessage.textContent = msg;
}

// Handle Buy button clicks
buyBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productName = e.target.closest(".flip-card-front, .flip-card-back")
      .querySelector("h3").textContent;

    const message = addToCart(productName);
    console.log(message);

    btn.classList.add("pulse");
    setTimeout(() => btn.classList.remove("pulse"), 400);
  });
});

// Open modal with slide-fade animation
cartBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  updateCartMessage();
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Flip card toggle
flipCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
