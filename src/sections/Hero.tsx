import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 pt-28 pb-16 lg:flex-row lg:px-8">
        {/* LEFT */}
        <div className="flex max-w-2xl gap-5">
          {/* Decorative line */}
          <div className="mt-2 hidden sm:flex flex-col items-center">
            <div className="h-5 w-5 rounded-full bg-primary" />
            <div className="h-64 w-1 bg-gradient-to-b from-primary to-transparent" />
          </div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-text-muted"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-2 font-display text-5xl font-bold leading-tight text-text sm:text-6xl lg:text-7xl"
            >
              Wubshet <span className="text-primary">Ayellew</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-2xl font-semibold text-secondary"
            >
              Computer Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-xl text-lg leading-8 text-text-muted"
            >
              Passionate about building reliable, scalable software that solves
              real-world problems, backed by a strong Computer Engineering
              foundation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-button bg-primary px-6 py-3 font-medium text-white transition hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-button border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex w-full max-w-md items-center justify-center">
          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-primary/20 bg-surface shadow-card">
            <span className="text-7xl">💻</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="flex h-12 w-7 justify-center rounded-full border-2 border-text-muted p-1"
        >
          <div className="h-2 w-2 rounded-full bg-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
