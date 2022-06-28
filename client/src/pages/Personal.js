import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Experience from "../components/CV/Experience";
import Education from "../components/CV/Education";
import { generateData } from "../utils/utils";
import Skills from "../components/CV/Skills";
import Papers from "../components/CV/Papers";

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
        <Tab eventKey="papers" title="Papers">
          <Papers />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Personal;
