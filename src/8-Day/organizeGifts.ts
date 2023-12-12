function organizeGifts(gifts:string): string {
    const rgex = /(\d{1,})([a-z])/g;
    const matches = gifts.matchAll(rgex);
    let result = '';
    for(let match of matches){
        let amount = Number(match[1]);
        let giftValue = match[2];

        result += `[${giftValue}]`.repeat(Math.trunc(amount/50));
        result += `{${giftValue}}`.repeat(Math.trunc(amount/10)%5);
        if(amount%10 != 0){
            result+=`(${giftValue.repeat(amount%10)})`;
        }

    }
    return result;
}