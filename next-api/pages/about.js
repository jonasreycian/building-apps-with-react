import styles from "@/styles/About.module.scss";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <div className="content">
        <button className={`btn btn-primary ${styles.highlight}`}>
          Primary
        </button>
      </div>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
