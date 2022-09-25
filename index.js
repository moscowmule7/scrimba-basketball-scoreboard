let countHome = 0
let countGuest = 0
let countElHome = document.getElementById("home-score")
let countElGuest = document.getElementById("guest-score")

function addOneHome() {
    countHome += 1
    countElHome.textContent = countHome
}

function addTwoHome() {
    countHome += 2
    countElHome.textContent = countHome
}

function addThreeHome() {
    countHome += 3
    countElHome.textContent = countHome
}

function addOneGuest() {
    countGuest += 1
    countElGuest.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    countElGuest.textContent = countGuest
}

function addThreeGuest() {
    countGuest += 3
    countElGuest.textContent = countGuest
}

function resetHome() {
    countElHome.textContent = 0
    countGuest = 0
}

function resetGuest() {
    countElGuest.textContent = 0
    countGuest = 0
}