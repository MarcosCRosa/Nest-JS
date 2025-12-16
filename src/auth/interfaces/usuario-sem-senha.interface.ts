import { Postagem } from "../../postagem/entities/postagem.entity";

{Postagem}
export interface UsuarioSemSenha {
    id:number;
    nome:string;
    usuario:string;
    foto:string;
    postagem: Postagem[];
}