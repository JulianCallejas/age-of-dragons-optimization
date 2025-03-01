
import { ReactFlow, StepEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useSkillTree } from "../../hooks/useSkillTree";
import SkillNode from "./SkillNode";
import clsx from "clsx";
import styles from "./SkillFlow.module.css";

const nodeTypes = { skillNode: SkillNode };
const edgeTypes = {
  step: StepEdge,
};

const SkillFlow = () => {

    const {nodes, edges } = useSkillTree();
    
    return (
        <div className={clsx(
            styles.container
          )}
        >
        <ReactFlow 
            nodes={nodes} 
            edges={edges} 
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            nodesConnectable={false}
            fitView={true}
            fitViewOptions={{ minZoom: 0.4, padding: 0.5 }}
            minZoom={0.4}
        >
        </ReactFlow>
      </div>
  )
}

export default SkillFlow