import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Mình khá linh động trong việc code, nên đảm nhiệm cả Front-end lẫn
      Back-end.
    </SectionText>
    <List>
      <ListItem>
        {/* <picture>
          <DiReact size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>ReactJs</li>
              <li>VueJs</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiFirebase size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <ul>
              <li>Laravel</li>
              <li>NodeJs</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <DiZend size="3rem" />
        </picture> */}
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            <ul>
              <li>MySql</li>
              <li>PostgreSql</li>
              <li>Laradock</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
