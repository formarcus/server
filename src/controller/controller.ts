import { Request, Response } from "express";
import { prismaClient } from "../prismaClient";


export class CreateController {
    async handle(request: Request, response: Response) {

        const { nome } = request.body;

        try {

            const user = await prismaClient.user.create({
                data: {
                    nome
                },
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export class FindController {
    async handle(request: Request, response: Response) {

        const { id } = request.body;

        try {

            const user = await prismaClient.user.findMany({
                where: {
                    id
                },
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export class UpdateController {
    async handle(request: Request, response: Response) {

        const { id, nome } = request.body;

        try {

            const user = await prismaClient.user.update({
                where: {
                    id
                },
                data: {
                    nome
                }
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}

export class DeleteController {
    async handle(request: Request, response: Response) {

        const { id } = request.body;

        try {

            const user = await prismaClient.user.delete({
                where: {
                    id
                }
            });

            return response.json(user);
        }
        catch (error) {

            console.error(error);
            return response.status(500).json({ error: "Erro ao cadastrar usuário" });
        }
    }
}
