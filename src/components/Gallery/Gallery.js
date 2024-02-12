import ImageGallery from "react-image-gallery";
import './gallery.css'

export default function Gallery(props) {
  const images = props.images.map((element, i) => {
    return {
      original: element
    }
  })

  return <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
}