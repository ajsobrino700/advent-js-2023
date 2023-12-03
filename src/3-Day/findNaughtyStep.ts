function findNaughtyStep(original:string, modified:string): string {
    if(original.length == 0){
        return modified.charAt(0)
    }

    let result = ''
    let running = true
    let size = original.length+1
    if( original.length != modified.length){
        for(let i = 0; i<size && running; i++){
            if (original.charAt(i)!=modified.charAt(i)){
                running = false
                if (original.length > modified.length){
                    result = original.charAt(i)
                }else{
                    result = modified.charAt(i)
                }
                
            }
        }
    }
    return result
  }