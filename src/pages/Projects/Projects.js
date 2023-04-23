import React from 'react'
import withNavbar from '../../hocs/withNavbar'
import './projects.css'
import Paginate from '../../components/Paginate/Paginate'
import { useContext } from 'react'
import { MyContext } from '../../App'

function Projects() {
  const {currentProjectPage} = useContext(MyContext)
  const perPageItem = 4
  const fakeprojects = [
    {
      name: 'Project 1',
      content: `The best product start with figma
      Design with real data
      lightning fast prototyping
      fastest way to organize
      work as the speed of thought.`
    },
    {
      name: 'Project 2',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium nobis voluptatibus, numquam amet repellat totam iure est. Sequi, illum?`
    },
    {
      name: 'Project 3',
      content: `The best product start with figma
      Design with real data
      lightning fast prototyping
      fastest way to organize
      work as the speed of thought.`
    },
    {
      name: 'Project 4',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium nobis voluptatibus, numquam amet repellat totam iure est. Sequi, illum?`
    },
    {
      name: 'Project 5',
      content: `The best product start with figma
      Design with real data
      lightning fast prototyping
      fastest way to organize
      work as the speed of thought.`
    },
    {
      name: 'Project 6',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium nobis voluptatibus, numquam amet repellat totam iure est. Sequi, illum?`
    },
    {
      name: 'Project 7',
      content: `The best product start with figma
      Design with real data
      lightning fast prototyping
      fastest way to organize
      work as the speed of thought.`
    },
    {
      name: 'Project 8',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium nobis voluptatibus, numquam amet repellat totam iure est. Sequi, illum?`
    },
    {
      name: 'Project 9',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium nobis voluptatibus, numquam amet repellat totam iure est. Sequi, illum?`
    },
    {
      name: 'Project 10',
      content: `The best product start with figma
      Design with real data
      lightning fast prototyping
      fastest way to organize
      work as the speed of thought.`
    },
    {
      name: 'Project 11',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laudantium nobis voluptatibus, numquam amet repellat totam iure est. Sequi, illum?`
    },
    
  ]
  const myprojects = fakeprojects.slice((currentProjectPage*perPageItem)-perPageItem, currentProjectPage*perPageItem)
  
  return (
    <div className='projects'>
      <div className='top'>
        <h6>Projects</h6>
        <button>Create new project</button>
      </div>
      <div className='search'>
        <div>
          <input type="text" placeholder='Search by project name' />
          <input type="text" placeholder='Search by project tag' />
          <input type="text" placeholder='Search by project keyword' />
          <input type="text" placeholder='Search by project username' />
          <input type="text" placeholder='Search by project date started' />
          <input type="text" placeholder='Search by project date end' />
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
      <div className="p-cards">
        {
          myprojects.map((project,id)=>{
            return (
              <div key={project.name+id} className='p-card'>
                <div className="p-bg"></div>
                <div className="p-content">
                  <h6>{project.name}</h6>
                  <p>{project.content}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
       {
        Math.ceil(fakeprojects.length/6) >1 && <Paginate totalPage={Math.ceil(fakeprojects.length/perPageItem)} />
       }
      </div>
    </div>
  )
}

export default withNavbar(Projects)