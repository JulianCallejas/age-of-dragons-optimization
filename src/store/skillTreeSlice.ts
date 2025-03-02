import { createSlice } from '@reduxjs/toolkit';
import { ISkillTreeState } from '../interfaces/SkillTree.interface';
import { INormalizeSkillTreeData } from '../interfaces';

const initialState: ISkillTreeState = {
    skillTree: {},
    skillTreeRoot: '',
    nodes: [],
    edges: [],
    
}; 

export const skillTreeSlice = createSlice({
    name: 'AOD-Skill-Tree',
    initialState,
    reducers: {
        onLoadTree: (state, { payload }: { payload: INormalizeSkillTreeData }) => {
            state.skillTree = payload.skillTree;
            state.skillTreeRoot = payload.root;
            state.nodes = payload.nodes;
            state.edges = payload.edges;
        },
        onUpdateSkill: (state, { payload }: { payload: string }) => {
            const skill = state.skillTree[payload]
            const parent = state.skillTree[skill.parent];
            if (payload === parent.id || parent.isActive) {
                state.skillTree[payload].isActive = true;
                skill.children.forEach((child) => {
                    state.skillTree[child].canActivate = true;
                });
            }
        },
    },
});

export const { onLoadTree, onUpdateSkill } = skillTreeSlice.actions;
export default skillTreeSlice.reducer;

