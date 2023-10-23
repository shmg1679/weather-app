import {motion} from 'framer-motion'

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}


// bg-[#1c6999]
// bg-[#268ac9]
// bg-[#32a9f3]
const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#23418d]' variants={transitionVariants} initial='initial' exit='exit' transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}} animate='animate'></motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#182c60]' variants={transitionVariants} initial='initial' exit='exit' transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}} animate='animate'></motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#0b1631]' variants={transitionVariants} initial='initial' exit='exit' transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}} animate='animate'></motion.div>

    </>
  );
};

export default Transition;
