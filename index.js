
function getContent(fragmentId, callback){
    // Create a new AJAX request for fetching the partial HTML file.
  var request = new XMLHttpRequest();

  // Call the callback with the content loaded from the file.
  request.onload = function () {
    callback(request.responseText);
  };

  // Fetch the partial HTML file for the given fragment id.
  request.open("GET", fragmentId + ".html");
  request.send(null);
}

// Sets the "active" class on the active navigation link.
function setActiveLink(fragmentId){
   
    var links = document.getElementById("contentNav").children;
    
    for(var i = 0; i < links.length; i++){
        
        var link = links[i].getElementsByTagName("a");
        
        if(link[0].getAttribute("href") === fragmentId){
            
            link[0].setAttribute("class", "active");
        }
        else{
            
            link[0].removeAttribute("class");
        }
    }
    
}


//render in dom
var contentDiv = document.getElementsByClassName("articleContent");
      
getContent(window.location.href.slice(-12),function(content){
         contentDiv[0].innerHTML = content;
    });

setActiveLink(window.location.href.slice(-12));


