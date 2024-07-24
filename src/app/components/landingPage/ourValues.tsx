import React from "react";
import { OurValuesStyle } from "../../pages/landing/style";
import { motion } from "framer-motion";
import {
  Rank,
  EmojiNormal,
  Lovely,
  Smileys,
  MedalStar,
  People,
} from "iconsax-react";

const ValueCard = ({
  title,
  text,
  icon,
  count,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
  count: number;
}) => {
  return (
    <motion.div
      className="valueCard"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 * count, duration: 0.5 },
      }}
      viewport={{ once: true }}
    >
      <div className="iconWrapper">
        <div className="icon">{icon}</div>
      </div>
      <div className="cardTitle">{title}</div>
      <div className="cardSubText">{text}</div>
    </motion.div>
  );
};
function ourValues() {
  return (
    <OurValuesStyle>
      <div className="valuesWrapper">
        <div className="topValues">
          <div className="ourValues">Our Values</div>
          <div className="values">We Are Guided By Our Values</div>
          <p>
            To achieve our mission, we strive for a collaborative and initiative
            driven environment.
          </p>
        </div>
        <div className="valueCards">
          <ValueCard
            title="Mission"
            text="We are a solution provider. we pay close attention to the problems creatives face and provide seamless and verified services to solve them. Innovation is at the heart of what we do; if we don’t do a good job of this we shouldn’t exist."
            icon={
              <Rank
                size="32"
                color="#FF8A65"
                variant="Outline"
                className="icon"
              />
            }
            count={2}
          />
          <ValueCard
            title="Build with Empathy"
            text="We aim to build trust with our customers and partners above all else. our goal is to make the platform and its features easy for customers to adopt. Every team member is responsible for providing high-quality customer service."
            icon={<EmojiNormal size="32" color="#FF8A65" className="icon" />}
            count={3}
          />
          <ValueCard
            title="Be Kind and Direct"
            text="Everyone comes from different backgrounds, which shapes how we give and receive feedback. We are sensitive in our delivery, listen with self awareness, actively seek feedbacks for ourselves, and address small issues candidly before they become big issues"
            icon={<Lovely size="32" color="#FF8A65" className="icon" />}
            count={1}
          />
          <ValueCard
            title="Teamwork to get things done"
            text="We believe in the power of collaboration. By working together, we leverage our diverse skills and perspective to achieve our goals efficiently and effectively. Ensuring that our collective efforts drive our mission forward."
            icon={<Smileys size="32" color="#FF8A65" className="icon" />}
            count={2}
          />
          <ValueCard
            title="Integrity"
            text="We are committed to maintaining the highest standards of integrity. This means being honest, transparent, and ethical in all our dealings, building a foundation of trust and respect with our customers, partners, and each other."
            icon={<MedalStar size="32" color="#FF8A65" className="icon" />}
            count={3}
          />
          <ValueCard
            title="People are the Heart of what we do"
            text="Filmmakers Mart makes location scouting easy. Get access to verified locations, from certified property managers to film studios, to breathtaking landscapes. Our rich database simplifies remote location scouting and physical recce, ensuring the ideal shoot experience."
            icon={<People size="32" color="#FF8A65" className="icon" />}
            count={1}
          />
        </div>
      </div>
    </OurValuesStyle>
  );
}

export default ourValues;
