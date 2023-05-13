const Post = require('../model/posts')

const deleteData = async (req, res) => {

    var { id } = req.body

    try {
        const Posts = await Post.destroy({ where: { id: id } })
        return res.status(200).send({ status: 200, sucess: 'Editado com sucesso', icon: 'success' });
    } catch (err) {
        res.status(400).send({ error: 'Algo deu errado! ' + err, icon: 'error' });
    }

}

module.exports = deleteData