import {HeadlineStory} from '../content/HeadlineStory'
import { SubscribePrompt } from '../components/SubscribePrompt'
import {OtherStories} from '../content/OtherStories'


const Content = ({ subscriptionExpiration, setLoginModalOpen, setSubscriptionExpiration }) => {
  return (
    <>
    <section className="hero">
      <div className="container" style={{margin: '0 2.5rem'}}>
        <HeadlineStory subscriptionExpiration={subscriptionExpiration} setLoginModalOpen={setLoginModalOpen} setSubscriptionExpiration={setSubscriptionExpiration} />
        {
          subscriptionExpiration ?
          <SubscribePrompt subscriptionExpiration={subscriptionExpiration} />
          : null
        }
        <OtherStories subscriptionExpiration={subscriptionExpiration} />
      </div>
  </section>
  </>
  );
};

export default Content;