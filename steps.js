document.addEventListener(`DOMContentLoaded`, () => {

    let elementById = function(id) {return document.getElementById(id)}

    let addListener = function(id,event,code) {elementById(id).addEventListener(event, (eventData) => {code(eventData)})}
    elementById("one").classList.remove("displayFlex");
    elementById("two").classList.add("displayNone");
    elementById("three").classList.add("displayNone");
    elementById("four").classList.add("displayNone");
    let step = 1;

    document.getElementById("cOne").addEventListener("click", function(){
        elementById("one").classList.remove("displayNone");
        elementById("one").classList.add("displayFlex");
        elementById("two").classList.remove("displayFlex");
        elementById("two").classList.add("displayNone");
        elementById("three").classList.remove("displayFlex");
        elementById("three").classList.add("displayNone");
        elementById("four").classList.remove("displayFlex");
        elementById("four").classList.add("displayNone");

        elementById("cOne").classList.remove("noIn");
        elementById("cTwo").classList.add("noIn");
        elementById("cThree").classList.add("noIn");
        elementById("cFour").classList.add("noIn");


        step=1;
    });
    document.getElementById("cTwo").addEventListener("click", function(){
        elementById("two").classList.remove("displayNone");
        elementById("two").classList.add("displayFlex");
        elementById("one").classList.remove("displayFlex");
        elementById("one").classList.add("displayNone");
        elementById("three").classList.remove("displayFlex");
        elementById("three").classList.add("displayNone");
        elementById("four").classList.remove("displayFlex");
        elementById("four").classList.add("displayNone");

        elementById("cTwo").classList.remove("noIn");
        elementById("cOne").classList.add("noIn");
        elementById("cThree").classList.add("noIn");
        elementById("cFour").classList.add("noIn");
        step=2;
    });
    document.getElementById("cThree").addEventListener("click", function(){
        elementById("three").classList.remove("displayNone");
        elementById("three").classList.add("displayFlex");
        elementById("one").classList.remove("displayFlex");
        elementById("one").classList.add("displayNone");
        elementById("two").classList.remove("displayFlex");
        elementById("two").classList.add("displayNone");
        elementById("four").classList.remove("displayFlex");
        elementById("four").classList.add("displayNone");

        elementById("cThree").classList.remove("noIn");
        elementById("cOne").classList.add("noIn");
        elementById("cTwo").classList.add("noIn");
        elementById("cFour").classList.add("noIn");

        step=3;
    });
    document.getElementById("cFour").addEventListener("click", function(){
        elementById("four").classList.remove("displayNone");
        elementById("four").classList.add("displayFlex");
        elementById("one").classList.remove("displayFlex");
        elementById("one").classList.add("displayNone");
        elementById("two").classList.remove("displayFlex");
        elementById("two").classList.add("displayNone");
        elementById("three").classList.remove("displayFlex");
        elementById("three").classList.add("displayNone");


        elementById("cFour").classList.remove("noIn");
        elementById("cOne").classList.add("noIn");
        elementById("cTwo").classList.add("noIn");
        elementById("cThree").classList.add("noIn");
        
        step=4;
    });



    document.getElementById("nextButton").addEventListener("click", function(){

    switch(step){
        case 1:
            elementById("two").classList.remove("displayNone");
            elementById("two").classList.add("displayFlex");
            elementById("one").classList.remove("displayFlex");
            elementById("one").classList.add("displayNone");

            elementById("cTwo").classList.remove("noIn");
            elementById("cOne").classList.add("noIn");

            step=2;
            break
        case 2:
            elementById("three").classList.remove("displayNone");
            elementById("three").classList.add("displayFlex");
            elementById("two").classList.remove("displayFlex");
            elementById("two").classList.add("displayNone");

            elementById("cThree").classList.remove("noIn");
            elementById("cTwo").classList.add("noIn");

            step=3;
            break
        case 3:
            elementById("four").classList.remove("displayNone");
            elementById("four").classList.add("displayFlex");
            elementById("three").classList.remove("displayFlex");
            elementById("three").classList.add("displayNone");

            elementById("cFour").classList.remove("noIn");
            elementById("cThree").classList.add("noIn");
            
            step=4;
            break
        default:
        break
    }
    })
    document.getElementById("backButton").addEventListener("click", function(){

        switch(step){
            case 2:
                elementById("one").classList.remove("displayNone");
                elementById("one").classList.add("displayFlex");
                elementById("two").classList.remove("displayFlex");
                elementById("two").classList.add("displayNone");

                elementById("cTwo").classList.add("noIn");
                elementById("cOne").classList.remove("noIn");
    
                step=1;
                break
            case 3:
                elementById("two").classList.remove("displayNone");
                elementById("two").classList.add("displayFlex");
                elementById("three").classList.remove("displayFlex");
                elementById("three").classList.add("displayNone");

                elementById("cThree").classList.add("noIn");
                elementById("cTwo").classList.remove("noIn");
    
                step=2;
                break
            case 4:
                elementById("three").classList.remove("displayNone");
                elementById("three").classList.add("displayFlex");
                elementById("four").classList.remove("displayFlex");
                elementById("four").classList.add("displayNone");

                elementById("cFour").classList.add("noIn");
                elementById("cThree").classList.remove("noIn");
    
                step=3;
                break
            default:
                break
        }
    })
    let monthlyIncome = Number(localStorage.getItem("monthlyIncome"));
    let anotherIncome = Number(document.getElementById("anotherIncome").value);
    let mTax ="";
    let totalMonthIncome =0;
    let inputSList = document.querySelectorAll(".inputS");
    let inputEList = document.querySelectorAll(".inputE");
    let inputEntList = document.querySelectorAll(".inputEnt");
    let totalSavings = 0;
    let totalExpenses = 0;
    let totalEntertainment = 0;
    let leftOver = 0;
    document.getElementById("grossIncome").value = monthlyIncome;
    function roundToCent(number){
        return Math.round(number * 100) / 100;
    }
    function setLeftOver(){
        leftOver = totalMonthIncome - totalSavings - totalExpenses - totalEntertainment;
        leftOver = roundToCent(leftOver);
        if(leftOver < 0){
            elementById("divLeft").classList.remove("green");
            elementById("divLeft").classList.add("red");
            elementById("divLeft2").classList.remove("green");
            elementById("divLeft2").classList.add("red");
            elementById("divLeft3").classList.remove("green");
            elementById("divLeft3").classList.add("red");
            elementById("divLeft4").classList.remove("green");
            elementById("divLeft4").classList.add("red");

        }
        else{
            elementById("divLeft").classList.add("green");
            elementById("divLeft").classList.remove("red");
            elementById("divLeft2").classList.add("green");
            elementById("divLeft2").classList.remove("red");
            elementById("divLeft3").classList.add("green");
            elementById("divLeft3").classList.remove("red");
            elementById("divLeft4").classList.add("green");
            elementById("divLeft4").classList.remove("red");

        }
        document.getElementById("leftOver").innerHTML = `$${leftOver}`;
        document.getElementById("leftOver2").innerHTML = `$${leftOver}`;
        document.getElementById("leftOver3").innerHTML = `$${leftOver}`;
        document.getElementById("leftOver4").innerHTML = `$${leftOver}`;
    }
    function setIncome(){
        taxer();
        if(document.getElementById("totalTaxes").value !== ""){
            document.getElementById("monthIncome").innerHTML = `$${monthlyIncome + anotherIncome}`;
        }
        totalMonthIncome = monthlyIncome - monthlyIncome*mTax/100 + anotherIncome;
        totalMonthIncome = roundToCent(totalMonthIncome);
        document.getElementById("monthIncome").innerHTML = `$${totalMonthIncome}`;
        document.getElementById("monthIncome2").innerHTML = `$${totalMonthIncome}`;
        document.getElementById("monthIncome3").innerHTML = `$${totalMonthIncome}`;
        document.getElementById("monthIncome4").innerHTML = `$${totalMonthIncome}`;
        setLeftOver();
    };
    function setSavings(){
        document.getElementById("montSaving").innerHTML = `$${totalSavings}`;
        document.getElementById("montSaving2").innerHTML = `$${totalSavings}`;
        document.getElementById("montSaving3").innerHTML = `$${totalSavings}`;
        document.getElementById("montSaving4").innerHTML = `$${totalSavings}`;
        setLeftOver();
    };
    function setExpenses(){
        document.getElementById("monthExpenses").innerHTML = `$${totalExpenses}`;
        document.getElementById("monthExpenses2").innerHTML = `$${totalExpenses}`;
        document.getElementById("monthExpenses3").innerHTML = `$${totalExpenses}`;
        document.getElementById("monthExpenses4").innerHTML = `$${totalExpenses}`;
        setLeftOver();
    };
    function setEntertainment(){
        document.getElementById("monthEntertainment").innerHTML = `$${totalEntertainment}`;
        document.getElementById("monthEntertainment2").innerHTML = `$${totalEntertainment}`;
        document.getElementById("monthEntertainment3").innerHTML = `$${totalEntertainment}`;
        document.getElementById("monthEntertainment4").innerHTML = `$${totalEntertainment}`;
        setLeftOver();
    };

    function taxer(){
        mTax = document.getElementById("totalTaxes").value;
    };
    function otherIncome(){
        anotherIncome = Number(document.getElementById("anotherIncome").value);;
    };
    setIncome();
    setSavings();
    setExpenses();
    setEntertainment();
    setLeftOver();
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


    inputSList.forEach(element => {
        element.addEventListener("change", function(){
            totalSavings = Number(elementById("investment").value) + Number(elementById("savingAccount").value) + Number(elementById("emergencyFund").value) + Number(elementById("retirement").value);
            totalSavings = roundToCent(totalSavings);
            setSavings();
        });
    });

    inputEList.forEach(element => {
        element.addEventListener("change", function(){
            totalExpenses = Number(elementById("housing").value) + Number(elementById("foodGroceries").value) + Number(elementById("transportation").value) + Number(elementById("selfCare").value);
            totalExpenses = roundToCent(totalExpenses);
            setExpenses();
        });
    });

    inputEntList.forEach(element => {
        element.addEventListener("change", function(){
            totalEntertainment = Number(elementById("streamingServices").value) + Number(elementById("vacations").value) + Number(elementById("hobbies").value) + Number(elementById("other").value);
            totalEntertainment = roundToCent(totalEntertainment);
            setEntertainment();
        });
    });



    console.log(step);







})
