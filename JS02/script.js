
function getValues(){
    let val1 = parseFloat(document.getElementById("val1").value);
    let val2 = parseFloat(document.getElementById("val2").value);
    let result = sumArray([val1, val2]);
}

  function sumArray(array) {
    let total = 0;
    for  (let num of array) {
      total += num;
      
    }
    document.getElementById("result").value = total;
   // return total;
  }

  