import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa"; // Import an icon library, e.g., FontAwesome
import { getStudents } from "../../service/student";
import StudentItem from "../../components/Student/StudentItem";

export const Route = createLazyFileRoute("/students/")({
  component: Students,
});

function Students() {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getStudentData = async () => {
      setIsLoading(true);
      const result = await getStudents();
      if (result.success) {
        setStudents(result.data);
      }
      setIsLoading(false);
    };

    if (token) {
      getStudentData();
    } else {
      navigate({ to: "/login" });
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Avoid rendering anything while redirecting
  }

  if (isLoading) {
    return (
      <Row className="mt-4">
        <h1>Loading...</h1>
      </Row>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h1>Student List</h1>
        {user &&
          user.role_id === 1 && ( // Check if user has admin role
            <Button
              variant="primary"
              onClick={() => navigate({ to: "/students/create" })}
              className="d-flex align-items-center"
            >
              <FaPlus className="me-2" /> {/* Icon for 'Create New Car' */}
              Create New Car
            </Button>
          )}
      </div>
      <Row className="mt-4">
        {students.length === 0 ? (
          <h1>Student data is not found!</h1>
        ) : (
          students.map((student) => (
            <StudentItem student={student} key={student?.id} />
          ))
        )}
      </Row>
    </>
  );
}

export default Students;
