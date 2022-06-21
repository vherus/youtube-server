import Command from "./Command";
import Registry from "./Registry";

export default class CommandBus {
    private registry

    constructor(registry: Registry) {
        this.registry = registry
    }

    async dispatch<T>(command: Command): Promise<T> {
        return await this.registry.resolve(command).handle(command)
    }
}
