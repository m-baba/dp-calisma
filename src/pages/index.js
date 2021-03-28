import Layout from '../components/Layout'
import Breadcrumb from "../components/_Breadcrumb";
import MainBanner from "../components/_MainBanner";
import AccordionContent from "../components/_Accordion";
import styles from "../components/_MainBanner/index.module.scss";
import React from "react";

const Home = () => (
  <>
    <Breadcrumb />
    <MainBanner />
    <div className={styles.mainbanner_description}>
        <h3 className={styles.mainbanner_description_title}>Merak edilen sorular?</h3>
        <h4 className={styles.mainbanner_description_text}>En çok merak edilen konuları bir araya topladık. 😇</h4>
    </div>
    <AccordionContent />
  </>
);

Home.getLayout = page => <Layout>{page}</Layout>

export default Home