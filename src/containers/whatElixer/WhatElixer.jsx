import React , {useState} from 'react';
import Button from '../../components/button/button';
import  './whatElixer.scss';
import data from './imports';

const WhatElixer = () => {

  const [dataBlock] = useState(
    {
        subtitle : 'About us',
        title: 'What is Elixer?',
        desc : 'Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut adipiscing integer felis. Id ac non arcu facilisi proin ultrices sed. Id accumsan quam viverra ante in id integer ut. Volutpat lobortis dolor etiam dis interdum tincidunt senectus.'
    }
)
  return (
    <section className="tf-section tf-about">
      <div className="container">
          <div className="row">
              <div className="about-us">
                  <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                      <div className="tf-title st2">
                          <p className="h8 sub-title">{dataBlock.subtitle}</p>
                          <h4 className="title">{dataBlock.title}</h4>
                      </div>
                      <p>{dataBlock.desc}</p>
                          <Button title="get Nfts" path='/' />
                  </div>
              </div>
              <div className="what-we-do">
                  <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                      {
                          data.map(item => (
                            <div key={item.id} className={`box-text corner-box ${item.class}`}>
                              <div className="h7">{item.title}</div>
                              <p>{item.desc}</p>
                            </div>
                          ))
                      }
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

  

export default WhatElixer;