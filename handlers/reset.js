function resetHandler() {
    //Number list
    debugger;
    const numberlist = document.getElementById('Numbery');
    //check if ul already exists if not create it 
    const ulEl = numberlist.children[0];
    ulEl.innerHTML = '';
    numberlist.appendChild(ulEl);
    //NAN list
    const nanList = document.getElementById('Nany');
    const ulElN = nanList.children[0];
    ulElN.innerHTML = '';
    nanList.appendChild(ulElN);
    //empty the input string 
    document.getElementById('txtInput').value = "";
    //empty the state object
    entries.numbery = [];
    entries.nany = [];
}