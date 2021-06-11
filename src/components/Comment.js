export const Comment = ({ comment, author, date }) => {
  return (
    <div class="card">
      {/* <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div> */}
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6" style={{textOverflow:'ellipsis'}}>{author}</p>
          </div>
        </div>
        <div class="content">
         <i><a href={`${comment}`} target="_blank">{comment}</a></i>
          <br />
          <time datetime="2016-1-1">{date}</time>
        </div>
      </div>
    </div>
  );
};
