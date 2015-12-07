  // main ------------------------------------------------------------

    var SRC_LIST = ["images/ylw.gif", "images/org.gif", "images/ppl.gif", "images/blu.gif", "images/pnk.gif", "images/grn.gif", "images/gry.gif", "images/kosmita.png", "images/ygr.gif"];

    var counter = 0;
    var points = 0;
    var intervalFunction;

    var welcomeContainer = document.getElementById('welcomeContainer');

    // init();

    // addEventsToLiElements();

    // start();

    // ----FUNCTIONS--------------------------------------------------

    function startNewGame() {
        counter = 0;
        points = 0;

       init();

       addEventsToLiElements();

       start();
    }

    function init() {

      welcomeContainer.remove();

      document.getElementById('points').innerHTML = points;
      var grid = document.getElementById('grid');
      grid.innerHTML = '';

      for(var i = 0; i < SRC_LIST.length;i++) {
        var li =  document.createElement('LI');
        var img = document.createElement('IMG');
        img.src = SRC_LIST[i];
        setAltAttributeInListItems(i, img);

      li.appendChild(img);
      grid.appendChild(li);

      }

    }

    function start() {
      clearInterval(intervalFunction);
       intervalFunction = setInterval(function(){
            addNextBlockElement();
            addEventsToLiElements(); 
         if40ElementsStopGame();     
        }, 500);
    }

    function setAltAttributeInListItems(indexOfArray, imgNode) {

      switch(indexOfArray) {
        case 0 :
        imgNode.setAttribute("alt","yellow");
        break;
        case 1 :
        imgNode.setAttribute("alt","orange");
        break;
        case 2 : 
        imgNode.setAttribute("alt","purple");
        break;
        case 3 :
        imgNode.setAttribute("alt","blue");
        break;
        case 4 : 
        imgNode.setAttribute("alt","pink");
        break;
        case 5 :
        imgNode.setAttribute("alt","green");
        break;
        case 8 : 
        imgNode.setAttribute("alt","ygreen");
        break;
         case 6 : 
        imgNode.setAttribute("alt","gray");
        break;
         case 7 : 
        imgNode.setAttribute("alt","spaceman");
        break;
      }

    }

    function addNextBlockElement() {

      var rondomNumberBeetwen0And8 = Math.round( (Math.random() * (8 - 0)) + 0);

      var listOfLiElements;
      
      var node = document.createElement("LI");           
      var imgNode = document.createElement("IMG");
      imgNode.src=SRC_LIST[rondomNumberBeetwen0And8];

       setAltAttributeInListItems(rondomNumberBeetwen0And8, imgNode);

      node.appendChild(imgNode); 

      document.getElementById('grid').appendChild(node);

      if(counter % 2 == 0) {
        removeFirstElement();
      }
     counter++;

    }

    function removeFirstElement() {
       listOfLiElements = document.getElementById('grid').getElementsByTagName('li');
      var firstElem = listOfLiElements[0];
      firstElem.parentElement.removeChild(firstElem);
    }

    function incrementPointsIfColorMatch(e) {

      console.log(e.target.alt);
      if(e.target.alt == "spaceman") {
        console.log("added");
             points++;
         }
    }

    function decrementPointsIfColorNotMatchIfGTZero(e) {

    	 console.log(e.target.alt);
      		if(e.target.alt != "spaceman") {
       		 console.log("not match!");
       		 if(points>0){
 				points--;
       		 }
            
         }

    }

    function if40ElementsStopGame() {
      if(listOfLiElements.length >= 40) {
        clearInterval(intervalFunction);
        alert("game over, your points: " + points);
      }
    }

    function addEventsToLiElements() {
      listOfLiElements = document.getElementById('grid').getElementsByTagName('li');
      for(var i=0;i<listOfLiElements.length;i++) {
        var elem = listOfLiElements[i];
              elem.addEventListener('click', function(e) {
                          if (e.stopPropagation) {    // standard
                      e.stopPropagation();
                           } else {    // IE6-8
                  e.cancelBubble = true;
                    }
                
                document.getElementById('points').innerHTML = points;
                this.parentElement.removeChild(this);
                incrementPointsIfColorMatch(e);
                decrementPointsIfColorNotMatchIfGTZero(e);

                
              }, false);
          }
    }