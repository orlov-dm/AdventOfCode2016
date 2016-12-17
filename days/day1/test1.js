var data = "R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5";
var actions = data.split(", ");

var NORTH = 0;
var EAST = 1;
var SOUTH = 2;
var WEST = 3;
var DIR_COUNT = 4


var direction = NORTH;
var myPoint = {
	x: 0,
	y: 0
};

var visitedPoints = {
};

var found = false;
actions.forEach(function(action, i) {
	if(found) {
		return;
	}
	if(action[0] == 'R') {
		++direction;
	}
	else if(action[0] == 'L') {
		--direction;
	}
	direction %= DIR_COUNT;	


	var num = parseInt(action.slice(1));
	var deltaX = 0, deltaY = 0;
	switch(direction) {
		case NORTH:
			deltaY += num;
			break;
		case EAST:
			deltaX += num;
			break;
		case SOUTH:
			deltaY -= num;			
			break;
		case WEST:
			deltaX -= num;
			break;
	}



	if(deltaX>0) {
		for(var j = myPoint.x; j < myPoint.x + deltaX; ++j) {
			if ((j.toString() + '_' + myPoint.y.toString()) in visitedPoints) {
				found = true;
				console.log("Found double point");
				myPoint.x = j;
				break;
			}
			else {
				visitedPoints[j.toString() + '_' + myPoint.y.toString()] = true;
			}
		}
	}
	else if(deltaX<0){
		 for(var j = myPoint.x; j > myPoint.x + deltaX; --j) {
			if ((j.toString() + '_' + myPoint.y.toString()) in visitedPoints) {
				found = true;
				console.log("Found double point");
				myPoint.x = j;
				break;
			}
			else {
				visitedPoints[j.toString() + '_' + myPoint.y.toString()] = true;
			}
		}
	}
	else
	if(deltaY>0) {
		for(var j = myPoint.y; j < myPoint.y + deltaY; ++j) {
			if ((myPoint.x.toString() + '_' + j.toString()) in visitedPoints) {
				found = true;
				console.log("Found double point");
				myPoint.y = j;
				break;
			}
			else {
				visitedPoints[myPoint.x.toString() + '_' + j.toString()] = true;
			}
		}
	}
	else if(deltaY<0){
		 for(var j = myPoint.y; j > myPoint.y + deltaY; --j) {
			if ((myPoint.x.toString() + '_' + j.toString()) in visitedPoints) {
				found = true;
				console.log("Found double point");
				myPoint.y = j;
				break;
			}
			else {
				visitedPoints[myPoint.x.toString() + '_' + j.toString()] = true;
			}
		}
	}
	if(!found) {
		myPoint.x += deltaX;
		myPoint.y += deltaY;
	}	
});

console.log(myPoint);
console.log("Distance is: " + (Math.abs(myPoint.x) + Math.abs(myPoint.y)));
//console.log(visitedPoints);