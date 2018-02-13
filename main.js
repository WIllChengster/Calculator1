
$(document).ready(initializeApp);



var my_calculator = new calculator(callback);


function initializeApp(){
    applyOnElements();
}

function applyOnElements(){
    $('button').on('click',numberOperatorPress);
}

function numberOperatorPress(){
    var val=$(this).text();
    switch(val){
        case "AC":
            my_calculator.allClear();
            break;
        default:
            my_calculator.addItem(val);
            break;
    }
}

function callback(type, value, item){
    switch(value){
        case undefined:
            $('#displayArea').html('');
            break;
        default:
            $('#displayArea').html(value);
            break
    }
}