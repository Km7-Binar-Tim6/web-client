import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getDetailType, updateType } from "../../../service/type";
import ProtectedRoute from "../../../redux/slices/ProtectedRoute.js";

export const Route = createLazyFileRoute("/type/edit/$id")({
  component: () => (
    <ProtectedRoute allowedRoles={[1]}>
      <EditType />
    </ProtectedRoute>
  ),
});

function EditType() {
  const { id } = Route.useParams();
  const navigate = useNavigate();

  const [name, setName] = useState(""); // To store the type name
  const [isLoading, setIsLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const fetchType = async () => {
      try {
        const result = await getDetailType(id);
        if (result?.success && result.data) {
          setName(result.data.type_option); // Set the correct field name (type_option)
          setError(null); // Reset error if data is fetched successfully
        } else {
          setError("Failed to load type details.");
        }
      } catch (error) {
        console.error("Error fetching type details:", error);
        setError("An error occurred while fetching data.");
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    if (id) {
      fetchType();
    }
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const request = { type_option: name };

    const result = await updateType(id, request);

    if (result?.success) {
      navigate({ to: `/type/${id}` }); // Redirect to the type detail page after update
    } else {
      alert(result?.message || "Failed to update type");
    }
  };

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col className="text-center">
          <h1>Loading...</h1>
        </Col>
      </Row>
    );
  }

  if (error) {
    return (
      <Row className="mt-5">
        <Col className="text-center">
          <h1>{error}</h1>
        </Col>
      </Row>
    );
  }

  return (
    <Row className="justify-content-center mt-4">
      <Col md={6}>
        <Card className="shadow-sm border-0">
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Current Type Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter new type name"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Update Type Name
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default EditType;