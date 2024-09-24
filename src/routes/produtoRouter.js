const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authJwt');
const upload = require('../middlewares/uploadMiddleware'); // Certifique-se de criar ou mover o upload para um middleware

const router = express.Router();

//Todos iniciam com ->    /produtos

// nome descricao preco estoque categoria_id 
router.post('/', ProdutoController.create);     
router.get('/', ProdutoController.getAll);     

router.post('/:nome/imagem', upload.single('imagem'), ProdutoController.uploadImagem);

// ID COMO PARAMETRO  
router.get('/:id', ProdutoController.getById);  
router.put('/:id', ProdutoController.update);   
router.delete('/:id', authMiddleware, ProdutoController.delete);

module.exports = router;
