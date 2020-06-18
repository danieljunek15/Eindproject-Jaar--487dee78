const check = ['</h1>'];

var count = 0;

function Conteroleer () {
    const inputVraagTwee = document.getElementById('vraag2Input').value;
    const checkboxV1 = document.getElementById('answer2');
    const checkboxV3 = document.getElementById('answerV34');
    if (checkboxV1.checked == true){ 
        count += 1;
    } else {
        console.log('nope');
    }
    if (inputVraagTwee == check[0]){
        document.getElementById('vraag2Input').style.backgroundColor = "green";
        count += 1;
    } else {
        document.getElementById('vraag2Input').style.backgroundColor = "red";
    }
    if (checkboxV3.checked == true){
        count += 1;
    }
    if (count < 4) {
        document.getElementById('scorenboard').innerHTML = 'Jouw score is :' + count;
    }
}