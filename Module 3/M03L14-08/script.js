// No arguments

const paintWall1 = function () {
    console.log("The wall has been painted red")
};

paintWall1();

// Single argument 

const paintWall2 = function (color) {
    console.log("The wall has been painted " + color)
};

paintWall2("green");

// Multiple arguments

const paintWallWhichAndColor = function (whichWall, color) {
    console.log(whichWall + " has been painted " + color)
};

paintWallWhichAndColor("The north wall", "orange");

// The order of the arguments matter when calling the function.
