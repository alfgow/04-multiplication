"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const number = 5;
let outpuMessage = '';
const headerMessage = `
=========================
     Tabla del ${number}
=========================\n
`;
for (let i = 1; i < 11; i++) {
    outpuMessage += `${number} x ${i} = ${i * number}\n`;
}
outpuMessage = headerMessage + outpuMessage;
console.log(outpuMessage);
const outputPath = 'outputs';
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-del-${number}.txt`, outpuMessage);
console.log('file created');
