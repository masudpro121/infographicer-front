import React from 'react'
import {
    Presentation, Slide, Text,
    Shape, Image, render
  } from "react-pptx"
  import pptxgen from "pptxgenjs";

export default function GeneratePptx({outputs}) {
    const generate = async() => {
        let pptx = new pptxgen();
       outputs.forEach(output=>{
        
        const lines = output.value.split("\n")
        const packs = []
        let s =[]
        lines.forEach((l,id)=>{
             const splitted = l.split(' ')
             if(s.length+splitted.length<250){
                s = [...s, "\n", ...splitted]
             }else{
                packs.push(s)
                s=splitted
             }
             if(lines.length == id+1){
                packs.push(splitted)
             }
        })
        packs.forEach(pack=>{
            let slide = pptx.addSlide();
            slide.addText(output.prompt, { x: 0, y: 1, w:10,  fontSize: 14, fill: { color: "F1F1F1" }, align: "center" });
            slide.addText(pack.join(' '), { x: 1, y: 3.5, w:8,  fontSize: 12, fill: { color: "F1F1F1" }});
        })
       })
        pptx.writeFile({ fileName: "react-demo.pptx" });
    }
  return (
    <div>
        <button onClick={generate}>Download Powerpoint</button>
    </div>
  )
}
