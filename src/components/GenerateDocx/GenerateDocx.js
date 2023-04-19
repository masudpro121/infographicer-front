import React from 'react'
import { Document, Packer, Paragraph, TextRun, Header, HeadingLevel } from "docx";
import wordwrap from 'wordwrap';
import { saveAs } from "file-saver";
export default function GenerateDocx({outputs}) {
    const generate = () => {
       
        const doc = new Document({
            sections: [
                {
                    children: [new Paragraph({
                        text: "InfoGraphics",
                        heading: HeadingLevel.TITLE,
                        bold: true
                    }),
                    ...outputs.map(output=>new Paragraph({
                        children: [
                            new TextRun({
                                text: `${output.prompt}`,
                                bold: true,
                                break: 1,
                                size: 50,
                            }),
                            
                            ...output.value.split('\n').map(i=>new  TextRun({
                                text: `${i}`,
                                size: 28,
                                break: 1
                            }))
                        ]
                    }))]
                }
            ]
        });
        Packer.toBlob(doc).then((blob) => {
            console.log(blob);
            saveAs(blob,   `Infographicer_${new Date().toLocaleDateString()}.docx`);
            console.log("Document created successfully");
        });
    };
  return (
    <div>
        <button onClick={generate}>Export Docx</button>
    </div>
  )

  }


  
