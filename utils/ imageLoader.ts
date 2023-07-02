import {baseUrl} from "@/config/config"

type ImageLoaderProps = {
    src?: string;
    width?: number;
    height?: number;
    quality?: number;
}

const imageLoader = ({ src, width, height, quality }: ImageLoaderProps) => {
    return `${baseUrl}/${src}?w=${width}&h=${height }&q=${quality || 75}`
};

export default imageLoader;