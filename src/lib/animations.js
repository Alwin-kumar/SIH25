// Animation utilities for consistent hover effects and transitions
export const hoverVariants = {
  scale: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  lift: {
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  glow: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.3 }
  },
  slideUp: {
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

export const buttonVariants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const cardVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInVariants = {
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
};

export const iconVariants = {
  rotate: {
    rotate: 360,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  bounce: {
    y: [-2, 0, -2],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Loading animation variants
export const loadingVariants = {
  dots: {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7]
    },
    transition: {
      duration: 1.4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  spinner: {
    animate: {
      rotate: 360
    },
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Ripple effect for buttons
export const rippleEffect = {
  initial: { scale: 0, opacity: 1 },
  animate: {
    scale: 4,
    opacity: 0,
    transition: { duration: 0.6 }
  }
};
