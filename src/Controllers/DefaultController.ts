import { Request, Response } from "express"

export default class DefaultController {
    public get(req: Request, res: Response): void {
        res.status(404).json({
            message: 'Not found'
        })
    }
}
