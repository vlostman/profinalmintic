import Perfil from "./Perfil";

class Usuario {
    public _id: string;
    public nombreUsuario: string;
    public correoUsuario: string;
    public claveUsuario: string;
    public fechaRegistroUsuario: Date;
    public estadoUsuario: number;
    public nombreImagenUsuario: string;
    public avatarUsuario: string;
    public codPerfil: Perfil;

    constructor(id: string, nom: string, cor: string, cla: string, fec: Date, est: number, nomi: string, ava: string, codp: Perfil) {
        this._id = id;
        this.nombreUsuario = nom;
        this.correoUsuario = cor;
        this.claveUsuario = cla;
        this.fechaRegistroUsuario = fec;
        this.estadoUsuario = est;
        this.nombreImagenUsuario = nomi;
        this.avatarUsuario = ava;
        this.codPerfil = codp;
    }
}

export default Usuario;
