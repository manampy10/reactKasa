// src/pages/AboutPage/AboutPage.jsx
import Header from "../../components/Header/Header";
import Footer from "../../Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Banner from "../../components/Banner/Banner";
import bannerAbout from "../../logo/Image source 2.png";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      <Banner image={bannerAbout} />
      <main className="about-content">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale...
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa...
        </Collapse>
        <Collapse title="Service">
          Nos équipes sont à votre disposition pour vous fournir une expérience
          parfaite.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. C’est pourquoi nos hôtes
          bénéficient d’une assistance 24/7.
        </Collapse>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
