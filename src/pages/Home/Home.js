import React, { useEffect, useState } from 'react'
import withNavbar from '../../hocs/withNavbar'
import './home.css'
import Paginate from '../../components/Paginate/Paginate'
import { useContext } from 'react'
import { MyContext } from '../../App'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { getProjects, validate } from '../../apis/server'
import { getCookie } from '../../utils/cookie'

function Home() {
  const [projects, setProjects] = useState([])
  const {currentProjectPage, setIsLoggedIn, isLoggedIn} = useContext(MyContext)
  useEffect(()=>{
    getProjects()
    .then(res=>res.json())
    .then(res=>setProjects(res))
  },[])
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
    {
      name: 'Project 2',
      prompts: [
        {prompt:'This is prompt 1', value:'',},
        {prompt:'This is prompt 2', value:'',},
        {prompt:'This is prompt 3', value:'',},
      ]
    },
    {
      name: 'Project 3',
      prompts: [
        {prompt:'This is prompt 1', value:'',},
        {prompt:'This is prompt 2', value:'',},
        {prompt:'This is prompt 3', value:'',},
      ]
    },
    {
      name: 'Project 4',
      prompts: [
        {prompt:'This is prompt 1', value:'',},
        {prompt:'This is prompt 2', value:'',},
        {prompt:'This is prompt 3', value:'',},
      ]
    },
    {
      name: 'Project 5',
      prompts: [
        {prompt:'This is prompt 1', value:'',},
        {prompt:'This is prompt 2', value:'',},
        {prompt:'This is prompt 3', value:'',},
      ]
    },
    {
      name: 'Project 6',
      prompts: [
        {prompt:'This is prompt 1', value:'',},
        {prompt:'This is prompt 2', value:'',},
        {prompt:'This is prompt 3', value:'',},
      ]
    },
   
    

  ]
  const myprojects = projects.slice((currentProjectPage*perPageItem)-perPageItem, currentProjectPage*perPageItem)

  
console.log(isLoggedIn, 'isLoggedin');
  return (
    <div className='home'>
      <div className='top'>
        <h5>Projects</h5>
        <Link to='/projects'>
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
                      project.prompts.map((p, id)=><div key={p+Math.random()*9999}>
                        <p><span>{`•  `}</span>{p.prompt}</p>
                      </div>)
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mt-5'>
       {
        Math.ceil(projects.length/perPageItem) >1 && <Paginate totalPage={Math.ceil(fakeprojects.length/perPageItem)} />
       }
      </div>
       
    </div>
  )
}

export default withNavbar(Home)