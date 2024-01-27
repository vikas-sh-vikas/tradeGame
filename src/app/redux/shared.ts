// sharedState.ts
export interface Task {
    itemList?: {
        name?: string;
        trade?: string;
        rate?: number;
        actualRate?: number;
      }[];
  }


export const getSharedState = (): Task => {
    const storedState = localStorage.getItem('sharedState');
    return storedState ? JSON.parse(storedState) : [];
    // return storedState ? parseInt(storedState, 10) : 0;
  };
  
  export const setSharedState = (value: Task): void => {
    // localStorage.setItem('sharedState', value.toString());
    localStorage.setItem('sharedState', JSON.stringify(value));

  };
  
  export const clearSharedState = (): void => {
    localStorage.removeItem('sharedState');
  };
  
  // sharedState.ts
// export const getSharedState = (): YourObjectType[] => {
//     const storedState = localStorage.getItem('sharedState');
//     return storedState ? JSON.parse(storedState) : [];
//   };
  
//   export const setSharedState = (value: YourObjectType[]): void => {
//     localStorage.setItem('sharedState', JSON.stringify(value));
//   };
  
//   export const clearSharedState = (): void => {
//     localStorage.removeItem('sharedState');
//   };
  