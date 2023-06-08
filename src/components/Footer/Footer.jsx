import React from 'react';
import "./Footer.css"
import assets from '../../assets';

const Footer = () => {
return (
<React.Fragment>
    <footer class="footer-distributed">
        <div class="footer-left">
            <h3>
                <img src={assets.images.collegeLogo} alt='College Logo' width={160} style={{borderRadius:"50%"}}/>
            </h3>
        </div>
        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>This project is done by 3 students</span> <span>Parth Sharma
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">sharmaparth6321@gmail.com</a></p>
                    </span><span>Ayushmaan Jangid 
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">ayushmaan.jangid.e21@nsut.ac.in</a></p>
                    </span> <span>Pawan Kumar Verma
                    <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">kumarpp9718@gmail.com</a></p>
                        </span></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the Project</span>
                This Project is for Major Project. For More Detail Please Visit <a href='https://github.com/Ayushmaan2001/sorting-visualizer-main' style={{textD
            :'none'}}>
                Github
                </a>
            </p>
        </div>
    </footer>
</React.Fragment>
);
}

export default Footer;