
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sortedArray = [];
    if (Array.isArray(matrix)) {
        sortedArray = matrix.map((item, index) => {
            if (index % 2) return item.sort((a, b) => b - a)
            else return item.sort((a, b) => a - b)
        });
    }
    return sortedArray.flat();
}
