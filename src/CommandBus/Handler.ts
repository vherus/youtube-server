import Command from "./Command"

export default interface Handler {
    handle(command: Command): Promise<any>
}
