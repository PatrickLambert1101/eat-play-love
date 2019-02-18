import posed from 'react-pose';

const Trans = posed.div({
  hidden: {
    y: 30,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 230 }
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: {
      y: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 230 }
    }
  }
});

export default Trans;
