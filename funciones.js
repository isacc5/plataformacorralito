document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  // Correo y contraseña predeterminados
  const emailCorrecto = "Corralitofutbolero2025@gmail.com";
  const passCorrecto = "Corralito2025";

 if (email === emailCorrecto && pass === passCorrecto) {
    mensaje.textContent = "✅ Bienvenido a Corralito Futbolero!";
    mensaje.className = "mensaje exito";
    mensaje.style.display = "block";

    // Redirigir después de 2 segundos
    setTimeout(() => {
      window.location.href = "Entrada.html"; 
    }, 2000);
  } else {
    mensaje.textContent = "❌ Correo o contraseña incorrectos. Intenta de nuevo.";
    mensaje.className = "mensaje error";
    mensaje.style.display = "block";
  }
});

