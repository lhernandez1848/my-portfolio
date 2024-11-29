import ImageGallery from "react-image-gallery"
import '../css/gallery.scss'

export default function Gallery(props: { images: any }) {
  const images = props.images.map((image: any) => {
    return {
      original: image
    }
  })

  return <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
}