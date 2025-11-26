import './App.css';
import { Testimonial } from './components/Testimonial.js';
import alesoftLogo from './assets/alesoft.png';

function App() {
  return (
    <div className="App">
      <div>
        <img src={alesoftLogo} alt="Alesof Logo" className="logo" />

        <h1>
          Hear Directly From Our Engineers<br />
          About Their Experiences and Projects:
        </h1>

        <Testimonial
          name='Emily Thompson'
          country='Canada'
          image='emily'
          position='Software Engineer'
          company='MapleTech Solutions'
          testimonial={`Working with React and Node.js has allowed me to build scalable applications that truly impact users. I especially enjoy integrating PostgreSQL databases and deploying my projects on AWS. Every challenge motivates me to learn new tools and optimize my workflow as a full stack developer.`}
        />
        <Testimonial
          name='Aisha Mokoena'
          country='South Africa'
          image='aisha'
          position='Software Engineer'
          company='Ubuntu Systems'
          testimonial={`Being a full stack developer gives me the chance to work on every stage of a project, from the front-end to the database. I love using React to create intuitive interfaces and Express with Node.js to handle server logic. Each project is an opportunity to innovate and continue growing professionally.`}
        />
        <Testimonial
          name='Wei-Ling Chen'
          country='Taiwan'
          image='wei'
          position='Software Engineer'
          company='Taipei Innovations'
          testimonial={`My work as a full stack developer combines creativity and logic. React and TypeScript allow me to build robust applications, while Node.js and PostgreSQL ensure an efficient backend. I am passionate about learning new technologies and applying innovative solutions to complex problems.`}
        />
      </div>
    </div>
  );
}

export default App;
