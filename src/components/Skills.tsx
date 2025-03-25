import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Frontend': [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3/SASS',
      'Tailwind CSS',
      'Next.js',
      'Redux',
    ],
    'UI/UX': [
      'Responsive Design',
      'Material UI',
      'Figma',
      'User Experience',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Accessibility',
    ],
    'Tools & Others': [
      'Git',
      'Webpack',
      'Jest',
      'React Testing Library',
      'CI/CD',
      'Agile/Scrum',
      'Storybook',
      'Performance Optimization',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {skillList.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 