import { cn } from "@/lib/utils";
import {
  IconRobot,
  IconBrain,
  IconDeviceDesktopAnalytics,
  IconEye,
  IconChartBar,
  IconWand,
  IconServer,
  IconHeart,
} from "@tabler/icons-react";
import { ButtonColorful } from "@/components/ui/button-colorful";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI Chatbot Development",
      description: "Designed to automate customer interactions and provide seamless, efficient communication for businesses and support teams.",
      icon: <IconRobot className="w-8 h-8" />,
    },
    {
      title: "NLP Services",
      description: "Transform text data into actionable insights with sentiment analysis, text classification, and language understanding tailored to your needs.",
      icon: <IconBrain className="w-8 h-8" />,
    },
    {
      title: "Machine Learning Solutions",
      description: "Create predictive models and data-driven solutions that empower smarter business decisions.",
      icon: <IconDeviceDesktopAnalytics className="w-8 h-8" />,
    },
    {
      title: "Computer Vision Applications",
      description: "Unlock new possibilities with object detection, image recognition, and visual data analysis for diverse industries.",
      icon: <IconEye className="w-8 h-8" />,
    },
    {
      title: "Data Analysis & Visualization",
      description: "Turn complex datasets into clear, visual insights to help drive impactful decisions.",
      icon: <IconChartBar className="w-8 h-8" />,
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI models designed to solve unique business challenges and boost operational efficiency.",
      icon: <IconWand className="w-8 h-8" />,
    },
    {
      title: "MLOps & AI Integration",
      description: "Streamline AI deployment and management with solutions that ensure optimal performance and scalability.",
      icon: <IconServer className="w-8 h-8" />,
    },
    {
      title: "And everything else",
      description: "If you need other AI or data science services, I'm here to help—just reach out!",
      icon: <IconHeart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 backdrop-blur-sm bg-white/10 rounded-lg overflow-hidden">
        {features.map((feature, index) => (
          <Feature 
            key={feature.title} 
            {...feature} 
            index={index} 
            isLast={index === features.length - 1} 
            totalItems={features.length}
          />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  isLast,
  totalItems,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isLast?: boolean;
  totalItems: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        "border-neutral-800/50",
        index !== totalItems - 1 && "border-b md:border-b-0",
        index < totalItems - 1 && "md:border-r"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/20 dark:from-neutral-800/20 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/20 dark:from-neutral-800/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white/90">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/80 max-w-xs relative z-10 px-10">
        {description}
      </p>
      
      {isLast && (
        <div className="mt-4 mx-10">
          <ButtonColorful 
            label="Contact Me" 
            href="mailto:suzunn3@gmail.com"
          />
        </div>
      )}
    </div>
  );
};
