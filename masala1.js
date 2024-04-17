function yearDaygetter(firstDay, year, endYear){
    let count = 0
    let arr = [1, 2, 3, 4, 5, 6, 7]
    let temp = firstDay-1
    for(let i = year; i <= endYear; i++){
        if((i % 4 == 0 && i % 100 !== 0) || (i % 400 == 0 )){
            if(temp === firstDay){
                count++
            }
            temp = arr[(temp+2)%7]
        }
        else{
            temp = arr[(temp + 1)%7]
            if(temp === firstDay){
                count++
            }
        }
    }
    return count
}

console.log(yearDaygetter(7, 2000, 2050))