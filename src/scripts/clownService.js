import { Form } from "./serviceForm.js"
import { Clown } from "./clown.js"
import { Reservation } from "./reservation.js"



export const clownService = () => {

    return `
    <h1>🤡Buttons and Lollipop Clown Show Service🤡</h1>

    <h2>Fill in the Reservation Form</h2>
    <div class="request-form">
    ${Form()}
    </div>
    
    <h2>Choose the Clown</h2>
    <div class="clown-options">
    ${Clown()}
    </div>

    <div>
    <button class="button" id="submit">Submit Your Reservation</button>
    </div>

    <h2>Reservations</h2>
    <div class="reservations">
    ${Reservation()}
    </div>
    `
}