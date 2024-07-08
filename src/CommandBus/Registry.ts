import Command from "./Command";
import Handler from "./Handler";

export default class Registry {
    private mappings

    constructor(mappings: [string, Handler][]) {
        this.mappings = mappings
    }

    resolve(command: Command): Handler {
        // Looking back, I'm not happy with O(n). I'd refactor the mappings into a Map, construct it in the constructor, then use the O(1) methods on the Map
        const resolved = this.mappings.find(mapping => mapping[0] === command.name)

        if (!resolved) {
            throw new Error(`Command ${command.name} could not be resolved. It might not be mapped to a handler.`)
        }

        return resolved[1]
    }
}
