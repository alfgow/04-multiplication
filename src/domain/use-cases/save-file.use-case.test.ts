import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {

    const saveFile = new SaveFile();

    test('Shuld save file w default value', ()=>{
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'Hello World',
        }
        const result = saveFile.execute(options)
        expect(result).toBe(true);

        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        expect(fileExists).toBe(true);
        expect(fileContent).toBe('Hello World');
        fs.rmSync(filePath, {recursive: true})
    })

    test('Shuld save file w custom value', ()=>{

        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name'
        }
        const result = saveFile.execute(options)
        expect(result).toBe(true);
        const fileExists = fs.existsSync(options.fileDestination);
        expect(fileExists).toBe(true);
        const filePath = `${options.fileDestination}/${options.fileName}.txt`;
        const fileContent = fs.readFileSync(filePath, 'utf8');
        expect(fileContent).toBe('custom content');
         fs.rmSync(filePath, {recursive: true})
    })

    test('should return false if directory could not be created',()=>{
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('This is a custom error message');
          });
          const resultado = saveFile.execute({
            fileContent: 'custom content',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name'
          })
          expect(resultado).toBe(false);
          mkdirSpy.mockRestore();
    })

    test('should return false if file could not be created',()=>{

        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw new Error('This is a custom write File error message');
          });
          const resultado = saveFile.execute({
            fileContent: 'custom content',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name'
          })
          expect(resultado).toBe(false);
          writeFileSpy.mockRestore();
    })

});