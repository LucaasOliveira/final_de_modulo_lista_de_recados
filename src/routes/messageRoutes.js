import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { validateCreateMessage, validateUpdateMessage } from '../middlewares/validate.js';
import { users } from './userRoutes.js';

const router = express.Router();

const messages = [];

// Rota para criar uma nova mensagem
// Rota: POST /messages/:email
router.post('/:email', validateCreateMessage, (req, res) => {
    const { title, description } = req.body;
    const { email } = req.params;

    // Verifica se o usuário com o email fornecido existe
    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(404).send('Email não encontrado, verifique ou crie uma conta.');
    }

    // Cria a nova mensagem
    const newMessage = {
        email,
        title,
        description,
        idMessage: uuidv4()
    };

    // Adiciona a nova mensagem ao array
    messages.push(newMessage);

    res.status(201).json({
        message: 'Mensagem criada com sucesso!',
        newMessage
    });
});

// Rota para obter todas as mensagens de um usuário específico
// Rota: GET /messages/:email
router.get('/:email', (req, res) => {
    const { email } = req.params;

    const userMessages = messages.filter(msg => msg.email === email);

    if (!userMessages.length) {
        return res.status(404).send('Nenhuma mensagem encontrada para este email.');
    };

    res.status(200).json({
        message: 'Mensagens encontradas com sucesso!',
        messagesUser: userMessages
    });
});

// Rota para atualizar uma mensagem existente
// Rota: PUT /messages/:id
router.put('/:id', validateUpdateMessage, (req, res) => {
    const { title, description } = req.body;
    const { id } = req.params;

    const message = messages.find(msg => msg.idMessage === id);

    if (!message) {
        return res.status(404).send('Mensagem não encontrada, verifique o identificador fornecido.');
    };

    message.title = title;
    message.description = description;

    res.status(200).json({
        message: 'Mensagem atualizada com sucesso!',
        updatedMessage: message
    });
});

// Rota para deletar uma mensagem existente
// Rota: DELETE /messages/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const messageIndex = messages.findIndex(msg => msg.idMessage === id);

    if (messageIndex === -1) {
        return res.status(404).send('Mensagem não encontrada, verifique o identificador fornecido.');
    };

    messages.splice(messageIndex, 1);

    res.status(200).send('Mensagem apagada com sucesso.');
});

export default router;
