import { editQuantityForm } from "./EditEventForm.js";

const eventHub = document.querySelector(".main")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("editEvent--")) {
        const [prefix, id] = event.target.id.split("--");
        editQuantityForm(id)
    }
})

const showDelete = (userObj) => {
    if (parseInt(sessionStorage.getItem("activeUser")) === userObj.userId){
        return `
        <button id="deleteEvent--${userObj.id}">Delete</button>
        <button id="editEvent--${userObj.id}">Edit</button>
        `
    } else {
        return ""
    }
}

export const EventComponent = (eventObj) => {
    return `
    <div class="eventCardList">    
        <h4 id="eventTitle--${eventObj.id} value="${eventObj.name}" class="eventTitle">${eventObj.name}</h4>
                <p id="eventdate--${eventObj.id}" value="${eventObj.date}">${eventObj.date}</p>
                <p id="eventLocation--${eventObj.id}" value="${eventObj.location}">${eventObj.location}</p>
                <p id="eventHost--${eventObj.id}" value="${eventObj.user.username}">${eventObj.user.username}</p>
                <button id="weatherEvent--${eventObj.id}">Show Weather</button>
            ${showDelete(eventObj)}
    </div>
            `
}