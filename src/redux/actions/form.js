export function updateForm(_form){
    return {
      types: ["UPDATE_IS_FIRST_FORM", "UPDATE_IS_LAST_FORM", "UPDATE_FORM_INDEX"],
      form: _form
    }
} 