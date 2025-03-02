export interface ISkill {
    id:          string;
    name:        string;
    description: string;
    image:       string;
    children:    string[];
    parent:      string;
    isActive:    boolean;
    canActivate: boolean;
    position?:   INodePosition;
}

export type ISkillTree = Record<string, ISkill>;
export interface INodePosition {
    x: number;
    y: number;
}

export interface ISkillTreeState {
    skillTree: ISkillTree;
    skillTreeRoot: string;
    nodes: ITreeNodes[];
    edges: ITreeEdges[];

}
export interface ITreeNodes {
    id: string;
    type: string;
    data: {
        id: string;
        width: number;
    };
    position: {
        x: number;
        y: number;
    };
}

export interface ITreeEdges {
    id: string;
    source: string;
    target: string;
    sourceHandle: string;
    targetHandle: string;
    type: string;
}
