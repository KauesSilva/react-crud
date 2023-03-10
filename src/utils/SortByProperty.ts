export default function sortByProperty<T>(arr: T[], prop: keyof T): T[] {
    return arr.sort((a, b) => {
        if (a[prop] < b[prop]) {
            return -1;
        }
        if (a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    });
}
