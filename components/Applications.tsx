'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Warehouse, 
  Plane, 
  ShoppingBag, 
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui';

interface Application {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  details: string[];
}

const applicationsData: Application[] = [
  {
    id: 'hospitals',
    title: 'Hospitals & Healthcare Facilities',
    description: 'Precision robotics for patient care, surgery assistance, and rehabilitation',
    icon: Heart,
    gradient: 'from-primary-600 via-primary-500 to-secondary-500',
    details: [
      'Surgical assistance robots',
      'Patient monitoring systems',
      'Medication delivery automation',
      'Rehabilitation therapy robots',
    ],
  },
  {
    id: 'warehouses',
    title: 'Warehouses & Manufacturing',
    description: 'Autonomous systems for material handling and production line automation',
    icon: Warehouse,
    gradient: 'from-secondary-600 via-secondary-500 to-tertiary-500',
    details: [
      'AMR fleet management',
      'Inventory tracking systems',
      'Pick-and-place automation',
      'Quality inspection robots',
    ],
  },
  {
    id: 'airports',
    title: 'Airports & Transportation Hubs',
    description: 'Smart logistics for baggage handling and passenger assistance',
    icon: Plane,
    gradient: 'from-tertiary-600 via-tertiary-500 to-primary-500',
    details: [
      'Baggage handling automation',
      'Passenger assistance robots',
      'Security screening support',
      'Terminal cleaning systems',
    ],
  },
  {
    id: 'retail',
    title: 'Shopping Malls & Retail',
    description: 'Interactive robots for customer service and inventory management',
    icon: ShoppingBag,
    gradient: 'from-accent-600 via-accent-500 to-primary-500',
    details: [
      'Customer service assistants',
      'Inventory management bots',
      'Cleaning and maintenance',
      'Interactive kiosks',
    ],
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Centers',
    description: 'Advanced physiotherapy systems for recovery and mobility restoration',
    icon: Stethoscope,
    gradient: 'from-primary-600 via-accent-500 to-secondary-500',
    details: [
      'Physical therapy robots',
      'Gait training systems',
      'Range of motion assistance',
      'Progress tracking analytics',
    ],
  },
];

const Applications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return applicationsData.length - 1;
      if (nextIndex >= applicationsData.length) return 0;
      return nextIndex;
    });
  };

  return (
    <SectionWrapper
      id="applications"
      background="none"
      paddingY="xl"
      maxWidth="xl"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Deployed Across Critical Environments
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
          Trusted in healthcare, logistics, and industrial settings
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Main Carousel */}
        <div className="relative h-[600px] md:h-[500px] overflow-hidden rounded-3xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <ApplicationCard application={applicationsData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-700 group-hover:text-primary-600 transition-colors" />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/90 transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-neutral-700 group-hover:text-primary-600 transition-colors" />
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {applicationsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-linear-to-r from-primary-500 to-secondary-500'
                  : 'w-3 h-3 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal Scroll View (hidden on desktop) */}
      <div className="lg:hidden mt-12 -mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div className="flex gap-6 pb-4">
          {applicationsData.map((app) => (
            <div key={app.id} className="snap-center shrink-0 w-[85vw] max-w-md">
              <ApplicationCard application={app} compact />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

// Application Card Component
interface ApplicationCardProps {
  application: Application;
  compact?: boolean;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, compact = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-full rounded-3xl overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: compact ? 1 : 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Background (Image Placeholder) */}
      <motion.div
        className={`absolute inset-0 bg-linear-to-br ${application.gradient}`}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`pattern-${application.id}`} width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="white" />
                <path d="M 0 30 L 30 0 L 60 30 L 30 60 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${application.id})`} />
          </svg>
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
        {/* Icon */}
        <div className="flex justify-end">
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center"
            animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <application.icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />
          </motion.div>
        </div>

        {/* Bottom Content */}
        <div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {application.title}
          </motion.h3>
          
          <motion.p
            className="text-lg text-white/90 mb-6"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {application.description}
          </motion.p>

          {/* Details List - Revealed on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20,
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
            className="space-y-2"
          >
            {application.details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-white/80"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="text-sm md:text-base">{detail}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default Applications;