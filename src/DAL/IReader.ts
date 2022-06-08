export default interface IReader {
    getById<T>(id: number | string): T
}
