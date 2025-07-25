import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

export default function Gallery(props: { images: any }) {
  const images = props.images.map((image: any) => {
    return {
      original: image
    }
  })

  const leftNav = (onClick: any, disabled: any) => (
    <button type="button" className="fixed top-1/2 -translate-y-1/2 start-0 z-30 flex items-center justify-center px-24 cursor-pointer group focus:outline-none" onClick={onClick} disabled={disabled}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-800/60">
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>);

  const rightNav = (onClick: any, disabled: any) => (
    <button type="button" className="fixed top-1/2 -translate-y-1/2 end-0 z-30 flex items-center justify-center px-24 cursor-pointer group focus:outline-none" onClick={onClick} disabled={disabled}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300/50 dark:hover:bg-gray-800/60">
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-200 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>);

  return <ImageGallery items={images} showThumbnails={false} showPlayButton={false} renderLeftNav={leftNav} renderRightNav={rightNav} />
}