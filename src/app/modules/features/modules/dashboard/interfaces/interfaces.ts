import {
  APPRAISAL,
  BASIC_INFORMATION,
  CHANGE_PASSWORD,
  PROFILE_PICTURE,
  QULIFICATION,
  SHIFT,
} from "src/app/constants/routes";

export interface JobOpening {
  jobLogo: string;
  jobTite: string;
  jobDescription: string;
  no_of_openings: number;
  exp_from: number;
  exp_to: number;
  location: string;
  date: String;
  jobId?: number;
  desc?: string[];
  job_qualification?: string[];
  skills?: string[];
}
export interface IDIRECTORY_DATA {
  IMAGE: string;
  EMP_NAME: string;
  EMP_DESIGNATION: string;
  EMP_TECHNOLOGY: string;
  EMAIL: string;
  BIRTH_DATE: string;
  BIRTH_MONTH: string;
}

export interface ProfilePart {
  icon: string;
  title: string;
  route?: string;
}

export interface IGALLERYDATA {
  IMAGE?: string;
  HEADING?: string;
  BUTTON?: string;
  NUM?: number;
  ALBUM?: string[];
}
export interface BITHDAY {
  HEADING: string;
  DEARR: string;
  MESSAGE: string;
  CHEER: string;
  APPINVENTIV: string;
}
export interface IWORKANNIVERSARY {
  IMAGE: string;
  EMP_NAME: string;
  DESIGNATION: string;
  DATE: string;
}
export interface BIRTHDAY {
  HEADING: string;
  DEARR: string;
  MESSAGE: string;
  CHEER: string;
  APPINVENTIV: string;
}
export interface IBIRTHDAYDATA {
  IMAGE: string;
  EMP_NAME: string;
  DESIGNATION: string;
  DATE: string;
}
export interface IAWARDDATA {
  IMAGE: string;
  EMP_NAME: string;
  DESIGNATION: string;
  DATE: string;
}
export interface IAPPRECIATIONDATA {
  HEADER: string;
  DEAR: string;
  TEXT: string;
  MESSAGE: string;
  GREET: string;
  BUTTON: string;
}

export const GALLER_VALUE: any = {
  HEADER: "XYZ Gallery",
};
export const BIRTH_DAY: BITHDAY = {
  HEADING: "Birthday Celebration",
  DEARR: "Dear",
  MESSAGE:
    "I can’t believe it’s your birthday again! One more year together of sharing ideas and minds. Thanks for everything! Happy birthday!",
  CHEER: "cheers!",
  APPINVENTIV: "XYZ",
};

export const JobOpeningList: JobOpening[] = [
  {
    jobLogo: "/assets/ios-developers.svg",
    jobTite: "IOS Developer",
    jobDescription:
      "Responsible for designing, implementing, & supporting a distributed blockchain-based network.",
    no_of_openings: 2,
    exp_from: 3,
    exp_to: 5,
    location: "Noida",
    date: "05/01/2023",
    jobId: 101,
    desc: [
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
    ],
    job_qualification: [
      "Education: Graduate/Post Graduate",
      "Skills : Blockchain, ethereium, javaScript",
      "Abilities: To Write Clean &amp; reusable code",
    ],
    skills: ["blockchain", "cryptography", "Ethereum"],
  },
  {
    jobLogo: "/assets/android-developers.svg",
    jobTite: "Android Developer",
    jobDescription:
      "Responsible for designing, implementing, & supporting a distributed blockchain-based network.",
    no_of_openings: 2,
    exp_from: 3,
    exp_to: 5,
    location: "Noida",
    date: "05/01/2023",
    jobId: 102,
    desc: [
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
    ],
    job_qualification: [
      "Education: Graduate/Post Graduate",
      "Skills : Blockchain, ethereium, javaScript",
      "Abilities: To Write Clean &amp; reusable code",
    ],
    skills: ["blockchain", "cryptography", "Ethereum"],
  },
  {
    jobLogo: "/assets/react-native.svg",
    jobTite: "React Native",
    jobDescription:
      "Responsible for designing, implementing, & supporting a distributed blockchain-based network.",
    no_of_openings: 2,
    exp_from: 3,
    exp_to: 5,
    location: "Noida",
    date: "05/01/2023",
    jobId: 103,
    desc: [
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
    ],
    job_qualification: [
      "Education: Graduate/Post Graduate",
      "Skills : Blockchain, ethereium, javaScript",
      "Abilities: To Write Clean &amp; reusable code",
    ],
    skills: ["blockchain", "cryptography", "Ethereum"],
  },
  {
    jobLogo: "/assets/react-native.svg",
    jobTite: "React Native",
    jobDescription:
      "Responsible for designing, implementing, & supporting a distributed blockchain-based network.",
    no_of_openings: 2,
    exp_from: 3,
    exp_to: 5,
    location: "Noida",
    date: "05/01/2023",
    jobId: 103,
    desc: [
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
    ],
    job_qualification: [
      "Education: Graduate/Post Graduate",
      "Skills : Blockchain, ethereium, javaScript",
      "Abilities: To Write Clean &amp; reusable code",
    ],
    skills: ["blockchain", "cryptography", "Ethereum"],
  },
  {
    jobLogo: "/assets/react-native.svg",
    jobTite: "React Native",
    jobDescription:
      "Responsible for designing, implementing, & supporting a distributed blockchain-based network.",
    no_of_openings: 2,
    exp_from: 3,
    exp_to: 5,
    location: "Noida",
    date: "05/01/2023",
    jobId: 103,
    desc: [
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
    ],
    job_qualification: [
      "Education: Graduate/Post Graduate",
      "Skills : Blockchain, ethereium, javaScript",
      "Abilities: To Write Clean &amp; reusable code",
    ],
    skills: ["blockchain", "cryptography", "Ethereum"],
  },
  {
    jobLogo: "/assets/react-native.svg",
    jobTite: "React Native",
    jobDescription:
      "Responsible for designing, implementing, & supporting a distributed blockchain-based network.",
    no_of_openings: 2,
    exp_from: 3,
    exp_to: 5,
    location: "Noida",
    date: "05/01/2023",
    jobId: 103,
    desc: [
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
      "Experience contributing to the architecture, design, and development of Blockchain systems with  key focus in the areas such as consensus, distributed ledger, and smart contracts",
    ],
    job_qualification: [
      "Education: Graduate/Post Graduate",
      "Skills : Blockchain, ethereium, javaScript",
      "Abilities: To Write Clean &amp; reusable code",
    ],
    skills: ["blockchain", "cryptography", "Ethereum"],
  },
];

export const DIRECTORY_EMPLOYEE_DATA: IDIRECTORY_DATA[] = [
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Aahan Verma",
    EMP_DESIGNATION: "Sr. Software Engineer",
    EMP_TECHNOLOGY: "Android",
    EMAIL: "mailto:aahan.verma@gmail.com",
    BIRTH_DATE: "21st",
    BIRTH_MONTH: "Aug",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Deepak Yadav",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Angular",
    EMAIL: " mailto:deepak.yadav@gmail.com",
    BIRTH_DATE: " 08th",
    BIRTH_MONTH: "May",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Sam Kumar ",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "React Js",
    EMAIL: "mailto:xyz@gmail.com",
    BIRTH_DATE: "07th",
    BIRTH_MONTH: "Apr",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Sam Kumar ",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Angular",
    EMAIL: "mailto:xyz@gmail.com",
    BIRTH_DATE: "07th",
    BIRTH_MONTH: "Apr",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Aahan Verma",
    EMP_DESIGNATION: "Sr. Software Engineer",
    EMP_TECHNOLOGY: "Node Js",
    EMAIL: "mailto:aahan.verma@gmail.com",
    BIRTH_DATE: "21st",
    BIRTH_MONTH: "Aug",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Deepak Yadav",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Angular",
    EMAIL: " mailto:deepak.yadav@gmail.com",
    BIRTH_DATE: " 08th",
    BIRTH_MONTH: "May",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Sam Kumar ",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Node Js",
    EMAIL: "mailto:xyz@gmail.com",
    BIRTH_DATE: "07th",
    BIRTH_MONTH: "Apr",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Sam Kumar ",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "React Js",
    EMAIL: "mailto:xyz@gmail.com",
    BIRTH_DATE: "07th",
    BIRTH_MONTH: "Apr",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Aahan Verma",
    EMP_DESIGNATION: "Sr. Software Engineer",
    EMP_TECHNOLOGY: "Android",
    EMAIL: "mailto:aahan.verma@gmail.com",
    BIRTH_DATE: "21st",
    BIRTH_MONTH: "Aug",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Deepak Yadav",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Android",
    EMAIL: " mailto:deepak.yadav@gmail.com",
    BIRTH_DATE: " 08th",
    BIRTH_MONTH: "May",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Sam Kumar ",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Angular",
    EMAIL: "mailto:xyz@gmail.com",
    BIRTH_DATE: "07th",
    BIRTH_MONTH: "Apr",
  },
  {
    IMAGE: "/assets/default_male.jpg",
    EMP_NAME: "Sam Kumar ",
    EMP_DESIGNATION: "Software Engineer",
    EMP_TECHNOLOGY: "Angular",
    EMAIL: "mailto:xyz@gmail.com",
    BIRTH_DATE: "07th",
    BIRTH_MONTH: "Apr",
  },
];
export const PROFILE_PARTS: ProfilePart[] = [
  {
    icon: "person",
    title: "Basic Information",
    route: BASIC_INFORMATION.fullUrl,
  },
  {
    icon: "photo_camera",
    title: "Profile Picture",
    route: PROFILE_PICTURE.fullUrl,
  },
  {
    icon: "library_books",
    title: "Qualification",
    route: QULIFICATION.fullUrl,
  },
  { icon: "schedule", title: "Shift", route: SHIFT.fullUrl },
  { icon: "key", title: "Change Password ", route: CHANGE_PASSWORD.fullUrl },
  { icon: "thumb_up", title: " Appraisal ", route: APPRAISAL.fullUrl },
];

export const Gallery_DATA: IGALLERYDATA[] = [
  {
    IMAGE:
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    HEADING: "Republic Day-2023",
    NUM: 5,
    BUTTON: "View",
    ALBUM: [
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
      "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    ],
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    HEADING: "Best Place To Work Award",
    NUM: 5,
    BUTTON: "View",
    ALBUM: [
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
      "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    ],
  },
  {
    IMAGE: "/assets/gallery/award_1672292016846.jpg",
    HEADING: "Christmas Celebration -2022",
    NUM: 5,
    BUTTON: "View",
    ALBUM: [
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
      "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    ],
  },
  {
    IMAGE: "/assets/gallery/award_166719426194.jpeg",
    HEADING: "Diwali Party -2022",
    NUM: 5,
    BUTTON: "View",
    ALBUM: [
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
      "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    ],
  },
];

export const ACCOUNT = {
  COPYRIGHT: "2023 © XYZ HR System",
  GOOGLE_BUTTON: "Sign in with google",
  OFFICIAL_EMAILID: "Please use your official Email Id",
  CREDENTIAL_BUTTON: "LOGIN WITH CREDENTIALS",
  EMAIL_LABEL: "Email",
  EMAIL_PLACEHOLDER: "Enter your email",
  PASSWORD_LABEL: "Password",
  PASSWORD_PLACEHOLDER: "Enter Password",
  FORGOT_PASSWORD: "Forgot Password?",
  LOGIN: "Login",
  LOGIN_WITH_GOOGLE: "LOGIN WITH GOOGLE",
  FORGOT_TITLE: "Reset Your Password",
  FORGOT_INSTRUCTION: "We will send you a link to reset password.",
  FORGOT_BUTTON: "Recover Password",
  BACK_TO_LOGIN: "back to login",
};

export const SIDENAV = {
  Home_LABEL: "Home",
  My_Profile_LABEL: "My Profile",
  Directory_LABEL: "Directory",
  Enterpreneurship_Program_LABEL: "Enterpreneurship Program",
  My_Links_LABEL: "My Links",
  Finance_LABEL: "Finance",
  Reviews_LABEL: "Reviews",
  Refer_Friend_LABEL: "Refer a Friend",
  Freshers_TrainingLABEL: "Freshers Training",
  Training_LABEL: "Training",
  Assests_LABEL: "Assests Inventory",
  Attendance_LABEL: "Attendance",
  Leave_LABEL: "Leave",
  Tickets_LABEL: "Tickets",
  DSR_LABEL: "DSR",
  Projects_LABEL: "Projects",
  Expense_LABEL: "Expense",
  Announcements_LABEL: "Announcements",
  Travels_LABEL: "Travels",
  Logout_LABEL: "Logout",
};

export const LAYOUT = {
  USER_NAME: "Sam kumar ",
  HEADER_MENU_LABEL1: "My Profile",
  HEADER_MENU_LABEL2: "Change Password",
  HEADER_MENU_LABEL3: "Sign Out",
  HEADER_BUTTON: "help",
  HEADER_LAST_LOGIN: "last login",
  HEADER_LAST_LOGIN_TIME: " Feb-01-2023 06:48 PM from 172.31.76.182",
  LAYOUT_FOOTER: "2023 © XYZ HR System v1.0.6",
  LAYOUT_FOOTER_BUTTON: "Covid 19 - Desk",
};

export const LAYOUT_HOME = {
  GREETING: "Hello!",
  USER_NAME: "Sam kumar ",
};

// export const LAYOUT_MY_PROFILE: IPROFILE[] = [
//   { USER_NAME: 'Sam kumar ' },
//   { LABEL: 'Email', TEXT: ' mailto:xyz@gmail.com' },
//   { LABEL: 'Employee ID', TEXT: 'AI1611' },
//   { LABEL: 'Designation', TEXT: 'Software Engineer' },
//   { LABEL: 'Last Login', TEXT: 'Feb-01-2023 06:48 PM from 172.31.76.182' },
// ];
// export const LAYOUT_MY_PROFILE_USER_INFO: IPROFILE_USERDETAILS[] = [
//   {
//     icon: 'fa fa-user',
//     title: 'Basic Information',
//     routerLink: ABS_BASIC_INFO.path,
//   },
//   { icon: 'fa fa-camera', title: 'Profile Picture', routerLink: PROFILE_PIC },
//   { icon: 'fa fa-book', title: 'Qualification', routerLink: QUALIFICATION },
//   { icon: 'fas fa-user-clock', title: 'Shift', routerLink: SHIFT },
//   { icon: 'fa fa-key', title: 'Change Password ', routerLink: CHANGE_PASSWORD },
//   { icon: 'fa fa-thumbs-up', title: ' Appraisal ', routerLink: APPRAISAL },
// ];
// export const JOB_OPENING = {
//   HEADER: 'Latest Job Openings',
//   HEADER_BUTTON: 'View All',
// };
// export const NEW_FAMILY = {
//   HEADER: 'New Family Members',
//   EMP_NAME: 'Sam kumar ',
//   DESIGNATION: 'software engineer - angular',
// };
// export const LATEST_JOB_OPENING: ILATEST_JOB[] = [
//   {
//     image: '/assets/design.svg',
//     LOCATION: 'Noida, UttarPradesh',
//     DATE: '03/02/2023',
//     HEADING: 'Graphic Designer - Designing Marketing',
//     TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
//     OPENING_NUMBER_TEXT: 'No. of Openings',
//     OPENING_NUMBER: '1',
//     EXPERIENCE: 'Experience',
//     EXPERIENCE_NUMBER: '5 to 9 Years',
//     BUTTON_VIEW: 'View Details',
//     BUTTON_REFER: 'Refer a Candidate',
//   },
//   {
//     image: '/assets/react-native.svg',
//     LOCATION: 'Noida, UttarPradesh',
//     DATE: '03/02/2023',
//     HEADING: 'Tech Lead -  REACT JS',
//     TEXT: 'We are looking for JavaScript developers  proficient with React.js -  ( Preferred Early Joiners)',
//     OPENING_NUMBER_TEXT: 'No. of Openings',
//     OPENING_NUMBER: '2',
//     EXPERIENCE: 'Experience',
//     EXPERIENCE_NUMBER: '5 to 9 Years',
//     BUTTON_VIEW: 'View Details',
//     BUTTON_REFER: 'Refer a Candidate',
//   },
//   {
//     image: '/assets/design.svg',
//     LOCATION: 'Noida, UttarPradesh',
//     DATE: '03/02/2023',
//     HEADING: 'Graphic Designer - Designing Marketing',
//     TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
//     OPENING_NUMBER_TEXT: 'No. of Openings',
//     OPENING_NUMBER: '1',
//     EXPERIENCE: 'Experience',
//     EXPERIENCE_NUMBER: '5 to 9 Years',
//     BUTTON_VIEW: 'View Details',
//     BUTTON_REFER: 'Refer a Candidate',
//   },
//   {
//     image: '/assets/nodejs.svg',
//     LOCATION: 'Noida, UttarPradesh',
//     DATE: '03/02/2023',
//     HEADING: 'Tech Lead - Node.js',
//     TEXT: 'TL has to oversee the technical team and all projects, identify risks & develop work schedules.',
//     OPENING_NUMBER_TEXT: 'No. of Openings',
//     OPENING_NUMBER: '1',
//     EXPERIENCE: 'Experience',
//     EXPERIENCE_NUMBER: '5 to 9 Years',
//     BUTTON_VIEW: 'View Details',
//     BUTTON_REFER: 'Refer a Candidate',
//   },
// ];
export const LATEST_APPINVENTIV = {
  HEADER_VALUE: "Latest at XYZ",
};
export const AWARD_LAYOUT = {
  HEADING: "Awards",
  DEAR: "Dear",
  MESSAGE: "Keep spreading your awesomeness. Congratulations!",
  CHEER: "cheers!",
  APPINVENTIV: "XYZ",
};
export const BIRTHDAY_VALUE = {
  HEADER_VALUE: "Birthday celebration",
  DEAR_VALUE: "Dear",
  MESSAGE_VALUE:
    "On behalf of the entire company I wish you a very happy birthday and send you my best wishes for much happiness in your life.",
  CHEER_VALUE: "cheers!",
  APPIVENTIV_TEXT: "XYZ",
};
export const WORK_ANNIVERSARY_VALUE = {
  HEADER_VALUE: "Work Anniversary",
  DEAR_VALUE: "Dear",
  MESSAGE_VALUE:
    "Wishing you many more years of success, good luck, and joy! On this blissful and charming day of your Corporate anniversary may you continue the journey of achievements with pride! ",
  CHEER_VALUE: "cheers!",
  APPIVENTIV_TEXT: "XYZ",
};

export const APPRECIATION_DATA: IAPPRECIATIONDATA[] = [
  {
    HEADER: "Appreciation for UStandBy",
    TEXT: "Hello All,",
    MESSAGE: `With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`,
    GREET: "Kudos to the team!",
    BUTTON: "View More",
    DEAR: "Dear",
  },
  {
    HEADER: "Appreciation| ABP NEWS",
    DEAR: "Dear",
    TEXT: " Aashima Anand,",
    MESSAGE: `We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `,
    GREET:
      "Thank you for all the hard work and commitment. Keep up the excellent work.",
    BUTTON: "View More",
  },
  {
    HEADER: "Appreciation for UStandBy",
    TEXT: "Hello All,",
    MESSAGE: `With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`,
    GREET: "Kudos to the team!",
    BUTTON: "View More",
    DEAR: "Dear",
  },
  {
    HEADER: "Appreciation| ABP NEWS",
    DEAR: "Dear",
    TEXT: " Aashima Anand,",
    MESSAGE: `We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `,
    GREET:
      "Thank you for all the hard work and commitment. Keep up the excellent work.",
    BUTTON: "View More",
  },
];
export const AWARDS_EMP_IMAGE_DATA: IAWARDDATA[] = [
  {
    IMAGE:
      "https://fastly.picsum.photos/id/447/1280/853.jpg?hmac=4DUUCOsHRIoYbNrPRYEUHOW7wCjM7TROrTrYFivtdPw",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/447/1280/853.jpg?hmac=4DUUCOsHRIoYbNrPRYEUHOW7wCjM7TROrTrYFivtdPw",
    EMP_NAME: "Shweta  (AI1320)",
    DESIGNATION: "Software Engineer, REACT JS",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/447/1280/853.jpg?hmac=4DUUCOsHRIoYbNrPRYEUHOW7wCjM7TROrTrYFivtdPw",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/447/1280/853.jpg?hmac=4DUUCOsHRIoYbNrPRYEUHOW7wCjM7TROrTrYFivtdPw",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
];
export const BIRTHDAY_EMP_IMAGE_DATA: IBIRTHDAYDATA[] = [
  {
    IMAGE:
      "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
];
export const WORKANNIVERSARY_EMP_IMAGE_DATA: IWORKANNIVERSARY[] = [
  {
    IMAGE:
      "https://fastly.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
  {
    IMAGE:
      "https://fastly.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY",
    EMP_NAME: "Ashish Pal (AI1802)",
    DESIGNATION: "Associate Team Lead, MeanStack",
    DATE: "October,2022",
  },
];

export const WORK_LAYOUT = {
  HEADING: "Workanniversary Celebration",
  DEARR: "Dear",
  MESSAGE:
    "Wishing you many more years of success, good luck, and joy! On this blissful and charming day of your Corporate anniversary may you continue the journey of achievements with pride! ",
  CHEER: "cheers!",
  APPINVENTIV: "XYZ",
};
export const REFERRAL = {
  HEADER: "OUR REFERRAL BONUS PROGRAM",
  AMOUNT: "K",
  TEXT: "Referral Bonus",
  FOR_TEXT: "For",
  TO_TEXT: "to",
  YEAR_TEXT: "Years of experience",
};
// export const REFERRAL_DATA: IREFERRAL[] = [
//   {
//     referralPrice: 11,
//     fromYear: 1,
//     toYear: 3,
//   },
//   {
//     referralPrice: 21,
//     fromYear: 3,
//     toYear: 5,
//   },
//   {
//     referralPrice: 41,
//     fromYear: 5,
//     toYear: 9,
//   },
//   {
//     referralPrice: 51,
//     fromYear: 9,
//     toYear: "last",
//   },
// ];

// export const Gallery_DATA :IGALLERYDATA[]=[
//   {IMAGE:'/assets/gallery/award_1674822333816.jpg',HEADING:'Republic Day-2023',NUM:5,BUTTON:'View'},
//   {IMAGE:'/assets/gallery/award_1672378171227.jpg',HEADING:'Best Place To Work Award',NUM:5,BUTTON:'View'},
//   {IMAGE:'/assets/gallery/award_1672292016846.jpg',HEADING:'Christmas Celebration -2022',NUM:5,BUTTON:'View'},
//   {IMAGE:'/assets/gallery/award_166719426194.jpeg',HEADING:'Diwali Party -2022',NUM:5,BUTTON:'View'},

// ]

// export const BASIC_INFORMATION = {
//   BUTTON: 'Save',
//   HEADER: 'Basic Information',
//   TOTAL_WORK_EXP: 'Total Working Experience',
//   RELEVANT_EXP: 'Relevant Experience',
//   QUALIFICATION_HEADER: 'Add New Qualification',
//   LIST_ALL_QUALIFICATION: 'List All Qualification',
//   CHANGE_PASSWORD_HEADER: 'Employee Force Change Password',
//   APPRAISAL_HEADER: 'Appraisal Detail',
//   SHIFT_HEADER: 'List All Shift',
// };
// export const PROFILE_PICTURE_VALUE = {
//   PROFILE_PIC_HEADER: 'Profile Picture',
//   BROWSE_VALUE: 'Browse',
//   FORMAT: 'Upload files only: gif,png,jpg,jpeg',
//   REMOVE_PIC_VALUE: 'Remove Profile Picture',
//   BUTTON_VALUE: BASIC_INFORMATION.BUTTON,
// };

export const FORM_LABEL = {
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  DATE_OF_BIRTH: "Date of Birth",
  GENDER: "Gender",
  MARITAL_STATUS: "Marital Status",
  CONTACT: "Contact Number",
  YEAR: "Years",
  MONTH: "Months",
  ADDRESS: "Address",
  SCHOOL: "School/University",
  EDUCATION: "Education Level",
  TIME: "Time Period",
  LANGUAGE: "Language",
  PROFESSIONAL_COURSE: "Professional Courses (if any)",
  DESCRIPTION: "Description",
  OLD_PASSSW0RD: "Old Password",
  NEW_PASSWORD: "New Password",
  CONFIRM_PASSWORD: "Confirm Password",
  APPRAISAL_CYCLE: "Appraisal Cycle",
  APPRAISAL_MONTH: "Appraisal Month",
  PLACEHOLDER_TO: "to",
};

export const REFER_A_CANDIDATE_DIALOG = {
  HEADER_VALUE: "Refer a Candidate",
  JOB_DETAIL_VALUE: "Job Details",
  LABEL_DEPARTMENT: "Department Name",
  LABEL_JOBCODE: "Job Code",
  LABEL_LOCATION: "Location",
  LABEL_EXPERIENCE: "Experience",
  CANDIDATE_VALUE: "Candidate Details",
  LABEL_JOBLOC: "Job Location",
  LABEL_CANDIDATE_NAME: "Candidate Name",
  PLACEHOLDER_CANDIDATE_NAME: "Candidate Name",
  LABEL_POSITION: "Position Title",
  PLACEHOLDER_EXPERIENCE: "Enter Years of experience",
  LABEL_EMAIL: "Email ID",
  PLACEHOLDER_EMAIL: "Enter Email ID",
  LABEL_PHONE: "Phone Number",
  PLACEHOLDER_PHONE: "Enter Phone Number",
  LABEL_UPLOAD: "Upload CV (pdf,doc)",
  LABEL_SKILL: "Skill Set",
  PLACEHOLDER_SKILL: "Enter Skills",
  BUTTON_CANCEL: "Cancel",
  BUTTON_SUBMIT: "Submit",
};

export const GENDER_INPUT_DROPDOWN = ["Male", "Female"];

export const MARITAL_DROPDOWN = [
  "Single",
  "Married",
  "Widowed",
  "Divorced or Separated",
];
export const EDUCATION_DROPDOWN = [
  "High School Diploma / GED",
  "B.Tech",
  "M.Tech",
  "BCA",
  "MCA",
  "BBA",
  "MBA",
  "B.Sc.",
  "M.Sc.",
  "BA",
  "MA",
  "Phd",
  "Diloma",
  "B.Sc Animation & Film Making",
];
export const LANGUAGE_DROPDOWN = ["English", "Hindi"];

export const SHIFT_VALUE = {
  DATE_OF_JOIN_VALUE: "Date of Joining",
  OFFICE_SHIFT_VALUE: "Office Shift",
  DATE_VALUE: "Feb-07-2022",
  SHIFT_VALUE: "Morning Shift",
};

export const QUALIFICATION_VALUE = {
  ACTION_VALUE: "Action",
  SCHOOL_VALUE: FORM_LABEL.SCHOOL,
  TIME_VALUE: FORM_LABEL.TIME,
  EDUCATION_VALUE: FORM_LABEL.EDUCATION,
};

export const TABLE_DATA_UNAVAILABLE = {
  NO_DATA: "No data available in table",
};

export const DIRECTORY_VALUE = {
  HEADER_VALUE: "Employee Directory",
  NAME_LABEL: "Name",
  NAME_PLACEHOLDER: "Search by name",
  DEPARTMENT_LABEL: "Department",
  BUTTON_RESET: "Reset",
  BUTTON_SEARCH: "Search",
};

// export const DIRECTORY_EMPLOYEE_DATA: IDIRECTORY_DATA[] = [
//   {
//     IMAGE: '/assets/images/default_male.jpg',
//     EMP_NAME: 'Aahan Verma',
//     EMP_DESIGNATION: 'Sr. Software Engineer',
//     EMP_TECHNOLOGY: 'Android',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: 'mailto:aahan.verma@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '21st',
//     BIRTH_MONTH: 'Aug',
//   },
//   {
//     IMAGE: '/assets/images/default_male.jpg',
//     EMP_NAME: 'Deepak Yadav',
//     EMP_DESIGNATION: 'Software Engineer',
//     EMP_TECHNOLOGY: 'Angular',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: ' mailto:deepak.yadav@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: ' 08th',
//     BIRTH_MONTH: 'May',
//   },
//   {
//     IMAGE: '/assets/images/default_male.jpg',
//     EMP_NAME: 'Sam Kumar ',
//     EMP_DESIGNATION: 'Software Engineer',
//     EMP_TECHNOLOGY: 'Angular',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: 'mailto:xyz@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '07th',
//     BIRTH_MONTH: 'Apr',
//   },
//   {
//     IMAGE: '/assets/images/default_female.jpg',
//     EMP_NAME: 'Manisha Rawat',
//     EMP_DESIGNATION: ' Quality Analyst',
//     EMP_TECHNOLOGY: ' Quality Analyst',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: 'mailto:manisha.rawat@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '16th',
//     BIRTH_MONTH: 'Nov',
//   },
//   {
//     IMAGE: '/assets/images/default_male.jpg',
//     EMP_NAME: 'Ankit Mehrotra',
//     EMP_DESIGNATION: 'Sr. Software Engineer ',
//     EMP_TECHNOLOGY: 'Angular',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: ' mailto:ankit.mehrotra@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '09th',
//     BIRTH_MONTH: 'May',
//   },
//   {
//     IMAGE: '/assets/images/default_male.jpg',
//     EMP_NAME: 'Aakash Bisht',
//     EMP_DESIGNATION: 'Finance Executive',
//     EMP_TECHNOLOGY: 'FINANCE',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: 'mailto:aakash.bisht@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '06th',
//     BIRTH_MONTH: 'Dec',
//   },
//   {
//     IMAGE: '/assets/images/default_female.jpg',
//     EMP_NAME: 'Aarti Verma',
//     EMP_DESIGNATION: 'Software Engineer',
//     EMP_TECHNOLOGY: 'Node.Js',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: ' mailto:aarti.verma@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '17th',
//     BIRTH_MONTH: 'Oct',
//   },
//   {
//     IMAGE: '/assets/images/default_male.jpg',
//     EMP_NAME: 'Abhishek Kumar Singh',
//     EMP_DESIGNATION: 'Team Lead ',
//     EMP_TECHNOLOGY: 'IOS',
//     EMAIL_ICON: 'fas fa-at',
//     EMAIL: ' mailto:abhishek.singh@gmail.com',
//     BIRTH_ICON: 'fas fa-birthday-cake',
//     BIRTH_DATE: '18th',
//     BIRTH_MONTH: 'Jul',
//   },
// ];

export const ADD_PITCH = {
  NAME: "Name",
  EMP_ID: "Employee Id",
  DOB: "Date Of Birth",
  PITCH_TITLE: "Pitch Title",
  INDUSTRY: "Industry",
  TYPE: "Type",
  IDEA: "Idea - (Share Your Idea In brief).",
  PRESENTATION:
    "Presentation - (Share your detailed presentation on the Idea) -(ppt,pdf).",
  PITCH_DETAILS: "Pitch Details",
  MY_DETAILS: "My Details",
};

export const FEEDBACK_DATA = {
  HEADING: "Training feedback form",
  TITLE: "Angular Training Feb- 2022",
  DEPARTMENT: "Angular",
  START_DATE: "Feb-28-2022 ",
  END_DATE: "Apr-02-2022 ",
};

export const FEEDBACK_LABELS = {
  HEADING: "Training feedback form",
  TITLE: "Title",
  DEPARTMENT: "Department",
  START_DATE: "Start Date",
  END_DATE: "End Date",
  MODE: "Training Mode",
  OBJECTIV:
    "Do you feel that the objective/goal of the training has been fulfilled? *",
  MISSING: "What is missing? *",
  RELEVENT: "How relevant and helpful do you think it was for your job? *",
  OVERALL_TRAINING: "How would you rate the overall training? *",
  SATISFACTION: "How satisfied were you with the session content? *",
  OVERALL: "Any overall feedback for the training? *",
  CANCEL_BUTTON: "Cancel",
  SUBMIT_BUTTON: "Submit",
};

export const TRAINING_REQUEST = {
  heading: "Request for training",
  training_name: "Training name ? ",
  team_name: "team name",
  textarea1:
    "Please mention the training/learning area’s you feel can be beneficial for your skill enhancement and job performance *",
  text_area2:
    "Why do you feel these skills are needed and how they will benefit your personal and organizational needs *",
  interest: "Are you interested to give the Trainings? *",
  time: "What should be the timeline to conduct this training? * ",
  cancel: "cancel",
  submit: "submit",
};
export const TECHNOLOGY = ["Android", "ANgular", ".Net", "Blockchain"];
export const STATUS = ["Accepted", "Rejected", "Missed", "In Progress"];
