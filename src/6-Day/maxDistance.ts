function maxDistance(movements:string):number {
    let rightNumber = 0;
    let leftNumber = 0;
    let size = movements.length
    for(let i = 0; i < size ;i++){
        if ( movements.charAt(i) == '>'){
            rightNumber++;
        } else if( movements.charAt(i) == '<' ){
            leftNumber++;
        }
    }
    let result = size-rightNumber*2;
    if(rightNumber > leftNumber){
        result = size-leftNumber*2;
    }
    return result;
}



function maxDistanceSecondOption(movements:string):number {
    let rightNumber = 0;
    let leftNumber = 0;
    let wildCard = 0;
    for(let i = 0; i < movements.length;i++){
        if ( movements.charAt(i) == '>'){
            rightNumber++;
        } else if( movements.charAt(i) == '<' ){
            leftNumber++;
        }else{
            wildCard++;
        }
    }
    let result = leftNumber+wildCard-rightNumber;
    if ( rightNumber > leftNumber ){
      result = rightNumber+wildCard-leftNumber;
    }
    return result;
}