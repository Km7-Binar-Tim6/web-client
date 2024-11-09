import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import { getCars } from "../../service/car";
import CarItem from "../../components/Car/CarItem";

export const Route = createLazyFileRoute('/cars/')({
    component: Index,
})
function Index() {
        const navigate = useNavigate();
        const { token, user } = useSelector((state) => state.auth);
    
        const [cars, setCars] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
    
        useEffect(() => {
        const getCarData = async () => {
            setIsLoading(true);
            const result = await getCars();
            if (result.success) {
            setCars(result.data);
            }
            setIsLoading(false);
        };
    
        if (token) {
            getCarData();
        } else {
            navigate({ to: "/login" });
        }
        }, [token, navigate]);
    
        if (!token) {
        return (
            <Row className="mt-4">
                <Col>
                    <h1 className="text-center">
                        Please login first to get student data!
                    </h1>
                </Col>
            </Row>
        );
        }
        if (isLoading) {
        return (
            <Row className="mt-4">
            <h1>Loading...</h1>
            </Row>
        );
        }

        return (
            <Row className="mt-4">
                    {cars.length === 0 ? (
                        <h1>Car data is not found!</h1>
                    ) : (
                        cars.map((car) => (
                            <CarItem car={car} key={car?.id} />
                        ))
                    )}
            </Row>
        ); 
    
}
