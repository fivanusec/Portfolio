import { Card, Button, Container } from "react-bootstrap";

const RepoCard = ({ data }) => {
  return (
    <Card className="repo-card">
      <Card.Body>
        <Card.Title className="card-title">{data.name}</Card.Title>
        <Card.Text className="card-description">{data.description}</Card.Text>
        <Container fluid style={{ color: "black" }}></Container>
        <Container></Container>
      </Card.Body>
      <Container className="card-btn-container">
        <Button className="card-btn" variant="outline-primary">
          <a href={data.url}>Visit {data.name}</a>
        </Button>
      </Container>
    </Card>
  );
};

export default RepoCard;
