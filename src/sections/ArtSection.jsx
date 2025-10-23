import { motion } from 'framer-motion';

const artworks = [
  {
    title: 'Neon Pulse',
    medium: 'Digital Matte Painting',
    description: 'Cities drenched in chromatic rain and gleaming reflections.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Desert Bloom',
    medium: 'Illustrated Print',
    description: 'Soft pastel dunes converging into a radiant skyline.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Polar Drift',
    medium: 'Mixed Media',
    description: 'A glacier temple illuminated by aurora ribbons.',
    image: 'https://images.unsplash.com/photo-1526481280695-3c46997eba37?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Sunrise Redux',
    medium: 'Oil on Canvas',
    description: 'Mountain silhouettes dissolving into golden haze.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  }
];

export default function ArtSection() {
  return (
    <div className="flex flex-col gap-12">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-lg text-slate-300"
      >
        Slow-rotating gallery frames immerse you in Zaid’s art world. Glide across each canvas to bring it forward with depth
        and lighting highlights.
      </motion.p>

      <div className="grid gap-10 md:grid-cols-2">
        {artworks.map((art, index) => (
          <motion.div
            key={art.title}
            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800/60 bg-slate-900/60 p-[1px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-neon"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateX: -6, rotateY: 6, z: 18 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aurora/25 via-transparent to-magenta/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative flex flex-col gap-6">
                <motion.img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="h-60 w-full rounded-[2rem] object-cover shadow-lg"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                />
                <div className="space-y-3">
                  <h3 className="font-grotesk text-2xl font-semibold text-slate-100">{art.title}</h3>
                  <p className="text-xs uppercase tracking-[0.35rem] text-aurora">{art.medium}</p>
                  <p className="text-sm text-slate-300">{art.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
