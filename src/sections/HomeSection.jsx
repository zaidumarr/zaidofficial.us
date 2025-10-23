import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function Globe() {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#082f49"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
      <mesh scale={1.05}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function GlobeContainer() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <color attach="background" args={[0, 0, 0]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 3, 5]} intensity={1.4} color="#38bdf8" />
      <directionalLight position={[-4, -2, -6]} intensity={0.4} color="#ec4899" />
      <Stars radius={50} depth={40} count={1500} factor={4} fade speed={0.8} />
      <RotatingGroup>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
          <Globe />
        </Float>
      </RotatingGroup>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

function RotatingGroup({ children }) {
  const groupRef = useRef();
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00015) * 0.04;
    }
  });
  return <group ref={groupRef}>{children}</group>;
}

const floatingMedia = [
  {
    title: 'Iceland Aurora',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    position: { x: '-12%', y: '12%' },
    delay: 0
  },
  {
    title: 'Moroccan Medina',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80',
    position: { x: '55%', y: '6%' },
    delay: 0.2
  },
  {
    title: 'Tokyo Nights',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80',
    position: { x: '10%', y: '68%' },
    delay: 0.4
  }
];

export default function HomeSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const parallaxX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const parallaxY = useTransform(smoothY, [-1, 1], [-30, 30]);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  return (
    <motion.div
      className="relative isolate overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-950/70 shadow-glass backdrop-blur-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-aurora/20 via-transparent to-magenta/20" />
      </motion.div>

      <div className="grid gap-12 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
        <div className="flex flex-col gap-10">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-aurora/40 bg-aurora/10 px-4 py-2 text-sm uppercase tracking-[0.35rem] text-aurora/90"
            >
              <span className="h-2 w-2 rounded-full bg-aurora shadow-neon" />
              Welcome to Zaid's World
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
              className="font-grotesk text-4xl font-semibold leading-tight text-slate-100 md:text-5xl lg:text-6xl"
            >
              A cinematic universe of travel, photography, and art crafted in motion.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-xl text-lg text-slate-300"
            >
              Scroll, hover, and explore. Every interaction propels you through immersive layers of light, depth, and
              storytelling across the globe.
            </motion.p>
          </div>

          <motion.div
            className="grid gap-6 text-sm text-slate-300 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
          >
            {["Immersive storytelling", 'Cinematic scroll experiences', 'Interactive 3D worlds', 'Global adventures'].
              map((feature) => (
                <motion.div
                  key={feature}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/70 p-4 shadow-inner"
                >
                  {feature}
                </motion.div>
              ))}
          </motion.div>
        </div>

        <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] border border-slate-800/50 bg-slate-950/80">
          <GlobeContainer />

          {floatingMedia.map((media) => (
            <motion.div
              key={media.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: media.delay, duration: 0.6 }}
              className="absolute w-40 overflow-hidden rounded-2xl border border-aurora/40 bg-slate-900/80 shadow-neon backdrop-blur"
              style={{ left: media.position.x, top: media.position.y }}
            >
              <img src={media.image} alt={media.title} className="h-28 w-full object-cover" loading="lazy" />
              <div className="p-3 text-xs font-medium uppercase tracking-[0.2rem] text-aurora/80">{media.title}</div>
            </motion.div>
          ))}

          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-3 rounded-full border border-slate-800/60 bg-slate-900/70 px-5 py-2 text-xs uppercase tracking-[0.35rem] text-slate-400"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Scroll to explore
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
