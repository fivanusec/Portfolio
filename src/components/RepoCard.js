import { Card, Button, Container } from "react-bootstrap";

const createLink = (name) => {
  return `https://github.com/fivanusec/${name}`;
};

const RepoCard = ({ data }) => {
  if (data.name.includes("To be added")) {
    return (
      <Card className="repo-card">
        <Card.Body>
          <Card.Title className="card-title">{data.name}</Card.Title>
          <Card.Text className="card-description">{data.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Card className="repo-card">
      <Card.Body>
        <Card.Title className="card-title">{data.name}</Card.Title>
        <Card.Text className="card-description">{data.description}</Card.Text>
      </Card.Body>
      <Container className="card-btn-container">
        <Button className="card-btn" variant="outline-primary">
          <a href={createLink(data.name)}>Visit {data.name}</a>
        </Button>
      </Container>
    </Card>
  );
};

export default RepoCard;
