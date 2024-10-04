import fs from 'fs';

const number = 5
let outpuMessage = ''
const headerMessage = `
=========================
     Tabla del ${number}
=========================\n
`

for (let i = 1; i < 11; i++) {
    outpuMessage += `${number} x ${i} = ${i * number}\n`;
}

outpuMessage = headerMessage + outpuMessage
console.log(outpuMessage)

const outputPath = 'outputs'

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-del-${number}.txt`, outpuMessage)
console.log('file created');