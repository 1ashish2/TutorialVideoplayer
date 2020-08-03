import React,{useState,useEffect} from 'react';
import ReactPlayer from 'react-player';
//mport {Link} from 'react-router-dom';
// https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF&key=AIzaSyB-iseiTA69XBtKqULIRM_sS1Q-IwBmIwg
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
        }else{
            playlistId="PLNHw_0qv1zy_Ym-VPmRggL94HmI-3dlGm";
        }
        //we are using google api for youtube
      fetch(` https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=10&playlistId=${playlistId}&key=AIzaSyB-iseiTA69XBtKqULIRM_sS1Q-IwBmIwg`)
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
   /* const courses={
        reactjs:[
           { title:'reactjs title1',vid:"IhYHDfbmm7A"},
           { title:'reactjs title2',vid:"o8jEBYOu9dA"},
           { title:'reactjs title3',vid:"IhYHDfbmm7A"}
        ],
        nodejs:[
            { title:'nodejs title1',vid:"o8jEBYOu9dA"},
            { title:'nodejs title2',vid:"IhYHDfbmm7A"},
            { title:'nodejs title3',vid:"jh0a94xBEd"}
        ],
        expressjs:[
            { title:'expressjs title1',vid:"jh0a94xBEdk"},
            { title:'expressjs title2',vid:"IhYHDfbmm7A"},
            { title:'expressjs title3',vid:"o8jEBYOu9dA"}
        ]
    }
    const[vid,uid]=useState(courses[coursename][0].vid);
    const[title,utitle]=useState(courses[coursename][0].title);
    
    */
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
       
        <div className="container">
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
/*
 
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a>
 
dynamic call of variable throughh  link
 function CourseStru(props) {
    console.log(props);
    return (
        <div className="container">
           <h1>Welcome to course {props.match.params.coursename}</h1>
        </div>
    );
}



//react js youtube api json file 
{
 "kind": "youtube#playlistItemListResponse",
 "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/RyECIUseD9jh8-D1ANFT_yLJyQg\"",
 "pageInfo": {
  "totalResults": 9,
  "resultsPerPage": 10
 },
 "items": [
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/ZmBjl_sE8oWarJnoWHoOf6EcU3U\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri41NkI0NEY2RDEwNTU3Q0M2",
   "snippet": {
    "publishedAt": "2020-01-29T12:49:29.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "create box shadow generator tool using react js | react js project in hindi",
    "description": "In this video we will make our own box shadow generator tool like css matic using react js in hindi\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/kTl_ptBZrmo/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/kTl_ptBZrmo/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/kTl_ptBZrmo/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/kTl_ptBZrmo/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/kTl_ptBZrmo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 0,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "kTl_ptBZrmo"
    }
   },
   "contentDetails": {
    "videoId": "kTl_ptBZrmo",
    "videoPublishedAt": "2020-01-29T09:29:27.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/P2MO0byo5nowaDCLYc-KuAM0AVI\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri45NDk1REZENzhEMzU5MDQz",
   "snippet": {
    "publishedAt": "2020-03-23T10:33:58.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "unsplash clone in react js using unsplash api | React js project in hindi",
    "description": "In This video we will make unsplash clone in react js using unsplash api | react js project in hindide\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/OCqCGhBcylQ/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/OCqCGhBcylQ/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/OCqCGhBcylQ/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/OCqCGhBcylQ/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/OCqCGhBcylQ/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 1,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "OCqCGhBcylQ"
    }
   },
   "contentDetails": {
    "videoId": "OCqCGhBcylQ",
    "videoPublishedAt": "2020-03-23T11:18:01.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/s5_Zq8fcZMiBKIOU7StfN-pF8lQ\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri4yODlGNEE0NkRGMEEzMEQy",
   "snippet": {
    "publishedAt": "2020-01-29T12:49:55.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "Add dark Mode in react js Application or website | react js project in hindi",
    "description": "In this video we will add toggle button to switch between light and dark mode in our react js app.\nreact tutorials in hindi\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/BXDLsW6k6f8/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/BXDLsW6k6f8/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/BXDLsW6k6f8/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/BXDLsW6k6f8/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/BXDLsW6k6f8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 2,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "BXDLsW6k6f8"
    }
   },
   "contentDetails": {
    "videoId": "BXDLsW6k6f8",
    "videoPublishedAt": "2020-01-08T06:00:56.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/DVpufm78DHh0Oqp3jH-Lx_VUbgQ\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri4wMTcyMDhGQUE4NTIzM0Y5",
   "snippet": {
    "publishedAt": "2020-01-29T12:49:59.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "dark Mode part 2 in react js Application | prefers-color-scheme |react js project in hindi",
    "description": "This is part 2 of dark mode tutorial in react js and in this video we will learn about The prefers color scheme CSS media feature which is used to detect if the user has requested the system use a light or dark color theme\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/LDqcQ381Udk/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/LDqcQ381Udk/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/LDqcQ381Udk/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/LDqcQ381Udk/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/LDqcQ381Udk/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 3,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "LDqcQ381Udk"
    }
   },
   "contentDetails": {
    "videoId": "LDqcQ381Udk",
    "videoPublishedAt": "2020-01-28T10:16:41.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/jqyWgorD8l57Z_QvBXbA3HWs3ls\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri4wOTA3OTZBNzVEMTUzOTMy",
   "snippet": {
    "publishedAt": "2020-01-29T12:50:31.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "jokes fetching app using react hooks | react js tutorials in hindi",
    "description": "In this video we will use usestate and useffect  hook to fetch some random joke \n\n#reactJs #jokesApp\n\nconnect with me on - \nfacebook :https://www.facebook.com/mukesh.phulwani.5\ninstagram : https://www.instagram.com/mukeshphulwani66\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\ngithub: https://github.com/mukeshphulwani66",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/U-BCn_c5bW4/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/U-BCn_c5bW4/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/U-BCn_c5bW4/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/U-BCn_c5bW4/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/U-BCn_c5bW4/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 4,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "U-BCn_c5bW4"
    }
   },
   "contentDetails": {
    "videoId": "U-BCn_c5bW4",
    "videoPublishedAt": "2019-08-08T10:20:04.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/LEFDcLfMkLEFOldD6wyvi8ja-OA\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri41MjE1MkI0OTQ2QzJGNzNG",
   "snippet": {
    "publishedAt": "2020-01-29T12:50:05.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "#1 - Youtube Video player and content list in react js | react js project in hindi",
    "description": "In this video we will make a basic video player with content list using react js in hindi\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/o8jEBYOu9dA/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/o8jEBYOu9dA/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/o8jEBYOu9dA/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/o8jEBYOu9dA/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/o8jEBYOu9dA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 5,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "o8jEBYOu9dA"
    }
   },
   "contentDetails": {
    "videoId": "o8jEBYOu9dA",
    "videoPublishedAt": "2019-12-29T13:22:50.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/_2flZs_yG2Iv8GqSEoVs-J60GVI\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri4xMkVGQjNCMUM1N0RFNEUx",
   "snippet": {
    "publishedAt": "2020-02-06T15:11:26.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "#2 - Youtube Video player and content list in react js | react js project in hindi",
    "description": "In this part we will add color Highlight to list in react js | react js project in hindi\npart 1 of video player : https://youtu.be/o8jEBYOu9dA\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/FOSqMousEYs/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/FOSqMousEYs/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/FOSqMousEYs/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/FOSqMousEYs/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/FOSqMousEYs/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 6,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "FOSqMousEYs"
    }
   },
   "contentDetails": {
    "videoId": "FOSqMousEYs",
    "videoPublishedAt": "2020-02-06T15:20:42.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/l1sw-Q2jOQxzgWYej22wBySFimA\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri41MzJCQjBCNDIyRkJDN0VD",
   "snippet": {
    "publishedAt": "2020-03-08T14:46:56.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "#3 - Youtube Video player in react js | fetching videos from playlist using youtube API",
    "description": "This is part 3 of my video player and in this video we will fetch videos from youtube playlist using youtube api. react js project in hindi\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/LJoGgn3K76I/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/LJoGgn3K76I/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/LJoGgn3K76I/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/LJoGgn3K76I/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/LJoGgn3K76I/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 7,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "LJoGgn3K76I"
    }
   },
   "contentDetails": {
    "videoId": "LJoGgn3K76I",
    "videoPublishedAt": "2020-03-08T14:58:45.000Z"
   }
  },
  {
   "kind": "youtube#playlistItem",
   "etag": "\"tnVOtk4NeGU6nDncDTE5m9SmuHc/0lJz6k7KDxRLYlAH7-Y40LPsvVo\"",
   "id": "UExCOTd5UHJGd281aHBPYXk0djJubkR1VUNaUU13eVF6Ri5DQUNERDQ2NkIzRUQxNTY1",
   "snippet": {
    "publishedAt": "2020-03-08T15:09:54.000Z",
    "channelId": "UCM-4HE0R3iLxKB7qaq1bskw",
    "title": "#4 - Youtube Video player in react js | adding check icon if video is already watched",
    "description": "This is part 4 of react video player and in this video we will be using ReactPlayer library and we will also add check mark if video is already watched\n\nconnect with me on - \r\nfacebook :https://www.facebook.com/mukesh.phulwani.5\r\ninstagram : https://www.instagram.com/mukeshphulwani66\r\nlinkedin: https://www.linkedin.com/in/mukesh-phulwani-681450152/\r\ngithub: https://github.com/mukeshphulwani66\r\ncodersneverquit website : https://www.codersneverquit.in/",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/GqQmvAplLpQ/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/GqQmvAplLpQ/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/GqQmvAplLpQ/hqdefault.jpg",
      "width": 480,
      "height": 360
     },
     "standard": {
      "url": "https://i.ytimg.com/vi/GqQmvAplLpQ/sddefault.jpg",
      "width": 640,
      "height": 480
     },
     "maxres": {
      "url": "https://i.ytimg.com/vi/GqQmvAplLpQ/maxresdefault.jpg",
      "width": 1280,
      "height": 720
     }
    },
    "channelTitle": "CODERS NEVER QUIT",
    "playlistId": "PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF",
    "position": 8,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "GqQmvAplLpQ"
    }
   },
   "contentDetails": {
    "videoId": "GqQmvAplLpQ",
    "videoPublishedAt": "2020-03-08T15:11:19.000Z"
   }
  }
 ]
}

*/