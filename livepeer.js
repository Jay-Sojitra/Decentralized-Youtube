import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";



const LivePeerClient = createReactClient({
  // provider: studioProvider({ apiKey: "5691fae2-d00e-4ea3-92d4-8ba7e32cbd7b" }),
  provider: studioProvider({ apiKey: "84f93778-7ad2-4598-a3d5-15ca5fbbe9eb" }),
});

export default LivePeerClient;
// 5691fae2-d00e-4ea3-92d4-8ba7e32cbd7b
