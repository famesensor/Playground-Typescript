// Unknow Type
let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Fame';
if (typeof userInput === 'string') {
    username = userInput;
}

// nerver type
function generateError(message: string, code: number): never {
    // throw { message: message, errCode: code };
    // while (true) {}
}

generateError('An error occurred!', 500);
