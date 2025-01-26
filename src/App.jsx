import './App.css'
import Course from '../src/components/courses'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'



function App() {



  const data = [
    {
      'id':1,
      'title':'HTML',
      'link':'https://youtu.be/3jkub2c0kLA?si=aPkChvr8X1Bmz6rP',
    },
    {
      'id':2,
      'title':'CSS',
      'link':'https://youtu.be/l0BTo4VGVVs?si=tciIEGG0SIrHOo8e',
    },
    {
      'id':3,
      'title':'JavaScript',
      'link':'https://youtu.be/nCTh4OWjdMs?si=WCBwqZ7mj_YE0gXw',
    },
    {
      'id':4,
      'title':'Bootstrap',
      'link':'https://youtu.be/OcnBAwpMpdI?si=dAp3yzXaoxYuTd9u',
    },
    {
      'id':5,
      'title':'ReactJS',
      'link':'https://youtube.com/playlist?list=PLhP5RsB7fhE0rPHU66lQltacKt9PeFYRt&si=KlBbQXr7Xdni3S7G',
    }
  ]




  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={
          <div>
          <div className="container w-100 d-flex justify-content-center align-items-center flex-column mx-auto">
            <h1 className='h1 mx-auto fw-bolder text-primary mt-5'>Let&apos;s Build</h1>
            <hr/>
            <h2 className='h2 mx-auto'>Free <span className='text-danger'>You</span><span className='text-secondary'>Tube</span> Course</h2>
            </div>
            {data.map(course => (
              <Course key={course.id} title={course.title} link={course.link}/>
            ))}
            </div>
        } />
      </Routes>
    </Router>

  



    
    </>

  )
}

export default App
