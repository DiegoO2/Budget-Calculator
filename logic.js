document.addEventListener(`DOMContentLoaded`, () => {

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event, (eventData) => {code(eventData)})}
    let step = 1;

    addListener("nextButton", "change",

    switch(step){
        case 1:

        case 2:

        case 3:

        case 4:
    }
    
    
    )
})
