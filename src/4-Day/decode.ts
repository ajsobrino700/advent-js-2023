function decode(message: string): string {
  let size = message.length
  let i=0
  let decodeWord = (message:string):string => {
    let result = '';
    while( i < message.length ){
      
      if(message.charAt(i) === '('){
        i++;
        result = result + decodeWord(message)
      }else if(message.charAt(i) === ')'){
         i++
        return result.split('').reverse().join('');
      }else{
        result+=message.charAt(i)
        i++;
      }
      
    }
    
    return result;
  }
  let result = decodeWord(message)
  return result
}