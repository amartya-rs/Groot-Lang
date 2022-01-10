const textArea = document.querySelector("#ta-input");
const button = document.querySelector("#button");
const output = document.querySelector("#div-output");

const url = "https://api.funtranslations.com/translate/groot.json";

let serverUrl = text => `${url}?text=${text}`;


let clickEventHandler= () => {
    const textInput = textArea.value;

    fetch(serverUrl(textInput))
    .then(response => response.json())
    .then(json => {
        const tText = json.contents.translated;
        output.innerText = tText;
    })
    .catch(errorHandler)
}

button.addEventListener("click", clickEventHandler);

//error handling
let errorHandler = () => {
    alert("Something wrong with the server. Try after sometime.")
};