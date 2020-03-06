<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Numbery & Nany !</title>

    <link rel="stylesheet" href="style.css" />
    <script src="./data/entries.js"></script>
    <script src="./log.js"></script>
    <script src="./init.js"></script>

    <script src="handelers\removeinput.js"></script>
    <script src="handelers\saveinput.js"></script>
    <script src="listeners\rest.js"></script>
  </head>

  <body onload='document.mainForm.txtInput.focus()'>
    <form name="mainForm" action="#"></form>
    <div id="red">
    <section id="user-interface" class="first">
      <br />
      <input id="txtInput" type="text" required />
      <br />
      <hr />
      <br />
      <button id="btnSave">Save</button>
      <button id="btnRemove">Remove</button>
      <hr />
      <div >
        Numbers:
        <div id="Numbery"><ul></ul></div>
        <hr/>
        NAN :
        <div id="Nany"><ul></ul></div>
      </div>
      <hr />
      <button id="btnReset">Reset</button>
    </section>
</div>
    <script src="listeners\removeinput.js"></script>
    <script src="listeners\rest.js"></script>
    <script src="listeners\saveinput.js"></script>
  </form>
  </body>
</html>

