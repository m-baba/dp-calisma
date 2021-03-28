import styles from './index.module.scss'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import jsonData from '../../api/data.json';
const loadData = [...jsonData];

const AccordionContent = () =>{
  return (
      <div className={styles.accordion}>
          <div className={styles.accordion_inner}>
              <Accordion defaultActiveKey={1}>
                  {
                      loadData?.map((item,i)=>(
                          <Card key={item.title}>
                              <Card.Header>
                                  <Accordion.Toggle variant="link" eventKey={i+1}>
                                      <h3>{item.title}</h3>
                                  </Accordion.Toggle>
                              </Card.Header>
                              <Accordion.Collapse eventKey={i+1}>
                                  <Card.Body>
                                      {item.description}
                                      {
                                          item.videoUrl?(
                                              <div>
                                                  <video className={styles.accordion_video} controls width="920" height="518">
                                                      <source type="video/mp4" src={item.videoUrl} />
                                                  </video>
                                              </div>
                                          ):''
                                      }
                                  </Card.Body>
                              </Accordion.Collapse>
                          </Card>
                      ))
                  }
                  
              </Accordion>
          </div>
      </div>
  )
}

export default AccordionContent