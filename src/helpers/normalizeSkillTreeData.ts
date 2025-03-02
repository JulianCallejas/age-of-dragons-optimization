import { nanoid } from "nanoid";
import { IAgeOfDragonSkillTreeData, INodePosition, ISkillTree } from "../interfaces";

export const normalizeSkillTreeData = (data: IAgeOfDragonSkillTreeData): {skillTree: ISkillTree, root: string, paths: string[][]} => { 
    const skillTree: ISkillTree = {};
    if (!data.name) return {skillTree, root: '', paths: []};
    const initialId = "root";
    const {childrenArray, paths} = mapChildren(data.children, initialId, skillTree);
    skillTree[initialId] = {
        id: initialId,
        name: data.name,
        description: data.description,
        image: data.image,
        children: childrenArray,
        parent: initialId,
        isActive: false,
    };
    
    const positionDict = genPositions(paths, skillTree);
    Object.keys(positionDict!).forEach((key) => {
        skillTree[key].position = positionDict![key];
    });
    
    return {skillTree, root: initialId, paths};
};

function mapChildren(children:IAgeOfDragonSkillTreeData[], parent: string, skillTree: ISkillTree, newpath: string[] = [], paths: string[][] = []): {childrenArray: string[], paths: string[][]} {
    newpath = [...newpath, parent];
    if (!children.length) {
        paths.push(newpath);
        return {childrenArray: [], paths};
    };
    const childrenData =  children.map((child) => {
        const childId = nanoid(10);
        const {childrenArray} = mapChildren(child.children, childId, skillTree, newpath, paths);
        skillTree[childId] = {
            id: childId,
            name: child.name,
            description: child.description,
            image: child.image,
            children: childrenArray,
            parent: parent,
            isActive: false,
        };
        return childId;
    });
    return {childrenArray: childrenData, paths};
}

function genPositions(paths: string[][], skillTree: ISkillTree) {
    if (!paths.length) return;
            let currentPaths = 0;
            const positionsXY: Record<string, INodePosition> = {};
            paths.forEach((path) => {
                let child = "";
                [...path].reverse().some((id, step) => {
                    const skill = skillTree[id];
                    const steps = path.length;
                    const currentStep = steps - step - 1;
                    const childrenLength = skill.children.length;
                    const isEven = childrenLength % 2 === 0;
                    const mean = isEven ? childrenLength / 2 - 1 : (childrenLength - 1) / 2;
                    if (currentStep === 0) { 
                        positionsXY[`${id}`] = {x: currentStep, y: currentPaths};
                        currentPaths++;
                        return true;
                    };
                    if (childrenLength < 2) {
                        positionsXY[`${id}`] = {x: currentStep, y: currentPaths};
                        child = id;
                        return;
                    }
                    if (isEven && skill.children.indexOf(child) <= mean) {
                        currentPaths++;
                        positionsXY[`${id}`] = {x: currentStep, y: currentPaths};
                        child = id;
                        return;
                    }
                    if (
                        skill.children.indexOf(child) > mean ||
                        (!isEven && skill.children.indexOf(child) < mean)
                    ) {
                        currentPaths++;
                        return true;
                    }
                    if (skill.children.indexOf(child) === mean) {
                        positionsXY[`${id}`] = {x: currentStep, y: currentPaths};
                        child = id;
                        return;
                    }
                    
                });
            });
            return positionsXY;
}

