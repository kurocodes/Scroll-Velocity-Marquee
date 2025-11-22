import ReactLenis from "lenis/react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef } from "react";

interface ScrollVelocityMarqueeProps {
  children: React.ReactNode;
  baseVelocity?: number;
}

function ScrollVelocityMarquee({
  children,
  baseVelocity = 10,
}: ScrollVelocityMarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionRef = useRef<1 | -1>(1);

  useAnimationFrame((_t, delta) => {
    let moveBy = directionRef.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionRef.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionRef.current = 1;
    }

    moveBy += directionRef.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children}&nbsp;</span>
        <span>{children}&nbsp;</span>
        <span>{children}&nbsp;</span>
        <span>{children}&nbsp;</span>
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <ReactLenis root>
      <div className="container">
        <ScrollVelocityMarquee baseVelocity={-5}>
          Kuro Kuro Kuro Kuro
        </ScrollVelocityMarquee>
        <ScrollVelocityMarquee baseVelocity={5}>
          Scroll Velocity Marquee
        </ScrollVelocityMarquee>
      </div>
    </ReactLenis>
  );
}
