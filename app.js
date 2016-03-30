$(document).ready(function() {
	var path = $('#svgPath')[0];
	var pathData = path.getPathData();
	var pathXPos = 0;
	var viewBox = mySvg.getAttribute("viewBox");
	viewBox = viewBox.split(" ");

function runStock () {
  window.setTimeout(function() {
    $.get("https://secure-castle-8699.herokuapp.com/", function(data) {
			pathXPos += 5;

			pathData.push({
				type: "L",
				values: [pathXPos, data.num]
			});

      if(pathXPos >= viewBox[2]){
        mySvg.setAttribute("viewBox", -1*(100-pathXPos) + " 0 100 100");
      }
			path.setPathData(pathData);
		}); // END OF CALLBACL
runStock();
  }, 1000);
}

runStock();

});
