let monthes = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
}

function lastday(year, month, day){
    let res = 0
    let mon = 1
    if(((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0 ))){
        for (const j in monthes) {
            if(j == month){
                break
            }
            res += monthes[j]
            mon++
        }
        return [365 - res + day, mon]
    }
    else{
        for (const j in monthes) {
            if(j == month){
                break
            }
            res += monthes[j]
            mon++
        }
        return [364 - res + day, mon]
    }
}

console.log(lastday(2001, 11, 16))