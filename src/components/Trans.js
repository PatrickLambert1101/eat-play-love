import posed from 'react-pose';

const Trans = posed.div({
  hidden: {
    y: 15,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 150, damping: 30 },
      default: { duration: 80 }
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: {
      y: { type: 'spring', stiffness: 150, damping: 30 },
      default: { duration: 80 }
    }
  }
});

export default Trans;
