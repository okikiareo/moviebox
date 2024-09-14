import "../css/preloader.css";

const Preloader = () => {
  return (
    <section className="preloader-overlay">
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </div>
    </section>
  );
};

export default Preloader;
