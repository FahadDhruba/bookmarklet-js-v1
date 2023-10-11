javascript: (function () {
  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  var iframe = document.querySelector("iframe[allow]");
  var gcloud = document.querySelector("video[src]");

  if (gcloud) {
    var srclink = gcloud.src;
    copyToClipboard(srclink);
    alert(
      "Google Cloud Link Copied...!!! \n \n Paste It Into Suggested Video Player...!!!"
    );
  } else if (iframe) {
    var src = iframe.src;
    var regex = /([A-Za-z0-9-_])+/g;
    var matches = src.match(regex);
    var youtoob = "https://youtu.be/" + matches[5];
    copyToClipboard(youtoob);
    alert("Youtoob Link Copied...!!! \n ");
  } else {
    alert("Boom...!!! \n The code is no longer working for this website...!!!");
  }
})();
