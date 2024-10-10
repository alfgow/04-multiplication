import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

const ServerAppInstance = new ServerApp();
const options = {
            base: 89,
            limit: 77,
            showTable: false,
            destination: "test-destination",
            name: "test-fileName"
        }

describe("ServerApp", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should create ServerApp Instance',()=>{
        expect(ServerAppInstance).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe("function");
    })

    test('Should run ServerApp w options',()=>{

        const logSpy = jest.spyOn(console, "log");
        const CreateTableSpy = jest.spyOn(CreateTable.prototype, "execute");
        const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");
        ServerApp.run(options); 

        expect(logSpy).toHaveBeenCalledWith("File Created");
        expect(CreateTableSpy).toHaveBeenCalledTimes(1);
        expect(CreateTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit, destination: options.destination, name: options.name });
        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith({
            fileContent: expect.any(String),
            fileName: options.name,
            fileDestination: options.destination
        })

    })

    test('Should run w custom values moched',()=>{

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2')
        const saveMock = jest.fn();

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveMock;

        ServerApp.run(options)

        // expect(logMock).toHaveBeenCalledWith('Server Running...');
        expect(createMock).toHaveBeenCalledWith({"base": 89, "destination": "test-destination", "limit": 77, "name": "test-fileName"})
        expect(saveMock).toHaveBeenCalledWith({
            "fileContent": '1 x 2 = 2', 
            "fileDestination": options.destination, 
            "fileName": options.name
        })

    })

});