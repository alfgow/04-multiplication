import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";
console.log(yarg);

const { b, l, s } = yarg;

let outpuMessage = "";
const headerMessage = `
=========================
     Tabla del ${b}
=========================\n
`;

for (let i = 1; i <= l; i++) {
	outpuMessage += `${b} x ${i} = ${i * b}\n`;
}

outpuMessage = headerMessage + outpuMessage;

if (s) {
	console.log(outpuMessage);
}

const outputPath = "outputs";
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-del-${b}.txt`, outpuMessage);
console.log("file created");
