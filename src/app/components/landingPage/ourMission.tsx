import React from "react";
import { MissionStyle } from "../../pages/landing/style";
import { motion } from "framer-motion";

function ourMission() {
  return (
    <MissionStyle>
      <div className="misionWrapper">
        <div className="left">
          <div className="top"></div>
          <h4>Our Mission</h4>
          <motion.div
            className="text"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            Our MISSION is to deliver seamless and verified services on an
            end-to-end marketplace for creatives.
          </motion.div>
          <h4>Our Vision</h4>
          <motion.div
            className="text"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            To revolutionize the African entertainment industry by becoming the
            go-to platform for all creative production needs, fostering
            innovation, and driving sustainable growth for our partners and
            customers.
          </motion.div>
        </div>
        <div className="missionImages"></div>
      </div>
    </MissionStyle>
  );
}

export default ourMission;
