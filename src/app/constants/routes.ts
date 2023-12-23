import { IRoute } from "../interfaces/common.interface";

export const ACCOUNT: IRoute = {
  path: "auth",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const ADMIN: IRoute = {
  path: "admin",
  get fullUrl(): string {
    return `/${this.path}`;
  },
};

export const LOGIN: IRoute = {
  path: "login",
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
// export const LOGOUT: IRoute = {
//   path: "logout",
//   get fullUrl(): string {
//     return `/${ACCOUNT.fullUrl}/${this.path}`;
//   },
// };

export const FORGOT_PASSWORD: IRoute = {
  path: "forgot-password",
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const DASHBOARD: IRoute = {
  path: "dashboard",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const PROFILE: IRoute = {
  path: "profile",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};

export const BASIC_INFORMATION: IRoute = {
  path: "basic-information",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const PROFILE_PICTURE: IRoute = {
  path: "profile-picture",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const QULIFICATION: IRoute = {
  path: "qualification",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const SHIFT: IRoute = {
  path: "shift",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const CHANGE_PASSWORD: IRoute = {
  path: "change-password",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};

export const APPRAISAL: IRoute = {
  path: "appraisal",
  get fullUrl(): string {
    return `/${PROFILE.fullUrl}/${this.path}`;
  },
};
export const DIRECTORY: IRoute = {
  path: "staff-directory",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};

export const MY_LINKS: IRoute = {
  path: "my-links",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const POLICY_DOCUMENTS: IRoute = {
  path: "policy-documents",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const HOLIDAY_CALENDAR: IRoute = {
  path: "holiday-calendar",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const INSURANCE_VERIFICATION: IRoute = {
  path: "insurance-verification",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const ENTREPRENEURSHIP_PROGRAM: IRoute = {
  path: "entrepreneurship-program",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const REVIEWS: IRoute = {
  path: 'reviews',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_PERFORMANCE: IRoute = {
  path: 'my-performance',
  get fullUrl(): string {
    return `/${REVIEWS.fullUrl}/${this.path}`
  }
}

export const STARTUP: IRoute = {
  path: "startup",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const ADD_PITCH: IRoute = {
  path: "add-pitch",
  get fullUrl(): string {
    return `/${STARTUP.fullUrl}/${this.path}`;
  },
};
export const FINANCE: IRoute = {
  path: "finance",
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  },
};
export const SALARY_SLIP: IRoute = {
  path: "salary-slip",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const FORM_16: IRoute = {
  path: "form-16",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const INVESTMENT_DECLARATION: IRoute = {
  path: "investment-declaration",
  get fullUrl(): string {
    return `/${MY_LINKS.fullUrl}/${this.path}`;
  },
};
export const REFER_CANDIDATE: IRoute = {
  path: 'refer-candidate',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_INTERVIEWS: IRoute = {
  path: 'my-interviews',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const USERS: IRoute = {
  path: 'users',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_ASSET_INVENTORY: IRoute = {
  path: 'my-asset-inventory',
  get fullUrl(): string {
    return `/${USERS.fullUrl}/${this.path}`
  }
}
export const REQUEST_ASSETS: IRoute = {
  path: 'request-asset',
  get fullUrl(): string {
    return `/${USERS.fullUrl}/${this.path}`
  }
}
export const ASSETS_DECLARATION: IRoute = {
  path: 'asset-declaration',
  get fullUrl(): string {
    return `/${USERS.fullUrl}/${this.path}`
  }
}
export const JOB_OPENINGS: IRoute = {
  path: 'job-openings',
  get fullUrl(): string {
    return `/${REFER_CANDIDATE.fullUrl}/${this.path}`;
  }
}
export const REFERRAL_LIST: IRoute = {
  path: 'referral-list',
  get fullUrl(): string {
    return `/${REFER_CANDIDATE.fullUrl}/${this.path}`;
  }
}
export const JOB_DETAILS: IRoute = {
  path: 'job-details',
  get fullUrl(): string {
    return `/${REFER_CANDIDATE.fullUrl}/${this.path}`;
  }
}
export const FRESHERS: IRoute = {
  path: 'freshers',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`;
  }
}

export const TRAINING_DETAILS: IRoute = {
  path: 'training-details',
  get fullUrl(): string {
    return `/${FRESHERS.fullUrl}/${this.path}`;
  }
}

export const MY_TRAININGS: IRoute = {
  path: 'my-trainings',
  get fullUrl(): string {
    return `/${FRESHERS.fullUrl}/${this.path}`;
  }
}
export const TRAININGS: IRoute = {
  path: 'trainings',
  get fullUrl(): string {
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_INTERNAL_TRAINING: IRoute = {
  path: 'my-internal-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const ONGOING_TRAININGS: IRoute = {
  path: 'ongoing-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const REQUESTED_TRAININGS: IRoute = {
  path: 'requested-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const UPCOMING_TRAINING: IRoute = {
  path: 'upcoming-training',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`;
  }
}
export const INTERNAL_TRAINING_DETAILS: IRoute = {
  path: 'internal-training-details',
  get fullUrl(): string {
    return `/${TRAININGS.fullUrl}/${this.path}`
  }
}

export const ATTENDANCE: IRoute = {
  path: 'attendance',
  get fullUrl(): string {
    return `/${USERS.fullUrl}/${this.path}`
  }
}
export const ATTENDANCE_CALENDAR:IRoute={
  path:'attendance-calendar',
  get fullUrl():string{
    return `/${ATTENDANCE.fullUrl}/${this.path}`
  }
}
export const MANUAL_PUNCH:IRoute={
  path:'manual-punch',
  get fullUrl():string{
    return `/${ATTENDANCE.fullUrl}/${this.path}`
  }
}
export const PUNCH_LOG:IRoute={
  path:'punch-log',
  get fullUrl():string{
    return `/${ATTENDANCE.fullUrl}/${this.path}`
  }
}
export const LEAVE:IRoute={
  path:'leave',
  get fullUrl():string{
    return `/${USERS.fullUrl}/${this.path}`
  }
}
export const MY_LEAVE:IRoute={
  path:'my-leave',
  get fullUrl():string{
    return `/${LEAVE.fullUrl}/${this.path}`
  }
}
export const FLOATING_LEAVE:IRoute={
  path:'floating-leave',
  get fullUrl():string{
    return `/${LEAVE.fullUrl}/${this.path}`
  }
}
export const LEAVE_DETAILS:IRoute={
  path:'leave-details',
  get fullUrl():string{
    return `/${LEAVE.fullUrl}/${this.path}`
  }
}
export const TICKETS:IRoute={
  path:'tickets',
  get fullUrl():string{
    return `/${USERS.fullUrl}/${this.path}`
  }
}

export const DSR:IRoute={
  path:'dsr',
  get fullUrl():string{
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const MY_DSR:IRoute={
  path:'my-dsr',
  get fullUrl():string{
    return `/${DSR.fullUrl}/${this.path}`
  }
}
export const DSR_DETAILS:IRoute={
  path:'dsr-details',
  get fullUrl():string{
    return `/${DSR.fullUrl}/${this.path}`
  }
}
export const DSR_EDIT:IRoute={
  path:'dsr-edit',
  get fullUrl():string{
    return `/${DSR.fullUrl}/${this.path}`
  }
}

export const PROJECT:IRoute={
  path:'project',
  get fullUrl():string{
    return `/${ADMIN.fullUrl}/${this.path}`
  }
}
export const ALL_PROJECT:IRoute={
  path:'all-projects',
  get fullUrl():string{
    return `/${PROJECT.fullUrl}/${this.path}`
  }
}

export const PROJECT_DETAILS:IRoute={
  path:'projects-details',
  get fullUrl():string{
    return `/${PROJECT.fullUrl}/${this.path}`
  }
}