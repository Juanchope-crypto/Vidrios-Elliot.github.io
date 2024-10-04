document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Simulación de envío de datos
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Teléfono:", phone);
    console.log("Mensaje:", message);

    alert("¡Gracias por contactarnos, " + name + "! Te responderemos pronto a tu correo: " + email);
    
    // Limpiar formulario
    document.getElementById("contact-form").reset();
});
