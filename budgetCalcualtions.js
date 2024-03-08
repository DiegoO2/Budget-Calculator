

document.addEventListener(`DOMContentLoaded`, () => {

    let monthlyIncome = Number(localStorage.getItem("monthlyIncome"));
    let anotherIncome = Number(document.getElementById("anotherIncome").value);
    let mTax ="";
    document.getElementById("grossIncome").value = monthlyIncome;

    function setIncome(){
        taxer();
        if(document.getElementById("totalTaxes").value !== ""){
            document.getElementById("monthIncome").innerHTML = `$${monthlyIncome + anotherIncome}`;
        }
        document.getElementById("monthIncome").innerHTML = `$${monthlyIncome - monthlyIncome*mTax/100 + anotherIncome}`;
    };
    function taxer(){
        mTax = document.getElementById("totalTaxes").value;
    };
    function otherIncome(){
        anotherIncome = Number(document.getElementById("anotherIncome").value);;
    };
    setIncome();
    document.getElementById("grossIncome").addEventListener("change", function(){
        monthlyIncome = Number(document.getElementById("grossIncome").value);
        setIncome();
    });
    document.getElementById("totalTaxes").addEventListener("change", function(){
        setIncome();
    });
    document.getElementById("anotherIncome").addEventListener("change", function(){
        otherIncome()
        setIncome();
    });

    document.getElementById("nextButton").addEventListener("click", function(){
        document.getElementById("monthIncome").innerHTML = `$${monthlyIncome - monthlyIncome*mTax/100 + anotherIncome}`;
    });


});




