import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 500px;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 736px;
  height: 436px;
`;

const StyledSubSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 50px;
`;

const StyledHeader = styled.div`
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  color: orange;
  text-align: left;
`;
const StyledHeadline = styled.div`
  font-family: "IBM Plex Serif", serif;
  font-size: 32px;
  color: black;
  text-align: left;
  line-height: 110%;
`;
const StyledBlurb = styled.div`
  margin-top: 20px;
  font-family: Poppins;
  font-size: 15px;
  color: black;
  text-align: left;
`;
const StyledSpan = styled.span`
  margin-top: 20px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 13px;
  color: black;
  text-align: left;
  margin-right: 20px;
`;
const StyledSpan2 = styled.span`
  margin-top: 20px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 13px;
  color: black;
  text-align: left;
  opacity: 50%;
`;

const StyledSpan3 = styled.span`
  font-family: Poppins;
  font-weight: bold;
  font-size: 14px;
  color: orange;
  text-align: center;
`;
const StyledButton = styled.button`
  margin: 0 20px 0 0;
  background-color: #037dd6;
  color: white;
  font-size: 14px;
  font-family: Poppins;
  padding: 20px;
`;

export const HeadlineStory = ({ subscriptionExpiration }) => {
  return (
    <StyledSection>
      <StyledImg src="https://cms.accuweather.com/wp-content/uploads/2016/05/cropped-AP_19339813160350.jpg" />
      <StyledSubSection>
        <StyledHeader>Trending</StyledHeader>
        <StyledHeadline>
          Consensys, going to the moon on first crypto-funded space rocket
          program
        </StyledHeadline>
        <StyledBlurb>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore
        </StyledBlurb>
        <div style={{ marginTop: "20px" }}>
          <StyledSpan>2 hours ago </StyledSpan>
          <StyledSpan2>By Rachel Cope | 4 min read</StyledSpan2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {!subscriptionExpiration && (
            <StyledButton className="button">
              LOG IN TO READ ARTICLE
            </StyledButton>
          )}
          {subscriptionExpiration === 1 && (
            <StyledSpan3>LIMIT 1 ARTICLE PER DAY</StyledSpan3>
          )}
        </div>
      </StyledSubSection>
    </StyledSection>
  );
};
