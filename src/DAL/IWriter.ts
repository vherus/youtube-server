export default interface IWriter<RawEntity, DatabaseEntity> {
    create(entity: RawEntity): Promise<DatabaseEntity>
}
