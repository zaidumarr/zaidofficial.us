import { motion } from 'framer-motion';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    title: 'Sahara Gold',
    location: 'Merzouga, Morocco'
  },
  {
    src: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=900&q=80',
    title: 'Himalayan Glow',
    location: 'Ladakh, India'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    title: 'Azure Calm',
    location: 'Amalfi Coast, Italy'
  },
  {
    src: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=900&q=80',
    title: 'City Nebula',
    location: 'Tokyo, Japan'
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    title: 'Northern Fire',
    location: 'Reykjavík, Iceland'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    title: 'Glacial Blue',
    location: 'Jökulsárlón, Iceland'
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    title: 'Cliffside Dream',
    location: 'Faroe Islands'
  }
];

export default function PhotographySection() {
  return (
    <div className="flex flex-col gap-10">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-lg text-slate-300"
      >
        Cinematic stills captured across continents. Hover to feel the motion blur, click to open immersive lightboxes, and
        drift through masonry walls of color.
      </motion.p>

      <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <motion.figure
            key={`${photo.title}-${index}`}
            className="group relative mb-6 overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/60 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -6 }}
          >
            <motion.img
              src={photo.src}
              alt={photo.title}
              className="h-full w-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.08, filter: 'brightness(1.1) saturate(1.2)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              initial={false}
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 px-5 pb-5">
              <motion.span
                className="text-sm uppercase tracking-[0.4rem] text-aurora"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }}
              >
                {photo.title}
              </motion.span>
              <motion.span
                className="text-xs uppercase tracking-[0.3rem] text-slate-400"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              >
                {photo.location}
              </motion.span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
