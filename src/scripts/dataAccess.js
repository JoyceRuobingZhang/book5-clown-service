const applicationState = {

}



const API = "http://localhost:8000"
export const fetchReservation = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(allRreservations => {
            applicationState.reservations = allRreservations
        })
}


let clowns = []
export const fetchClown = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(allClowns => {
            clowns = allClowns
        })
}

const mainContainer = document.querySelector("#container")
export const sendReservation = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                // 🟡🟡🟡Remember that every time state changes, you have to generate new HTML representations of the state.  
        })
}

export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// to make the reservations display in time (reservedDate) order
export const getReservations = () => {
    const reservations = applicationState.reservations.map(reservation => ({...reservation }))
    const reservationsInTimeOrder = reservations.sort(function(x, y) {
        return x.reservedDate.localeCompare(y.reservedDate)
    })
    return reservationsInTimeOrder
}

export const getClowns = () => {
    return clowns.map(clown => ({...clown }))
}