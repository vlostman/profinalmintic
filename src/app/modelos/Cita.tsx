import Usuario from "./Usuario";

class Cita {
    public _id: string;
    public codMedico: Usuario;
    public codPaciente: Usuario;
    public fechaCita: Date;
    public estadoCita: number;

    constructor(id: string, codm: Usuario, codp: Usuario, feci: Date, esta: number) {
        this._id = id;
        this.codMedico = codm;
        this.codPaciente = codp;
        this.fechaCita = feci;
        this.estadoCita = esta;
    }
}

export default Cita;
