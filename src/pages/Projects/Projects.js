import React from 'react'
import withNavbar from '../../hocs/withNavbar'
import './projects.css'
import Paginate from '../../components/Paginate/Paginate'
import { useContext } from 'react'
import { MyContext } from '../../App'
import Cards from '../../components/Cards/Cards'
import { Link } from 'react-router-dom'

function Projects() {
  const {currentProjectPage} = useContext(MyContext)
  const perPageItem = 4
   const fakeprojects = [
    {
      name: 'Project 1',
      prompts: [
        {prompt:'This is prompt 1', value:'',},
        {prompt:'This is prompt 2', value:'',},
        {prompt:'This is prompt 3', value:'',},
      ]
    },
    

  ]
  const myprojects = fakeprojects.slice((currentProjectPage*perPageItem)-perPageItem, currentProjectPage*perPageItem)
  
  return (
    <div className='projects'>
      <div className='top'>
        <h5>Projects</h5>
        <Link to='/'>
        <button>Create new project</button>
        </Link>
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
     
      {/* <Cards data={myprojects}/> */}
      <div className="p-cards">
        {
          myprojects.map((project,id)=>{
            return (
              <div key={project.name+id} className='p-card'>
                <div className="p-bg"></div>
                <div className="p-content">
                  <h6>{project.name}</h6>
                  <div className='mt-3'>
                    {
                      project.prompts.map(p=><p>{p.prompt}</p>)
                    }
                  </div>
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