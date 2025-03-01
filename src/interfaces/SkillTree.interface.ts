export interface ISkill {
    id:          string;
    name:        string;
    description: string;
    image:       string;
    children:    string[];
    parent:      string;
    isActive:    boolean;
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

}


