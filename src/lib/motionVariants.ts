// Shared motion variants for section titles
import { Variants } from 'framer-motion';

export const sectionTitleVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}; 