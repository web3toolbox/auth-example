import {
  sigUtil 
} from 'eth-sig-util';

function Auth({ web3, account }) {

  const SignMe = () => {

    const msgParams = JSON.stringify({
    message: {
            contents: 'Hello World!'
        }
    });

    const from = account;
    const params = [from, msgParams];
    const method = 'eth_signTypedData_v4';

    web3.currentProvider.sendAsync(
      {
        method,
        params,
        from,
      },
      function (err, result) {
        if (err) return console.dir(err);
        if (result.error) {
          alert(result.error.message);
        }
        if (result.error) return console.error('ERROR', result);
        console.log('TYPED SIGNED:' + JSON.stringify(result.result));
  
        const recovered = sigUtil.recoverTypedSignature_v4({
          data: JSON.parse(msgParams),
          sig: result.result,
        });
      }
    );
  }

  return (
    <button onClick={() => {SignMe()}}>sign me</button>
  );
}

export default Auth;
