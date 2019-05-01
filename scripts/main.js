(function () {
    generateProverb();
    var today = new Date()
    var curHr = today.getHours()
    try {
        if (curHr < 12) {
            document.getElementById('greeting').innerHTML = 'Bon dia'
        } else if (curHr < 18) {
            document.getElementById('greeting').innerHTML = 'Bona tarda'
        } else {
            document.getElementById('greeting').innerHTML = 'Bona nit'
        }
    } catch{ }
})();
