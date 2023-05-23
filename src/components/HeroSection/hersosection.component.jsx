import './herosection.css'

export default function heroSection(){
    return(

        <section className="bgvideowrap">

            <video className="video" src={'video/Brahmgan.webm'} autoPlay loop muted></video>
            <div className="overlay">
                <div style={{ width: "500px" }}>

                    <h1 className="h1intro">Introducing AI Generation</h1>
                </div>
                <p className='intropar'>Create amazing 3D content effortlessly with our text-to-3D tools.Our advanced technology uses NeRF, GAN, and Blockchain for fast, decentralized AI-based 3D content creation.With BrahmGAN, bring your ideas to life instantly, without technical expertise or complex software.Explore the future of 3D content creation and unlock your creativity.</p>

                <button className='introbtn'>Learn More</button>
            </div>
        </section>
    
    )
}