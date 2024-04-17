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

function lastday(year, month){
    if(((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0 )) && month == 1){
        return monthes[1]+1
    }
    else{
        return monthes[month]
    }
}

console.log(lastday(2000, 1))