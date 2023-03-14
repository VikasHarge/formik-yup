export type formikUser = {
    name: string,
    email: string,
    about: string,
    adress? : string
}

export type formikUserError = {
    name: string,
    email: string,
    about: string,
    adress? : string
}

export type formikjob = {
    jobCategory : string,
    jobId :number | null | '',
    jobTitle : string,
    name : string,
    surname? : string,
    phone : string,
    email : string,
    city : string,
    pincode : number | null | '',
    dob : Date | undefined | '',
    experience : number | null | '',
}

export type formikVisit = {
    name : string,
    email : string,
    discription : string,
    camp : string,
    category : string[],
    gender : string,
    visitDate : Date | null 
}

export type formikOptions = {
    key : string,
    value : string
}