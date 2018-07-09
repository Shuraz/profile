import React from 'react';
import text from './mystudy.json'
import Gallery from 'react-grid-gallery';

const IMAGES11 =
[{
        src: require('./projectImages/bb1.png'),
        thumbnail: require('./projectImages/bb1.png'),
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/bb2.png'),
        thumbnail: require('./projectImages/bb2.png'),
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/bb3.png'),
        thumbnail: require('./projectImages/bb3.png'),
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/bb4.png'),
        thumbnail: require('./projectImages/bb4.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/bb5.png'),
        thumbnail: require('./projectImages/bb5.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
    src: require('./projectImages/bb6.png'),
    thumbnail: require('./projectImages/bb6.png'),
    thumbnailWidth: 80,
    thumbnailHeight: 120,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
}
]

const IMAGES22 =
[{
        src: require('./projectImages/aa1.png'),
        thumbnail: require('./projectImages/aa1.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/aa2.png'),
        thumbnail: require('./projectImages/aa2.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/aa3.png'),
        thumbnail: require('./projectImages/aa3.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/aa4.png'),
        thumbnail: require('./projectImages/aa4.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/aa5.png'),
        thumbnail: require('./projectImages/aa5.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/aa6.png'),
        thumbnail: require('./projectImages/aa6.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/aa7.png'),
        thumbnail: require('./projectImages/aa7.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
]

const IMAGES33 =
[{
        src: require('./projectImages/cc1.png'),
        thumbnail: require('./projectImages/cc1.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/cc2.png'),
        thumbnail: require('./projectImages/cc2.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/cc3.png'),
        thumbnail: require('./projectImages/cc3.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/cc4.png'),
        thumbnail: require('./projectImages/cc4.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/cc5.png'),
        thumbnail: require('./projectImages/cc5.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
}
]

const IMAGES44 =
[{
        src: require('./projectImages/dd1.png'),
        thumbnail: require('./projectImages/dd1.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/dd2.png'),
        thumbnail: require('./projectImages/dd2.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./projectImages/dd3.png'),
        thumbnail: require('./projectImages/dd3.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
}
]


export const master=(
    <div>
            <h4>
                Charles Sturt Univeristy, Sydney, Australia
            </h4>
            {text.master}
    </div>

)

export const bachelor=(
    <div>
    <h4>
        Kathmandu Engineering College, (Tribhuvan University), Kathmandu, Nepal
    </h4>
    {text.bachelor}
    </div>
)

export const highschool=(
    <div>
            <h4>
                National School of Sciences, Kathmandu, Nepal
            </h4>
            {text.highschool}

    </div>

)

export const trainingA=(
    <div>
    <h4>
        Mobile for Development    
    </h4>
    <dl>
                <dt>Massive Open Online Course (MOOC) by IIT Kanpur and COL, India.</dt>
                <dd>IImplementation of Mobile for the  development for finance, agriculture. Technology of mobile devices and their applications. </dd>

             
    </dl>

    </div>
)
export const trainingB=(
    <div>
    <h4>
        Java Programming Certificates
    
    </h4>
  
    <dl>
                <dt>Certificate Program In Java Programming language using Java SE6</dt>
                <dd>It was awarded by ORACLE Work force Development Program. Certificate issued on September, 2012.</dd>
                <dt>Certificate Program In Advanced Java Programming For Web Development</dt>
                <dd>It was awarded by ORACLE Work force Development Program. Certificate issued on August 16, 2013.</dd>
             
    </dl>

    </div>
)
export const trainingC=(
    <div>

    <h4>
        Lynda Certificate
    </h4>

      <dl>
               
      <dt>HTML</dt>
      <dt>CSS</dt>
                <dt>ReactJS:</dt>
                <dt>Bootstrap</dt>
                <dt>ECMAScript 6</dt>
                <dt>Github</dt>
                
                
    </dl>

    </div>
)

export const workA=(
    <div>
        <h4> QR Ticketing System</h4>
            <p>
                {text.workA}
            </p>
                <dl>
                <dt>Platform and Languages:</dt>
                <dd>Android, PHP, JAVA, JSP, JavaScript, CSS, Wamp Server, QR code</dd>
            </dl>
            <Gallery images={IMAGES11}/>
    </div>
)

export const workB=(
    <div>
    <h4>
        Mobile Application - Outfit Diary
    </h4>
    <p>
      {text.workB}
    </p>

      <dl>
                <dt>Platform and Languages:</dt>
                <dd>Android, Firebase as Backend Service, Google map API</dd>
    </dl>
    <Gallery images={IMAGES22}/>

      </div>
)
export const workC=(
    <div>
    <h4>
       Desktop Application
    </h4>
    <p>
      {text.workC}
    </p>

      <dl>
                <dt>Platform and Languages:</dt>
                <dd>JAVA, Wamp Server, IntelliJ IDEA</dd>
    </dl>
    <Gallery images={IMAGES33}/>

      </div>
)
export const workD=(
    <div>
    <h4>
        Personal Profile
    </h4>
    <p>
      {text.workD}
    </p>

      <dl>
                <dt>Platform and Languages:</dt>
                <dd>React, Redux, HTML, CSS, Bootstrap, API, JSON</dd>
    </dl>
    <Gallery images={IMAGES44}/>

      </div>
)