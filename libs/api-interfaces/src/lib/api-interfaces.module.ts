export interface Bust {
  id: string;
  name: string;
  position: string;
  adp: string;
  comments: string;
}

export interface User {
  email: string;
  password: string;
}

export const emptyBust = {
  id: '',
  name: '',
  postion: '',
  adp: '',
  comments: '',
};
