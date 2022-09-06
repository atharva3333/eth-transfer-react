import React from "react";
import { useWeb3Transfer,useMoralis } from "react-moralis";


const Transfer = () => {
    const { Moralis } = useMoralis();
  const { fetch, isFetching } = useWeb3Transfer({
    type: "native",
    
    amount: Moralis.Units.Token("0.0000001554"),
    receiver: "0xe232A08dF47523155fBDB054627B6FdE4010860B",
  });

  return (
    
    <div>
      
      <button class="mt-20 p-3 px-5 bg-purple-400 text-white"  onClick={() => fetch()} disabled={isFetching}>
        Transfer
      </button>
    </div>
  );
};
export default Transfer