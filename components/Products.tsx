'use client';

import { Truck, Cpu, Activity, Heart, Stethoscope } from 'lucide-react';
import { SectionWrapper } from '@/components/ui';
import { LucideIcon } from 'lucide-react';

// Product data structure
export interface Product {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  applications: string[];
  category: string;
}

export const productsData: Product[] = [
  {
    id: 'amr',
    title: 'AMRs (100-1000kg)',
    description: 'Autonomous Mobile Robots designed for heavy-duty material handling and logistics automation with advanced navigation systems.',
    icon: Truck,
    capabilities: [
      'Payload capacity: 100-1000kg',
      'Autonomous navigation with SLAM',
      'Obstacle detection and avoidance',
      'Fleet management integration',
      'Real-time path optimization',
      'Battery hot-swapping capability',
    ],
    applications: [
      'Warehouse logistics',
      'Manufacturing material transport',
      'Hospital supply distribution',
      'Retail inventory management',
      'Airport baggage handling',
    ],
    category: 'Logistics',
  },
  {
    id: 'custom-robotics',
    title: 'Custom Robotic Solutions (3-7 DoF)',
    description: 'Tailored robotic manipulators with 3 to 7 degrees of freedom for precision tasks in manufacturing and research environments.',
    icon: Cpu,
    capabilities: [
      '3-7 degrees of freedom',
      'High-precision end effectors',
      'Custom gripper integration',
      'AI-powered motion planning',
      'Collaborative operation modes',
      'Vision-guided manipulation',
    ],
    applications: [
      'Assembly line automation',
      'Quality inspection systems',
      'Research and development',
      'Custom manufacturing processes',
      'Laboratory automation',
    ],
    category: 'Manufacturing',
  },
  {
    id: 'ai-exercise-trainer',
    title: 'AI Exercise & Yoga Trainer',
    description: 'Intelligent fitness companion with computer vision and pose estimation for personalized workout guidance and real-time form correction.',
    icon: Activity,
    capabilities: [
      'Real-time pose estimation',
      'Form correction feedback',
      'Personalized workout plans',
      'Progress tracking analytics',
      'Voice and visual guidance',
      'Multi-user recognition',
    ],
    applications: [
      'Home fitness training',
      'Gym and fitness centers',
      'Physical education programs',
      'Corporate wellness initiatives',
      'Yoga and pilates studios',
    ],
    category: 'Healthcare',
  },
  {
    id: 'wellness-robot',
    title: 'Wellness Robot',
    description: 'Comprehensive health monitoring and wellness companion featuring vital signs tracking, mental health support, and lifestyle coaching.',
    icon: Heart,
    capabilities: [
      'Vital signs monitoring',
      'Mental health assessment',
      'Medication reminders',
      'Sleep quality analysis',
      'Stress management guidance',
      'Emergency alert system',
    ],
    applications: [
      'Elderly care facilities',
      'Home healthcare',
      'Corporate wellness programs',
      'Mental health clinics',
      'Chronic disease management',
    ],
    category: 'Healthcare',
  },
  {
    id: 'physiotherapy-robot',
    title: 'Physiotherapy Robot',
    description: 'Advanced rehabilitation system with adaptive assistance for post-injury recovery, mobility restoration, and therapeutic exercise programs.',
    icon: Stethoscope,
    capabilities: [
      'Adaptive resistance control',
      'Range of motion tracking',
      'Pain threshold monitoring',
      'Progress documentation',
      'Gamified therapy sessions',
      'Tele-rehabilitation support',
    ],
    applications: [
      'Rehabilitation centers',
      'Sports medicine facilities',
      'Post-surgery recovery',
      'Stroke rehabilitation',
      'Orthopedic therapy',
    ],
    category: 'Healthcare',
  },
];

const Products = () => {
  return (
    <SectionWrapper
      id="products"
      background="none"
      paddingY="xl"
      maxWidth="xl"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
          Our Products
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
          Intelligent robotic products designed for real-world deployment
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div key={product.id} className="product-card-placeholder">
            {/* Product cards will be rendered here */}
            <div className="p-6 border-2 border-dashed border-neutral-300 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <product.icon className="w-8 h-8 text-primary-500" />
                <h3 className="text-xl font-bold">{product.title}</h3>
              </div>
              <p className="text-neutral-600 mb-4">{product.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-neutral-700 mb-2">Capabilities:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {product.capabilities.slice(0, 3).map((capability, idx) => (
                      <li key={idx}>• {capability}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-neutral-700 mb-2">Applications:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    {product.applications.slice(0, 3).map((application, idx) => (
                      <li key={idx}>• {application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Products;