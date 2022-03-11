export enum Agriculture {
    sunflower = 'sunflower',
    corn = 'corn',
    grain = 'grain',
    no_crop = 'no_crop',
}

export type Field = {
    id: string;
    name: string;
    agriculture: Agriculture[];
    area: number;
    suitability: number;
}