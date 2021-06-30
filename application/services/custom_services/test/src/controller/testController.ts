import { Request, Response } from 'express';
import { testService } from '../service/testService';
import { CustomLogger } from '../config/Logger'
let test = new testService();

export class testController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
test.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpCreate');
    })}


}