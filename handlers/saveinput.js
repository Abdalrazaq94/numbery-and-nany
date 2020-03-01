function saveHandler() {
    debugger;
    //get the input by user
    const inputValue = document.getElementById('txtInput').value;
    if (inputValue === " " || inputValue === null) {
        alert("Please Fill the  Required Field");
        return false;
    }
}