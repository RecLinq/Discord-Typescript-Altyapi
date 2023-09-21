import { connection } from "mongoose";

// export default async () => {
//     connection.on('disconnecting', () => {
//         console.log("[DATABASE STATUS]: Bağlantı kesildi.")
//     })
// }

export default {
    name: "disconnecting",
    execute() {
        console.log("[DATABASE STATUS] Bağlantı kesildi.")
    }
}