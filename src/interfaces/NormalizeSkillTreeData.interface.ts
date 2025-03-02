import { ISkillTree, ITreeEdges, ITreeNodes } from "./SkillTree.interface";

export interface INormalizeSkillTreeData{
    skillTree: ISkillTree;
    root: string;
    paths: string[][];
    nodes: ITreeNodes[];
    edges: ITreeEdges[];
}