import { Link } from 'react-router-dom';
import Aboutus from './Aboutus/Aboutus';
import Banner from './Banner/Banner';
import './Home.css';
import Services from './Services/Services';
const Home = () => {
    return (
        <main>
            {/* banner-section */}
            <section className="banner-section">
                <Banner></Banner>
            </section>

            {/* services section */}
            <section className="services-section">
                <Services></Services>
            </section>

            {/* Book trainer section */}
            <section className="bookinstructor-section">
                <div className="container">
                    <div className="bi-contents">
                        <h2>Let's do <br /> this!</h2>
                        <Link to="/instructors">Book an instructor</Link>
                    </div>
                </div>
            </section>

            {/* about us section */}
            <section className="aboutus-section">
                <div className="container">
                    <div className="abt-contents">
                        <div className="abt-head">
                            <h2>About us</h2>
                            <h5>We will make you turn your Fat into Fit!</h5>
                        </div>
                        <Aboutus />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;