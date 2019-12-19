function pigIt(str){
  return str.split(' ').map(function(x){
    if(x == "?" || x =="!") { return x;} else{
    console.log(x);
    return x.slice(1) + x .slice(0,1) + 'ay';}}).join(' ')
}