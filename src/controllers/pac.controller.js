// CONTROLLERS PACIENTES

import { createPacRep, deletePacRep } from '../repositories/pac.repository.js';

// INSERT 
export const createPacCont = async (req, res) => {
    try {
        const { id } = req.headers;
        const { nome, email, idade } = req.body;

        const novoPac = await createPacRep({ id, nome, email, idade });
        return res.status(201).json(novoPac);
    } catch (error) {
        return res.status(400).json({ message: "Não foi possível realizar o cadastro." })
    }
}

// FIND ALL
export const findALlPacCont = (req, res) => {
    try {
        const listarPac = global.users;
        return res.status(200).json(listarPac);
    } catch (error) {
        return res.status(500).json({ message: "Não foi possível realizar a ação." });
    }
}

// FIND ONE
export const findOnePacCont = (req, res) => {
    const users = global.users;
    const { id } = req.params;
    const buscarPac = users.find(user => user.id === id);

    if (!buscarPac) {
        return res.status(404).json({ message: "ID não encontrado." })
    }

    return res.status(200).json({ buscarPac })
}

// UPDATE
export const updatePacCont = (req, res) => {
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
export const deletePacCont = async (req, res) => {
    const { id } = req.headers;
    const deletarPac = await deletePacRep(id);

    if (!deletarPac) {
        return res.status(404).json("ID não encontrado.");
    }

    return res.status(204).send();
}