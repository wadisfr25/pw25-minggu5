// Toggle menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  form.addEventListener("submit", function (e) {
    let isValid = true;

    // Reset semua pesan error
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");

    // Validasi Nama
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Nama harus diisi!";
      nameInput.classList.add("input-error");
      isValid = false;
    }

    // Validasi Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Email tidak valid!";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    // Validasi Pesan
    const messageText = messageInput.value.trim();
    if (messageText.length === 0) {
      messageError.textContent = "Pesan tidak boleh kosong!";
      messageInput.classList.add("input-error");
      isValid = false;
    } else if (messageText.length < 10) {
      messageError.textContent = "Pesan harus minimal 10 karakter!";
      messageInput.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // Stop submit kalau ada yang salah
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  registerForm?.addEventListener("submit", function (e) {
    let isValid = true;

    // Reset semua pesan error
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    usernameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");

    // Validasi Username
    const username = usernameInput.value.trim();
    if (username === "") {
      usernameError.textContent = "Username harus diisi!";
      usernameInput.classList.add("input-error");
      isValid = false;
    } else if (username.length < 3) {
      usernameError.textContent = "Username minimal 3 karakter!";
      usernameInput.classList.add("input-error");
      isValid = false;
    }

    // Validasi Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Email tidak valid!";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    // Validasi Password
    const password = passwordInput.value.trim();
    if (password.length < 6) {
      passwordError.textContent = "Password minimal 6 karakter!";
      passwordInput.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); // Mencegah submit jika tidak valid
    }
  });
});
