function createChristmasTree(ornaments:string, height:number):string {
    let result = ''
    let j = 0;

    let buildLine = (numberLine:number)=>{
        
    }
    
    for(let i = 1; i <= height ; i++){
        let line = ''
        for(let k = 0 ; k<i;k++){
            line+=ornaments.charAt(j%ornaments.length)+' '
            j++
        }
        
        result += ' '.repeat(height-i)+line.trim()+'\n'
    }

    result+=' '.repeat(height-1)+'|\n'
    return result
}