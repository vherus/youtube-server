import Command from "./Command";
import Handler from "./Handler";

export default class Registry {
    private mappings

    constructor(mappings: [string, Handler][]) {
        this.mappings = mappings
    }

    resolve(command: Command): Handler {
        const resolved = this.mappings.find(mapping => mapping[0] === command.name)

        if (!resolved) {
            throw new Error(`Command ${command.name} could not be resolved. It might not be mapped to a handler.`)
        }

        return resolved[1]
    }
}
