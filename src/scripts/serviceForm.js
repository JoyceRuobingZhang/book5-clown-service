import { sendReservation } from "./dataAccess.js"

export const Form = () => {
    return `

    <div class="field">
    <lable for="parentName">Parent Name</lable>
    <input type="text" id="parentName"   />
    </div>   

    <div class="field">
    <lable for="childName">Child Name</lable>
    <input type="text" id="childName"   />
    </div> 

    <div class="field">
    <lable for="numberOfChildren">Number of Children</lable>
    <input type="text" id="numberOfChildren"   />
    </div> 

    <div class="field">
    <lable for="Address">Address</lable>
    <input type="text" id="Address"   />
    </div> 

    <div class="field">
    <lable for="reservedDate">Reserved Date</lable>
    <input type="date" id="reservedDate"   />
    </div> 

    <div class="field">
    <lable for="reservedLegthOfHours">Reserved Legth of Hours</lable>
    <input type="text" id="reservedLegthOfHours"   />
    </div> 
    
    `
}

let clownId
document.addEventListener("change", e => {
    if (e.target.name = "clown") {
        clownId = parseInt(e.target.value)
    }
})

document.addEventListener("click", e => {
    if (e.target.id === "submit") {
        const userParentName = document.getElementById("parentName").value
        const userChildName = document.getElementById("childName").value
        const userNumberOfChildren = document.getElementById("numberOfChildren").value
        const userAddress = document.getElementById("Address").value
        const userReservedDate = document.getElementById("reservedDate").value
        const userReservedLegthOfHours = document.getElementById("reservedLegthOfHours").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: userNumberOfChildren,
            address: userAddress,
            reservedDate: userReservedDate,
            reservedLegthOfHours: userReservedLegthOfHours,
            clownId: clownId
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})