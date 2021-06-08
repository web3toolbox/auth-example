import { useState } from 'react';
const Content = () => {
  const lorem = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
    return (
      <section class="section is-medium">
      <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
        <div class="box">
            <article class="tile is-child notification is-primary">
              <p class="title">Meebits</p>
              <p class="subtitle">{lorem}</p>
            </article>
          </div>
          <div class="box">
            <article class="tile is-child notification is-warning">
              <p class="title">CryptoPunks</p>
              <p class="subtitle">{lorem}</p>
            </article>
          </div>
        </div>
          <div class="box">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">ZenFTs</p>
              <p class="subtitle">Bleh</p>
            </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
        {/* <div class="box"> */}
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
            </div>
          </article>
          {/* </div> */}
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
            </div>
          </div>
        </article>
      </div>
    </div>
    </section>
    );
  };
  
  export default Content;