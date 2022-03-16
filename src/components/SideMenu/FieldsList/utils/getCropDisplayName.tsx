import {Crop} from "../types";

export const getCropDisplayName = (crop: Crop) => {
    switch (crop) {
        case Crop.sunflower:
            return 'Sunflower';
        case Crop.corn:
            return 'Corn';
        case Crop.grain:
            return 'Grain';
        case Crop.no_crop:
            return 'No crop';
        default:
            return crop || 'Unknown';
    }
};