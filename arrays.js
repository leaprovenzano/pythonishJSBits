

//not python but nice to have returns arr[index] for indexes in index_arr
const index_map = (index_arr, arr) => index_arr.map(x => arr[x]);

//sums and Array ...
const sum = arr => arr.reduce((x1, x2) => x1 + x2)


//not python again but convenient add arrays by index returns array.
const sum_map = (arr1, arr2) => arr2.map((e, index) => arr1[index] + e);


//numeric sort for the lazy.
const numsort = arr => arr.sort((n1, n2) => n1 -n2);

//basic array equality
const equals = (arr, other) => (arr.length == arr.length) && arr.every((e, i) => e === other[i]);


//not py just nice to have
const flatten = (...args) => {
    var f = [].concat(...args);
    if (equals(f, [...args])){
        return f;
    }
    return flatten(...f);
}