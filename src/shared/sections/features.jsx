import {
  Container, Row, Col
} from "reactstrap"
import data from "@/data/static.features.json";

const Features = () => {

  return (
  <section className="section-content features">
    <Container>
      <Row>
      {data.map((feature, i) => (
             <div className="feature col" key={i}>
             <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
               <svg className="bi" width="1em" height="1em">
                 <use xlinkHref="#collection" />
               </svg>
             </div>
             <h5 className="fs-2">{feature.title}</h5>
             <p>
             {feature.content}
             </p>
           </div>
          ))}



        </Row>
    </Container>
    </section>
  )
}


export default Features;
