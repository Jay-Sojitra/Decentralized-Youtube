
import axios from "axios";

const saveToIPFS = async (file) => {
  
  const formData = new FormData();
  
  formData.append("file", file);

  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA5MTJkNzc3QTU3YUE4NDAyOEJBMzY1Njg4OTU1MDRmMTRiYzJjQjQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njc1NTQ0ODEwMDEsIm5hbWUiOiJvbmJvYXJkIn0.sQdQbLWLzp3KnMf1f9brsAfMlVV-WBx7MKUOzYlGw1w`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
