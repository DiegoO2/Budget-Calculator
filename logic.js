document.addEventListener(`DOMContentLoaded`, () => {

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event, (eventData) => {code(eventData)})}

})