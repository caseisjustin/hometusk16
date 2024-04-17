function difference(arr1, arr2){
    let res = []
    let se = new Set([...arr1, ...arr2])
    console.log(se)
}

difference([1, 2, 3], [100, 2, 1, 10])