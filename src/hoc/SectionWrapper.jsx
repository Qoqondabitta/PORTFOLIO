import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "7rem",
          zIndex: 0,
          padding: "0.375rem",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <span
          style={{
            color: "red",
            fontWeight: "bold",
          }}
          id={idName}
        >
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
