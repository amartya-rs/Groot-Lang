var textArea = document.querySelector("#ta-input");
var button = document.querySelector("#button");
var output = document.querySelector("#div-output");

button.addEventListener("click", clickEventHandler);



var url = "https://api.funtranslations.com/translate/groot.json";


function serverUrl (text) {
    return url + "?" + "text=" + text
}


function clickEventHandler() {
    var textInput = textArea.value;

    fetch(serverUrl(textInput))
    .then(response => response.json())
    .then(json => {
        var tText = json.contents.translated;
        output.innerText = tText;
    })
    .catch(errorHandler)
    
    
}

//error handling
function errorHandler(){
    alert("Something wrong with the server. Try after sometime.")
};