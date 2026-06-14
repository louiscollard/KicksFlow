export const createId = () => Date.now();
export const createOrderNo = () => String(Date.now()).slice(-6);