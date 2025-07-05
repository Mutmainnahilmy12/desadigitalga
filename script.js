document.addEventListener('DOMContentLoaded', function () {
  const regForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');

  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('regUsername').value;
      const password = document.getElementById('regPassword').value;

      if (localStorage.getItem(username)) {
        alert("Username sudah terdaftar.");
      } else {
        localStorage.setItem(username, password);
        alert("Pendaftaran berhasil!");
        window.location.href = "index.html";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const storedPassword = localStorage.getItem(username);

      if (storedPassword === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = "dashboard.html";
      } else {
        alert("Login gagal. Username atau password salah.");
      }
    });
  }
});
