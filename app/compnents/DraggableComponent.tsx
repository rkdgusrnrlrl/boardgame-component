'use client'

import React from "react";

const DraggableComponent = (props: { id:number, name: string }) => {
    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', JSON.stringify(props));
    }

    return (
        <div className="card" onDragStart={onDrag} draggable={true}>
            {props.name}
        </div>
    )
}

export default DraggableComponent;