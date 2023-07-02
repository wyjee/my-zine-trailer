import {baseUrl} from "@/config/config"

const imageLoader = ({ src, width, height, quality }) => {
    return `${baseUrl}/${src}?w=${width}&h=${height }&q=${quality || 75}`
};

export default imageLoader;