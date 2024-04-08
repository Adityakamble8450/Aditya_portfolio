import React from 'react'
import { skillsData } from '../../lib/SillsData'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <section className='flex flex-col md:flex-row gap-5 md:gap-0 md:mt-5 justify-center overflow-hidden'>
          <h2 className="text-3xl text-white p-5  relative max-md:text-center ">
        I got the experience.
        <br /> Here is my toolbelt for success.
      </h2>
      <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {skillsData.map((skill) => (
          <SkillsCard key={skill.Name} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default Skills