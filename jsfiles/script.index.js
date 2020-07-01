const defaultLessen = [
    {
        "id": "htmlLes1",
        "disabled": false
    },
    {
        "id": "htmlLes2",
        "disabled": true
    },
    {
        "id": "htmlLes3",
        "disabled": true
    },
    {
        "id": "htmlQuiz",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    },
    {
        "id": "",
        "disabled": true
    }
]

let lessen = localStorage.getItem('lessen');

if (lessen === null) {

    lessen = defaultLessen;
    localStorage.setItem( "lessen", JSON.stringify(lessen));
} else {
    lessen = JSON.parse(lessen);
}
