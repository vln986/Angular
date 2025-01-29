function doSomethingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally i = ' + i); // scope of var is outside of for loop also, so no error
}
doSomethingVar();
function doSomethingLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log('Finally i = ' +i);     here scope of let is only for loop, so i is not found error
}
doSomethingLet();
