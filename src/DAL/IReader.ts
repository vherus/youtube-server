export default interface IReader<DatabaseEntity> {
    getById(id: number | string): Promise<DatabaseEntity>
}
