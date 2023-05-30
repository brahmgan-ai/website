import './feature.css' 

export default function Features(){
    return(
        <div className='feature'>
            
            <div className='imageheader'>
            
            <div className='headers'>
                <h2 style={{fontSize:'36px'}}>Our Features</h2>     
                <p style={{fontSize:'20px',fontWeight:'300px'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            </div>
            {/* <img className='imagecontainerheader' src={'icons/bg.png'} alt={''} /> */}
            </div>
            <div className='featurecontainer'>
                <div style={{marginBottom:'20px'}} className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Speed.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>Speed</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>Boost speed of assets creation using Tridev our Asset Creation app.</p>
                </div>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Users.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>Users</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>With global cult like followers, get 3D model of any object you want in instant, through the power of blockchain.</p>
                </div>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/GameReady.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>Game Ready</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>Generated assets are Game Ready assets with instant import and delighting for use with in game lights.</p>
                </div>
                <div className='featurecontainerbox'>
                    <img className='imageconatiner' src={'icons/Ai.svg'} alt={''} />
                    <h4 style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>AI</h4>
                    <p style={{margin:'0px', marginLeft:'20px', marginTop:'10px'}}>AI Generated assets from prompts, just type what object you want, and have 3D model of that ready.</p>
                </div>
            </div>
        </div>
    )
}