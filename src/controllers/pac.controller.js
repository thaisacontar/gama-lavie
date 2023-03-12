// CONTROLLERS PACIENTES

import { randomUUID } from 'node:crypto';

// INSERT 
export const createPac = (req, res) => {
    try {
        const users = global.users;
        const { name, email, idade } = req.body;

        const cadastrarPac = {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            idade: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            id: randomUUID()
        };
        users.push(cadastrarPac)
        return res.status(201).json(cadastrarPac);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findALlPac = (req, res) => {
    try {
        const listarPac = global.users;
        return res.status(200).json(listarPac);
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOnePac = (req, res) => {
    const users = global.users;
    const { id } = req.params;
    const buscarPac = users.find(user => user.id === id);

    if (!buscarPac) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    return res.status(200).json({ buscarPac })
}

// UPDATE
export const updatePac = (req, res) => {
    const users = global.users;
    const { id } = req.headers;
    const { name, email, senha, apresentacao } = req.body;

    const atualizarPac = users.find(user => user.id === id);

    if (!atualizarPac) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    try {
        atualizarPac.name = name;
        atualizarPac.email = email;
        atualizarPac.idade = idade;

        return res.status(200).json({ atualizarPac })
    } catch (error) {
        return res.status(400).json("Não foi possível atualizar o cadastro.");
    }
}

// DELETE
export const deletePac = (req, res) => {
    const deletarPac = global.users;
    const { id } = req.headers;
    const indexOfUser = users.findIndex(user => user.id === id);

    if (!deletarPac) {
        return res.status(404).json("ID não encontrado.");
    }

    try {
        deletarPac.splice(indexOfUser, 1);
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json("Não foi possível realizar a ação.");
    }
}