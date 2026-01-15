import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Cases from "./components/Cases";
import Partners from "./components/Partners";
import News from "./components/News";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import SolutionsPage from "./pages/SolutionsPage";
import CasesPage from "./pages/CasesPage";
import NewsPage from "./pages/NewsPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import ServiceCentersPage from "./pages/ServiceCentersPage";
import TrainingVideoPage from "./pages/TrainingVideoPage";
import EasySolarKitPage from "./pages/EasySolarKitPage";
import EnergyStoragePage from "./pages/EnergyStoragePage";
import DownloadPage from "./pages/DownloadPage";
import ContactPage from "./pages/ContactPage";
import FloatingActionBar from "./components/FloatingActionBar";

export type Language = "en" | "km";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    | "home"
    | "about"
    | "products"
    | "solutions"
    | "cases"
    | "news"
    | "support"
    | "faq"
    | "service-centers"
    | "training-video"
    | "easy-solar-kit"
    | "energy-storage"
    | "download"
    | "contact"
  >("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);
  const [newsType, setNewsType] = useState<"blog" | "industry">("blog");
  const [lang, setLang] = useState<Language>("en");

  // Synchronize the HTML lang attribute with the application state
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#about-page") {
        setCurrentPage("about");
      } else if (hash.startsWith("#products-page")) {
        setCurrentPage("products");
        const params = new URLSearchParams(hash.split("?")[1]);
        const cat = params.get("category");
        setSelectedCategory(cat ? decodeURIComponent(cat) : "Products");
      } else if (hash.startsWith("#solutions-page")) {
        setCurrentPage("solutions");
        const params = new URLSearchParams(hash.split("?")[1]);
        const sol = params.get("type");
        setSelectedSolution(sol ? decodeURIComponent(sol) : "Solutions");
      } else if (hash === "#cases-page") {
        setCurrentPage("cases");
      } else if (hash === "#support-page") {
        setCurrentPage("support");
      } else if (hash === "#faq-page") {
        setCurrentPage("faq");
      } else if (hash === "#service-centers-page") {
        setCurrentPage("service-centers");
      } else if (hash === "#training-video-page") {
        setCurrentPage("training-video");
      } else if (hash === "#easy-solar-kit-page") {
        setCurrentPage("easy-solar-kit");
      } else if (hash === "#energy-storage-page") {
        setCurrentPage("energy-storage");
      } else if (hash === "#download-page") {
        setCurrentPage("download");
      } else if (hash === "#contact-page") {
        setCurrentPage("contact");
      } else if (hash.startsWith("#news-page")) {
        setCurrentPage("news");
        const params = new URLSearchParams(hash.split("?")[1]);
        const type = params.get("type");
        setNewsType(type === "industry" ? "industry" : "blog");
      } else {
        setCurrentPage("home");
      }
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigateTo = (page: string, subKey?: string) => {
    if (page === "home") window.location.hash = "";
    else if (page === "about") window.location.hash = "about-page";
    else if (page === "products") {
      const catVal = subKey || "Products";
      const catParam =
        catVal !== "Products" ? `?category=${encodeURIComponent(catVal)}` : "";
      window.location.hash = `products-page${catParam}`;
    } else if (page === "solutions") {
      const solVal = subKey || "Solutions";
      const solParam =
        solVal !== "Solutions" ? `?type=${encodeURIComponent(solVal)}` : "";
      window.location.hash = `solutions-page${solParam}`;
    } else if (page === "cases") window.location.hash = "cases-page";
    else if (page === "support") window.location.hash = "support-page";
    else if (page === "faq") window.location.hash = "faq-page";
    else if (page === "service-centers")
      window.location.hash = "service-centers-page";
    else if (page === "training-video")
      window.location.hash = "training-video-page";
    else if (page === "easy-solar-kit")
      window.location.hash = "easy-solar-kit-page";
    else if (page === "energy-storage")
      window.location.hash = "energy-storage-page";
    else if (page === "download") window.location.hash = "download-page";
    else if (page === "contact") window.location.hash = "contact-page";
    else if (page === "news") {
      const type = subKey === "Industry News" ? "industry" : "blog";
      window.location.hash = `news-page?type=${type}`;
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar
        onNavigate={navigateTo as any}
        currentPage={currentPage as any}
        lang={lang}
        setLang={setLang}
      />
      <main className="flex-grow pt-24 lg:pt-32">
        {currentPage === "home" && (
          <>
            <Hero lang={lang} />
            <About onMoreClick={() => navigateTo("about")} lang={lang} />
            <Stats />
            <Products lang={lang} />
            <Solutions />
            <Cases />
            <Partners />
            <News onMoreClick={() => navigateTo("news")} />
          </>
        )}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "products" && (
          <ProductsPage initialCategory={selectedCategory || "Products"} />
        )}
        {currentPage === "solutions" && (
          <SolutionsPage type={selectedSolution || "Solutions"} />
        )}
        {currentPage === "cases" && <CasesPage />}
        {currentPage === "news" && <NewsPage type={newsType} />}
        {currentPage === "support" && <SupportPage />}
        {currentPage === "faq" && <FAQPage />}
        {currentPage === "service-centers" && <ServiceCentersPage />}
        {currentPage === "training-video" && <TrainingVideoPage />}
        {currentPage === "easy-solar-kit" && <EasySolarKitPage />}
        {currentPage === "energy-storage" && <EnergyStoragePage />}
        {currentPage === "download" && <DownloadPage />}
        {currentPage === "contact" && <ContactPage />}
      </main>
      <FloatingActionBar />
      <Footer
        lang={lang}
        onNavigate={(page, subKey) => {
          console.log("navigate:", page, subKey);
        }}
      />
    </div>
  );
};

export default App;
