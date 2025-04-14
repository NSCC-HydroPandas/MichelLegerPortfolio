import "./Resume.css"
import SkillsandTraining from "./SkillsandTraining"
import WorkExperience from "./WorkExperience"
import Education from "./Education"
import Awards from "./AwardsandAchievements"
import VolunteerWork from "./VolunteerWork"
import { useEffect, useState } from "react"

function Resume() {

    const [links, setLinks] = useState([]);

    useEffect(() => {fetch('./src/assets/Links.json')
        .then(response => response.json())
        .then(data => setLinks(data))})
    
    const softdevlst = {
        Python:['Panadas', 'SciKit Learn','Pytorch'], 
        SQL:['Oracle', 'Postgres'], 
        Javascript:[],
    }

    const geospatiallst = {
        'Caris Products':['HIPS and SIPS', 'Base Editor','Bathy DataBase', 'HPD'], 
        'Kongsberg SIS':[], 
        'GIS Software':['QGIS', 'ESRI'],
        'QPS Products':['Qinsy', 'Qimera'],
    }

    const traininglst = {Marine:[
        'Personal Survival Techniques (STCW) (July 2023)',
        'Domestic Vessel Safety (DVS) (July 2021)',
        'Small Vessel Operators Course (SVOP) and MED A3 (December 2019)',
        'Radio Operator`s Course (ROC-MC) (August 2019)'],
        Software:[
        'Base Editor 4.4',
        'HIPS and SIPS 11',
        'AUTOCAD CIVIL 3D',]
        }

    const sectionheaders = [
        'INTRODUCTION',
        'SKILLS/TRAINING',
        'WORK EXPERIENCE',
        'EDUCATION',
        'AWARDS/ACHIEVEMENTS',
        'VOLUNTEER WORK'
    ]

    return(
    <>
    
        <div className="personalinfo">
        <h1 className='name'>Michel Leger<br/>
        </h1>
        
        <h1 className ='name'> APT ½ 95 Coronation Avenue Halifax, NS<br/>
            Cell: 506-259-6930<br/> 
            Michel.leger@unb.ca<br/> 
            Michel.leger@dfo-mpo.gc.ca<br/>
            </h1>
            <ul><a className ='name' href={links.Linkedin}>Linkedin</a>
            
            <a className ='name' href={links.Github}><br/>Github</a>
            <a className ='name' href={links.resume}><br/>Resume</a>
            </ul>
        <br/>
        </div>

        <h2 className="sectioheader">{sectionheaders[0]}</h2>
        <hr/>

        <div className="personalinfo">
        <img src="../public/Leger.jpg" alt="Porfolio Image" />
        <p className="intro">
           As a Hydrographic Surveyor with interest in computer programming I have developed automated and semi-automated workflows using python coupled with batch processors to accomplish final products. I have recently expanded my knowledge and interest in programming through AI programming.
        </p></div>
        
        <h2 className='sectionheader'>{sectionheaders[1]}</h2>
        <hr/><br/>
        <div className="row">

        <div className="column">Software Developement<br/> <SkillsandTraining lst={softdevlst}/>
        </div>
        <div className="column">Geospatial Software<br/> <SkillsandTraining lst={geospatiallst}/>
        </div>
        <div className="column">Training Certificates<br/><SkillsandTraining lst={traininglst}/></div>
        </div>

        <h2 className='sectionheader'>{sectionheaders[2]}</h2>
        <hr/>
        <WorkExperience/>
        
        <h2 className='sectionheader'>{sectionheaders[3]}</h2>
        <hr/>
        <Education/>

        <h2 className='sectionheader'>{sectionheaders[4]}</h2>
        <hr/>
        <Awards/>

        <h2 className='sectionheader'>{sectionheaders[5]}</h2>
        <hr/>
        <VolunteerWork/>
    </>
    )
}
export default Resume