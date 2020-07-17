import {Translations} from '../translations';
import {isValidEmail} from '../validation';

export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = Translations.ERROR.EMAIL_REQUIRED;
    } else if (!isValidEmail(values.email)) {
      errors.email = Translations.ERROR.INVALID_EMAIL;
    }

    if (!values.password) {
        errors.password = Translations.ERROR.PASSWORD_REQUIRED;
    }
    return errors;
  };