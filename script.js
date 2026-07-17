document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email');
  const message = document.getElementById('signup-message');

  if (!emailInput.value) {
    return;
  }

  message.textContent = "You're in! Keep an eye on your inbox, " + emailInput.value + ".";
  emailInput.value = '';
});
