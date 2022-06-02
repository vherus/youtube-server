import { Request, Response } from "express";
import fs from 'fs'
import path from 'path'

export default class VideoController {
    public get(req: Request, res: Response): void {
        const range = req.get('range')
        
        if (!range) {
            res.status(400).send('Range header required')
            return;
        }

        const vPath = path.resolve(__dirname, '../../assets/video/sample-video.mp4')
        const vSize = fs.statSync(vPath).size
        
        const chunkSize = 10 ** 6
        const startingByte = Number(range.replace(/\D/g, ''))
        const endingByte = Math.min(startingByte + chunkSize, vSize - 1)

        const contentLength = endingByte - startingByte + 1
        const headers = {
            'Content-Range': `bytes ${startingByte}-${endingByte}/${vSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': contentLength,
            'Content-Type': 'video/mp4'
        }

        res.writeHead(206, headers)
        
        const stream = fs.createReadStream(vPath, { start: startingByte, end: endingByte })

        stream.pipe(res)
    }
}