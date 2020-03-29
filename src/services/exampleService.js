import BaseService from './base/baseService';
import ExampleRepository from '../repositories/exampleRepository';

let exampleRepository = null; 
class ExampleService extends BaseService {

    constructor() {
        exampleRepository = new ExampleRepository();
        super(exampleRepository);
    }

    // example of override method
    /*
    findAll() {
        return exampleRepository.findById(1);
    }
    */
 
}

export default ExampleService;