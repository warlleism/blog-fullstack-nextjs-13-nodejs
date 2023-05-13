const Posts = require('../model/posts')

const readAll = async (req, res) => {

    try {
        const posts = await Posts.findAll()
        return res.status(200).send(posts);
    } catch (err) {
        return res.status(400).send({ error: 'Erro na listagem ' + err });
    }
}

module.exports = readAll;