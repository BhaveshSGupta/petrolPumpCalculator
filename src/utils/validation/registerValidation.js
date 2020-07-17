import {Translations} from '../translations';
import {isValidEmail} from '../validation';

export default function validate(values) {
  let errors = {};
  
  if (!values.email) {
    errors.email = Translations.ERROR.EMAIL_REQUIRED;
  } else if (!isValidEmail(values.email)) {
    errors.email = Translations.ERROR.INVALID_EMAIL
  }

  if (!values.firstName) {
    errors.firstName = Translations.ERROR.FIRSTNAME_REQUIRED;
  }

  if (!values.lastName) {
    errors.lastName = Translations.ERROR.LASTNAME_REQUIRED;
  }

  if (!values.company) {
    errors.company = Translations.ERROR.COMPANY_NAME_REQUIRED;
  }

  return errors
}
