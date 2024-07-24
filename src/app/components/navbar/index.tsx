"use client";
import React, { useState } from "react";
import { MobileMenuStyle, NavBarStyle } from "./style";
import Image from "next/image";
import Link from "next/link";
import MktButton from "../buttons";
import { motion } from "framer-motion";
import { FMMTheme } from "../theme";
import { useRouter } from "next/navigation";
import { Home01Icon } from "@hugeicons/react-pro";

function NavBar() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -90 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="w-full fixed top-0 z-50"
    >
      <NavBarStyle>
        <div className="navSection">
          <Image
            src="/assets/svg/fmm-logo.svg"
            alt="logo"
            width={38}
            height={38}
            className="logo"
            onClick={() => (window.location.href = "/")}
            priority
          />
        </div>
        <div className="navSection">
          <Link href="/marketplace" className="link">
            Marketplace
          </Link>
          <Link href="/brief" className="link">
            Brief
          </Link>
          <Link href="/permit" className="link">
            Permit
          </Link>
          <Link href="/#" className="link">
            FAQs
          </Link>
        </div>
        <div className="navSection cta">
          <Link href="/login" className="loginBtn">
            Log In
          </Link>
          <MktButton
            onClick={() => router.push("/production")}
            label="Start a Production"
            type="primary"
            $maxWidth={197}
          />
        </div>
        <motion.button
          className="smallMenu"
          onClick={() => setActive(!active)}
          animate={active ? "open" : "closed"}
          variants={{
            open: {
              backgroundColor: FMMTheme.colors.primary_50,
            },
            closed: {
              backgroundColor: "transparent",
            },
          }}
        >
          <motion.span
            className="bar1"
            style={{ left: "50%", top: "15%", y: "-50%", x: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["15%", "50%", "50%"],
                backgroundColor: FMMTheme.colors.primary_500,
                transition: { duration: 0.3 },
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "15%", "15%"],
                backgroundColor: FMMTheme.colors.grey_900,
                transition: { duration: 0.3 },
              },
            }}
          />
          <motion.span
            className="bar2"
            style={{ left: "50%", top: "50%", y: "-50%", x: "-35%" }}
            variants={{
              open: {
                opacity: 0,
                transition: { duration: 0.3 },
              },
              closed: {
                opacity: 1,
                transition: { duration: 0.3 },
              },
            }}
          />
          <motion.span
            className="bar3"
            style={{ left: "50%", top: "85%", y: "-50%", x: "-50%" }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                top: ["85%", "50%", "50%"],
                backgroundColor: FMMTheme.colors.primary_500,
                transition: { duration: 0.3 },
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
                top: ["50%", "85%", "85%"],
                backgroundColor: FMMTheme.colors.grey_900,
                transition: { duration: 0.3 },
              },
            }}
          />
        </motion.button>
      </NavBarStyle>
      <MobileMenuStyle>
        <motion.div
          className="mobileMenu"
          animate={active ? "open" : "closed"}
          initial={{ opacity: 0 }}
          variants={{
            open: { opacity: 1, rotateX: 0, transition: { duration: 0.3 } },
            closed: { opacity: 0, rotateX: 180, transition: { duration: 0.3 } },
          }}
        >
          <div className="navSection">
            <Link href="/marketplace" className="link">
              Marketplace
            </Link>
            <Link href="/#" className="link">
              Brief
            </Link>
            <Link href="/#" className="link">
              Permit
            </Link>
            <Link href="/#" className="link">
              FAQs
            </Link>
          </div>
          <div className="navSection cta">
            <Link href="/login" className="loginBtn">
              Log In
            </Link>
            <MktButton
              onClick={() => router.push("/production")}
              label="Start a Production"
              type="primary"
              $maxWidth={197}
              $height={38}
              $className="productionBtn"
            />
          </div>
        </motion.div>
      </MobileMenuStyle>
    </motion.div>
  );
}

export default NavBar;
