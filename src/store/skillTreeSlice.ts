import { createSlice } from '@reduxjs/toolkit';
import { ISkillTree, ISkillTreeState } from '../interfaces/SkillTree.interface';

const initialState: ISkillTreeState = {
    skillTree: {},
    skillTreeRoot: '',
    
}; 

export const skillTreeSlice = createSlice({
    name: 'Minecraft-Skill-Tree',
    initialState,
    reducers: {
        onLoadTree: (state, { payload }: { payload: {skillTree: ISkillTree, root: string, paths: string[][]} }) => {
            state.skillTree = payload.skillTree;
            state.skillTreeRoot = payload.root;
            
        },
        onUpdateSkill: (state, { payload }: { payload: string }) => {
            state.skillTree[payload].isActive = true;
        },
        
    },
});

export const { onLoadTree, onUpdateSkill } = skillTreeSlice.actions;
export default skillTreeSlice.reducer;
