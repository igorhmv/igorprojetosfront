export interface Relatorio {
    /*
    dataInicial:number, 
    dataFinal:string, 
    usuario:string, 
    numContaAmbulatorial:number, 
    numConta:number, 
    procedimento:string,
    setorProducao:string,
    setorUsuario:string*/
    nm_paciente:string,
    dt_auditoria:string,
    nm_convenio:string,
    cd_atendimento:string,
    cd_reg_fat:string,
    cd_reg_amb:string,
    cd_gru_fat:string,
    cd_pro_fat:string
    //dataFinal:string,
    //nomePrestador:string
}