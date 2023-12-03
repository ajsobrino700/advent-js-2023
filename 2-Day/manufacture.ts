function manufacture(gifts: string[], materials: string): string[] {
    let result :string[] = []
    gifts.forEach(item =>{
        let itemArray = item.split('')
        if(itemArray.every(letter => materials.includes(letter))){
            result.push(item)
        }
        
    })
    return result
}