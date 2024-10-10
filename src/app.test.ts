import { ServerApp } from "./presentation/server-app";

describe('Test App.ts', () => {

    test('should call Server.run w values', async() => {

        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.js', '-b', '89', '-l', '77', '-s', '-d', 'test-destination', '-n', 'test-fileName'];
        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 89,
            limit: 77,
            showTable: true,
            destination: "test-destination",
            name: "test-fileName"
        })

    });

});