const fibonacci = function(number) {
  number = parseInt(number, 10);
  if(number<0) return "OOPS";
  if(number<=2) return 1;

  let array = [1,1];
  while(array.push(array[array.length-2]+array[array.length-1])!=number) continue;
  return array[number-1];
}
// 0 1 1 2 3 5 8
module.exports = fibonacci
