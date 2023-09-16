import React, { createContext, useContext, useState } from 'react';

const Store = createContext(null);

export default function ContextAssigment() {
  const [userDetails, setUserDetails] = useState({
    CAKE: 20,
  });

  function buyCake() {
    if (userDetails.CAKE === 0) {
      alert("No Cake Available");
    } else {
      setUserDetails({ ...userDetails, CAKE: userDetails.CAKE - 1 });
    }
  }

  function buildCake() {
    setUserDetails({ ...userDetails, CAKE: userDetails.CAKE + 1 });
  }

  return (
    <Store.Provider value={{ userDetails, buyCake, buildCake }}>
      <hr></hr>
      <h4 className='bg-warning  text-center p-2'>ContextAPIAssigment</h4>
      <h4 >This is Parent</h4>
      <h4 style={{ fontFamily: "initial" }} className='text-primary'>
        {userDetails.CAKE === 0
          ? "Counter 01 available cake - Empty"
          : `Counter 01 available cake - 20`}
      </h4>
      <hr></hr>
      <ChildComponent />
    </Store.Provider>
  );
}

function ChildComponent() {
  const storeData = useContext(Store);
  return (
    <>
      <h4>This is Child Component</h4>
      <h4 style={{ fontFamily: "initial" }}>
        Number of cakes in store: {storeData.userDetails.CAKE}
      </h4>
      <hr></hr>
      <SubChildComponent />
    </>
  );
}

function SubChildComponent() {
  const data = useContext(Store);
  return (
    <>
      <h4>This is Sub Child Component</h4>
      <h4 style={{ fontFamily: "initial" }}>
        Number of cakes in store: {data.userDetails.CAKE}
      </h4>
      <h4 style={{ fontFamily: "initial" }}>
        Build New Cake in store: {data.userDetails.CAKE}
      </h4>

      <button className='btn btn-success' onClick={data.buyCake}>
        BUY CAKE
      </button>
      <button className='btn btn-danger mx-3' onClick={data.buildCake}>
        BUILD CAKE
      </button>
      <hr></hr>
    </>
  );
}
