import posed from 'react-pose';

const Trans = posed.div({
  hidden: {
    opacity: 0,
    delay: 0,
    transition: {
      duration: 400
    }
  },
  visible: {
    y: -15,
    opacity: 1,
    transition: {
      default: { duration: 400 }
    }
  }
});

export default Trans;
