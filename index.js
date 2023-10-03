let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")
let leadingEl = document.getElementById("leading-el")
let homeScore = 0
let awayScore = 0

function homeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
    leading()
}

function homeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
    leading()
}

function homeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
    leading()
}

function awayOne() {
    awayScore += 1
    awayScoreEl.textContent = awayScore;
    leading()
}

function awayTwo() {
    awayScore += 2
    awayScoreEl.textContent = awayScore;
    leading()
}

function awayThree() {
    awayScore += 3
    awayScoreEl.textContent = awayScore;
    leading()
}

function newGame() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    awayScore = 0
    awayScoreEl.textContent = awayScore
    leadingEl.textContent = "Let's Play!"
}

function leading() {
    if (homeScore > awayScore) {
        leadingEl.textContent = "Home team is leading the game!"
    } else if (homeScore < awayScore) {
        leadingEl.textContent = "Guest team is leading the game!"
    } else {
        leadingEl.textContent = "It's a tie!"
    }
}
