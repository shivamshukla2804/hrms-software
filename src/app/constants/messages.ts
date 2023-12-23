export const VALIDATION_MESSAGES = {
    'confirm password': {
      matchPassword: 'Confirm password does not matches with password',
    },
  };
export const toTitleCase = (str:string) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };