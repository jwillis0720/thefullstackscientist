import React from 'react';
import Skill from './skill'
import MolBio from '../public/skills/mol_bio.png'
import SynBio from '../public/skills/syn_bio.png'
import Immuno from '../public/skills/Immunoformatics.png'
import DataScience from '../public/skills/data_science.png'
import DeepLearning from '../public/skills/deep_learning.png'
import ProteinDesign from '../public/skills/protein_design.png'
import AWS from '../public/skills/aws_trans.png'
import Python from '../public/skills/Python.png'
import Vaccines from '../public/skills/vaccines.png'
import Antibodies from '../public/skills/antibodies.png'
import Immunology from '../public/skills/immunology.png'
const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-1 mt-[10rem]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-white underline'>
                    Skills
                </p>
                <h2 className='py-4 text-green-400'>What I Can Do</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill src={MolBio} name='Molecular Biology' />
                    <Skill src={SynBio} name='Synthetic Biology' />
                    <Skill src={Immuno} name='Immuno-informatics' />
                    <Skill src={DataScience} name='Data Science' />
                    <Skill src={DeepLearning} name='Deep Learning' />
                    <Skill src={ProteinDesign} name='Protein Design' />
                    <Skill src={AWS} name='AWS' />
                    <Skill src={Python} name='Python' />
                    <Skill src={Vaccines} name='Vaccines' />
                    <Skill src={Antibodies} name='Antibodies' />
                    <Skill src={Immunology} name='Immunology' />
                    <div className='p-4 min-h-[1rem] shadow-xl rounded-xl hover:scale-105 hover:bg-green-400 ease-in duration-300 bg-slate-600'>
                        <div className='flex flex-col items-center justify-center align-middle m-auto'>
                            <h3 className='text-white md:text-2xl text-center pt-10'>...And Much More</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;