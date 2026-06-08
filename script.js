// Configura aquí tu número de WhatsApp de soporte (con código de país, sin el signo +)
const TELEFONO_SOPORTE = "573000000000"; // Ejemplo de Colombia

function solicitarDemo() {
    const mensaje = encodeURIComponent("Hola J&A Tv Player, me gustaría solicitar la demo gratuita de 2 horas para probar el servicio.");
    const url = `https://wa.me/${TELEFONO_SOPORTE}?text=${mensaje}`;
    window.open(url, '_blank');
}

function contratarPlan(nombrePlan, precioPlan) {
    const mensaje = encodeURIComponent(`Hola J&A Tv Player, estoy interesado en adquirir el *${nombrePlan}* con un valor de $${precioPlan}. ¿Cuáles son los métodos de pago?`);
    const url = `https://wa.me/${TELEFONO_SOPORTE}?text=${mensaje}`;
    window.open(url, '_blank');
}