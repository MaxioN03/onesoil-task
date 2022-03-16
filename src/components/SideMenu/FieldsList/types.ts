export enum Crop {
    sunflower = 'sunflower',
    corn = 'corn',
    grain = 'grain',
    no_crop = 'no_crop',
}

export type Field = {
    id: string;
    name: string;
    crop: Crop[];
    area: number;
    suitability: number;
}