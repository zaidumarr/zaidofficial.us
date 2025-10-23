import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const packages = [
  {
    title: 'Globetrotter Session',
    duration: 'Half-day on-location',
    highlights: ['Pre-production moodboard', '3D camera transitions', 'Drone coverage']
  },
  {
    title: 'Cinematic Journey',
    duration: 'Full day worldwide',
    highlights: ['Creative crew of four', 'Motion + still capture', 'Color grading package']
  }
];

const fieldVariants = {
  initial: { opacity: 0, y: 18 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * index, duration: 0.5, ease: 'easeOut' }
  })
};

export default function BookingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2.8rem] border border-slate-800/60 bg-slate-950/80 p-10 shadow-glass"
      >
        <p className="text-lg text-slate-300">
          Bring Zaid to your world. Share the vision, select your atmosphere, and craft a timeline. Every request receives a
          cinematic treatment deck within 24 hours.
        </p>

        <motion.form className="mt-8 grid gap-6" initial="initial" whileInView="animate">
          {['Name', 'Email', 'Preferred Location', 'Desired Date'].map((placeholder, index) => (
            <motion.div
              key={placeholder}
              custom={index}
              variants={fieldVariants}
              className="relative"
            >
              <motion.input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/70 px-5 py-4 text-sm uppercase tracking-[0.35rem] text-slate-200 placeholder:text-slate-500 focus:border-aurora/60 focus:outline-none"
                whileFocus={{ scale: 1.01, boxShadow: '0 0 25px rgba(56,189,248,0.45)' }}
              />
            </motion.div>
          ))}

          <motion.textarea
            placeholder="Tell us about the story you want to create"
            rows={4}
            className="w-full rounded-2xl border border-slate-800/60 bg-slate-900/70 px-5 py-4 text-sm uppercase tracking-[0.35rem] text-slate-200 placeholder:text-slate-500 focus:border-aurora/60 focus:outline-none"
            whileFocus={{ scale: 1.01, boxShadow: '0 0 25px rgba(236,72,153,0.45)' }}
          />

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(56,189,248,0.55)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsModalOpen(true)}
              className="rounded-full border border-aurora/60 bg-aurora/20 px-6 py-3 text-xs uppercase tracking-[0.45rem] text-aurora"
            >
              Book a shoot
            </motion.button>
            <motion.span
              className="text-xs uppercase tracking-[0.35rem] text-slate-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Response within 24 hours
            </motion.span>
          </div>
        </motion.form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="flex flex-col gap-6 rounded-[2.8rem] border border-slate-800/60 bg-slate-900/60 p-10"
      >
        <h3 className="font-grotesk text-3xl font-semibold text-slate-100">Signature Experiences</h3>
        <p className="text-sm text-slate-300">
          Choose from cinematic packages or craft a bespoke travel-art immersion. Each option includes pre-production, shoot,
          and post-production wrapped in Zaid’s distinctive style.
        </p>
        <div className="grid gap-5">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl border border-slate-800/60 bg-slate-950/70 p-6"
              whileHover={{ scale: 1.03, rotateX: -4, rotateY: 4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35rem] text-aurora/80">{pkg.duration}</p>
                <h4 className="text-2xl font-semibold text-slate-100">{pkg.title}</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-aurora" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-lg rounded-3xl border border-aurora/40 bg-slate-900/90 p-10 text-center shadow-neon"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.35rem] text-slate-400"
              >
                Close
              </button>
              <h3 className="font-grotesk text-2xl font-semibold text-slate-100">Booking Request Sent</h3>
              <p className="mt-4 text-sm text-slate-300">
                Expect a curated treatment deck and availability calendar shortly. For urgent shoots, contact the studio line.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
