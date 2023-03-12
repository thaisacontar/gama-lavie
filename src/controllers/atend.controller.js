// CONTROLLERS ATENDIMENTOS

import { randomUUID } from 'node:crypto';

// INSERT 
export const createAtend = (req, res) => {
    try {
        const users = global.users;
        const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

        const cadastrarAtend = {
            paciente_id,
            psicologo_id,
            data_atendimento: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            observacao: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id: randomUUID()
        };
        users.push(cadastrarAtend)
        return res.status(201).json(cadastrarAtend);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findALlAtend = (req, res) => {
    try {
        const listarAtend = global.users;
        return res.status(200).json(listarAtend);
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOneAtend = (req, res) => {
    const users = global.users;
    const { id } = req.params;
    const buscarAtend = users.find(user => user.id === id);

    if (!buscarAtend) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    return res.status(200).json({ buscarAtend })
}

// UPDATE
export const updateAtend = (req, res) => {
    const users = global.users;
    const { id } = req.headers;
    const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

    const atualizarAtend = users.find(user => user.id === id);

    if (!atualizarAtend) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    try {
        atualizarAtend.paciente_id = paciente_id;
        atualizarAtend.psicologo_id = psicologo_id;
        atualizarAtend.data_atendimento = data_atendimento;
        atualizarAtend.observacao = observacao;

        return res.status(200).json({ atualizarAtend })
    } catch (error) {
        return res.status(400).json("Não foi possível atualizar o cadastro.");
    }
}

// DELETE
export const deleteAtend = (req, res) => {
    const deletarAtend = global.users;
    const { id } = req.headers;
    const indexOfUser = users.findIndex(user => user.id === id);

    if (!deletarAtend) {
        return res.status(404).json("ID não encontrado.");
    }

    try {
        deletarAtend.splice(indexOfUser, 1);
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json("Não foi possível realizar a ação.");
    }
}