import imageLoader from "@/utils/ imageLoader";
import NextImage from "next/image";

const Image = ({src, className, width, height, alt, style}) => {
    return (
        <div className={className || ''}>
          <NextImage loader={imageLoader} src={src}
               width={width || 100} height={height || 100} style={style || {width: '100%', height: '100%'}} alt={alt}/>
        </div>
    )
}

export default Image;