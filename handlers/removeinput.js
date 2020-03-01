function removeHandler() {
    const valueToRemoveNoTrim = document.getElementById("txtInput").value;
    const valueToRemove = valueToRemoveNoTrim.trim();
    let indexTobeRemoved = -1;
    var parsedIn = parseInt(valueToRemove);

    if (isNaN(parsedIn)) { indexTobeRemoved = entries.nany.indexOf(valueToRemove); }
    else { indexTobeRemoved = entries.numbery.indexOf(valueToRemove); }

    if (indexTobeRemoved === -1) {
        alert("There is no item as the input to be removed !");
        return false;
    }
    else {
        if (isNaN(parsedIn))
            entries.nany.splice(indexTobeRemoved, 1);
        else
            entries.numbery.splice(indexTobeRemoved, 1);

        RenderResults();
        alert("your input value : " + valueToRemove + "is removed successfully !");
    }
}