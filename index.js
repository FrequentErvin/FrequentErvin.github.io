document.getElementById("GoHome").onclick=function(){
    location.href="/index.html";
  };
  document.getElementById("blog").onclick=function(){
    location.href="/blog.html";
  };
  document.getElementById("project").onclick=function(){
    location.href="/projects.html";
  };
  document.getElementById("tofacts").onclick=function(){
    location.href="/facts.html";
  };
  document.getElementById("reflectimo").onclick=function(){
    location.href="/blogentries/reflectonimo.html";
  };
    document.getElementById("homeblog").onclick=function(){
    location.href="/blog.html";
  };
  document.getElementById("cv").onclick=function(){
    location.href="/ErvinMacicCV.pdf";
  };


  $(document).ready(function(){
    //Take your div into one js variable
    var div = $("#divToShowHide");
    //Take the current position (vertical position from top) of your div in the variable
    var pos = div.position();
    //Now when scroll event trigger do following
    $(window).scroll(function () {
     var windowpos = $(window).scrollTop();
     //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
     // I am taking 100px scroll, you can take whatever you need
     if (windowpos >= (pos.top - 100)) {
       div.addClass("AfterScroll");
     }
     //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
     else {
       s.removeClass("AfterScroll");
     }
     //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
   });
  });
    // function([string1, string2],target id,[color1,color2])    
    consoleText(['Welcome to my Website!', 'Take a look around', 'Made with Love.'], 'text',['#993233','#212429','#993233']);
  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {
  
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    window.setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;
  
      } else {
        con.className = 'console-underscore'
  
        visible = true;
      }
    }, 400)
  }