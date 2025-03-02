import clsx from "clsx";
import styles from "./SkillNode.module.css";
import { useTooltip } from "../../hooks/useTooltip";
import { useSkillTree } from "../../hooks/useSkillTree";
import { Handle, Position } from "@xyflow/react";
import { CSSProperties, useEffect } from "react";

import Card3dCharacter from "../Card/Card3dCharacter/Card3dCharacter";
import { useAppDispatch } from "../../store";
import { onAddLog } from "../../store/logSlice";

export interface ISkillNodeProps {
    data: {
        id: string;
        image: string;
        name: string;
        width: number;
    };

}

const dotStyle: CSSProperties = {
    opacity: 0
}
const SkillNode = ({ data }: ISkillNodeProps) => {

    const dispatch = useAppDispatch();

    
    useEffect(() => {
        dispatch(onAddLog(`${data.image}`));
    });


    const { showTooltip } = useTooltip();
    const { updateSkill, getSkillById, canActivate } = useSkillTree();
    const skill = getSkillById(data.id);

    return (
        <div className={clsx(
            styles.node,
            canActivate(skill.id) && styles.canActivate
    )}
            data-tooltip-id="AOD-tooltip"
            onMouseEnter={() => { showTooltip!(skill.id) }}
            style={{ width: data.width, height: data.width}}
        >
            <div
                className={clsx(
                    styles.box,
                    canActivate(skill.id) && styles.canActivate
                )}
                onClick={() => { updateSkill(data.id) }}
            >
                <Card3dCharacter img={data.image} canActivate={canActivate(skill.id)} isActive={skill.isActive}  />
                <div className={clsx(
                    styles.activateFilter,
                    !canActivate(skill.id) && styles.cantActivate,
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
    )
}

export default SkillNode