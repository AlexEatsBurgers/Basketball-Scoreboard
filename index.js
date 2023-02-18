// let homeScoreEl = document.getElementById("Home-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function highlight() {
    if (guestScore > homeScore) {
        guestScoreEl.style.color= "#00cc00";
        homeScoreEl.style.color= "#F94F6D";    
    }
    else if (guestScore < homeScore) {
        guestScoreEl.style.color= "#F94F6D";
        homeScoreEl.style.color= "#00cc00";  
    }
    else {homeScoreEl.style.color = "yellow";
            guestScoreEl.style.color = "yellow"};
}

function homePlusOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlight()
}

function homePlusTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlight()
}

function homePlusThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlight()
}

function guestPlusOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlight()
}

function guestPlusTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlight()
}

function guestPlusThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlight()
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    homeScoreEl.style.color= "#F94F6D";
    guestScoreEl.style.color= "#F94F6D";
}

