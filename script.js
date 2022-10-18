//allen Buttons wird über die ID ein Eventlistener hinzugefügt
document.getElementById("one").addEventListener("click", function(){setNumber(1)});
document.getElementById("two").addEventListener("click", function(){setNumber(2)});
document.getElementById("three").addEventListener("click", function(){setNumber(3)});
document.getElementById("four").addEventListener("click", function(){setNumber(4)});
document.getElementById("five").addEventListener("click", function(){setNumber(5)});
document.getElementById("six").addEventListener("click", function(){setNumber(6)});
document.getElementById("seven").addEventListener("click", function(){setNumber(7)});
document.getElementById("eight").addEventListener("click", function(){setNumber(8)});
document.getElementById("nine").addEventListener("click", function(){setNumber(9)});
document.getElementById("zero").addEventListener("click", function(){setNumber(0)});
document.getElementById("add").addEventListener("click", function(){setOperator("+")});
document.getElementById("sub").addEventListener("click", function(){setOperator("-")});
document.getElementById("div").addEventListener("click", function(){setOperator("/")});
document.getElementById("mul").addEventListener("click", function(){setOperator("*")});
document.getElementById("delete").addEventListener("click", function(){reset()});

//enter ist das istgleich Zeichen
let enter = document.getElementById("enter");

//field ist das Textfeld
let field = document.getElementById("eingabe");

let numberOne = "";
let numberOneSet = false;
let numberTwo = "";
let operator = "";
let result = null;
let resultSet = false;
let myImg = document.createElement('img');

/*
Wenn das istgleich Zeichen gedrückt wird überprüft diese Funktion ob beide Zahlen eingegeben wurden.
Falls beide Zahlen eingegeben wurden wird mit einem Switch der richtige Operator bestimmt, die Rechnung ausgeführt und das Resultat ausgegeben.
 */
enter.addEventListener("click", function(){
    if(numberOne !== "" && numberTwo !== "") {
        switch (operator) {
           case "+":
             result=parseInt(numberOne)+parseInt(numberTwo);
             break
           case "-": 
             result=parseInt(numberOne)-parseInt(numberTwo);
             break 
           case "/":
             result=parseInt(numberOne)/parseInt(numberTwo);
             break
           case "*": 
             result=parseInt(numberOne)*parseInt(numberTwo);
             break
            
        }
        field.value = result;
        resultSet=true;
    }else{
        console.log("Bitte Zahl eingeben");
    }
});

/*
Mit dieser Funktion werden die Nummern gesetzt.
Wenn bereits ein Resultat gesetzt ist wird alles zurückgesetzt.
Wenn NumberOne noch nicht gesetzt ist wird die mitgegebene Zahl der ersten Zahl angehängt.
Falls NumberOne bereits gesetzt ist wird die mitgegebene Zahl der zweiten Zahl angehängt.
 */
function setNumber(number) {
    if(resultSet) {
        reset();
    }else{ 
        if(numberOneSet) {
        numberTwo=numberTwo.concat(number.toString())
    }else {numberOne=numberOne.concat(number.toString())
    }

        setValue()
    }

}

//Mit dieser Funktion werden alle Variablen und das Eingabefeld zurückgesetzt.
function reset() {
    field.value=""
     numberOne = "";
 numberOneSet = false;
 numberTwo = "";
 operator = "";
 result = null;
 resultSet = false;
}

/*
Mit dieser Funktion wird die eingegebene Zahl im field ausgegeben.
Wenn NumberOne bereits gesetzt ist wird die eingegebene Zahl mit dem Operator nach der ersten Zahl angezeigt.
 */
function setValue() {
    field.value=numberOne+operator+numberTwo;
}

/*
Mit dieser Funktion wird der Operator gesetzt.
Wenn bereits ein Resultat gesetzt ist wird alles zurückgesetzt.
Wenn der Operator noch nicht gesetzt ist wird er gesetzt.
Falls der Operator bereits gesetzt ist wird er durch den neuen Operator ersetzt.
 */
function setOperator(value) {
    operator=value
    numberOneSet = true
    setValue();
}