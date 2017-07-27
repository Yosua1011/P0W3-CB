function bubbleSort(array) {
 var next2last = array.length - 1;
 array.some(function() {
   var isNotSwapped = true;
   for (var index = 0; index < next2last; index += 1) {
     var nextIndex = index + 1;
     if (array[index].length > array[nextIndex].length) {
       var holder = array[nextIndex];
       array[nextIndex] = array[index];
       array[index] = holder;
       isNotSwapped = false;
     }
   }
   return isNotSwapped;
 });
}
var numbers = ['Hello', 'Worlds', 'Formula'];
bubbleSort(numbers);
console.log(numbers);