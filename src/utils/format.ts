export function formatCount(count) {
    if (count >= 100000) {
        return Math.floor(count / 10000) + "万";
    }
    return count;
}
