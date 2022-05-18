
   const postData = (data) => {
    return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
    },
      body: JSON.stringify(data),
    }).then(getData)
  }
  
  const getData = (response) => {
    if (response?.ok) {
      return Promise.resolve(response?.json()).then((data) => {
          return { data, status: response?.status };
        });
    }

    else{
        return Promise.reject(response?.status);
    }

  }

 

export {getData, postData};