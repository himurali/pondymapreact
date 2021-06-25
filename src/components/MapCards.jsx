import React from 'react';
import { motion } from 'framer-motion';


function MapCards({ title, author, published, description, coverImage }) {
    return (
       
         
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            drag={false}
            dragElastic={1}
            dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
            className="bg-white text-white h-80 rounded-lg shadow-md"
            >
            <img alt="user" className="w-32 h-32  mx-auto mt-7" src={coverImage} />
            <figcaption className="text-center mt-5">
              <p className="text-gray-700 font-semibold text-xl mb-2">
              {title}
              </p>
              <p className="text-gray-700 font-semibold text-xs mb-2">
  
              {description.length > 150 ? description.slice(0, 150) + `...` : description}
              </p>
       
              <p className="text-gray-500">
                <span className="font-medium">Author: </span>by {author}
              </p>
            </figcaption>
          </motion.button>
          
       
    )
  }
  
  export default MapCards;