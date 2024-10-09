import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', () => {
    const createTable = new CreateTable();

    test('Should create table w default value', ()=>{
        const table = createTable.execute({base: 78})
        // console.log(table);
        expect(createTable).toBeInstanceOf(CreateTable);
    })

    test('Should create table w custom values',()=>{
        const options = {
            base: 89,
            limit: 10
        }
        const table = createTable.execute(options)
        expect(table).toEqual(`89 x 1 = 89\n89 x 2 = 178\n89 x 3 = 267\n89 x 4 = 356\n89 x 5 = 445\n89 x 6 = 534\n89 x 7 = 623\n89 x 8 = 712\n89 x 9 = 801\n89 x 10 = 890\n`);

    })

});
