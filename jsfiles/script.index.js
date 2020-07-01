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
        "id": "cssLes1",
        "disabled": true
    },
    {
        "id": "cssLes2",
        "disabled": true
    },
    {
        "id": "cssLes3",
        "disabled": true
    },
    {
        "id": "cssQuiz",
        "disabled": true
    },
    {
        "id": "jsLes1",
        "disabled": true
    },
    {
        "id": "jsLes2",
        "disabled": true
    },
    {
        "id": "jsLes3",
        "disabled": true
    },
    {
        "id": "jsQuiz",
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



lessen.forEach(les => {
    const button = document.getElementById(les.id);
    button.disabled = les.disabled;
  })


// const button = document.getElementById("jsLes3");  