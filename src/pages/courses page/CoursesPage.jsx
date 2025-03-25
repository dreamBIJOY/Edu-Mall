import React, { useState } from 'react'
import TopSections from './components/TopSections'
import Categories from './components/hero/categories'
import Courses from './components/hero/Courses'

function CoursesPage() {

  const [categorieName, setCategorieName] = useState(null)
  const handleCName = (name) => {
    setCategorieName(name.name)
    
  }
  return (
    <>
    <TopSections/>
    <div className='w-10/12 mx-auto py-20 flex gap-8'>
      <Categories handleCName={handleCName}/>
      <Courses categorieName={categorieName}/>
    </div>
    </>
  )
}

export default CoursesPage