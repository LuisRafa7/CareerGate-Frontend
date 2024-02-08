import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Image from '../../public/images/image.jpg';

function CarouselPage() {
  const navigate = useNavigate();
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3 className="hover-underline" style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Experience</h3>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Including your experiences on your curriculum vitae is crucial as it provides prospective employers with tangible evidence of your skills, capabilities, and accomplishments. Your experiences serve as a real-world demonstration of how you have applied your knowledge and expertise in previous roles. By detailing specific tasks, projects, and achievements, you offer a comprehensive view of your professional journey, helping employers gauge your suitability for the position.</p>
          <div className="centered-buttons">
            <button
              className="button button-homepage"
              onClick={() => {
                navigate("/person");
              }}
            >
              Create your CV
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content"> 
          <h3 className="hover-underline" style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Education</h3>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Including your education on your curriculum vitae is crucial as it provides potential employers with essential insights into your academic background, qualifications, and skillsets. Education serves as a foundational aspect of your professional profile, showcasing your commitment to learning and development. Employers often use educational information as a quick reference point to gauge your level of expertise and suitability for a particular role.</p>
          <div className="centered-buttons">
            <button
              className="button button-homepage"
              onClick={() => {
                navigate("/person");
              }}
            >
              Create your CV
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3 className="hover-underline" style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Languages</h3>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
          Incorporating a section on language proficiency in your curriculum vitae holds significant importance in today's globalized and interconnected professional landscape. Proficiency in multiple languages not only showcases your versatility but also demonstrates a valuable skill set that can greatly enhance your effectiveness in various roles.
          </p>
          <div className="centered-buttons">
            <button
              className="button button-homepage"
              onClick={() => {
                navigate("/person");
              }}
            >
              Create your CV
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image}   style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}/>
        <Carousel.Caption className="centered-content">
          <h3 className="hover-underline" style={{ marginBottom: '90px', fontSize: '80px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Skills</h3>
          <p style={{ marginTop: '30px', fontSize: '50px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>         
          In a curriculum vitae, showcasing your skills is paramount as it serves as a comprehensive representation of your professional abilities and qualifications. This section allows prospective employers to gain a clear understanding of what you bring to the table and how well-suited you are for a particular role. 
          </p>
          <div className="centered-buttons">
            <button
              className="button button-homepage"
              onClick={() => {
                navigate("/person");
              }}
            >
              Create your CV
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;