const addButton = document.getElementById("add-button")
const startButton = document.getElementById("start-button")

let intervalMilliseconds = 1000;
let currentIndex = 0;
let intervalId;

addButton.addEventListener("click", function () {
    const urlInput = document.getElementById("url-input");
    const url = urlInput.value.trim();
    if (url) {
        addUrl(url)
    }
})

function addUrl(url) {
    const list = document.getElementById("url_list")
    const newItem = document.createElement("option")
    newItem.className = "url_list_element"
    newItem.innerHTML = url
    list.appendChild(newItem)
}

startButton.addEventListener("click", function () {
    startButton.disabled = true
    const interval = parseInt(document.getElementById("interval-input").value)
    if (interval) {
        intervalMilliseconds = interval
        urls = document.getElementById("url_list").querySelectorAll("option");
        showNextWebpage()
        intervalId = setInterval(showNextWebpage, intervalMilliseconds)
        startButton.disabled = true
    }
})




function showNextWebpage() {
    if (currentIndex < urls.length) {
        const url = urls[currentIndex].value;
        const iframe = document.getElementById("slide");
        iframe.src = url
        currentIndex++;
    } else {
        clearInterval(intervalId);
        const iframe = document.getElementById("slide");
        iframe.removeAttribute("src")
        currentIndex = 0
        startButton.disabled = false;
    }
}