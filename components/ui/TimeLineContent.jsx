import { motion, useInView } from "framer-motion";
export const TimelineContent = ({
  children,
  animationNum,
  timelineRef,
  style,
  x = 0,
  y = 0,
  delay = 0.5,
  duration = 0.5,
}) => {
  const sequenceVariants = {
    visible: (i) => ({
      filter: "blur(0px)",
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: duration,
      },
    }),
    hidden: {
      filter: "blur(20px)",
      y: y,
      x: x,
      opacity: 0,
    },
  };
  const isInView = useInView(timelineRef, {
    once: false,
  });

  return (
    <>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={animationNum}
        className={style}
        variants={sequenceVariants}
      >
        {children}
      </motion.div>
    </>
  );
};
