(function () {
    generateProverb();
    greetings();
})();

function greetings(){
    var curHr = new Date().getHours()
    var morning = ('Bon dia');
    var afternoon = ('Bona tarda');
    var evening = ('Bona nit');
    var greeting;

    try {
        if (curHr < 14) {
            greeting = morning
        } else if (curHr < 21) {
            greeting = afternoon
        } else {
            greeting = evening
        }
        document.getElementById('greeting').innerHTML = greeting
    } catch{ }
}