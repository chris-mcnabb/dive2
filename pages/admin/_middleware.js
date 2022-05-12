import { withAuth } from "next-auth/middleware"
import {useRouter} from "next/router";

export default withAuth({

        callbacks: {

            authorized: ({ token }) => token?.isEmployee === true || token?.isAdmin === true,
        }


})
