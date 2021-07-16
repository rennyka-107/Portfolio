import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Chào mừng mọi người <br />
          đã ghé thăm Portfolio của mình
        </SectionTitle>
        <SectionText>
          Mình là Long, các bạn có thể gọi mình là RennyKa.
        </SectionText>
        {/* <SectionText>
          Đôi chút giới thiệu về bản thân nè: <br />
          Mình sinh năm 1996, tới từ Hưng Yên. Hiện mình đang công tác tại Hà
          Nội, là một lập trình viên của công ty cổ phần Sphinx JSC. 
        </SectionText> */}
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
