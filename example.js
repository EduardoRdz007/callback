
// This function makes it add two numbers, when giving the first number (a) + the other number (b) it will give you the result
//Depending on what number you put on the console
function add(a, b, callback) {
    callback(a + b);
  }
// Here a message is sent before the execution to be able to check the callback that it is working correctly
  console.log('Antes de la ejecucion');
//Here we can add different numbers to add and it will give you the result, showing in the console.
  add(10, 5, function(result) {
    console.log(result);
  });
//Finishes the sum by displaying the following message on the console:
  console.log('Despues de la ejecucion');