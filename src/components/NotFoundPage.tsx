import { Link } from 'react-router-dom';
import Body from './Body';

export default function NotFoundPage() {
  return (
    <Body>
      <main className="max-w-screen flex flex-col items-center justify-center min-h-full grow mx-4 lg:mx-40 my-32 lg:my-20">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-900 dark:text-cyan-500">404</h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-cyan-900 md:text-4xl dark:text-white">Page Not Found</p>
        <p className="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">Sorry, we can't find that page. You'll find more to explore on the home page. </p>
        <Link to="#" className="inline-flex text-cyan-900 hover:text-cyan-600 focus:ring-4 font-medium text-base px-5 py-2.5 text-center dark:text-cyan-600 dark:hover:text-cyan-400 my-4">Back to Homepage</Link>
      </main>    
    </Body>
  );
}