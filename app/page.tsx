import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import DownloadSection from "@/components/DownloadSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ImageGallery />
        <DownloadSection />
      </main>
    </div>
  );
}
