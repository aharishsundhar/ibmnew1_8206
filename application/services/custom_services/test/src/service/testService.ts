import { Request, Response } from 'express';
import {testDao} from '../dao/testDao';
import { CustomLogger } from '../config/Logger'
let test = new testDao();

export class testService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpCreate')
     const  testData = req.body;
     test.GpCreate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpCreate')
         callback(response);
         });
    }


}