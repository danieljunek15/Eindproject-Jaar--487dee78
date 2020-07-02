function runCode() {
    var codeInput = document.getElementById('Input').value;
    document.getElementById('Output').innerHTML = codeInput;
}

let lessen = localStorage.getItem('lessen');

lessen = JSON.parse(lessen);

function checkLessen(id) {

    lessen.forEach((les, index, array) => {
        if (les.id === id) {
            les.disabled = false;
            array[index] = les;
            localStorage.setItem("lessen", JSON.stringify(lessen));

        }
    })

    alert('Je hebt de les goed afgesloten!!');
}