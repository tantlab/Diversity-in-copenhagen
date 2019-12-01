export default function trimString(str, length = 24) {
    if (str) {
        return str.length > length ? str.slice(0, length) + "..." : str
    } else return
}