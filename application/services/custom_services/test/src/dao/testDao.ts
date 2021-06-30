import * as mongoose from 'mongoose';
import testModel from '../models/test';
import { CustomLogger } from '../config/Logger'


export class testDao {
    private test = testModel;
    constructor() { }
public GpCreate(testData, callback){
new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpCreate')
let temp = new testModel(testData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}