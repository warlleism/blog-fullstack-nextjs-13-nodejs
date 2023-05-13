const Posts = require('../model/posts')

const read = async (req, res) => {

    var { tipo } = req.body

    try {
        const post = await Posts.findAll({ where: { tipo: tipo } })
        return res.status(200).send(post);
    } catch (err) {
        return res.status(400).send({ error: 'Erro na listagem ' + err });
    }
}

module.exports = read;