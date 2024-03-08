

document.addEventListener(`DOMContentLoaded`, () => {

localStorage.clear();

document.getElementById("careerNextButton").addEventListener("click", function(e){
    console.log("cats");

    let divArray = document.querySelectorAll(".careerContent div input");

    for(div of divArray){
        if (div.checked==true) {
            localStorage.setItem("monthlyIncome", `${div.value}`);
        }
    }
    console.log(localStorage.getItem("monthlyIncome"))

    // console.log(divArray)



    // divArray.forEach(i => console.log(i.value));

})


});