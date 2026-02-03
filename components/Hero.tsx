
'use client';



import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

import { useEffect } from 'react';



const Hero = () => {

  const mouseX = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });

  const mouseY = useSpring(useMotionValue(0), { damping: 30, stiffness: 200 });



  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {

      mouseX.set(e.clientX);

      mouseY.set(e.clientY);

    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, [mouseX, mouseY]);



  // Create subtle parallax for the background shapes

  const bgX = useTransform(mouseX, [0, 2000], [20, -20]);

  const bgY = useTransform(mouseY, [0, 1000], [20, -20]);



  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent">

      {/* 1. Dynamic Spotlight Overlay */}

      <motion.div

        className="pointer-events-none absolute inset-0 z-10 hidden opacity-50 lg:block"

        style={{

          background: useTransform(

            [mouseX, mouseY],

            ([x, y]) => `radial-gradient(800px at ${x}px ${y}px, var(--color-primary-500 / 0.08), transparent 80%)`

          )

        }}

      />



      {/* 2. Technical Grid (Tailwind v4 Optimized) */}

      {/* <div className="absolute inset-0 z-0">

        <div className="mask-radial absolute inset-0 bg-[linear-gradient(to_right,var(--color-neutral-400)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-400)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />

      </div> */}



      {/* 3. Floating "Glass" Geometry */}

      <motion.div

        style={{ x: bgX, y: bgY }}

        className="absolute top-1/4 -left-16 size-80 rounded-full border border-primary-500/10 bg-primary-500/5 blur-3xl"

      />



      {/* 4. Main Content */}

      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">

        {/* Status Badge */}

        <motion.div

          initial={{ opacity: 0, y: 15 }}

          animate={{ opacity: 1, y: 0 }}

          className="mb-10 inline-flex items-center gap-3 rounded-full border border-primary-200 bg-primary-50/50 px-4 py-1.5 backdrop-blur-md"

        >

          <span className="relative flex size-2">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>

            <span className="relative inline-flex size-2 rounded-full bg-primary-500"></span>

          </span>

          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary-700 uppercase">

            Cognitive Core Active

          </span>

        </motion.div>



        {/* Headline */}

        <motion.h1

          className="font-heading text-6xl font-black tracking-tight text-neutral-950 md:text-8xl lg:leading-[1.1]"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

        >

          Geometry Meets <br />

          <span className="bg-linear-to-r from-primary-600 via-secondary-500 to-tertiary-500 bg-clip-text italic text-transparent">

            Cognition

          </span>

        </motion.h1>



        {/* Sub-text */}

        <motion.p

          className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-neutral-500 md:text-xl"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 0.4 }}

        >

          Architecting the future of <span className="font-medium text-neutral-900">robotic intelligence</span>. Precision mechatronics engineered for healthcare and global logistics.

        </motion.p>



        {/* CTA Group */}

        <motion.div

          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.6 }}

        >

          <button className="group relative w-full overflow-hidden rounded-full bg-neutral-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-neutral-800 sm:w-auto">

            <span className="relative z-10 flex items-center gap-2">

              Explore Products

              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>

            </span>

          </button>

         

          <button className="w-full rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-semibold text-neutral-950 transition-all hover:bg-neutral-50 hover:border-neutral-300 sm:w-auto">

            Schedule Demo

          </button>

        </motion.div>

      </div>



      {/* 5. Minimalist Scroll Hint */}

      <motion.div

        className="absolute bottom-12 flex flex-col items-center gap-4"

        animate={{ y: [0, 8, 0] }}

        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}

      >

        <div className="h-14 w-[1px] bg-linear-to-b from-primary-500 to-transparent" />

        <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 uppercase">Initialization Scroll</span>

      </motion.div>

    </section>

  );

};



export default Hero;