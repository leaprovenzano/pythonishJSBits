
//python 2 style
function range(stop, start = 0, step= 1){
    arr = [];
    while(start+step < stop){
        arr.push(start);
        start += step
        }
    return arr;
    }


//xrange style
function* irange (stop, start=0, step=1) {
    while(start+step < stop){
        yield start;
        start+=step;}
    return;
}


/**
 * a Generator for similar to python's
 * itertools.combinations. yields k elements from n
 * as Array with no replacement. Terminates upon
 * generation of all unique combinations.
 * @param  {[Array]}    arr  [an array of UNIQUE elements]
 * @param  {[type]}    k [size of combined element ]
 * @return {Generator}      [unique combinations of n size k]
 */
function* icombinations(arr, k){
    const pool = arr.slice();
    const n = pool.length;
    const pool_map = (index_arr) => index_arr.map(x => pool[x]);
    var indices = [...irange(k+1)];
    if (k > n){
        return;}
    yield pool_map(indices);
    while (true){
        for (var i = k -1; i >=0; i--){
            if (indices[i] !== (i + n - k)){
                break;
            }}
        if (i < 0){
            return;
            }
        indices[i] += 1;
        for (let j = i+1; j < k; j++){
            indices[j] = indices[j-1] + 1;
            }
        yield pool_map(indices);
    }
}

//python 2 style...
const combinations = (arr, size) => [...icombinations(arr, size)]

