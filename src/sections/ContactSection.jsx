import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const contactMethods = [
  {
    icon: FiMail,
    label: 'Direct Email',
    value: 'hello@zaid.world',
    description: 'Drop a line for collaborations and storytelling ideas.'
  },
  {
    icon: FiPhone,
    label: 'Studio Line',
    value: '+1 (555) 231-8844',
    description: 'Call weekdays 10am – 6pm PST for bookings and production.'
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: '@zaidcaptures',
    description: 'Behind-the-scenes, live drops, and cinematic reels.'
  }
];

export default function ContactSection() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        <p className="text-lg text-slate-300">
          The studio lives everywhere Zaid travels. Reach out for shoots, immersive brand stories, or creative direction. Each
          channel opens a direct line into Zaid’s world.
        </p>
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] border border-aurora/30 bg-slate-900/70 p-10 shadow-neon"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.4), transparent 50%)' }} />
          <div className="relative space-y-4">
            <p className="text-xs uppercase tracking-[0.4rem] text-aurora/80">Studio Coordinates</p>
            <h3 className="font-grotesk text-3xl font-semibold text-slate-100">
              Currently editing from Marrakech, next stop: Reykjavík.
            </h3>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <FiMapPin className="text-aurora" />
              <span>Always on the move — available worldwide.</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-900/60 p-6 shadow-glass"
          >
            <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-aurora/20 via-magenta/20 to-transparent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
            <div className="relative flex flex-col gap-4">
              <method.icon className="text-3xl text-aurora" />
              <div>
                <p className="text-xs uppercase tracking-[0.4rem] text-slate-400">{method.label}</p>
                <p className="text-lg font-semibold text-slate-100">{method.value}</p>
              </div>
              <p className="text-sm text-slate-400">{method.description}</p>
              <motion.button
                type="button"
                whileHover={{ x: 6 }}
                className="self-start rounded-full border border-aurora/40 px-4 py-2 text-xs uppercase tracking-[0.35rem] text-aurora"
              >
                Connect
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
