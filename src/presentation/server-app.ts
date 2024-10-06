import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
    destination: string,
    name: string
}

export class ServerApp {

    static run({ base, limit, showTable, destination, name }: RunOptions){

        const table = new CreateTable()
            .execute({ base, limit, destination, name });

        const wasCreated = new SaveFile().execute({
            fileContent: table, 
            fileName: name,
            fileDestination: destination
        })

        if (showTable) console.log(table);
        (wasCreated)
            ? console.log("File Created")
            : console.error("File not created");
    
    } 

}