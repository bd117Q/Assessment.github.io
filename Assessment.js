document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getMessage").onclick = function() {
      req = new XMLHttpRequest();
      req.open(
        "GET",
        "https://jsonplaceholder.typicode.com/albums/1/photos",
        true
      );
      req.send();
      req.onload = function() {
        json = JSON.parse(req.responseText);
        var html = "";
        json.forEach(function(val) {
          html += "<img src = '" + val.url + ">";
        });
        document.getElementsByClassName("message")[0].innerHTML = html;
      };
    };
  });