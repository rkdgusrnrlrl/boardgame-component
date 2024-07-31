'use client'

import React from "react";
import DraggableComponent from './DraggableComponent'
import {CompoData} from "@/app/types";


const DropComponent = ({id, name, components, onMoveComponent}: {
    id: number, name: string, components: CompoData[], onMoveComponent: (toId: number, component: CompoData) => void
}) => {
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const dragData = JSON.parse(e.dataTransfer.getData('text')) as CompoData;
        console.log(dragData)
        onMoveComponent(id, dragData)
    }
    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    return (
        <div onDragOver={allowDrop} style={{width: 600, height: 300, border: '1px solid black'}} onDrop={onDrop}>
            <p>{name}</p>
            {components.map((comp) => {
                return (
                    <DraggableComponent id={comp.id} name={comp.name} key={comp.id}/>
                )
            })}
        </div>
    )
}

export default DropComponent;