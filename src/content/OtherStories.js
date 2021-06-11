import styled from 'styled-components'

const StyledSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`

const StyledP = styled.p`
    font-family: IBM Plex Serif;
    font-size 18px;
`

const StyledP2 = styled.p`
    font-family: Poppins;
    font-size 12px;
    line-height: 18px;
    opacity: 70%;
    text-align: left;
`
const StyledP3 = styled.p`
    font-family: Poppins;
    font-size 18px;
    line-height: 40px;
    font-weight: bold;
`
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
const stories = [
    {
        image: "http://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before...",
        date: '2 hours ago'
    },
    {
        image: "https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1229901940.jpg?w=730&crop=1",
        headline: "Elon Musk Gets Ethereum Neck Tattoo",
        content: "After months pumping various questionable meme coins, Elon says he finally saw the light after watching Lex Fridman’s interview with Vitalik. “Dog coins just aren’t going to make it. I was completely overwhelmed with the feeling that I need to get a large Ethereum symbol tattooed on my neck...",
        date: '5 hours ago'
    },
    {
        image: "https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/2a4de/finance_transparent.png",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before...",
        date: '2 days ago'
    },
    {
        image: "data:image/jpeg;base64,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",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before...",
        date: '1 week ago'
    }
]
export const OtherStories = ({subscriptionExpiration}) => {
    const subscribed = subscriptionExpiration > 1;


    return (<>
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <StyledP3 style={{textDecoration: 'underline', textDecorationColor:'#F66A0A', marginRight: '5px', textUnderlineOffset: '6xpx'}}>Latest</StyledP3><StyledP3>Stories</StyledP3>
    </div>
        <StyledSection className={`${!subscribed && "blur"}`}>
        {stories.map(i => {
            const {image, headline, content, subtitle, date} = i;
            return <StoryCard image={image} headline={headline} content={content} subtitle={subtitle} date={date}/>
        })}
    </StyledSection>
    </>
        )
}

const StoryCard = ({image, headline, subtitle, content,  date}) => {
    return (
        <div style={{maxHeight:'500px', maxWidth: '370px', margin: '50px 8px 0 0'}}class="card">
      <div class="card-image">
          <figure class="image is-5by3">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>
      <div class="card-content">
        <div class="media">
            <StyledP class="title is-4">{headline}</StyledP>
            <StyledP2 class="subtitle is-6" style={{textOverflow:'ellipsis'}}>{subtitle}</StyledP2>
        </div>
         <StyledP2>{content}</StyledP2>
          <div style={{ marginTop: "20px" }}>
          <StyledSpan>{date}</StyledSpan>
          <StyledSpan2> </StyledSpan2>
          </div>
        </div>
      </div>
    )
}