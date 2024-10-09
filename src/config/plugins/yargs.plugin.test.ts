
const runCommand = async(args: string[])=>{
    process.argv = [...process.argv, ...args]
    const {yarg} = await import('./yargs.plugin');
    return yarg
}

describe('YargsPlugin', () => {

    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv
        jest.resetModules();
    })

    test('should return default values', async()=>{
        const argv = await runCommand(['-b', '77', '-l', '28'])
        expect(argv).toEqual( expect.objectContaining({
            b: 77,
            l: 28,
            s: false,
            n: 'tabla-del-',
            d: 'outputs'
        }))
    })

    test('should return config w custom values', async()=>{
        
        const argv = await runCommand(['-b', '77', '-l', '28', '-s', '-n', 'tabla-del-', '-d', 'outputs'])
        expect(argv).toEqual( expect.objectContaining({
            b: 77,
            l: 28,
            s: true,
            n: 'tabla-del-',
            d: 'outputs'
        }))

    })

});