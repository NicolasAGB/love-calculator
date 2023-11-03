function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if (name1 === "" || name2 === "") {
        alert("Plase enter both names.");
    } else {

        let lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        if ((name1 === "camila" && name2 === "nicolas") || (name1 === "nicolas" && name2 === "camila")) {
            lovePercentage = 100;
        } ///very important "if" statement that avoid my girlfriend gets mad at me.
        console.log(lovePercentage);

        result.innerHTML = `<span class="nameColor">${name1} </span> and <span class="nameColor">${name2} 's </span>  Love porcentage: ${lovePercentage} %`;

        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great Match. Sorry!"

        } else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br> There is potential. Give it a try !"
        } else if (lovePercentage >= 30 && lovePercentage <= 99) {
            result.innerHTML += "<br> Great Match!!! You could be happy togheter ☻  "

        } else {
            result.innerHTML += "<br> ♥ Perfect Match!! Love is in the Air! ♥"
        }
    }
}