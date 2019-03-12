  // Note: Javascript is not supported in preview VS Code
  // CTRL + SHIFT + I  to format document

  let verseSelection = document.querySelector("select");
  let xhrPoemDisplay = document.querySelector(".xhr");
  let fetchPoemDisplay = document.querySelector(".fetch");
  let ajaxSelection = document.querySelector("#ajaxchoice");
  let xhr = document.querySelector("input[value='XmlHttpRequest']");
  xhr.setAttribute("checked", true);

  function convertToFileName(val) {
    return val.replace(" ", "").toLowerCase() + ".txt";
  }


  verseSelection.onchange = function () {

    let xhr = document.querySelector("input[value='XmlHttpRequest']");

    if (xhr.checked) {
      updateDisplayWithXHR(convertToFileName(verseSelection.value));
    } else {

      updateDisplayWithFetch(convertToFileName(verseSelection.value));
    }
  };

  function updateDisplayWithXHR(url) {

    // Some browsers (including Chrome) will not 
    //run XHR requests if you just run the example from a local file. 

    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "text";
    request.send();

    // text should be set after the response has arrived
    request.onload = function () {
      xhrPoemDisplay.textContent = request.response;
    }

  };


  function updateDisplayWithFetch(url) {

    fetch(url).then(function (response) {
      response.text().then(function (text) {
        fetchPoemDisplay.textContent = text;
      });
    });

    fetch(url)
      .then(function (response) {
        return response.text
      })
      .then(function (text) {
        fetchPoemDisplay.textContent = text;
      });



  };

  verseSelection.value = 'Verse 1';
  updateDisplayWithXHR(convertToFileName('Verse 1'));