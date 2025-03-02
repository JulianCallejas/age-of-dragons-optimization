export interface ITootipState {
    id:           string;
}

export interface ITooltip extends ITootipState {
    title:        string;
    message:      string;
    showTooltip?: (id: string) => void;
}