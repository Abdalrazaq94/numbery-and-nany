window.onload = () => {
    debugger;
    // render initial state


    // log initial state
    const copyOfState = JSON.parse(JSON.stringify(numbers));
    log.push({
        initialNumbers: copyOfState
    });
}
