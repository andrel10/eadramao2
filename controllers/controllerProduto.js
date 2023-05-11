const Product = require('../models/product.js');
const controller = {}

controller.getAll = async (req, res) => {
    try{
        let products = await Product.findAll()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json(error)
    }
}

controller.getById = async (req, res) => {
    try{
        const product = await Product.findByPk(req.params.id)
        res.status(200).json(product)
    }catch(error){ 
        res.status(422).json("Ocorreu um erro ao buscar o cliente. " + error)
    }
}

controller.create = async (req, res) => {
    let reqcli = req.body

    try{
        const newClient = await Client.create({
            // id: reqcli.id,
            nome: reqcli.nome,
            email: reqcli.email,
            cidade: reqcli.cidade,
            estado: reqcli.estado,
            cep: reqcli.cep
        })
        res.status(200).redirect("/")
    }catch(error){ 
        res.status(422).send("Ocorreu um erro ao cadastrar o cliente. " + error)
    }

}


controller.delete = async (req, res) => {
    try {
        const Cli = await Client.findByPk(req.params.id);

        if (Cli) {
            await Cli.destroy(); 
            res.status(200).redirect('/');
        } else {
            res.status(404).send('Id não existe!');
        }
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao remover o cliente. " + error)
    }
}

controller.update = async (req, res) => {
    try{
        let client = await Client.findByPk(req.params.id)
        client.nome = req.body.nome,
        client.email = req.body.email,
        client.cidade = req.body.email,
        client.estado = req.body.estado,
        client.cep = req.body.cep

        await client.save()
        res.status(200).redirect("/")
    }catch (error){
        res.status(422).send("Ocorreu um erro ao atualizar o cliente. " + error)
    }
}

controller.Cidade = async (req, res) => {
    try{
        const Cli = await Client.findAll({
            where:{
                cidade:req.params.cidade
             }
        })
        res.status(200).json(client1)
    }catch(error){ 
        res.status(422).json("Ocorreu um erro ao buscar o cliente. " + error)
    }
}

module.exports = controller