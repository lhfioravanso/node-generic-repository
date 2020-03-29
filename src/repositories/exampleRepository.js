import BaseRepository from './base/baseRepository';

class ExampleRepository extends BaseRepository {  
    constructor() {
        let modelName = 'examples'
        super(modelName);
    }
}

export default ExampleRepository;