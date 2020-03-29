import ExampleController from '../controllers/exampleController'

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Hello World!'
    }));

    app.get('/api/examples', ExampleController.findAll);
    app.get('/api/examples/:id', ExampleController.findById);
    app.post('/api/examples', ExampleController.create);
    app.put('/api/examples/:id', ExampleController.update);
    app.delete('/api/examples/:id', ExampleController.destroy);
    
};