// CONTROLLERS PSICÓLOGOS

import { randomUUID } from 'node:crypto';
// import { DataTypes } from 'sequelize';

// INSERT 
export const createPsic = (req, res) => {
    try {
        const users = global.users;
        const { name, email, senha, apresentacao } = req.body;

        const cadastrarPsic = {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            apresentacao: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id: randomUUID()
        };
        users.push(cadastrarPsic)
        return res.status(201).json(cadastrarPsic);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findALlPsic = (req, res) => {
    try {
        const listarPsic = global.users;
        return res.status(200).json(listarPsic);
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOnePsic = (req, res) => {
    const users = global.users;
    const { id } = req.params;
    const buscarPsic = users.find(user => user.id === id);

    if (!buscarPsic) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    return res.status(200).json({ buscarPsic })
}

// UPDATE
export const updatePsic = (req, res) => {
    const users = global.users;
    const { id } = req.headers;
    const { name, email, senha, apresentacao } = req.body;

    const atualizarPsic = users.find(user => user.id === id);

    if (!atualizarPsic) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    try {
        atualizarPsic.name = name;
        atualizarPsic.email = email;
        atualizarPsic.senha = senha;
        atualizarPsic.apresentacao = apresentacao;

        return res.status(200).json({ atualizarPsic })
    } catch (error) {
        return res.status(400).json("Não foi possível atualizar o cadastro.");
    }
}

// DELETE
export const deletePsic = (req, res) => {
    const deletarPsic = global.users;
    const { id } = req.headers;
    const indexOfUser = users.findIndex(user => user.id === id);

    if (!deletarPsic) {
        return res.status(404).json("ID não encontrado.");
    }

    try {
        deletarPsic.splice(indexOfUser, 1);
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json("Não foi possível realizar a ação.");
    }
}