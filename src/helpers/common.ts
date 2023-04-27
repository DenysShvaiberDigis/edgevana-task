const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(' ');

const generateId = (length: number = 10): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + Date.now();
};

export { classNames, generateId };
