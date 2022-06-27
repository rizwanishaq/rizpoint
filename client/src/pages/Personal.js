import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Experience from "../components/Experience";
import Education from "../components/Education";
import { generateData } from "../utils/utils";
import Skills from "../components/Skills";

const Personal = () => {
  const data = generateData();
  return (
    <Container className="mt-4">
      <Tabs
        defaultActiveKey="experience"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="experience" title="Experience">
          <Experience />
        </Tab>
        <Tab eventKey="education" title="Education">
          <Education />
        </Tab>
        <Tab eventKey="skill" title="Skills">
          <Container>
            <Skills
              data={data}
              width={200}
              height={200}
              innerRadius={40}
              outerRadius={100}
            />
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Personal;
