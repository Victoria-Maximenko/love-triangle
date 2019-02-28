/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []){
  var result=0;
  var count=0;
  var newArray=[];
  newArray[0]='';
  for(var i=0; i<preferences.length; i++){
    newArray.push(preferences[i]);  
  }
  for(var i=1; i<newArray.length; i++){
	  if(i===newArray[i]){
		  continue;
	  }
    var first=newArray[i];
    var second=newArray[first];
    var third=newArray[second];
    if(third===i){
      result=result+1;
    }
  }
  count=result/3
  return count;
};


