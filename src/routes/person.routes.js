import { getPessoa, postPessoa } from "../controllers/person.controller.js";
import { Router } from "express";
const pessoaRouter = Router()


pessoaRouter.get('/getPessoa', getPessoa )
pessoaRouter.post('/postPessoa', postPessoa )


export { pessoaRouter }