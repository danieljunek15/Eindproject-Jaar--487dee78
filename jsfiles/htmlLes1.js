function runCode() {
    var codeInput = document.getElementById('Input').value;
    document.getElementById('Output').innerHTML = codeInput;
}

let lessen1 = localStorage.getItem('lessen');

lessen1 = JSON.parse(lessen);

function checkLessen(id) {

    lessen1.forEach((les, index, array) => {
        if (les.id === id) {
            les.disabled = false;
            array[index] = les;
            localStorage.setItem("lessen", JSON.stringify(lessen1));

        }
    })

    alert('Je hebt de les goed afgesloten!!');
}