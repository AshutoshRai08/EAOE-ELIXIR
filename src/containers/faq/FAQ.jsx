import React , {useState} from 'react';
import { Accordion } from 'react-bootstrap-accordion';
import './faq.scss';
import data from './imports';

const FAQ = () => {

  const [dataBlock] = useState({
      subtitle: 'FAQs',
      title: 'Looking for answers?'
  })

  return (
    <section className="tf-section faq bg-st2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title mb-58" data-aos="fade-up" data-aos-duration="800">
              <p className="h8 sub-title">{dataBlock.subtitle}</p>
              <h4 className="title">{dataBlock.title}</h4>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="flat-accordion" data-aos="fade-up" data-aos-duration="800">
              {data.map((fq, i) =>
                <Accordion key={fq.id} title={fq.ques} show={fq.show}>
                  <p className="toggle-content">{fq.Answer}</p>
                </Accordion>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
