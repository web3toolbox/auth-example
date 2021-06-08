function Auth({ web3, account, setSignature }) {
  const Login = () => {

    const msgParams = JSON.stringify({
      domain: {
        chainId: 1,
        name: 'Leaping Lubins',
        // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        version: '1',
      },
  
      message: { contents: 'Login to Leaping Lubins'},
      primaryType: 'Message',
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          // { name: 'verifyingContract', type: 'address' },
        ],
        // // Refer to PrimaryType
        Message: [
          { name: 'contents', type: 'string' },
        ],
      },
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
        const { result: signature } = result;
        if (err) return console.dir(err);
        if (result.error) {
          alert(result.error.message);
        }
        if (result.error) return console.error('ERROR', result);
        setSignature(signature)
      }
    );
  }

  return (
    <button onClick={() => {Login()}}>Login</button>
  );
}

export default Auth;
