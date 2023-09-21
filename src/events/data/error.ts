import { connection } from "mongoose";

// export default async () => {
//     connection.on('err', (err) => {
//         console.error("[DATABASE ERROR]:\n" + err)
//     })
// }

export default {
  name: "error",
  execute(err: string) {
    if (err) {
      console.error("[DATABASE ERROR]\n" + err);
    }
  },
};
