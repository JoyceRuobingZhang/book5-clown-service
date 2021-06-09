import { getReservations, deleteReservation } from "./dataAccess.js"


export const Reservation = () => {
    const reservations = getReservations()


    let html = "<ul>"

    html += reservations.map(reservation => {
        return `
        <li class="reservation">
        ${reservation.parentName} made a reservation for ${reservation.childName} at ${reservation.reservedDate}, 
        the length of the service will be ${reservation.reservedLegthOfHours} hours. 
        <button id="delete--${reservation.id}">Delete</button>
        </li>`
    }).join("")

    html += "</ul>"
    return html
}

document.addEventListener("click", e => {
    if (e.target.id.startsWith("delete--")) {
        const reservationId = e.target.id.split("--")[1]
        deleteReservation(parseInt(reservationId))
    }
})