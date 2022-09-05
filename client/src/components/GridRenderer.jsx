import { Container, Row, Col } from "react-grid-system";
import { setConfiguration } from "react-grid-system";
import { v4 as uuidv4 } from "uuid";
import GridCard from "./GridCard";

setConfiguration({ breakpoints: [768, 1200, 1500, 1700, 1800, 1900] });
{
  /* <Col align="center" xxl={2.4} md={2.4} sm={4} xs={6} key={uuidv4()}> */
}

export default function GridRenderer({ finalQuery, height, width }) {
  return (
    <Container  fluid={true}>
      <Row justify="center" gutterWidth={12}>
        {finalQuery.map((query, index) => (
          <Col align="center" xxl={2.3} md={2.4} sm={3} xs={6} key={uuidv4()}>
            <GridCard
              title={query.title.english}
              image={query.image}
              key={uuidv4()}
              height={height}
              width={width}
              score={query.score}
              results={query}
            ></GridCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}