import { useState, useEffect } from "react";
import { 
  Shield 
} from 'react-ionicons';
import { recoverTypedSignature_v4 } from "eth-sig-util"
import * as ethUtil from 'ethereumjs-util';

export const Comment = ({ comment, author, date, origin, cid }) => {
  const [status, setStatus] = useState('grey');

  useEffect(() => {
    try {
      const recovered = recoverTypedSignature_v4({
        data: origin,
        sig: comment,
      });
 
      if (ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(author)) {
        setStatus('orange')
      } else {
        setStatus('red')
      }


    } catch (err) {
      alert(`Unable to verify: ${err}`) 
    }
  }, [])

  return (
    <div className="card">
      <div className="card-content">
        <div className="media pb-1 mb-2">
          <div className="media-left">
            <figure className="image is-48x48">
              <Shield 
                color={status}
                height="2rem"
                width="2rem" />
            </figure>
          </div>
          <div className="media-content pb-1 mb-1">
            <p className="title is-4 pb-1 mb-1">
              <a href={`ipfs://${cid}`} target="_blank">
                {author ? author.substring(0,14) + "..." : "..."}
              </a>
            </p>
          </div>
        </div>
        <div className="content">
          <div className="pb-3">"{origin.message.comment}"</div>
          <time>{date}</time>
        </div>
      </div>
    </div>
  );
};
