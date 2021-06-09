import { getClowns } from "./dataAccess.js"



export const Clown = () => {
    const clowns = getClowns()

    let html = "<ul>"

    html += clowns.map(clown => {
        return `<li><input type="radio" name="clown" value="${clown.id}" />${clown.name}</li>`
    }).join("")

    html += "</ul>"
    return html
}