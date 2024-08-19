import { Cadastro } from "../models/person.model.js"

export const getPessoa = async (req, res) => {
    try {
      const pessoas = await Cadastro.findAll()
      return res.status(200).json(pessoas)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  export const postPessoa = async (req, res) => {

    try {
        const { email, password } = req.body;
    
        const newPessoa = await Cadastro.create({
            email: email,
            password: password,
        });

        return res.status(201).json(newPessoa);
      } catch (error) {
        return res.status(400).json({ error: error });
      }

  }