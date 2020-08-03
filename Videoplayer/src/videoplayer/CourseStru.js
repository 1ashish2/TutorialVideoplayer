import React,{useState,useEffect} from 'react';
import ReactPlayer from 'react-player';
function CourseStru(props) {
    console.log("data from props");
    console.log(props);
    const coursename=props.match.params.coursename;
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        let playlistId="";
        if(coursename==='reactjs')
        {
            playlistId="PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF";
        }else
        if(coursename=='nodejs'){
            playlistId="PLB97yPrFwo5gh4WP-VtwsVJbebyHbxNk6";
        }else
        if(coursename=='expressjs'){
            playlistId="PLNHw_0qv1zy_Ym-VPmRggL94HmI-3dlGm";
        }else
        if(coursename=='html')
        {
            playlistId="PLnSDvcENZlwAA6rcRxtrnn1RsGEUUJpNc";
        }else
        if(coursename=='bootstrap')
        {
            playlistId="PLwGdqUZWnOp2f1JwXA3k47UteMxaIw6j4";
        }
        else {
            playlistId="PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0";
        }
        //we are using google api for youtube
      fetch(` https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=${playlistId}&key=AIzaSyB-iseiTA69XBtKqULIRM_sS1Q-IwBmIwg`)
      .then((res)=>res.json())
      .then(data=>{
          //console.log(data);
         const results=data.items.map(item=>{
             //console.log(item.snippet.title)
             return {title:item.snippet.title,vid:item.contentDetails.videoId}
             //returning object
          })
          setCourses(results);
          uid(results[0].vid);
          utitle(results[0].title);
      })
    },[]);

    const[vid,uid]=useState(courses.vid);
    const[title,utitle]=useState(courses.title);
    const[counter,setCounter]=useState(0);
    const watched=(vid)=>{
        if(localStorage.getItem('saveID'))
        {
            if(JSON.parse(localStorage.getItem('saveID')).includes(vid))
            {
                return true;
            }
        }
        return false;
    }
    const renderVideo=()=>{
        return(
            <>
           
            <h1>{title}</h1>
            <div className="video-container">
            {/*  <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid +"?rel=0"} frameborder="0" allowFullScreen></iframe>*/}
             <ReactPlayer
             className='react-player'
             url={`https://www.youtube.com/watch?v=${vid}`}
             controls={true}
             onEnded={()=>{
                 if(localStorage.getItem('saveID'))
                 {
                     let data=JSON.parse(localStorage.getItem('saveID'));
                     localStorage.setItem('saveID',JSON.stringify([...data,vid]))

                 }else{
                     localStorage.setItem('saveID',JSON.stringify([vid]))
                 }
             }}
             />
            </div>
            </>
        )
    }
    
    return (
        <>
        
        <div className="container-fluid">
            {renderVideo()}
            <ul className="collection">
               {
                   //courses[coursename].map((item,index)=>{
                 courses.map((item,index)=>{
                 return  <li key={item.vid} className={counter===index ?"collection-item myitem":"collection-item"} onClick={()=>{
                     uid(item.vid)
                     utitle(item.title);
                     setCounter(index)
                 }}>
                    {item.title}  
                    {
                        watched(item.vid) && <i className="tiny material-icons" style={{fontSize:'20px',fontStyle:'bold',color:'blue',float:'right'}}>check</i>
                    }
                     
                     </li>
                 })  
               } 
           </ul>
        </div>
        </>
    );
}

export default CourseStru;
