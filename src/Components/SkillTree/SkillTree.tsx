import { useEffect } from "react";
import { useSkillTree } from "../../hooks/useSkillTree";
import SkillFlow from "../Flow/SkillFlow";
import Tooltip from "../shared/Tooltip";
import styles from "./SkillTree.module.css";
import AnimatedBG from "../AnimatedBg/AnimatedBg";


function SkillTree() {

    const { loadSkillTreeData } = useSkillTree();

    useEffect(() => {
        loadSkillTreeData().catch(console.error);
    }, [loadSkillTreeData]);

    return (
        <section className={ styles.container }>
            <AnimatedBG />
            <SkillFlow />
            <Tooltip />
         </section>
    );
}

export default SkillTree;
