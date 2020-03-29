let _repository = null;

let response = {
    success: false,
    result: null
}

class BaseService { 

    constructor(repository) {
        _repository = repository;    
    }

    setResponseResult(result) {
        response.success = true;
        response.result = result;
    }

    async findAll() {
        let result = await _repository.findAll();
        if (result.length != 0) 
            this.setResponseResult(result)

        return response;         
    }

    async findById(id) {
        let result = await _repository.findById(id);
        if (result)
            this.setResponseResult(result)
            
        return response;
    }

    async create(dto) {
        let result = await _repository.create(dto);
        if (result)
            this.setResponseResult(result)
            
        return response;        
    }

    async destroy(id) {
        let result = await _repository.destroy(id);
        if (result)
            this.setResponseResult(result)
            
        return response; 
    }

    async update(id, dto) {
        let result = await _repository.update(id, dto);
        if (result)
            this.setResponseResult(result)
            
        return response;  
    }  
}

export default BaseService;