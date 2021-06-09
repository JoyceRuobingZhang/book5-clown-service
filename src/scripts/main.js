import { clownService } from "./clownService.js"
import { fetchReservation, fetchClown } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchClown().then(() => {
        fetchReservation().then(() => {
            mainContainer.innerHTML = clownService()
        })
    })
}
render()


mainContainer.addEventListener("stateChanged", e => {
    render()
})