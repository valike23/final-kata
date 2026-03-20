export interface Idashboard {
    competitions?: number
}
export interface Icompetition {
    competition_name: string;
    competition_banner: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}