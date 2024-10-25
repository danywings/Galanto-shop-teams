function sendToWhatsApp(producto, precio) {
    const numero = '50372367219'; // Coloca aquí tu número o el de la tienda con código de país
    const mensaje = `Hola, estoy interesado en el producto ${producto}con precio de: ${precio} quisiera saber si sigue disponible.`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}