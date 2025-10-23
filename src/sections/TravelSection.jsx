import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const travelLocations = [
  {
    title: 'Chefchaouen, Morocco',
    lat: 35.168,
    lon: -5.263,
    story: 'Blue-washed alleys, mint tea, and golden hour portraits tucked into mountain light.',
    media: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Reykjavík, Iceland',
    lat: 64.1466,
    lon: -21.9426,
    story: 'Aurora hunts, glacial lagoons, and midnight sun timelapses over volcanic plains.',
    media: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Kyoto, Japan',
    lat: 35.0116,
    lon: 135.7681,
    story: 'Lantern-lit streets, temple reflections, and autumn colors exploding into motion.',
    media: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'New York City, USA',
    lat: 40.7128,
    lon: -74.006,
    story: 'Cinematic rooflines, neon rain, and frenetic street sequences captured at blue hour.',
    media: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80'
  }
];

const convertLatLonToXYZ = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return [x, y, z];
};

function TravelGlobe({ onSelect, activeTitle }) {
  const radius = 2.1;

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <color attach="background" args={[0, 0, 0]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 6]} intensity={1.2} color="#38bdf8" />
      <directionalLight position={[-4, -2, -6]} intensity={0.7} color="#ec4899" />
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#082f49"
          emissiveIntensity={0.6}
          metalness={0.4}
          roughness={0.35}
        />
      </mesh>
      <mesh scale={1.02}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
      </mesh>

      {travelLocations.map((location) => {
        const position = convertLatLonToXYZ(location.lat, location.lon, radius + 0.05);
        const isActive = activeTitle === location.title;
        return (
          <Float
            key={location.title}
            speed={1.5}
            rotationIntensity={0.5}
            floatIntensity={0.6}
            position={position}
          >
            <mesh onClick={() => onSelect(location)} scale={isActive ? 1.2 : 1}>
              <sphereGeometry args={[0.07, 32, 32]} />
              <meshStandardMaterial color={isActive ? '#38bdf8' : '#ec4899'} emissiveIntensity={0.6} />
            </mesh>
            <Html distanceFactor={8} position={[0, 0.22, 0]} center>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 4 }}
                className="rounded-full border border-slate-800/60 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.3rem] text-slate-200"
              >
                {location.title.split(',')[0]}
              </motion.div>
            </Html>
          </Float>
        );
      })}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
    </Canvas>
  );
}

export default function TravelSection() {
  const [selected, setSelected] = useState(travelLocations[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        className="relative h-[520px] overflow-hidden rounded-[2.5rem] border border-slate-800/60 bg-slate-950/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <TravelGlobe onSelect={setSelected} activeTitle={selected?.title} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="flex flex-col gap-6 rounded-[2.5rem] border border-slate-800/60 bg-slate-900/60 p-10 shadow-glass"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4rem] text-aurora/80">Destinations</p>
            <h3 className="font-grotesk text-3xl font-semibold text-slate-100">{selected.title}</h3>
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-aurora/50 bg-aurora/10 px-4 py-2 text-xs uppercase tracking-[0.35rem] text-aurora"
          >
            Zoom In
          </motion.button>
        </div>

        <p className="text-sm text-slate-300">{selected.story}</p>

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3rem] text-slate-400">
          {travelLocations.map((location) => (
            <motion.button
              key={location.title}
              type="button"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(location)}
              className={`rounded-full border px-4 py-2 transition-colors duration-300 ${
                selected.title === location.title
                  ? 'border-aurora/70 bg-aurora/15 text-aurora'
                  : 'border-slate-800/60 bg-slate-900/60 hover:border-aurora/40 hover:text-aurora'
              }`}
            >
              {location.title.split(',')[0]}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="overflow-hidden rounded-3xl border border-slate-800/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={selected.media}
        >
          <motion.img
            src={selected.media}
            alt={selected.title}
            className="h-60 w-full object-cover"
            loading="lazy"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
