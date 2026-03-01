'use client';

import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Cpu,
  Monitor,
  CircuitBoard,
  Layers,
  Box,
  GitMerge,
  CheckCircle2,
  Factory,
  RefreshCw,
  Sparkles,
  LucideIcon,
  ArrowRight,
  Wrench,
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui';

interface ServiceCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  items: string[];
  gradient: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'architecture',
    icon: LayoutDashboard,
    title: 'System Architecture & Product Engineering',
    gradient: 'from-primary-500 to-primary-600',
    items: [
      'Requirement analysis & feasibility studies',
      'System-level architecture (hardware, software, controls, safety)',
      'Payload, duty-cycle, thermal & reliability modeling',
      'Design for manufacturability (DFM) and serviceability (DFS)',
    ],
  },
  {
    id: 'robotics-software',
    icon: Cpu,
    title: 'Robotics Software & Autonomy',
    gradient: 'from-secondary-500 to-secondary-600',
    items: [
      'Robot operating systems (ROS / ROS2 based architectures)',
      'Navigation, SLAM, localization & path planning',
      'Motion control, kinematics & dynamics',
      'Fleet management & multi-robot coordination',
      'OTA updates, diagnostics & logging frameworks',
    ],
  },
  {
    id: 'ui-hmi',
    icon: Monitor,
    title: 'User Interface (UI) & Human-Machine Interface (HMI)',
    gradient: 'from-tertiary-500 to-primary-500',
    items: [
      'Operator dashboards & control panels',
      'Touchscreen HMI for robots & stations',
      'Web-based monitoring & analytics portals',
      'Mobile & tablet interfaces',
      'Human-factors-driven UI design for safe operation',
    ],
  },
  {
    id: 'electronics',
    icon: CircuitBoard,
    title: 'Electronics & Embedded Systems',
    gradient: 'from-primary-600 to-secondary-500',
    items: [
      'Embedded firmware development (MCUs, SoCs, RTOS)',
      'Sensor integration (LiDAR, camera, IMU, encoders)',
      'Motor drivers & power electronics',
      'Communication interfaces (CAN, EtherCAT, RS-485, Ethernet)',
      'Functional safety-oriented electronics design',
    ],
  },
  {
    id: 'pcb',
    icon: Layers,
    title: 'PCB Design & Hardware Development',
    gradient: 'from-secondary-600 to-tertiary-500',
    items: [
      'Schematic design & component selection',
      'Multi-layer PCB layout (signal integrity & EMC-aware)',
      'Power, motor control & sensor interface boards',
      'Prototype bring-up, testing & debugging',
      'Production-ready documentation (BOM, Gerbers, test points)',
    ],
  },
  {
    id: 'mechanical',
    icon: Box,
    title: 'Mechanical Design & Manufacturing',
    gradient: 'from-tertiary-600 to-primary-500',
    items: [
      'Robot chassis & structural design',
      'Sheet metal, machined & cast components',
      'Thermal & structural simulations',
      'Enclosure & IP-rated housing design',
      'Design optimization for weight, strength & cost',
    ],
  },
  {
    id: 'electromechanical',
    icon: GitMerge,
    title: 'Electromechanical Integration',
    gradient: 'from-primary-500 to-tertiary-500',
    items: [
      'Motor, gearbox & actuator integration',
      'Precision alignment & tolerance analysis',
      'Cable routing, harnessing & strain relief',
      'Assembly procedures & service manuals',
      'End-of-line (EOL) test jig & fixture design',
    ],
  },
  {
    id: 'testing',
    icon: CheckCircle2,
    title: 'Testing, Validation & Qualification',
    gradient: 'from-secondary-500 to-primary-500',
    items: [
      'Functional & performance testing',
      'Load, endurance & stress testing',
      'Environmental & reliability validation',
      'Sensor calibration & system verification',
      'Field trials & pilot deployments',
    ],
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Support & Industrialization',
    gradient: 'from-tertiary-500 to-secondary-500',
    items: [
      'Pilot production setup',
      'Vendor development & sourcing support',
      'Assembly line tooling & jigs',
      'Quality control processes',
      'Scale-up to volume manufacturing',
    ],
  },
  {
    id: 'paas',
    icon: RefreshCw,
    title: 'Product-as-a-Service (PaaS) & Lifecycle Support',
    gradient: 'from-primary-600 via-secondary-500 to-tertiary-500',
    items: [
      'Robot deployment & commissioning',
      'Preventive & corrective maintenance',
      'Software updates & feature upgrades',
      'Remote diagnostics & health monitoring',
      'Spare parts, retrofits & performance optimization',
    ],
  },
  {
    id: 'custom',
    icon: Sparkles,
    title: 'Custom Robotics & Automation Solutions',
    gradient: 'from-secondary-600 via-tertiary-500 to-primary-500',
    items: [
      'Application-specific robot development',
      'Custom mobile robots (100 kg / 150 kg / 300 kg payloads)',
      'Specialized actuators & motion systems',
      'Research, industrial & service robotics solutions',
    ],
  },
];

const whyChooseUs = [
  'Single partner for complete product delivery',
  'Strong hardware–software–mechanical integration expertise',
  'Scalable designs from prototype to production',
  'Long-term support & upgrade capability',
];

const ServiceCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const Icon = category.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="relative h-full glass-card rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-xl border border-white/40 dark:border-neutral-700/50">
        {/* Left accent bar */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${category.gradient} rounded-l-2xl opacity-90`}
        />
        {/* Subtle gradient glow on hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
        />
        <div className="relative z-10 pl-4">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${category.gradient} mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}
          >
            <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-3 pr-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
            {category.title}
          </h3>
          <ul className="space-y-2">
            {category.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <SectionWrapper
      id="services"
      background="none"
      paddingY="xl"
      maxWidth="xl"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
          <Wrench className="w-4 h-4 text-primary-500 dark:text-primary-400" />
          <span className="text-sm font-medium text-clinical text-neutral-700 dark:text-neutral-300">
            Full-Stack Capability
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
          Our Services
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-4">
          End-to-End Robotics & Electromechanical{' '}
          <span className="font-semibold bg-linear-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
            Product-as-a-Service (PaaS)
          </span>
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          We deliver complete, production-ready robotic and electromechanical systems — from concept
          and architecture to deployment, lifecycle support, and continuous upgrades. Our services
          span software, UI/UX, electronics, PCB design, mechanical engineering, actuation, and
          system integration, enabling customers to focus on operations while we manage the
          technology.
        </p>
        <motion.div
          className="mt-8 mx-auto w-24 h-1 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Service categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
        {serviceCategories.map((category, index) => (
          <ServiceCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="glass-card rounded-3xl p-8 md:p-10 overflow-hidden border border-white/40 dark:border-neutral-700/50">
          <div className="absolute inset-0 bg-linear-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 pointer-events-none rounded-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 text-center">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/60 dark:bg-neutral-800/60 hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
