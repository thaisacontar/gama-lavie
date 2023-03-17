export const errorTypeName = 'O campo "nome" deve conter apenas letras.';

export const errorSizeName = 'O campo "nome" deve conter, pelo menos, 3 caracteres.';


export const invalidEmailOrPassword = 'E-mail ou senha inválido, verifique e tente novamente.';

export const requiredField = (field) => {
    return `O campo ${field} é obrigatório.`;
};

export const fieldMustBeType = (field, type) => {
    return `O campo ${field} deve ser do tipo ${type}.`;
};

export const ERROR_TYPE_EMAIL = 'O campo "email" deve ser uma string';

export const ERROR_INVALID_EMAIL = 'O campo "email" deve ter um email válido, sem espaços e com menos de 70 caracteres';




export const ERROR_INVALID_AGE = 'O campo "idade" deve ser uma data válida no formato YYYY-MM-DD';

export const ERROR_DUPLICATE_EMAIL = (email) => `O email ${email} já existe`;

export const ERROR_INVALID_ID = "Id não encontrado";

export const ERROR_INVALID_CREDENCIALS = "E-mail ou senha inválido, verifique e tente novamente";

export const ERROR_INVALID_PASSWORD_TYPE = "A senha deve ser uma string ou um number";

export const ERROR_PASSWORD_SIZE = "A senha deve conter no minimo 6 caracteres";