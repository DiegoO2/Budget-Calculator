document.addEventListener(`DOMContentLoaded`, () => {

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event, (eventData) => {code(eventData)})}
    elementById("one").classList.remove("displayFlex");
    elementById("two").classList.add("displayNone");
    elementById("three").classList.add("displayNone");
    elementById("four").classList.add("displayNone");
    let step = 1;

    document.getElementById("nextButton").addEventListener("click", function(e){

    switch(step){
        case 1:
            elementById("two").classList.remove("displayNone");
            elementById("two").classList.add("displayFlex");
            elementById("one").classList.remove("displayFlex");
            elementById("one").classList.add("displayNone");
            step=2;
            break
        case 2:
            elementById("three").classList.remove("displayNone");
            elementById("three").classList.add("displayFlex");
            elementById("two").classList.remove("displayFlex");
            elementById("two").classList.add("displayNone");
            step=3;
            break
        case 3:
            elementById("four").classList.remove("displayNone");
            elementById("four").classList.add("displayFlex");
            elementById("three").classList.remove("displayFlex");
            elementById("three").classList.add("displayNone");
            step=4;
            break
        default:
        break
    }
    })
    document.getElementById("backButton").addEventListener("click", function(e){

        switch(step){
            case 2:
                elementById("one").classList.remove("displayNone");
                elementById("one").classList.add("displayFlex");
                elementById("two").classList.remove("displayFlex");
                elementById("two").classList.add("displayNone");
                step=1;
                break
            case 3:
                elementById("two").classList.remove("displayNone");
                elementById("two").classList.add("displayFlex");
                elementById("three").classList.remove("displayFlex");
                elementById("three").classList.add("displayNone");
                step=2;
                break
            case 4:
                console.log("cats")
                elementById("three").classList.remove("displayNone");
                elementById("three").classList.add("displayFlex");
                elementById("four").classList.remove("displayFlex");
                elementById("four").classList.add("displayNone");
                step=3;
                break
            default:
                break
        }
        })
    
})
