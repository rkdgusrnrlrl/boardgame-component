'use client'

import DropComponent from './compnents/DropComponent'
import {useState} from "react";
import {CompoData} from './types'

const findCompIdx = (containers: CompoData[][], comp: CompoData) => {
    for (const firIdx in containers) {
        for (const secIdx in containers[firIdx]) {
            if (containers[firIdx][secIdx].id === comp.id) {
                return [parseInt(firIdx), parseInt(secIdx)]
            }
        }
    }

    return [-1, -1]
}


export default function Home() {
    const [containers, setContainers] = useState<CompoData[][]>([
        [{id: 0, name: 'hello'}], [{id: 1, name: 'world'}]
    ])

    const onMoveComponent = (toId: number, comp: CompoData) => {
        const [firIdx, secIdx] = findCompIdx(containers, comp)

        const from = containers[firIdx];
        from.splice(secIdx, 1)
        const to = containers[toId];
        to.push(comp)
        setContainers([...containers])
    }

    return (
        <main>
            <DropComponent id={0} name="test01" onMoveComponent={onMoveComponent} components={containers[0]}/>
            <DropComponent id={1} name="test02" onMoveComponent={onMoveComponent} components={containers[1]}/>
        </main>
    );
}
