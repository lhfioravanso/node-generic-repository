import ExampleService from '../services/exampleService'

class ExampleController {

    static async findAll(req, res){
        try {
            let exampleSrv = new ExampleService();
            let response = await exampleSrv.findAll();

            return res.status(200).send(response);
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: err
            })
        }
    }

    static async findById(req, res){
        try {
            let exampleSrv = new ExampleService();
            let response = await exampleSrv.findById(req.params.id);

            return res.status(200).send(response);
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: err
            })
        }
    }

    static async create(req, res) {
        const exampleDTO = req.body;

        try {
            let exampleSrv = new ExampleService();
            let response = await exampleSrv.create(exampleDTO);

            return res.status(200).send(response);
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: err
            })
        }
    }

    static async destroy(req, res){
        try {
            let exampleSrv = new ExampleService();
            let response = await exampleSrv.destroy(req.params.id);

            return res.status(200).send(response);
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: err
            })
        }
    }

    static async update(req, res) {
        const exampleDTO = req.body;

        try {
            let exampleSrv = new ExampleService();
            let response = await exampleSrv.update(req.params.id, exampleDTO);

            return res.status(200).send(response);
        } catch (err) {
            return res.status(500).send({
                success: false,
                message: err
            })
        }
    }
}

export default ExampleController;