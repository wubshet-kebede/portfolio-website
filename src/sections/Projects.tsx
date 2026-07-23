import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";
import {
  FiActivity,
  FiMessageSquare,
  FiTarget,
  FiTrendingUp,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";
import { FaChrome } from "react-icons/fa";
import type { IconType } from "react-icons";

const COVER_ICONS: Record<string, IconType> = {
  football: FiActivity,
  nlp: FiMessageSquare,
  focus: FiTarget,
  analytics: FiTrendingUp,
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">03 — Projects</span>

          <h2 className="section__title">
            Selected <span>Projects</span>
          </h2>

          <p className="section__subtitle">
            Some of the software products, research projects, and AI
            applications I've built over the years.
          </p>
        </Reveal>

        <div className="showcase">
          {projects.map((p, i) => {
            const Icon = COVER_ICONS[p.icon] ?? FiTarget;
            const reversed = i % 2 === 1;

            return (
              <div
                key={p.title}
                className={`showcase-row ${
                  reversed ? "showcase-row--rev" : ""
                }`}
              >
                {/* Project Image */}

                <motion.div
                  className="showcase-visual"
                  initial={{ opacity: 0, x: reversed ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {p.image ? (
                    <div className="showcase-visual__inner showcase-visual__inner--img">
                      <img src={p.image} alt={p.title} loading="lazy" />
                    </div>
                  ) : (
                    <div
                      className={`showcase-visual__inner cover cover--t${
                        (i % 4) + 1
                      }`}
                    >
                      <span className="cover__watermark">
                        <Icon />
                      </span>

                      <span className="cover__badge">
                        <Icon />
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Project Content */}

                <motion.div
                  className="showcase-content"
                  initial={{ opacity: 0, x: reversed ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="showcase-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="showcase-title">{p.title}</h3>

                  <p className="showcase-blurb">{p.blurb}</p>

                  <div className="showcase-tools">
                    {p.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <div className="showcase-links">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="showcase-link"
                    >
                      View on GitHub
                      <FiArrowRight size={15} />
                    </a>

                    {p.store && (
                      <a
                        href={p.store}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="showcase-link showcase-link--store"
                      >
                        <FaChrome size={14} />
                        Chrome Store
                        <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
