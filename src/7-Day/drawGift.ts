function drawGift(size: number, symbol: string):string {
    if(size == 1){
      return '#\n'
    }else if ( size == 2){
      return ' ##\n###\n##\n'
    }
    let result = ' '.repeat(size-1)+'#'.repeat(size)+'\n';
    let line = '#'+ symbol.repeat(size-2)+'#'
    for(let i = 0 ; i< size-2; i++){
      result += ' '.repeat(size-2-i)+ line+symbol.repeat(i)+'#\n';
    }
    result+='#'.repeat(size-1)+line+'\n';
    for(let i=1;i<size-1;i++){
      result +=line+symbol.repeat(size-2-i)+'#\n';
    }
    result+='#'.repeat(size)+'\n';
    return result;
}