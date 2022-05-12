import React from 'react';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import icon from "../../public/img/user.png"
const Toast = () => {
    const message= "this is a test"
    return (
       <>
           <Toaster>
               {(t) => (
                   <ToastBar toast={t}>
                       {({ icon, message }) => (
                           <>
                               {icon}
                             <h1 style={{color: "white"}}>This is a test</h1>
                               {t.type !== 'loading' && (
                                   <button onClick={() => toast.dismiss(t.id)}>X</button>
                               )}
                           </>
                       )}
                   </ToastBar>
               )}
           </Toaster>;
       </>
    );
};

export default Toast;
