"use client";

import { CardBody, CardContainer } from "../ui/3d-card";

export function ThreeDCard({ children }) {
  return (
    <CardContainer className="inter-var h-full">
      <CardBody className=" ">{children}</CardBody>
    </CardContainer>
  );
}
