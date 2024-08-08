import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>    
  );
}