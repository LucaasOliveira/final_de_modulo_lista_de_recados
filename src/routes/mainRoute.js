import express from 'express';

const router = express.Router();

// Rota GET para a raiz
router.get('/', (req, res) => {
    try {
        res.status(200).json({
            message: 'Bem-vindo à aplicação'
        });
    } catch (error) {
        console.error('Erro ao acessar a página:', error);
        res.status(500).json({
            message: 'Erro ao acessar a página.'
        });
    }
});

export default router;
