import 'bulma/css/bulma.css';
import './App.css';
import  Course  from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Komple from './images/kompleweb.jpg';


function App() {
  return (
    <div  className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
  </div>
      </section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course image={Angular} title="Angular"  description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Deleniti nesciunt enim delectus est qui, dolore assumenda similique adipisci autem, fuga minima dolorem fugit saepe numquam. Ad voluptas provident minima repudiandae!" />
          </div>
          <div className='column'>
             <Course image={Bootstrap} title="Bootstrap 5"  description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Deleniti nesciunt enim delectus est qui, dolore assumenda similique adipisci autem, fuga minima dolorem fugit saepe numquam. Ad voluptas provident minima repudiandae!" />
          </div>
          <div className='column'> 
          <Course image={Csharp} title="Komple Web"  description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Deleniti nesciunt enim delectus est qui, dolore assumenda similique adipisci autem, fuga minima dolorem fugit saepe numquam. Ad voluptas provident minima repudiandae!" />

          </div>
          <div className='column'>
       <Course image={Komple} title="Frontend"  description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Deleniti nesciunt enim delectus est qui, dolore assumenda similique adipisci autem, fuga minima dolorem fugit saepe numquam. Ad voluptas provident minima repudiandae!" />
          </div>          
        </div>
        </section>
       
      </div>
    </div>
  );
}

export default App;
