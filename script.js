document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const emailInput = document.getElementById('email');
  const submitBtn = form.querySelector('button[type="submit"]');
  const message = document.getElementById('signup-message');

  if (!emailInput.value) {
    return;
  }

  submitBtn.disabled = true;
  message.textContent = 'Sending...';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' },
  })
    .then(function (response) {
      if (response.ok) {
        message.textContent = "You're in! Keep an eye on your inbox, " + emailInput.value + ".";
        form.reset();
      } else {
        message.textContent = "Something went wrong — mind trying again, or just email us directly?";
      }
    })
    .catch(function () {
      message.textContent = "Something went wrong — mind trying again, or just email us directly?";
    })
    .finally(function () {
      submitBtn.disabled = false;
    });
});
