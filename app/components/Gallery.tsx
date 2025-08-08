import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Gallery(props: { images: any }) {
  const images = props.images.map((image: any) => {
    return {
      original: image
    }
  })

  return <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
}