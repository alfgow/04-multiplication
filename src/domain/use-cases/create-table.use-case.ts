
export interface CreateTableOptions{
    base: number;
    limit?: number;
}

export interface CreateTableUseCase{
    execute: (options: CreateTableOptions)=>string;
}

export class CreateTable implements CreateTableUseCase{

    constructor(){}

    execute({ base, limit = 10 }: CreateTableOptions){
        let outpuMessage = "";
        for (let i = 1; i <= limit; i++) {
	    outpuMessage += `${base} x ${i} = ${i * base}\n`;
        }
        return outpuMessage;
    }

}