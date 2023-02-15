import {
  Container, Row, Col
} from "reactstrap"

export const MOCKDATA = [
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves"
  },
  {
    title: "Secure by default",
    description:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right"
  },
  {
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"
  }
]


const Features = () => {

  return (
  <section className="section-content features">
    <Container>
      <Row>
        <Col md={4}>
  <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
    <div class="features-icons-icon d-flex">
      <i class="bi-window m-auto text-primary"></i>
    </div>
    <h3>Fully Responsive</h3>
    <p class="lead mb-0">
      This theme will look great on any device, no matter the size!
    </p>
  </div>
        </Col>
        </Row>
    </Container>
    </section>
  )
}


export default Features;
