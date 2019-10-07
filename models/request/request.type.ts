export interface RequestType<T> {
  data: T | null;
  error: string |null;
  isLoading: boolean;
}