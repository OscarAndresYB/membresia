// Obtenemos la fecha de hoy
const hoy = new Date();

// Lista de fechas de ejemplo
const fechas = [
    new Date(2024, 5, 15),
    new Date(2024, 2, 28),
    new Date(2024, 8, 10),
    new Date(2024, 1, 1),
    new Date(2024, 5, 10)
];

// Función para comparar fechas por mes y día
function compararFechas(a, b) {
    if (a.getMonth() === b.getMonth()) {
        return a.getDate() - b.getDate();
    } else {
        return a.getMonth() - b.getMonth();
    }
}

// Filtrar y ordenar las fechas
const fechasOrdenadas = fechas.filter(fecha => {
    return (
        fecha.getMonth() >= hoy.getMonth() && fecha.getDate() >= hoy.getDate()
    );
}).sort(compararFechas);

// Imprimir las fechas ordenadas
fechasOrdenadas.forEach(fecha => {
    console.log(`${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`);
});
