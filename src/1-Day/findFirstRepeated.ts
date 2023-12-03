function findFirstRepeated(gifts :number[]): number {
    let setValues:Set<Number> = new Set<Number>();
    for (let item of gifts){
        if (setValues.has(item)){
            return item;
        }else{
            setValues.add(item)
        }
    }
    return -1
}
