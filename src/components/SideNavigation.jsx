import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCompass, FiMenu, FiX } from 'react-icons/fi';

const containerVariants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }
};

const itemVariants = {
  hidden: { x: -12, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 220, damping: 18 } }
};

export default function SideNavigation({ sections, activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-aurora shadow-neon backdrop-blur lg:hidden"
        aria-label="Open navigation menu"
      >
        <FiMenu size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-slate-950/70 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed left-0 top-0 z-40 flex h-full w-72 flex-col gap-10 border-r border-slate-800/70 bg-slate-950/95 px-6 py-10 font-grotesk shadow-glass backdrop-blur"
          >
            <div className="flex items-center justify-between text-sm uppercase tracking-[0.4rem] text-slate-400">
              <div className="flex items-center gap-3">
                <FiCompass className="text-aurora" />
                <span>Zaid's World</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-slate-900/80 p-2 text-slate-200"
                aria-label="Close navigation menu"
              >
                <FiX />
              </button>
            </div>

            <motion.ul className="flex flex-col gap-4 text-lg">
              {sections.map(({ id, label }) => (
                <motion.li key={id} variants={itemVariants}>
                  <motion.button
                    type="button"
                    whileHover={{ x: 6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavigate(id)}
                    className={`group flex w-full items-center justify-between rounded-xl border border-transparent bg-slate-900/70 px-5 py-3 text-left font-medium transition-colors duration-200 hover:border-aurora/40 hover:bg-slate-900/90 ${
                      activeSection === id ? 'border-aurora/60 bg-slate-900/90 text-aurora' : 'text-slate-300'
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-xs uppercase tracking-[0.3rem] text-slate-500 group-hover:text-aurora/80">
                      Explore
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.4, type: 'spring', stiffness: 120, damping: 20 } }}
        className="fixed left-0 top-0 z-40 hidden h-full w-72 flex-col gap-12 border-r border-slate-800/80 bg-slate-950/80 px-8 py-16 font-grotesk shadow-glass backdrop-blur-lg lg:flex"
      >
        <div className="flex items-center gap-4 text-sm uppercase tracking-[0.5rem] text-slate-400">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-aurora/70 via-magenta/60 to-aurora/70 text-slate-950 shadow-neon">
            <FiCompass size={22} />
          </div>
          <span>Zaid's World</span>
        </div>

        <ul className="flex flex-col gap-6 text-lg">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <motion.button
                type="button"
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate(id)}
                className={`group flex w-full items-center justify-between rounded-2xl border border-transparent bg-slate-900/60 px-6 py-4 text-left font-medium transition-colors duration-200 hover:border-aurora/50 hover:bg-slate-900/80 ${
                  activeSection === id ? 'border-aurora/70 text-aurora shadow-neon' : 'text-slate-300'
                }`}
              >
                <span>{label}</span>
                <span className="text-xs uppercase tracking-[0.4rem] text-slate-500 group-hover:text-aurora/75">
                  View
                </span>
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
