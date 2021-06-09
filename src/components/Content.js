import { useState, useEffect } from 'react';
import article from "../assets/article.png";
import axios from 'axios';

const Content = ({ signature }) => {
  const [paywalledContent, setPaywalledContent] = useState('Login to view full article...')

  console.log(signature);

  useEffect(() => {
    if (signature) {
      axios.get(`https://auth-functions.netlify.app/.netlify/functions/auth?user=${signature}`)
      .then(function (response) {
        console.log('here')
        setPaywalledContent('moaaaaar');
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }, [signature])

  const lorem = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  return (
    <section class="hero ">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <figure class="image is-16by9">
              <img src={article} alt="" />
            </figure>
          </div>
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium">
                <h2 class="subtitle is-4">June 8, 2021</h2>
                <h1 class="title">Lorem Ipsum</h1>
                <p>{lorem}</p>
                <p>{paywalledContent}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  );
};

export default Content;