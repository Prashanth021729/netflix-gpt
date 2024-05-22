
//Used to check the validations using Regular expressions if the form is very large use some library
export const checkvalidation = ( email, password,fname,lname) =>{
    const checkIsemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const checkpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const checkfname = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(fname)
    const checklname = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(lname)

    if(!checkpassword) return "Password is not Valid";
    if(!checkIsemail) return "Email ID is not Valid";
    if(!checkfname || !checklname) return "Enter only Letters"
    
    return null;
}