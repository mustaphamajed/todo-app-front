export type NavigationRoot = {
  navigate: (value: string, params?: any) => void;
  goBack: () => void;
  replace: (route: string, params?: any) => void;
};
