function findFirstRepeated(gifts :number[]): number {
    let setValues:Set<Number> = new Set<Number>();
    let result = -1;
    for (let item of gifts){
        if (setValues.has(item)){
            result = item;
            break;
        }else{
            setValues.add(item)
        }
    }
    return result
}
