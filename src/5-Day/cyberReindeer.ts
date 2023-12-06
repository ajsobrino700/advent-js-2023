function cyberReindeer(road: string, time:number): string[] {
    let result: string[] = []
    result.push(road)
    let position = 0;
    let current = '.'
    for (let i = 1; i < time && position <road.length-1; i++) {

        if ( i == 5){
            road = road.replaceAll('|','*')
            current = current.replace('|','*')
        }


        if( road.charAt(position+1) !== '|'){
            position++;
            let aux = road.charAt(position)
            road = road.substring(0,position-1)+current+'S'+road.substring(position+1)
            current = aux
        }
        
        result.push(road)
    }

    return result
  }