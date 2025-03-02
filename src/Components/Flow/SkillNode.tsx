import { CSSProperties, memo, useEffect } from "react";
import { Handle, Position } from "@xyflow/react";
import clsx from "clsx";
import Card3dCharacter from "../Card/Card3dCharacter/Card3dCharacter";
import { useNode } from "../../hooks/useNode";
import styles from "./SkillNode.module.css";

interface ISkillNodeProps {
    data: {
        id: string;
        width: number;
    };
}

const dotStyle: CSSProperties = {
    opacity: 0
}

const SkillNode: React.FC<ISkillNodeProps> = memo(({ data }: ISkillNodeProps) => {
    
    const { skill, addLog, showTooltip, updateSkill } = useNode(data.id);

    useEffect(() => {
        addLog();
    });

    return (
        <div className={clsx(
            styles.node,
            skill.canActivate && styles.canActivate
        )}
            data-tooltip-id="AOD-tooltip"
            onMouseEnter={ showTooltip }
            style={{ width: data.width, height: data.width }}
        >
            <div
                className={clsx(
                    styles.box,
                    skill.canActivate && styles.canActivate
                )}
                onClick={ updateSkill }
            >
                <Card3dCharacter img={skill.image} canActivate={skill.canActivate} isActive={skill.isActive} />
                <div className={clsx(
                    styles.activateFilter,
                    !skill.canActivate && styles.cantActivate,
                    skill.isActive && styles.boxActive,
                )}
                ></div>
                <Handle
                    type="target"
                    position={Position.Left}
                    id="left"
                    style={dotStyle}
                    isConnectable={false}
                />
                <Handle
                    type="source"
                    position={Position.Right}
                    id="right"
                    style={dotStyle}
                    isConnectable={false}
                />
            </div>
        </div>
    );
});

SkillNode.displayName = 'SkillNode';

export default SkillNode