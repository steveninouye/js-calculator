/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule (){
    var _total = 0;
    var _memory = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
function load(x){
    validate(x);
    _total = x;
    return x;
}

  /**
   * Return the value of `total`
   * @return { Number }
   */
function getTotal(){
    return _total;
}

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
function add(x){
    validate(x);
    _total += x;
    return _total;
}

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
function subtract(x){
    validate(x);
    _total -= x;
    return _total;
}

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
function multiply(x){
    validate(x);
    _total *= x;
    return _total;
}

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
function divide(x){
    validate(x);
    _total /= x;
    return _total;
}

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
function recallMemory(){
    return _memory;
}

  /**
   * Stores the value of `total` to `memory`
   */
function saveMemory(){
    _memory = _total;
}

  /**
   * Clear the value stored at `memory`
   */
function clearMemory(){
    _memory = 0;
}

  /**
   * Validation
   */
function validate(x){
    if(typeof x !== 'number'){
        throw Error('Invalid input');
    }
}

   return {
       load: load,
       getTotal: getTotal,
       add: add,
       subtract: subtract,
       multiply: multiply,
       divide: divide,
       recallMemory: recallMemory,
       saveMemory: saveMemory,
       clearMemory: clearMemory
   };
}