// No arguments

const paintWall = function () {
    console.log("The wall has been painted red")
};

paintWall();

// Single argument 

const paintWallColorWithArgument = function (color) {
    console.log("The wall has been painted " + color)
};

paintWallColorWithArgument("green");

// Multiple arguments

const paintWallWhichAndColor = function (wall, color) {
    console.log(wall + " has been painted " + color)
};

paintWallWhichAndColor("The north wall", "orange");

// The order of the arguments matter when calling the function.
