const Posts = require('../model/posts')

const CreateUser = async (req, res) => {

    var { id, cabecalho, titulo, data, img, artigo } = req.body

    try {
        const cadastrar = await Posts.update({ cabecalho, titulo, data, img, artigo }, { where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Cadastro feito com sucesso', icon: 'success' });

    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = CreateUser