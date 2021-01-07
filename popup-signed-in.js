document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('popup-click');
    btn.addEventListener('click', function() {
        chrome.tabs.executeScript(null, {
          file: "content.js"
        });
    });
  });
document.querySelector('#sign-out').addEventListener('click', function () {
  chrome.runtime.sendMessage({ message: 'logout' }, function (response) {
      if (response === 'success') window.close();
  });
});
document.querySelector('button').addEventListener('click', function () {
    chrome.runtime.sendMessage({ message: 'isUserSignedIn' }, function (response) {
        alert(response);
    });
});