import './about.css'
import {Link} from 'react-router-dom'

export default function about(){

    return(
        <div className='aboutpage'>
        <div className='aboutheader'>
         <h1>Our Bussiness</h1>
         <h4>Changing the Game, literally</h4>
         <p>BrahGAN is a company based out of Singapore, we are focused on creating the next generation of infrastructure for 3D services. It was started in 2022 to revolutionize Generative AI. Using blockchain, we introduced GAN tokens to make 3D content generation worldwide and decentralized. We provide rapid solutions for companies to update their tech to use 3D infra. From Gaming to eCommerce, we provide a one-stop shop for all your 3D needs.</p>

        </div>
        <div className='colum'>
            <h1>OUR TEAM</h1>
            <h4>Who We Are</h4>
            <div className='row' >
            <div className='subcolum'>
                        <img style={{borderRadius:'30px'}} src={'icons/Suraj.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Suraj Chawla</h4>
                        <h5 style={{margin:'0px'}}>CEO & Co-founder</h5>
                        
                    </div>
                    <div className='subcolum'>
                        <img  style={{borderRadius:'30px'}} src={'icons/kiruba.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Kirubakaran Reddy</h4>
                        <h5 style={{margin:'0px'}}>CBO & Co-founder</h5>
                        
                      
                    </div>
                    <div className='subcolum'>
                        <img style={{borderRadius:'30px'}} src={'icons/Puru.jpg'}  alt={''} />
                        <h4 style={{margin:'10px 0 auto 0'}}>Puru</h4>
                        <h5 style={{margin:'0px'}}>CTO & Co-founder</h5>
                        
                      
                    </div>
                    </div>
            <p><Link to={'/team'}>View All</Link></p>
        </div>
        </div>
    );
}