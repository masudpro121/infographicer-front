import React from 'react'
import withNavbar from '../../hocs/withNavbar'
import './projects.css'
import Paginate from '../../components/Paginate/Paginate'
import { useContext } from 'react'
import { MyContext } from '../../App'
import Cards from '../../components/Cards/Cards'

function Projects() {
  const {currentProjectPage} = useContext(MyContext)
  const perPageItem = 4
  const fakeprojects = [
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
    {name: 'Project 1',prompt: 'This is prompt',value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, assumenda.',tag: 'web'},
 
    
  ]
  const myprojects = fakeprojects.slice((currentProjectPage*perPageItem)-perPageItem, currentProjectPage*perPageItem)
  
  return (
    <div className='projects'>
      <div className='top'>
        <h5>Projects</h5>
        <button>Create new project</button>
      </div>
      <div className='search'>
          <div>
            <input type="text" placeholder='Search by project name' />
          </div>
          <div>
            <input type="text" placeholder='Search by project tag' />
          </div>
          <div>
            <input type="text" placeholder='Search by project keyword' />
          </div>
          <div>
            <input type="text" placeholder='Search by project username' />
          </div>
          <div>
            <input type="text" placeholder='Search by project date started' />
          </div>
          <div>
            <input type="text" placeholder='Search by project date end' />
          </div>
        <div>
          <button>Search</button>
        </div>
      </div>
     
      <Cards data={myprojects}/>
      <div>
       {
        Math.ceil(fakeprojects.length/6) >1 && <Paginate totalPage={Math.ceil(fakeprojects.length/perPageItem)} />
       }
      </div>
    </div>
  )
}

export default withNavbar(Projects)