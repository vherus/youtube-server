export default interface IWriter {
    create<T>(entity: T): T
}
