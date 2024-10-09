import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
	.option("b", {
		alias: "base",
		type: "number",
		demandOption: true,
		describe: "Multiplication table base",
	})
	.option("l", {
		alias: "limit",
		type: "number", 
		default: 10,
		describe: "Multiplicador table limit",
	})
	.option("s", {
		alias: "show",
		type: "boolean",
		default: false,
		describe: "show multiplication table",
	})
    .option("n",{
        alias: "name",
        type: "string",
        default: "tabla-del-",
        describe: "File Name"
    })
    .option("d",{
        alias: "destination",
        type: "string",
        default: "outputs",
        describe: "File destination"
    })
	.check((argv, options) => {
		if (argv.b < 0) throw new Error("Base must be grater than 0");

		return true;
	})
	.parseSync();
