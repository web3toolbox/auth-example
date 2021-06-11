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
    font-size 15px;
    line-height: 22px;
    opacity: 70%;
`
const StyledP3 = styled.p`
    font-family: Poppins;
    font-size 18px;
    line-height: 40px;
    font-weight: bold;
`
const stories = [
    {
        image: "http://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before..."
    },
    {
        image: "http://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before..."
    },
    {
        image: "http://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before..."
    },
    {
        image: "http://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        headline: "MetaMask launches token",
        content: "“Ser, wen token, ser?” MetaMask team: NOW The MetaMask team has finally launched their token, and it has blown our minds. The MetaMask token enables users to accomplish something they never could before..."
    }
]
export const OtherStories = () => {
    return (<>
    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <StyledP3 style={{textDecoration: 'underline', textDecorationColor:'#F66A0A', marginRight: '5px', textUnderlineOffset: '6xpx'}}>Latest</StyledP3><StyledP3>Stories</StyledP3>
    </div>
        <StyledSection>
        {stories.map(i => {
            const {image, headline, content, subtitle} = i;
            return <StoryCard image={image} headline={headline} content={content} subtitle={subtitle} />
        })}
    </StyledSection>
    </>
        )
}

const StoryCard = ({image, headline, subtitle, content }) => {
    return (
        <div style={{maxHeight:'450px', maxWidth: '340px', margin: '50px 10px 0 0'}}class="card">
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
        <div class="content">
         <StyledP2>{content}</StyledP2>
          <br />
          {/* <time datetime="2016-1-1">{date}</time> */}
        </div>
      </div>
    </div>
    )
}