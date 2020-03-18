import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faBootstrap, faCss3, faReact} from '@fortawesome/free-brands-svg-icons'
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

const logomap = [
  {
      logo: 'html',
      icon: faHtml5,
      color: "#FF008C"
  },
  {
      logo: 'CSS3',
      icon: faCss3,
      color: "#D309E1"
  },
  {
      logo: 'Bootstrap',
      icon: faBootstrap,
      color: "#9C1AFF"
  },
  {
      logo: 'React',
      icon: faReact,
      color: "#7700FF"
  }
]

const PhotoMotion = () => {
  const [colors, setColors] = useState(logomap);

  useEffect(() => {
    var myVar = setTimeout(() => setColors(shuffle(colors)), 2000);
    return function cleanup() {
      clearTimeout(myVar)
    }
  }, [colors]);

  return (
    <ul className="moving-logos" style = {{margin: '0 auto', justifyContent: 'space-between'}}>
      {colors.map(b => (
        <motion.li
          key={b.color}
          layoutTransition={spring}
          style={{color: `${b.color}` }}
        >
           <FontAwesomeIcon icon={b.icon}  size="3x" className="inside-icon"/>
        </motion.li>
      ))}
    </ul>
  );
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
export default PhotoMotion