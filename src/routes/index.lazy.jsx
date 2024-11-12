import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";
import { getCars } from "../service/car";
import CarItem from "../components/Car/CarItem";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Row className="mt-4">
            <h1>Car data is not found!</h1>
        </Row>
  );
}

export default Index;
