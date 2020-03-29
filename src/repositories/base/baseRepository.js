import models from '../../models';

let model = null;
class BaseRepository {

    constructor(modelName) {
        model = models[modelName];
        
        if (!model)
            console.log('Model not found!!!') // TODO: error handling 
    }

    findAll() {
        return model.findAll();
    }

    findById(id) {
        return model.findOne({where: { id: id }});
    }

    create(dto) {
        return model.create(dto);
    }

    async destroy(id) {
        let objToDelete = await this.findById(id);
        return objToDelete.destroy();
    }

    async update(id, dto) {
        let objToUpdate = await this.findById(id);
        return objToUpdate.update(dto);
    }    
}

export default BaseRepository;
