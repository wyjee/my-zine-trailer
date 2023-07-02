import imageLoader from "@/utils/ imageLoader";
import {baseUrl} from "@/config/config"
import NextImage from "next/image";

type ImageProps = {
    src: string;
    width?: number;
    height?: number;
    quality?: number;
    className?: string;
    alt: string;
    style?: React.CSSProperties;
}

const Image = ({src, className, width, height, alt, style}: ImageProps) => {
    return (
        <div className={className || ''}>
          <NextImage loader={imageLoader} src={baseUrl+src}
               width={width || 100} height={height || 100} style={style || {width: '100%', height: '100%'}} alt={alt}/>
        </div>
    )
}

export default Image;